<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 md:block max-sm:p-4">
      <img
        class="transition-transform transform hover:scale-150"
        src="~/assets/img/mureader-preview.png"
        alt="BadPhoto screenshots"
        loading="eager"
        format="avif"
        width="384"
        height="384"
      />
    </div>

    <div>
      <h2 id="mureader" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        mureader
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Soundtrack is a important part of a movie, it can make the movie more
        interesting and attractive.
        <wbr />
        With mureader, we are trying to bring the same experience to your reading.
        <br /><br />

        mureader allows you to import and read your favorite books. It will
        automatically analyze the content of current page you are reading
        (with any necessary context in consideration too)
        and play a suitable background music for you.
        <br /><br />

        The emotional music recommendation system behind the scene is based on
        our murecom project.
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
        mureader is built with:
      </h3>
      <span>Flutter</span>
      <span>murecom</span>
    </div>
    <br><br>
  </div>
</template>
<script setup lang="ts">
</script>