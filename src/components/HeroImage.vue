<template>
  <div
    class="hero-image relative"
    :style="{
      height: isFixedHeight ? '600px' : '100vh',
      backgroundImage: `linear-gradient(to right, ${gradient}, ${gradientEnd}), url(${imageSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div class="hero-text absolute" :class="{ 'mobile-visible': isFixedHeight }">
      <h1>{{ heading }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imageSrc: String,
    heading: String,
    description: String,
    gradient: {
      type: String,
      default: "white",
    },
    gradientEnd: {
      type: String,
      default: "transparent",
    },
    isFixedHeight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
/* Hero Image Styling */
.hero-image {
  position: relative;
  width: 100%;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
  max-width: 50%;
}

@media (max-width: 767px) {
  .hero-image {
    height: auto; /* Adjust height for mobile */
    background-size: cover; /* Ensure image scales properly */
  }

  .hero-text {
    position: relative; /* Reposition text */
    top: auto;
    left: auto;
    transform: none;
    max-width: 80%;
    padding: 40px;
    text-align: left;
  }
}
</style>
