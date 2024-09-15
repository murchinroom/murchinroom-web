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
        BadPhoto
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Review your photos with on-device machine learning models
        to find out the bad ones (blurry, dark, and meaningless screenshots).
        <wbr />
        You can further delete them to free up your storage.
        <br /><br />
        For photograph lovers, a more sophisticated model trained with masterpieces
        is available to help you filter out your best shots.
        <br /><br />
        Coming soon:
        <ul>
          <li>
            * Specific models for different types of photos, e.g., landscape,
            portrait, food, etc.
            And different models focusing on different aspects, e.g.,
            composition, lighting, etc.
            Makes it more explainable and accurate.
          </li>
          <li>
            * Integrate with Multimodal Large Language Models
            to explain why a photo is bad and how to improve it.
            This drives BadPhoto into your personal photography teacher (or critic).
          </li>
        </ul>
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href=""
          target="_blank"
          rel="noopener">
          macOS only
        </LandingLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>