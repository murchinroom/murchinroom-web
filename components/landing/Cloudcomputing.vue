<script setup>
const features = [
  {
    title: "Infrastructure as a Service",
    description:
      "Virtualizes all your hardware resources into a single software-defined Hyper-Converged Infrastructure system. Manage your clusters with storage, networking, and compute.",
    icon: "bx:bxs-server",
  },
  {
    title: "Kubernetes as a Service",
    description:
      "Deploy and manage your containerized applications with Kubernetes. Scale your applications with ease and keep them running with high availability.",
    icon: "bx:bxs-package",
  },
  {
    title: "Virtual Private Network as a Service",
    description:
      "Connect and manage your on-premises & cloud infrastructure with a secure zero-trust network. Keep your data safe with end-to-end encryption.",
    icon: "bx:bxs-network-chart",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      On-premises Cloud Computing
      <span class="text-2xl text-slate-500"> for business</span>
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Cloud computing have changed the way people build and deploy software.
      It made it easier to scale, reduced the cost of infrastructure,
      but it also introduced dependencies on third-party services.<wbr />

      Murchinroom stands with forks concerning their privacy and data ownership.
      We provide on-premises cloud computing solutions that you can deploy
      on your own servers, giving you full control over your data.<wbr />
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
