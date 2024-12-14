<script setup>
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 id="technology" class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Technology
      <!--<span class="text-2xl text-slate-500"> for business</span>-->
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      murchinroom builds software using a broad range of
      modern open-source technologies and tools.
      <br /><br />
      We implement backend services with Go, Python, etc,
      and deploying them with Docker and Kubernetes.

      Our preferred databases are Redis and PostgreSQL,
      but we also utilize MongoDB and MySQL for legacy projects and specific use cases.

      For frontend development,
      we create web applications with Vue.js,
      Apple platform applications with Swift,
      and cross-platform applications with Flutter.
    </p>
  </div>

  <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
    <Icon class="h-8 md:h-14" name="simple-icons:go" size="64" />
    <Icon class="h-8 md:h-14" name="simple-icons:python" size="48" />

    <Icon class="h-8 md:h-14" name="simple-icons:vuedotjs" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:swift" size="48" />

    <Icon class="h-8 md:h-14" name="simple-icons:docker" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:kubernetes" size="48" />

    <Icon class="h-8 md:h-14" name="simple-icons:linux" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:postgresql" size="48" />
  </div>
<!--  <div class="mt-4 text-center text-slate-500">-->
<!--    and more...-->
<!--  </div>-->
  <div class="mt-12 md-64 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
    <LandingLink
        class="self-center"
        href="/solutions">
      See more technologies we use in our solutions
    </LandingLink>
  </div>
  <div class="md-64">
    <br class="md-64">
    <br class="md-64">
    <br class="md-64">
  </div>
</template>
