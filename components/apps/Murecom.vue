<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1  md:block">
      <img
        class="transition-transform transform hover:scale-150"
        src="~/assets/img/murecom-preview.png"
        alt="BadPhoto screenshots"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        murecom
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Personally, I don't like most of the music recommended by
        most of the streaming services.
        <wbr />
        They are based on your listening history, they are not
        always suitable for the current mood or activity. And
        they goes into "information cocoon" problem.
        <br /><br />
        murecom in the contrary,
        analyzing your current context and recommending music that
        just fits the current scene.
        <br /><br />
        This app is a part of the murecom project.
        <wbr />

      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href=""
          target="_blank"
          rel="noopener">
          Web, macOS, iOS, Android, Windows, ...
        </LandingLink>
      </div>
    </div>
  </main>
  <div>
    <div
        class="flex gap-8 md:gap-16 items-center justify-center mt-8 flex-wrap"
    >
      <h3 class="text-center text-slate-500">
        murecom is built with:
      </h3>
      <span>Flutter</span>
      <span>murecom</span>
    </div>
    <br><br>
  </div>
</template>
<script setup lang="ts">
</script>