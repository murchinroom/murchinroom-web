<script setup>
const features = [
  {
    title: "RESTful API Gateway for CLI apps (coming soon)",
    description:
        "Remotely call your CLI apps with a RESTful API. Share your scripts with others without exposing your server.",
    icon: "bx:bxs-terminal",
  },
  {
    title: "RESTful API Gateway for SQL dbs (coming soon)",
    description:
        "Expose your data in SQL databases as RESTful APIs. No code for simple use cases or low code for complex real-world scenarios.",
    icon: "bx:bxs-cylinder",
  },
  {
    title: "RESTful user management for FTP (coming soon)",
    description:
      "Dynamically manage users and permissions for your FTP server. No need to restart the server or hand-craft configuration files.",
    icon: "bx:bxs-file",
  },

];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      For Developers
      <span class="text-2xl text-slate-500"> and ourselves</span>
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      We are passionate to develop and share reusable tools and libraries
      that solve daily problems for ourselves (and hopefully for you too).
      <wbr />

      You can find our projects on GitHub. We are also working on
      not revealed projects, including:
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
  <div
      class="mt-8 md-64 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"
  >
    <LandingLink
        class="self-center"
        href=""
        target="_blank"
        rel="noopener"
    >More information (Coming soon)</LandingLink>
  </div>
  <div class="md-64">
    <br class="md-64">
    <br class="md-64">
    <br class="md-64">
  </div>
</template>
