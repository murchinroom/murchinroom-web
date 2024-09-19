<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-4 md:order-0 md:block">
      <img
        class="transition-transform transform hover:scale-105 max-sm:max-w-xs"
        src="~/assets/img/crud.svg"
        alt="crud illustration"
        loading="lazy"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h2 id="crud" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        crud
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-thin">
          Create, Read, Update, Delete models with ease.
        </span>
        <br /><br />
        Crud is a golang package that helps writing CRUD servers.
        With this package, all you need is models,
        while all the rest is done for you automatically.
        <br /><br />
        It requires only 32 lines of source code (include <code>import</code> statements)
        to make a RESTful API service with 13 endpoints.
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingIconLink
            class="font-mono max-sm:text-sm"
            style-name="outline"
            href="https://github.com/cdfmlr/crud"
            icon="simple-icons:go">
          go get github.com/cdfmlr/crud
        </LandingIconLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>