<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/hero.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        murchinroom
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Murchinroom products software solutions
        include on-premises cloud computing, machine learning,
        and a variety of toys for businesses and individuals.
        <wbr />
        Typically with CDFMLR serves as a reoccurring developer,
        and the rest of the members are not fixed.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="#Everything you need to start a website"
          target="_blank"
          rel="noopener"
          >Our Creations</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/cdfmlr"
          target="_blank"
          >GitHub Repos</LandingLink
        >
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>