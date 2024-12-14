<script setup>
const features = [
  {
    title: "Keep it simple, stupid",
    status: "software engineering",
    description:
        "murchinroom builds software with the UNIX philosophy and a focus on complexity management. We believe in the power of small, modular, and composable components, such as microservices.",
    icon: "bx:bxs-server",
  },
  {
    title: "Containerization and cloud native",
    status: "deployment & operations",
    description:
        "murchinroom embraces containerization technology and cloud-native principles. We build, deploy, and scale our applications using Docker, Kubernetes, and other cloud services.",
    icon: "bx:bxs-package",
  },
  {
    title: "On-premises machine learning",
    status: "cost-effective innovation",
    description:
        "murchinroom rejects the idea of centralized large-scale machine learning models. Instead, we focus on developing models that are tailored to specific needs, deployed on-premises, and cost-effective.",

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
      Growing up with "The Art of Unix Programming" in hand,
      murchinroom focuses on exploring new AI and cloud technologies and
      aims to integrate them into daily life in a way that is simple, elegant,
      and, most importantly, fun.
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
