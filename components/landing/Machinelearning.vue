<script setup>
const features = [
  {
    title: "Artificial Intelligence VTuber",
    description:
      "Understand user comments and generating responses in voice, with emotions shown on the face. AI VTuber streams and interacts with you.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Emotional Music Recommendation",
    description:
      "Reading a book / Take a photo / Write some words down, our AI will know your mood and recommend music that fits your current emotion.",
    icon: "bx:bxs-music",
  },
  {
    title: "Large Language Model as a Service",
    description:
        "Build and deploy your own LLM applications. And enhance the performance by prompt engineering, fine tuning, retrieval-augmented generation and Multi-agent system.",
    icon: "bx:bxs-layer",
  },
];
</script>

<template>
  <div class="mt-64 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Machine Learning & the Art
      <span class="text-2xl text-slate-500"> for hobbies</span>
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      It is amazing how machine learning evolves. Years ago, algorithms
      achieved
      human-level performance on tasks such as regression and classification.
      Today, neural networks generate texts and images to chat with you and
      solve problems it has never seen before.
      <wbr />

      At murchinroom, we are always excited to explore the "chemical" reactions
      between machine learning and the art. What if machines rhymes? How about
      a machine that sings? We build interesting projects
      to create unique experiences.
      <wbr />
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
      class="mt-8 md-32 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center gap-16"
  >
    <LandingLink
        class="self-center"
        href=""
        target="_blank"
        rel="noopener"
    >More information (Coming soon)</LandingLink>
  </div>
  <br class="md-32"/>
</template>
