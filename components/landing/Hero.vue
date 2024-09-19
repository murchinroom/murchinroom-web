<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8 max-sm:pt-2">
    <div class="p-24 md:order-1 md:block max-sm:p-8">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/murchinroom-avatar.png"
        alt="Starship starts the engine"
        loading="lazy"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        murchinroom
      </h1>

      <span class="font-thin text-slate-500">
        a magic shop where the art meets AI.
      </span>
      <br />

      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Typically with CDFMLR serves as a reoccurring developer,
        and the rest of the members are not fixed,
        murchinroom fuse creativity with technology
        to explore the intersection
        between humans and machines
        by produces open-source projects and apps
        that are fun in nature.
        The
        <a href="/projects#muvtuber">AI VTuber</a>
        and
        <a href="/projects#murecom">emotion-aware music recommendation</a>
        are two of the most popular projects showing our philosophy.
      </p>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        murchinroom excels in crafting innovation applications as much as
        we specialize in delivering professional high-performance computing,
        on-premises cloud computing and machine learning solutions
        for businesses and individuals.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink href="#aboutus">
          About murchinroom
        </LandingLink>
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/cdfmlr"
          target="_blank"
          >GitHub repositories</LandingLink
        >
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>