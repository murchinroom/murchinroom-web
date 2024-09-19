<script setup>
const pricing = [
  {
    name: "Apps",
    href: "/apps",
    features: [
      {
        text: "On-device AI powered photo ranking and filtering",
        href: "/apps#badphoto",
      },
      {
        text: "Language models & word-playing based project naming helper",
        href: "/apps#namebox",
      },
      {
        text: "Emotional background music recommendation for reading",
        href: "/apps#mureader",
      },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
    features: [
      {
        text: "An AI VTuber based on LLM, TTS and Live2D models",
        href: "/projects#muvtuber",
      },
      {
        text: "Human friendly emotion-aware music recommendation system",
        href: "/projects#murecom",
      },
      {
        text: "Listen to music together with friends, synchronously",
        href: "/projects#musharing",
      },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    features: [
      {
        text: "High-Performance Computing and On-premises Cloud",
        href: "/solutions",
      },
      {
        text: "Hyper-Converged Infrastructure and Zero-Trust Network",
        href: "/solutions",
      },
      {
        text: "Data Management Platform and LLM Application Platform",
        href: "/solutions",
      },
    ],
  },
];
</script>

<template>
  <LandingContainer>
    <div class="mt-32 md:mt-0">
      <h2 id="aboutus" class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        What is murchinroom?
        <!--<span class="text-2xl text-slate-500"> for business</span>-->
      </h2>
      <p class="text-lg mt-4 text-slate-600">
        murchinroom develops software in various domains, including
        machine learning application, cloud computing infrastructure,
        and more.

        <br /><br />

        Treat computers as our friends, instead of tools,
        we are especially interested in exploring the AI technologies,
        researching the interaction between the art & machine learning,
        and trying to build simple, elegant, and fun applications with them.

        Built on the top of proven open-source technologies,
        most of our works on these fields
        are open-source and free to the public.

        <br /><br />

        Another focus of us is to build secure and reliable cloud infrastructures.
        We figure out solutions for ourselves and willing to share them with customers.

      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12 mb-16">
      <div v-for="item of pricing">
        <a :href="item.href">
          <div class="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md text-center">
            <h4 class="text-lg font-medium text-gray-500">
              {{ item.name }}
            </h4>

            <ul class="grid mt-8 text-left gap-y-4">
              <li v-for="feature of item.features"  class="flex items-start gap-3 text-gray-800">
<!--                <LandingTick className="w-6 h-6" />-->
                <a :href="feature.href">{{ feature.text }}</a>
              </li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  </LandingContainer>
</template>
