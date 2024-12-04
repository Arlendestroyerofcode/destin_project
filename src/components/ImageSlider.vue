<template>
    <div id="gallery-widget">
      <div class="gallery-container" ref="galleryContainer">
        <div
          class="gallery-slide"
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: index === currentIndex }"
        >
          <img :src="image" :alt="'Slide ' + (index + 1)" />
        </div>
      </div>
      <div class="gallery-controls">
        <button class="gallery-button" @click="moveUp">▲</button>
        <button class="gallery-button" @click="moveDown">▼</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ImageSlider",
    props: {
      images: {
        type: Array,
        required: true,
        validator(value) {
          return value.every((img) => typeof img === "string");
        },
      },
    },
    data() {
      return {
        currentIndex: 0,
      };
    },
    methods: {
      moveUp() {
        this.currentIndex =
          (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      moveDown() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
    },
  };
  </script>
  

<style>
/* Main Slider Container */
#gallery-widget {
  width: 100%; /* Takes up 100% of its parent container */
  max-height: 700px; /* Adjust this to fit your design */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.gallery-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Individual Slide */
.gallery-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: none; /* Hide inactive slides */
}

.gallery-slide.active {
  display: flex; /* Only show the active slide */
  justify-content: center;
  align-items: center;
}

.gallery-slide img {
  max-width: 100%; /* Scale image width to container */
  max-height: 100%; /* Scale image height to container */
  object-fit: contain; /* Maintain aspect ratio and fit inside */
}

/* Controls */
.gallery-controls {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.gallery-button {
  width: 40px;
  height: 40px;
  font-size: 18px;
  background-color: transparent;
  color: #232323;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery-button:hover {
  background-color: #f0f0f0; /* Add hover effect */
}
</style>
