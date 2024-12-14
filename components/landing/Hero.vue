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
        a magic shop where art meets AI.
      </span>
      <br />

      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Typically, with CDFMLR serving as a recurring developer
        and the rest of the members being not fixed,
        murchinroom fuses creativity with technology
        to explore the intersection
        between humans and machines
        by producing open-source projects and apps
        that are fun in nature.

        The
        <a href="/projects#muvtuber" class="font-light">AI VTuber</a>
        and
        <a href="/projects#murecom" class="font-light">emotion-aware music recommendation</a>
        are two of our most popular projects,
        showcasing our philosophy and technological prowess.
      </p>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        In addition to our innovations,
        murchinroom also offers various professional software solutions,
        including high-performance computing, on-premises cloud computing,
        and machine learning services for businesses and individuals.
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