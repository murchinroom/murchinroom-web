<script setup>
const features = [
  {
    title: "Keep it simple, stupid",
    status: "software engineering",
    description:
        "murchinroom builds software with the UNIX philosophy and complexity management in mind." +
        "We believe in the power of small, modular, and composable software components (or microservices).",
    icon: "bx:bxs-server",
  },
  {
    title: "Containerize and cloud native",
    status: "deployment & operations",
    description:
        "murchinroom embraces the containerization technology and cloud native principles." +
        "We build, deploy, and scale our applications with Docker, Kubernetes, and other cloud services.",
    icon: "bx:bxs-package",
  },
  {
    title: "On-premises machine learning",
    status: "cost-effective innovation",
    description:
        "murchinroom rejects the idea of centralized large-scale machine learning models. " +
        "We always look for ways to develop machine learning models just fit for the purpose, on-premises " +
        "and with the least cost.",

    icon: "bx:bxs-network-chart",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 id="philosophy" class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Philosophy
      <!--<span class="text-2xl text-slate-500"> for business</span>-->
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Growing up with The Art of Unix Programming in hand,
      murchinroom focuses on exploring the new AI / cloud technologies and
      tries to apply them to our daily life, in a way that is simple, elegant
      and fun.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon"/>
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <span class="font-mono font-thin text-xs">{{ item.status }}</span>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
  <div class="mt-8 md-64 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
    <LandingLink
        class="self-center"
        href="/projects">
      See how we apply these principles in our projects
    </LandingLink>
  </div>
  <div class="md-64">
    <br class="md-64">
    <br class="md-64">
    <br class="md-64">
  </div>
</template>
