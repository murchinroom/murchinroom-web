<script setup>
const features = [
  // beta
  {
    title: "Hyper-Converged Infrastructure",
    status: "beta",
    description:
      "Virtualizes all your hardware resources " +
        "into a single software-defined Hyper-Converged Infrastructure system. " +
        "Manage your clusters with storage, networking, and compute at a integrated panel.",
    icon: "bx:bxs-server",
  },
  {
    title: "Data Management Platform",
    status: "beta",
    description:
        "Integrate heterogeneous database management systems and file systems. " +
        "Access to distributed storage assets under a unified namespace. " +
        "Manage data with automate workflows and policies.",
    icon: "bx:bxs-network-chart",
  },
  // {
  //   title: "RESTful user management for FTP",
  //   status: "beta",
  //   description:
  //       "Dynamically manage users and permissions for your FTP server. No need to restart the server or hand-craft configuration files.",
  //   icon: "bx:bxs-file",
  // },
  // alpha
  {
    title: "Zero-Trust Network",
    status: "alpha",
    description:
        "Connect your on-premises & cloud infrastructure with a secure zero-trust network. " +
        "Manage all the devices in Virtual Private Networks. " +
        "And keep data safe with end-to-end encryption.",
    icon: "bx:bxs-network-chart",
  },
  {
    title: "Kubernetes Management Platform",
    status: "alpha",
    description:
      "Deploy and manage your containerized applications with Kubernetes. " +
        "Scale your applications with ease and keep them running with high availability.",
    icon: "bx:bxs-package",
  },
  // dev
  {
    title: "RESTful API Gateway for CLI apps",
    status: "dev",
    description:
        "Remotely call your CLI apps with a RESTful API. Share your scripts with others without exposing your server.",
    icon: "bx:bxs-terminal",
  },
  {
    title: "RESTful API Gateway for SQL DBs",
    status: "dev",
    description:
        "Expose your data in SQL databases as RESTful APIs. No code for simple use cases or low code for complex real-world scenarios.",
    icon: "bx:bxs-cylinder",
  },

];
</script>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <span class="font-mono font-thin">{{item.status}}</span>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>

  <br /><br /><br /><br />
  <h2 class="text-center text-slate-500">
    murchinroom solutions are built on the top of proven open-source technologies include:
  </h2>
  <div
      class="flex gap-8 md:gap-20 items-center justify-center mt-16 flex-wrap"
  >
    <Icon class="h-8 md:h-14" name="simple-icons:linux" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:containerd" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:docker" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:kubernetes" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:k3s" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:postgresql" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:mysql" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:mongodb" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:rancher" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:ceph" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:ansible" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:nginx" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:caddy" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:go" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:python" size="48" />
    <Icon class="h-8 md:h-14" name="simple-icons:cplusplus" size="48" />
  </div>

<!--  <div-->
<!--      class="mt-8 md-64 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"-->
<!--  >-->
<!--    <LandingLink-->
<!--        class="self-center"-->
<!--        href=""-->
<!--        target="_blank"-->
<!--        rel="noopener"-->
<!--    >More information (Coming soon)</LandingLink>-->
<!--  </div>-->
<!--  <div class="md-64">-->
<!--    <br class="md-64">-->
<!--    <br class="md-64">-->
<!--    <br class="md-64">-->
<!--  </div>-->
</template>
