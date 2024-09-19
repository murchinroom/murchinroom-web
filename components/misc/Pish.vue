<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-4 md:order-1 md:block">
      <img
        class="transition-transform transform hover:scale-105 max-sm:max-w-xs"
        src="~/assets/img/hind-vs-pish.png"
        alt="hind vs pish illustration"
        loading="lazy"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h2 id="smelt" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        pish
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-thin">
          Yet another naive container runtime for beginners.
        </span>
        <br /><br />
        Pish is a toy container runtime written in Python.
        Aiming to be simple and readable for beginners to understand
        what happens within linux containers.
        <br /><br />
        See also: <a class="underline" href="https://github.com/cdfmlr/hind">Hind</a>
        is another toy container runtime written in Go,
        with a much over-engineered design.
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingIconLink
            class="font-mono max-sm:text-sm"
            style-name="outline"
            href="https://github.com/cdfmlr/pish"
            icon="simple-icons:python">
          git clone https://github.com/cdfmlr/pish
        </LandingIconLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>