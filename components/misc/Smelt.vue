<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-4 md:order-0 md:block">
      <img
        class="transition-transform transform hover:scale-105 max-sm:max-w-xs"
        src="~/assets/img/smelt.png"
        alt="smelt illustration"
        loading="lazy"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h2 id="smelt" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        smelt
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-thin">
          Filter & share markdown documents.
        </span>
        <br /><br />
        Smelt is a command-line tool
        for filtering specific Markdown documents
        based on their front-matter (the YAML metadata at the beginning of the Markdown files)
        and rsync (share) them from a directory tree to another.

        <br /><br />
        Useful for managing a mono-repo of personal documents and
        sharing some of them with teammates or the public.
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingIconLink
            class="font-mono max-sm:text-sm"
            style-name="outline"
            href="https://github.com/cdfmlr/configer"
            icon="simple-icons:rust">
          cargo install --git https://github.com/cdfmlr/smelt
        </LandingIconLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>