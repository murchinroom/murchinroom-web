<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 md:block max-sm:grid max-sm:grid-cols-2 max-sm:items-center max-sm:p-4">
      <img
          class="transition-transform transform hover:scale-105 max-sm:w-11/12"
          src="../../assets/img/muvtuber-impl.png"
          alt="BadPhoto screenshots"
          loading="lazy"
          format="avif"
          width="512"
          height="512"
      />
      <div class="mt-8 max-sm:hidden"></div>
      <div class="mt-44 max-sm:hidden hidden md:block"></div>
      <img
          class="transition-transform transform hover:scale-105 max-sm:w-11/12"
          src="../../assets/img/muvtuber-obs.png"
          alt="BadPhoto screenshots"
          loading="lazy"
          format="avif"
          width="512"
          height="512"
      />
    </div>

    <div>
      <h2 id="muvtuber" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        muvtuber
      </h2>

      <span class="font-thin text-slate-500">
        C'est la vie, as they say L-O-V-E eloquently
        <br />
        See every dream has a part two
<!--        From the lives we nourished-->
<!--        <br />-->
<!--        And the days we cherished as kids-->
      </span>
      <br /><br />

      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-black text-slate-500">
          Let's just forget
        </span>
        When I was 12 or something, I programmed a chatbot in
        the Beginners' All-purpose Symbolic Instruction Code,
        as my very first code project (excluding hello-worlds and exercises).
        It was a simple rule-based chatbot, but it is fun and unforgettable.
        <br /><br />
        <span class="font-black text-slate-500">
          The autumn night when we realized
        </span>
        Now, we are excited to witness the rise of large language models (LLMs)
        in the past few years.
        They perform well not only in traditional natural language processing tasks
        such as text classification and machine translation but also in more
        creative tasks such as text generation and even chatting with humans.
        <br /><br />
        <span class="font-black text-slate-500">
          Not to be overly dramatic
        </span>
        As it is getting closer to chat like a human, we are trying to push
        the boundary further to make it look & sound like a human.
        <wbr />
        But we reject the idea of making any machine (hardware or software)
        that can fool people into thinking it's a human.
        We believe the Uncanny Valley is a dangerous place to go.
        <wbr />
        A related balanced approach we have already familiar with is the VTuber.
        People know enough that VTubers are not real, but they still enjoy
        the story and the interaction.
        <br /><br />
        <span class="font-black text-slate-500">
          So, let's just pretend
        </span>
        Combining the concept of VTuber and LLM, we are building muvtuber:
        a VTuber chats with you, tells you stories --
        driven by machine learning technologies including large language models.
        No human in the loop.
        <br /><br />
        muvtuber is a integration of text generation, emotion analysis,
        speech synthesis and Live2D model driver.
        <wbr />
        It reads the comments from the audience, generates responses in text,
        converts the text into speech, drives the Live2D model to speak,
        and captures the video & audio by OBS to stream.
        Sharing the same emotion analysis system with murecom,
        muvtuber is able to feel audiences' emotions and
        react accordingly in face expressions.
        <br /><br />
        Technically, we are trying to fully containerize the system,
        so that it can be easily deployed on any cloud platform or
        even become a SaaS product.
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://github.com/cdfmlr/muvtuber"
          target="_blank"
          rel="noopener">
          Read more...
        </LandingLink>
      </div>
    </div>
  </main>
  <div>
    <div
        class="flex gap-8 md:gap-16 items-center justify-center mt-0 flex-wrap"
    >
      <h3 class="text-center text-slate-500">
        muvtuber is built with:
      </h3>
      <span>Docker</span>
      <span>Go</span>
      <span>Python</span>
      <span>LLM</span>
      <span>Live2D</span>
      <span>TypeScript & Vue</span>
    </div>
    <br><br>
  </div>
</template>
<script setup lang="ts">
</script>