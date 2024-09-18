<template>
  <div
    class="bg-black px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"
  >
    <h2 class="text-white text-3xl md:text-6xl">
      You may also like
    </h2>
    <p class="text-slate-500 mt-4 text-lg md:text-xl">
      Other murchinroom open source repositories:
    </p>
    <div class="flex mt-5 gap-4">
      <LandingLink href="https://github.com/cdfmlr" styleName="inverted">
        <div class="flex items-center">
          <Icon name="simple-icons:github" size="24" />
          <span class="ms-2">cdfmlr</span>
        </div>
      </LandingLink>
      <LandingLink href="https://github.com/murchinroom" styleName="inverted">
        <div class="flex items-center">
          <Icon name="simple-icons:github" size="24" />
          <span class="ms-2">murchinroom</span>
        </div>
      </LandingLink>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>