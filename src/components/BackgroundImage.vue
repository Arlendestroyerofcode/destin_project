<template>
  <div class="background-wrapper">
    <!-- Background Image -->
    <div
      class="background-image"
      :style="{ ...backgroundStyles, opacity: backgroundOpacity }"
    ></div>

    <!-- Optional Gradient Layers -->
    <div
      v-if="showTopGradient"
      class="background-overlay top"
      :style="{
        zIndex: topZIndex,
        opacity: topOpacity,
        background: gradientTop
      }"
    ></div>
    <div
      v-if="showBottomGradient"
      class="background-overlay bottom"
      :style="{
        zIndex: bottomZIndex,
        opacity: bottomOpacity,
        background: gradientBottom
      }"
    ></div>
    <div
      v-if="showLeftGradient"
      class="background-overlay left"
      :style="{
        zIndex: leftZIndex,
        opacity: leftOpacity,
        background: gradientLeft
      }"
    ></div>
    <div
      v-if="showRightGradient"
      class="background-overlay right"
      :style="{
        zIndex: rightZIndex,
        opacity: rightOpacity,
        background: gradientRight
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    backgroundOpacity: {
      type: Number,
      default: 1, // Fully visible
    },
    isRepeat: {
      type: Boolean,
      default: false,
    },
    topOpacity: {
      type: Number,
      default: 0,
    },
    bottomOpacity: {
      type: Number,
      default: 0,
    },
    leftOpacity: {
      type: Number,
      default: 0,
    },
    rightOpacity: {
      type: Number,
      default: 0,
    },
    topZIndex: {
      type: Number,
      default: 1,
    },
    bottomZIndex: {
      type: Number,
      default: 1,
    },
    leftZIndex: {
      type: Number,
      default: 1,
    },
    rightZIndex: {
      type: Number,
      default: 1,
    },
    gradientTop: {
      type: String,
      default: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
    },
    gradientBottom: {
      type: String,
      default: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
    },
    gradientLeft: {
      type: String,
      default: "linear-gradient(to right, rgba(0,0,0,0.5), transparent)",
    },
    gradientRight: {
      type: String,
      default: "linear-gradient(to left, rgba(0,0,0,0.5), transparent)",
    },
    showTopGradient: {
      type: Boolean,
      default: true,
    },
    showBottomGradient: {
      type: Boolean,
      default: true,
    },
    showLeftGradient: {
      type: Boolean,
      default: true,
    },
    showRightGradient: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    backgroundStyles() {
      return {
        backgroundImage: `url(${this.imageSrc})`,
        backgroundSize: this.isRepeat ? "auto" : "cover",
        backgroundRepeat: this.isRepeat ? "repeat" : "no-repeat",
        backgroundPosition: "center",
      };
    },
  },
};
</script>

<style scoped>
.background-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  z-index: -10;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -11;
}

.background-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.background-overlay.top {
  top: 0;
}

.background-overlay.bottom {
  bottom: 0;
}

.background-overlay.left {
  left: 0;
  width: 50%;
  height: 100%;
}

.background-overlay.right {
  right: 0;
  width: 50%;
  height: 100%;
}
</style>
