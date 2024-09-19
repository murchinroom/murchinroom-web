<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LazyLandingAboutUs></LazyLandingAboutUs>
    <LazyLandingPhilosophy></LazyLandingPhilosophy>
    <LazyLandingTechnology></LazyLandingTechnology>
<!--    <LandingDevelopers></LandingDevelopers>-->
<!--    <LandingLogos></LandingLogos>-->
    <LazyLandingCta></LazyLandingCta>
  </LandingContainer>
</template>
