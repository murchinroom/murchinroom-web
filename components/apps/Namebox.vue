<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-0 md:block">
      <img
        class="transition-transform transform hover:scale-150"
        src="~/assets/img/Namebox-preview.png"
        alt="A screenshot on the Namebox app"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h2 id="Namebox" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        Namebox
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-thin text-slate-500">
          There are only two hard things in Computer Science: cache invalidation and naming things.
          <wbr />
          -- Phil Karlton
        </span>
        <br /><br />
        Namebox helps to solve the latter on the aspect of naming your projects,
        apps (and maybe your pets).
        <br /><br />
        Namebox includes a collection of algorithms to help you fuzzy search
        on dictionaries and to name things with a word play skill called
        "<a href="https://en.wikipedia.org/wiki/Malapropism">malapropism</a>".
        For example, it could be fun to name your MongoDB server
        <span class="font-mono">mangoes</span>.
        <br /><br />
        You can also connect Namebox with your trusted Large Language Models
        to generate names with more complex word play and context.
        For example,
        by <a href="https://en.wikipedia.org/wiki/Blend_word">portmanteau</a>:
        fan + magazine  ⇒  <span class="font-mono">fanzine</span>.
        Or by <a href="https://en.wikipedia.org/wiki/Recursive_acronym">recursive acronym</a>:
        GNU's Not Unix ⇒ <span class="font-mono">GNU</span>.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href=""
          styleName="outline"
          target="_blank"
          rel="noopener">
          macOS and iOS
        </LandingLink>
      </div>
    </div>
  </main>
  <div>
    <div
        class="flex gap-8 md:gap-16 items-center justify-center mt-8 flex-wrap"
    >
      <h3 class="text-center text-slate-500">
        Namebox is built with:
      </h3>
      <span>Swift</span>
      <span>SwiftUI</span>
      <span>SwiftData</span>
      <span>LLM</span>
    </div>
    <br><br>
  </div>
</template>
<script setup lang="ts">
</script>