<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-4 md:order-0 md:block">
      <img
        class="transition-transform transform hover:scale-105 max-sm:max-w-xs"
        src="~/assets/img/simplecipher.png"
        alt="smelt illustration"
        loading="lazy"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h2 id="smelt" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        simplecipher
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-thin">
          AES encrypting and decrypting for muggles.
        </span>
        <br /><br />
        Wrapping around the standard
        <a class="underline font-mono" href="https://pkg.go.dev/crypto/aes">crypto/aes</a>
        and
        <a class="underline font-mono" href="https://pkg.go.dev/crypto/cipher">crypto/cipher</a>
        package,
        simplecipher provides a simple interface for
        encrypting and decrypting data using AES.
        Multiple block and stream modes are supported, including
        CBC, CFB, OFB, CTR and GCM.

        <br /><br />
        Makes it easy to encrypt things with string-in, string-out functions,
        automatic key derivation (scrypt),
        automatic padding handling (PKCS7),
        and automatic ciphertext encoding (hex or base64),
        never panic on wrong input length again.
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingIconLink
            class="font-mono max-sm:text-sm"
            style-name="outline"
            href="https://github.com/cdfmlr/simplecipher"
            icon="simple-icons:go">
          go get github.com/cdfmlr/simplecipher
        </LandingIconLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>