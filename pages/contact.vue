<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contact</template>
      <template v-slot:desc>
        murchinroom is glad to hear from you.
        <br /><br />
          If there are any questions or suggestions about our open-source projects,
          please directly open an issue on the project's GitHub page.
      </template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-8">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Contact CDFMLR
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          The main developer / maintainer of murchinroom projects
          is happy to help you with any questions you have.
          (And this person is available for hire).
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:map-marker"/>
            <span>Earth, Solar System, Orion Arm, Milky Way</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-blue-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:envelope"/>
            <a class="underline font-mono font-bold" href="mailto:cdfmlr@murchinroom.fun">
              cdfmlr@murchinroom.fun
            </a>
          </div>
          <!--          <div class="flex items-center mt-2 space-x-2 text-gray-600">-->
          <!--            <Icon class="text-gray-400 w-4 h-4" name="uil:phone"/>-->
          <!--            &lt;!&ndash;<a href="tel:+1 (234) 5678 999">+1 (234) 5678 999</a>&ndash;&gt;-->
          <!--          </div>-->
        </div>
      </div>
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Available Services
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          murchinroom & CDFMLR provides services in

          software development,
          high-performance computing,
          cloud computing,
          photography,
          video editing,
          music production,
          poem writing,
          and more.

          If you have a project in mind, feel free to
          contact us for a quote.
        </p>
      </div>
    </div>
  </LandingContainer>
</template>
