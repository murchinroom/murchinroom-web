<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="8 md:order-1 md:block">
      <img
        class="transition-transform transform hover:scale-105"
        src="~/assets/img/emotext.png"
        alt="emotext illustration"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>
    <div>
      <h2 id="emotext" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        emotext
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-thin">
          Emotions in Chinese Texts.
        </span>
        <br /><br />
        Emotional analysis of Chinese texts based on the emotion lexicon from
        <a class="underline" href="http://ir.dlut.edu.cn/info/1013/1142.htm">DLUT</a>,
        which maps Chinese words to emotions represented by 7 categories and 21 subcategories.
        <br /><br />
        Input a string of Chinese text,
        emotext will return a TF-IDF weighted
        emotion distribution of the text.
        <br /><br />
        The point of emotext is to keep it really simple, fast and cost-effective,
        compared to neural network based models.
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingIconLink
            class="font-mono"
            style-name="outline"
            href="https://github.com/murchinroom/emotext"
            icon="simple-icons:python">
          git clone https://github.com/murchinroom/emotext
        </LandingIconLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>