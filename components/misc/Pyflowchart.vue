<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-4 md:order-1 md:block">
      <img
        class="transition-transform transform hover:scale-105 max-sm:max-w-xs"
        src="~/assets/img/pyflowchart.png"
        alt="pyflowchart illustration"
        loading="lazy"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h2 id="pyflowchart" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        PyFlowchart
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-thin">
          Convert Python code to flowcharts.
        </span>
        <br /><br />
        PyFlowchart implemented a Python bind to flowchart.js.
        You can import PyFlowchart as a library to
        define flowcharts in Python code, and generate
        flowchart.js language for rendering the diagrams.
        <br /><br />
        It also come with a python AST parser to
        automatically generate flowcharts from input Python code.
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingIconLink
            class="font-mono max-sm:text-sm"
            style-name="outline"
            href="https://github.com/cdfmlr/pyflowchart"
            icon="simple-icons:python">
          pip install pyflowchart
        </LandingIconLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>