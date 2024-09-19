<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 md:block max-sm:grid max-sm:grid-cols-2 max-sm:items-center max-sm:p-4">
      <img
          class="transition-transform transform hover:scale-105 max-sm:w-11/12"
          src="../../assets/img/musharing-algo.jpeg"
          alt="BadPhoto screenshots"
          loading="eager"
          format="avif"
          width="512"
          height="512"
      />
      <div class="mt-8 max-sm:hidden"></div>
      <img
          class="transition-transform transform hover:scale-105 max-sm:w-11/12 md:w-11/12"
          src="../../assets/img/musharing-preview.png"
          alt="BadPhoto screenshots"
          loading="eager"
          format="avif"
          width="512"
          height="384"
      />
    </div>

    <div>
      <h2 id="musharing" class="text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight">
        musharing
      </h2>

      <span class="font-thin text-slate-500">
          'Cause the beat plus the melody,
          <br />
          Makes me speak of L-O-V-E eloquently, so evidently.
        </span>
      <br /><br />

      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <span class="font-black text-slate-500">
          It takes thought, and time, and rhyme
        </span>

        On July 1, 1979, Sony released the first iconic cassette Walkman TPS-L2.
        Impressively, it is equipped with two mini headphone jacks,
        enabling two people to listen at the same time.
        At the same time, TPS-L2 has a "HotLine" button to activate a small
        built-in microphone, which partially overwrites the sound in the tape,
        allowing one user to talk to another user through music.
        <br /><br />
        In this era when the Walkman has almost become history,
        occasionally for a moment, we will miss the sense of ceremony and
        emotion it once brought us. This is the original intention of
        the birth of musharing.
<!--        <br /><br />-->
<!--        musharing hopes to reprod the feeling of TPS-L2 in the form-->
<!--        of Android App.-->
        <br /><br />
        <span class="font-black text-slate-500">
          With music and words l've been flying
        </span>
<!--        Streaming music platforms gathers music lovers together,-->
<!--        it analyzes all their user data and recommends music to everyone.-->
<!--        You can edit your playlist, share it with others,-->
<!--        <wbr />-->
<!--        but there are music that you only willing to shared with-->
<!--        a particular person at a particular moment.-->
<!--        <br /><br />-->
        musharing is a software defined replica of the Walkman TPS-L2.
        It links people you really care about, and shares music with them
        synchronously.
        <br /><br />
        Everyone in your room can control the music play/pause, etc,
        and musharing under the hood will minimize the latency and
        synchronize the music with all devices.
        <wbr />
        All you need to care about is to enjoy the music, with your friends,
        like the old days you did together in person, but now through the
        internet.
        <br /><br />
        <span class="font-black text-slate-500">
          To be sure that you'll know what I'm saying.
        </span>
        musharing embeds a chat panel in the app. You can type to chat with
        your friends, but it's not all the point.

        If words can't convey it, just say it.

        Pressing the "HotLine" button,
        the volume of the music will be turned down,
        and the microphone will capture your voice and convey it to your partner.
        <br /><br />
        <span class="font-black text-slate-500">
          Won't you let me see what spring is like on Jupiter and Mars
        </span>

        Even if you are alone,
        you don't necessarily have to enjoy the loneliness.
        We integrate a chatbot in musharing. It understands the music and
        your feeling. Talk to it.
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://musharing-team.github.io/Musharing-Homepage/index.html"
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
        musharing is built with:
      </h3>
      <span>Docker</span>
      <span>Python</span>
      <span>Android & Java</span>
    </div>
    <br><br>
  </div>
</template>
<script setup lang="ts">
</script>