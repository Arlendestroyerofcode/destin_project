<template>
    <div>
      <MainNavbar />
      <HeroImage
        imageSrc="/assets/images/Destinology_Black_Logo.svg"
        heading="Welcome to Travel"
        description="Explore the world in style"
      />
      <section>
        <PostcardScroller :cards="postcards" />
      </section>
      <AppPageFooter />
    </div>
  </template>
  
  <script>
  import MainNavbar from "@/components/MainNavbar.vue";
  import HeroImage from "@/components/HeroImage.vue";
  import AppPageFooter from "@/components/AppPageFooter.vue";
  import PostcardScroller from "@/components/PostcardScroller.vue";
  
  export default {
    components: {
      MainNavbar,
      HeroImage,
      AppPageFooter,
      PostcardScroller,
    },
    data() {
      return {
        postcards: [
          { image: "/assets/images/Destinology_Black_Logo.svg", title: "Explore Paris", buttonText: "View Hotels" },
          { image: "/image2.jpg", title: "Discover Tokyo", buttonText: "View Hotels" },
        ],
      };
    },
  };
  </script>
  