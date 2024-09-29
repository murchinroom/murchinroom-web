<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <MiscHero></MiscHero>
    <LazyMiscPyflowchart></LazyMiscPyflowchart>
    <LazyMiscCrud></LazyMiscCrud>
    <LazyMiscEmotext></LazyMiscEmotext>
    <LazyMiscEllipsis></LazyMiscEllipsis>
    <LazyMiscConfiger></LazyMiscConfiger>
    <LazyMiscSmelt></LazyMiscSmelt>
    <LazyMiscPish></LazyMiscPish>
    <LazyMiscSimplecipher></LazyMiscSimplecipher>

<!--    <ul class="flex gap-8 md:gap-20 items-center justify-center mt-16 flex-wrap text-red-600">-->
<!--      TODO:-->
<!--      <li><a href="https://github.com/cdfmlr/try">try</a></li>-->
<!--      <li><a href="https://github.com/cdfmlr/sham">sham</a></li>-->
<!--    </ul>-->
    <MiscMore></MiscMore>
  </LandingContainer>
</template>
