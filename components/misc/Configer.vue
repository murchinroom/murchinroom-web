<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="8 md:order-1 md:block">
      <img
        class="transition-transform transform hover:scale-105"
        src="~/assets/img/configer.png"
        alt="configer illustration"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h2 id="configer" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        configer
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-thin">
          Read struct-defined configuration from file.
        </span>
        <br /><br />
        Configer is a go package helps you to read configuration files.
        Designed for small projects.
        Not heavy like <a class="underline" href="https://github.com/spf13/viper">Viper</a>.
        <br /><br />
        It simply reads configuration from a file (in JSON, YAML or TOML format)
        or some <code>io.Reader</code>, and bind the values into a struct instance.
        <br /><br />
        See also: <a class="underline" href="https://github.com/cdfmlr/slogconfig"><code>cdfmlr/slogconfig</code></a>,
        a predefined configuration struct for <a class="underline" href="https://pkg.go.dev/log/slog"><code>log/slog</code></a>.
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingIconLink
            class="font-mono"
            style-name="outline"
            href="https://github.com/cdfmlr/configer"
            icon="simple-icons:go">
          go get github.com/cdfmlr/configer
        </LandingIconLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>