<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 md:block max-sm:grid max-sm:grid-cols-2 max-sm:items-center max-sm:p-4">
<!--      <img-->
<!--          class="transition-transform transform hover:scale-105"-->
<!--          src="../../assets/img/murecom-flow.png"-->
<!--          alt="BadPhoto screenshots"-->
<!--          loading="eager"-->
<!--          format="avif"-->
<!--          width="512"-->
<!--          height="512"-->
<!--      />-->
      <img
          class="transition-transform transform hover:scale-105 max-sm:w-11/12"
          src="../../assets/img/murecom-servers-overlook.png"
          alt="BadPhoto screenshots"
          loading="eager"
          format="avif"
          width="512"
          height="512"
      />
      <div class="mt-8 max-sm:hidden"></div>
      <img
          class="transition-transform transform hover:scale-105 max-sm:w-11/12 md:w-11/12"
          src="../../assets/img/murecom-preview.png"
          alt="BadPhoto screenshots"
          loading="eager"
          format="avif"
          width="512"
          height="512"
      />
    </div>

    <div>
      <h2 id="murecom" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        murecom
      </h2>

      <span class="font-thin text-slate-500">
        It's funny how the music putting times in perspective
        <br />
        Add a soundtrack to your life and perfect it
      </span>
      <br /><br />

      <p class="text-lg mt-4 text-slate-600 max-w-xl">
<!--        Personally, I don't like most of the music recommended by-->
<!--        most of the streaming services.-->
<!--        <wbr />-->
<!--        They are based on your listening history, they are not-->
<!--        always suitable for the current mood or activity. And-->
<!--        they goes into "information cocoon" problem.-->
<!--        <wbr />-->
<!--        murecom in the contrary,-->
<!--        analyzing your current context and recommending music that-->
<!--        just fits the current scene.-->
<!--        <br /><br />-->
        <span class="font-black text-slate-500">
          Trapped in desert, barely realized
        </span>

        While the music recommendation systems (MRS) are widely used today,
        there is still room for improvement.
        Existing algorithms perform well for personalized music recommendations,
        but most of those methods lack humanization, seeing that they are
        difficult to detect the emotions of users and recommend songs in the
        mood for the spot in real-time.
        <br /><br />

        <span class="font-black text-slate-500">
          No worry, it's a dream at midnight
        </span>
        In the murecom project, we designed an emotion-based music recommendation system with the goal of humanization. Through technologies including natural language processing and computer vision, our system analyzes the user's current mood as well as the emotions contained in the music tracks. Recommending related songs in the user's situation, our system generates playlists to accompany the users. Compared with the traditional recommendation algorithm, our system can better meet the emotional needs of users for music.
        <br /><br />

        <span class="font-black text-slate-500">
          But dreams and reality have some conformity, don't you be quiet
        </span>
        At the same time, we also implemented a recommendation-words writing function based on natural text generation algorithms, allowing the deep neural network to write literary recommendation texts for the playlist output by the MRS just in time. The generated texts focus on the topic of analyzed user mood and recommended tracks, leading users to immerse themselves in the playlist better. Such creative works could only be completed manually, in the past. Therefore our machine learning solution is meaningful to further optimize the user experience of the MRS by making it improved human-friendly.
        <br /><br />
        Technically, murecom is built with a set of microservices.
        This architecture allows us to easily extend the system with new features
        as well as to reuse the components in other projects.
        For example, now we are reusing the services including
        text emotion analysis (emotext)
        in the mureader and muvtuber project.
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://github.com/cdfmlr/murecom-verse-1"
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
        murecom is built with:
      </h3>
      <span>Go</span>
      <span>PostgreSQL</span>
      <span>Python</span>
      <span>PyTorch</span>
      <span>Flutter</span>
    </div>
    <br><br>
  </div>
</template>
<script setup lang="ts">
</script>