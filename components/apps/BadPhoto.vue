<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1  md:block">
      <img
        class="transition-transform transform hover:scale-150"
        src="~/assets/img/BadPhoto-preview-light-dark.png"
        alt="BadPhoto screenshots"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h2 id="badphoto" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        BadPhoto
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Review your photos with on-device machine learning models
        to find out the bad ones (blurry, dark, and meaningless screenshots).
        <wbr />
        You can further delete them to free up your storage.
        <br /><br />
        For photograph lovers, a more sophisticated model trained with masterpieces
        is available to help you filter out your best shots.
        <br /><br />
      </p>
      <div class="text-slate-600 max-w-xl">
        <span class="text-lg">Coming soon:</span>
        <ul style="display: block; list-style-type: disc; padding-left: 32px;">
          <li>
            Specific models for different types of photos, e.g., landscape,
            portrait, food, etc.
            And different models focusing on different aspects, e.g.,
            composition, lighting, etc.
            Makes it more explainable and accurate.
          </li>
          <li>
            Integrate with Multimodal Large Language Models
            to explain why a photo is bad and how to improve it.
            This drives BadPhoto into your personal photography teacher (or critic).
          </li>
        </ul>
      </div>


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
  <div>
    <div
        class="flex gap-8 md:gap-16 items-center justify-center mt-8 flex-wrap"
    >
      <h3 class="text-center text-slate-500">
        BadPhoto is built with:
      </h3>
      <span>Swift</span>
      <span>SwiftUI</span>
      <span>CoreML</span>
    </div>
    <br><br>
  </div>
</template>
<script setup lang="ts">
</script>