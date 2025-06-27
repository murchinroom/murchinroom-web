---
tags:
  - explore
  - "#linux"
  - "#mac"
  - "#tool"
publishedAt: 2025-06-25
publishedTo: murchinroom-web
---

# GPG 入门

一直没用过 gpg，刻板印象是接口非常不友好很难用，但仔细试了一下意外很好用啊。。我直接一个黑转粉（）

## 安装

```sh
brew install gpg pinentry
# sudo dnf install gpg pinentry 
```

- `pinentry` 是用来收集系统信息做随机数的。
	- 有些系统（Fedora）自带了 gpg 但没装 pinentry，会导致 gen-key 失败说是

## 生成 key

```sh
gpg --gen-key
```

他会交互式的让输入一些东西：

- Real name （要求大于 5 字符）
- Email address
- Passphrase （建议至少 8 字符）

生成出来的 key：

- uid（USER-ID）：`Real name <Email address>`
	- uid 不能重复，如果已经有相同 uid 的 key，生成会失败
- 默认 2 年过期
- 持久化存储到了 `~/.gnupg`
	- key 放在 `~/.gnupg/private-keys-v1.d`，具体文件名怎么看不知道
	- 还会有一个用来吊销的证书放到 `~/.gnupg/openpgp-revocs.d`，具体文件名看输出。See also [吊销证书](#吊销证书).

### 更多设置

定制算法、过期时间(可永不过期)：

```sh
gpg --full-generate-key
```

### 更少设置

```sh
# gpg --quick-gen-key USER-ID [ALGO [USAGE [EXPIRE]]]
gpg --quick-gen-key "Foo Bar <foo@bar.com>"

gpg --quick-gen-key "Foo Bar <foo@bar.com>" default default "2025-12-31"
```

- 其实 USER-ID 写啥都行，任意字符串
	- 默认标准的是 `真名 (注释) <邮箱>`，例如 `Foo Bar (work) <foo@bar.com>`
- 默认还是会交互式让输入 Passphrase 的
	- 可以加 `--batch --passphrase 'xxx'` 指定，避免交互
	- 或者 `--batch --passphrase ''` 不用密码
	- 不加 `--batch` 的话，即使写了 `--passphrase` 还是会出交互输入
- 只想指定过期时间的话，把 ALGO  和 USAGE 都写成 `default`
- 日期有好几种格式：
	- `YYYY-MM-DD`
	- `YYYYMMDDThhmmss`
	- 当前时间的 N 秒/天/周/月/年后过期：`seconds=N`，`Nd`，`Nw`，`Nm`，`Ny`
	- 默认过期时间：`-`（也就是 2 年过期）
	- 不过期：`never` 或者 `none`

### 跳过交互

没有任何交互，直接生成证书：

```sh
gpg --batch --passphrase '' --quick-gen-key "wo-pass"
```

不交互，直接生成一个永不过期、没有密码的证书：

```sh
gpg --batch --passphrase '' --quick-gen-key "never-exp" default default "never"
```

## 管理 key

### 查看 keys

当前系统里的所有公钥：

```sh
gpg --list-keys
```

查看某个 key：

```sh
gpg --list-key foo@bar.com
```

- 其实这些命令单复数都是一样的 `--list-keys` == `--list-key`
	- 但严格来说，man page 里都是带 s 的

查看私钥：

```sh
gpg --list-secret-keys
```

### 公钥导入导出

导出公钥（public key）：

```sh
gpg --armor [--output public-key.txt] --export USERID
```

- 公钥导出可以发给别人，导入他的系统里面，他就能拿你的公钥解密你加密的东西了
- 不加 `--output 文件` 打到标准输出
	- `--output` 简写 `-o`
- `USERID` 是完整的字符串或者`... <邮箱>` 里面的邮箱地址
- `--armor` 是把 key 转换成 ASCII 字符形式的 `-----BEGIN PGP PUBLIC KEY BLOCK----- ... -----END PGP PUBLIC KEY BLOCK-----`
	- `--armor` 简写 `-a`

导出公钥指纹：

```sh
gpg --fingerprint foo@bar.com
```

- `--fingerprint` 其实和 `--list-keys` 输出是一样的

导入别人的公钥：

```sh
gpg --import public-key.txt


gpg --edit-key foo@bar.com
# 然后交互式输入 trust 命令，选择信任等级，并确认操作：
## gpg> trust
## Your decision? 5 # 5 = I trust ultimately
## ^D # exit
```

- 导入完成之后，可以比较 `gpg --fingerprint` 进行二次验证，确保导入正确
- 刚导入的 key 的 trust 状态是 unknown 的，不能用，要 `gpg --edit-key` 修改信任
	- 自己的 key 则可以改成和新签发一样的 ultimately
	- `gpg --edit-key` 还可以做很多其他事情，see [编辑 key](#编辑%20key)

#### 使用 keyserver

>[!error] key server 按照设计正常工作的话，原理上来说应该是 write only 的，公钥推上去就删不掉了。如果要使之无效可以 [吊销证书](#吊销证书)。

可以把公钥上传到公开的一些服务器上，让别人通过网络去拉：

```sh
gpg --send-keys KEYID
```

- 这个 KEYID 不是邮箱或者 uid 全写。
- KEYID 是用 list-keys 列出的那串东西，或者说 fingerprint
- 会上传到默认的服务器（例如 `hkps://keyserver.ubuntu.com`）
- 可以 `gpg --keyserver hkp://subkeys.pgp.net --send-keys KEYID` 指定服务器
	- 说是这些服务器会自动同步的，上传一个就最终都会有了

别人可以用指纹作为 KEYID，从服务器找你的这个公钥，并导入：

```sh
gpg --search-keys KEYID
```

- 正常就能搜出一个来，所以输入`1` 回车就会 imported 了。

### 私钥导入导出

> [!error] 不要把私钥发给别人。

> [!info] 应该对私钥进行备份，存放在独立的、安全的介质上。

⚠️ 导出私钥（secret key）：

```sh
gpg --armor --output foo.secret-key.txt --export-secret-key foo@bar.com
```

- 正常是不导出私钥的
- 导出私钥是要输 passphrase 的
- 实际上公钥也连带在导出的私钥里面

导出的私钥，可以到另一台机器，和导入公钥一样的命令来导入这个私钥：

```sh
gpg --import foo.secret-key.txt
```

- 导入也要输入 passphrase
- 然后这组公/私钥又导入进来了
- 私钥就没有 trust 一说了，主打一个信任
- 可能需要加一个 `--allow-secret-key-import` 选项才能导入私钥

### 删除 keys

删除公钥：

```sh
gpg --delete-keys USERID
```

如果要删自己的公钥，得先把私钥删掉：

```sh
gpg --delete-secret-keys USERID
```

- 删除私钥会反复以多种方式确认是否删除
- 删除不需要 passphrase

如果之前有导出过 key，可以重新 `gpg --import` 加载回来，详见 [公钥导入导出](#公钥导入导出)、[私钥导入导出](#私钥导入导出)。

### 吊销证书

> [!error] 吊销了似乎就不能在弄回来了 

生成并导入一个 revoke key 就可以使一个 key 失效。如果这个 key 被推到 key server 了，再把 revoke key 推到 server 人家服务器就知道把你的证书无效化了。

```sh
gpg --list-keys foo@bar.com
# 查看 KEYID

gpg --output revoke.asc --gen-revoke KEYID
# 会交互式让选择原因
# 然后要输对应私钥的 passphrase

gpg --import revoke.asc

# 现在再看 gpg --list-keys foo@bar.com 就显示 revoked 了

gpg --send-keys KEYID
# 还是原来公钥的那个 KEYID
# You have already revoked the key in your keyring. So, this revoked key is sent to the keyserver. Hence, your key in the online keyserver will also get revoked.
```

公钥吊销掉之后，对应的私钥也对应 revoked 了。所以这一对就没啥用了，可以 [删除 keys](#删除%20keys) 了。然后得重新生成一对来用了，see also [生成 key](#生成%20key).

### 编辑 key

`gpg --edit-key KEYID` 很强，进去之后可以做很多事情，常用命令：

- `help`: 显示所有命令
- `passwd`: 修改口令
- `clean`: 清理不可用（被撤销或过期）的密钥
- `revkey`: 撤销密钥
- `addkey`: 向此密钥添加子密钥
- `expire`: 修改密钥的过期时间
	- 可以重新启用一个已过期的密钥：密钥的过期时间可在任何时候被修改，即使它已经过期
- `adduid`: 向此密钥添加一个电子邮件地址

## 使用 key

### 加密

用 `gpg --encrypt FILE` 加密文件，输出二进制密文：
 
```sh
gpg [--recipient foo@bar.com] [--output hello.encrypted.bin] --encrypt hello.txt
```

- 加密是使用的公钥，也就无需 passphrase，也就可以使用别人的公钥加密消息，然后发给别人，让他拿自己的私钥去解密。
- `--recipient USERID` 指定用的证书，简写 `-r`
	- 可以写多个 `-r userA -r userB` 之类的，指定多个公钥
	- 不加这个， 没有默认的话会交互式让输入，可以输入多个（换行区分）
- `--output FILE` 输出到文件，简写 `-o`
	- 不加 `-o` 会自动输出到 `原文件名.gpg`
	- To write to stdout use `-` as the filename.
- `--encrypt` 简写 `-e`

加 `--armor`（a.k.a. `-a`），输出转成文本的密文：

```sh
gpg -a -r foo@bar.com -o hello.encrypted.asc -e hello.txt
```

- 不指定 `-o` 会自动输出到 `原文件名.asc`
	- To write to stdout use `-` as the filename.

如果 `--encrypt` 后面不加文件，gpg 会从标准输入读取明文，加密后将密文输出到标准输出：

```sh
echo "hello" | gpg -a -r foo@bar.com -e | less
```

### 解密

用 `--decrypt` 或 `-d` 解密：

```sh
gpg [-o decrypted.txt] --decrypt hello.encrypted.asc
```

- 无需指定 `--recipient`，他能自己识别到 Key ID，然后选用对应的私钥（如果存在的话），可能需要输入 passphrase 来使用私钥
- 不加 `-o` 默认输出到标准输出
	- 注意：即使解密得到的文件是二进制，也会打到标准输出

下面这个管道，相当于一个 echo，打印出最终输出原始为加密的文本：

```sh
echo "hello" | gpg -r foo@bar.com -e | gpg -d
```

- 实际上，也不完全是 echo，`gpg --decrypt` 的时候，会打印加密使用的公钥信息到 stderr：

```sh
$ echo "hello" | gpg -r foo@bar.com -e | gpg -d
gpg: encrypted with rsa3072 key, ID E92EFD81571490F1, created 2025-04-21
      "Foo Bar <foo@bar.com>"
hello

$ echo "hello" | gpg -r foo@bar.com -e | gpg -d 2>stderr.log
hello
```

### 签名

证明文件是我本人发出的。

#### 签名文件

```sh
gpg --local-user foo@bar.com [-o hello.gpg] --sign hello.txt
```

- 用 `--local-user` 或 `-u` 指定用来签名的私钥
	- 可以写 uid，但我看别人一般是写 key id，就是 `gpg --list-secret-keys` 出的那串十六进制码（指纹）
- 也能用 `--default-key` 选项来指定私钥
- `--sign` 简写 `-s`
- 不加 `-o` 默认输出到 `原文件名.gpg`
- 也可以加 `--armor` 输出转为文本表示的 `原文件.asc`

输出的文件是包含原文件内容、以及签名信息的二进制文件。签名后的这个文件，即使 `--armor` 转文本了，正常人类也不可读，需要使用 pgp 软件解密才能看到原文。

#### 验证签名

验证签名（输出到 stdout）：

```sh
gpg --verify hello.txt.gpg
```

- 主要看输出最后一行，正常是 `Good signature from ...`
- 如果原文内容被篡改过，可能就成了 `BAD signature from ...`
- 如果签名内容被篡改过，还可能是 `the signature could not be verified`

获取原文内容，相当于做一个解密（输出到 stdout）：

```sh
gpg --decrypt hello.txt.gpg
```

#### 明文签名

`--sign` 签名后的消息不用 gpg 解密是看不到原本的明文内容的，可以用 `--clearsign` 把原本的明文附加进去： 

```sh
$ gpg --local-user foo@bar.com -o - --clearsign hello.txt
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

Hello, world!
-----BEGIN PGP SIGNATURE-----
...
-----END PGP SIGNATURE-----
```

- `--clearsign` 将输出文本表示，无需加 `--armor`

一样的，用 `gpg --verify` 或者 `gpg --decrypt` 验证签名，明文写的 message 如果被篡改了也会导致 `BAD signature from ...`。

#### 分开签名和原文件

不把原文件和签名封到一个文件 `.gpg` 或 `.asc` 文件里，而是弄个单独的签名文件：

```sh
gpg [--armor] --local-user foo@bar.com --detach-sign hello.txt
```

- 默认当前目录下生成一个二进制的 `原文件名.sig`
- 带 `--armor` 的话，默认输出到 `原文件名.asc`

验证分开的签名：签名文件在前，原文件在后：

```sh
gpg --verify hello.txt.asc hello.txt
```

- 后面的原文件可以不传，这样会只验证签名文件本身没问题
- 加了原文件则还会验证原文件未被篡改

### 加密并签名

可以加密和签名一起做：

```sh
# 先了签名，再加的密：
gpg [--armor] --local-user 发送者 --recipient 接收者 --sign --encrypt hello.txt

# 解密，并验证签名
gpg --decrypt sign-and-enc.asc
```

- 这种加密+签名的，不能 `--verify` 去验证，只能 `--decrypt` 去解密，解完之后，会自动验证签名
- 不能 ` --clearsign --encrypt` 和 `--decrypt --verify`，这两种操作是 conflicting commands
- `--detach-sign --encrypt` 不会报错但其实只是做了个分离的签名出来，加密没生效

### 对称加密

不用密钥对，而是临时现输入一个 passphrase 来做对称加密：

```sh
gpg [--armor] --symmetric hello.txt
```

- passphrase 在加密的机器本地似乎会被缓存上，所以解密无需输口令
	- 这个好像是 `gpg-agent` 提供的
	- https://wiki.archlinux.org/title/GnuPG#gpg-agent
- 换一台机器就需要在解密时交互式输入口令了（或者 `--passphrase`）。

解对称加密还是一样的 `gpg -d`：

```sh
gpg -o hello.decrypted.txt --decrypt hello.txt.gpg
```

- 输入过一次密码之后，这个口令也会被记录下来，再次解密就不需要输入了

## 参考

- https://www.ruanyifeng.com/blog/2013/07/gpg.html
- https://github.com/yifanbian/gpg-guide-zh

Further reading:

- https://www.gnupg.org/gph/en/manual.html
- https://wiki.archlinux.org/title/GnuPG
