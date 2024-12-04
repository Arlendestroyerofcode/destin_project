<template>
  <div>
    <!-- Main Content -->
    <section id="content-section">
      <MainNavbar logoText="/images/Destinology_Black_Logo.svg" />
      <HeroImage
        image-src="/images/marsaalarabexteriorrender.jpg"
        :isFixedHeight="false"
      />
    </section>

    <TextSection>
      <div class="line-container">
        <div class="thin-black-line"></div>
      </div>      
    </TextSection>

    <!-- Text Section 50/50 (Text + Image) -->
    <TextSection>
      <!-- 2-Column Layout (50% / 50%) -->
      <div class="container two-column-25-75">
        <div class="column">
          <p class="x_small_body">Centered Heading</p>

          <h1>Explore the World in Style</h1>
          <p>
            Whether it's unwinding on pristine beaches in the luxurious Indian Ocean, 
            uncovering ancient treasures among the golden dunes of the Middle East, 
            or soaking in the rich culture and stunning landscapes of Europe, let us be 
            your Destinology guide. We specialize in crafting unforgettable journeys to 
            these incredible destinations, ensuring every moment is filled with discovery 
            and relaxation.
          </p>
        </div>
        <div class="column image-container large-square-rounded">
          <img src="/images/Al-Maha2.jpg" alt="Landscape" />
        </div>

      </div>
    </TextSection>

    <TextSection>
      <div class="text-with-lines">
        <div class="line-frame"></div>
        <span class="text-in-lines small_body">Embrace your Middle Eastern Adventure</span>
        <div class="line-frame"></div>
      </div>
    </TextSection>

    <DestinationPostcardScroller :postcards="postcards" />

    <TextSection>
      <div class="single-text-center">
          <h3>Video Slide</h3>
      </div>
    </TextSection>

    <!-- Text Section 50/50 (Video + Empty) -->
    <div>
      <div class="video-container">
        <ResponsiveVideo
          video-src="https://player.vimeo.com/video/939111315"
          :size="100"
          :autoplay="true"
          :controls="true"
          :loop="true"
        />
      </div>
    </div>

    <!-- Footer Section -->
    <AppPageFooter footerLogoText="/images/Destinology_Black_Logo.svg" />
  </div>
</template>

<script>
import MainNavbar from "@/components/MainNavbar.vue";
import HeroImage from "@/components/HeroImage.vue";
import ResponsiveVideo from "@/components/ResponsiveVideo.vue";
import DestinationPostcardScroller from "@/components/DestinationPostcardScroller.vue";
import AppPageFooter from "@/components/AppPageFooter.vue";
import TextSection from "@/components/TextSection.vue"; // Assuming TextSection component exists

export default {
  components: {
    MainNavbar,
    HeroImage,
    AppPageFooter,
    ResponsiveVideo,
    DestinationPostcardScroller,
    TextSection, // Import TextSection component
  },

  data() {
  return {
    postcards: [
      {
        image: "images/Chalet_Bellevue.jpg",
        title: "Europe",
        description: "Journey through Europe’s rich history and culture, from Parisian romance to ancient wonders. Discover iconic cities like Rome and Athens, and let us be your guide to unforgettable experiences.",
      },
      {
        image: "/images/destinology_dubai.jpg",
        title: "Discover Tokyo",
        description: "Dive into the bustling streets and serene temples of Tokyo.",
      },
      {
        image: "/images/destinology_dubai.jpg",
        title: "Uncover Rome",
        description: "Journey through ancient history in the heart of Italy.",
      },
      {
        image: "/images/destinology_dubai.jpg",
        title: "Experience Sydney",
        description: "From the Opera House to Bondi Beach, Sydney awaits you.",
      },
    ],
  };
},
};
</script>

