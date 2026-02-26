<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-4 md:order-1 md:block">
      <img
          class="transition-transform transform hover:scale-105 max-sm:max-w-xs"
          src="~/assets/img/matterof.png"
          alt="smelt illustration"
          loading="lazy"
          format="avif"
          width="512"
          height="512"
      />
    </div>

    <div>
      <h2 id="smelt" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        matterof
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-thin">
          markdown front-matter editor
        </span>
        <br/><br/>
        matterof is a Rust library and CLI tool for reading, querying,
        modifying, and managing YAML front-matter in markdown files.
        <br/><br/>
        It supports complex queries, batch operations, atomic writes,
        and backup functionality.
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingIconLink
            class="font-mono max-sm:text-sm"
            style-name="outline"
            href="https://github.com/cdfmlr/matterof"
            icon="simple-icons:rust">
          cargo install matterof
        </LandingIconLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>