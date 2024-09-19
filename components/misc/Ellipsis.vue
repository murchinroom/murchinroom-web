<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-4 md:order-0 md:block">
      <img
        class="transition-transform transform hover:scale-105 p-8 max-sm:max-w-xs"
        src="~/assets/img/ellipsis.png"
        alt="crud illustration"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>
    <div>
      <h2 id="ellipsis" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        ellipsis
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-thin">
          "truncate long utf-8 string with 省略号" -> "tr...略号"
        </span>
        <br /><br />
        Ellipsis is a Go package that
        provides functions to truncate long string with ellipsis (<code>...</code>).

        <br /><br />
        This package offers three main functions to ellipsis a long string:
        Centering, Starting, and Ending.
        The functions are aware of UTF-8 characters (
        especially for CJK characters, which take up multiple bytes to represent),
        and will not cut them in half.
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingIconLink
            class="font-mono max-sm:text-sm"
            style-name="outline"
            href="https://github.com/cdfmlr/ellipsis"
            icon="simple-icons:go">
          go get github.com/cdfmlr/ellipsis
        </LandingIconLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>