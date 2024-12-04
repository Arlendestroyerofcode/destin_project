<template>
  <div
    class="responsive-video"
    :class="`size-${size}`"
    :style="{ width: calculatedWidth, height: calculatedHeight }"
  >
    <!-- If videoSrc is a Vimeo URL, render iframe, else render video -->
    <template v-if="isVimeo">
      <iframe
        :src="videoSrc"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        :style="{ width: '100%', height: '100%' }"
        allowfullscreen
      ></iframe>
    </template>
    <template v-else>
      <video
        class="video-content"
        :src="videoSrc"
        :autoplay="autoplay"
        :controls="controls"
        :loop="loop"
        muted
      >
        Your browser does not support the video tag.
      </video>
    </template>
  </div>
</template>

<script>
export default {
  name: "ResponsiveVideo",
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 50, // Default to 50% screen width
      validator: (value) => [25, 50, 100].includes(value), // Validate sizes to be 25%, 50%, or 100%
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // Calculate width as a percentage of the viewport width (vw)
    calculatedWidth() {
      return `${this.size}vw`; // Use vw to adjust the width of the video based on the screen width
    },
    // Calculate height as a fixed value of 56.25% of the width for 16:9 aspect ratio
    calculatedHeight() {
      return `${(this.size * 7) / 16}vw`; // Adjust height based on aspect ratio, where 16:9 is standard
    },
    isVimeo() {
      // Check if the videoSrc is a Vimeo URL
      return this.videoSrc.includes('vimeo.com');
    },
  },
};
</script>

<style scoped>

.responsive-video {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;
}

.video-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
