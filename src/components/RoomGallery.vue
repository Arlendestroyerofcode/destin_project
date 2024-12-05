<template>
    <div class="postcard-scroller">
      <div v-for="(postcard, index) in postcards" :key="index" class="postcard">
        <!-- Image Section -->
        <div class="postcard-image">
          <div class="image-gallery">
            <img :src="postcard.images[activeImageIndex[index] || 0]" :alt="postcard.title" />
            <div class="gallery-controls">
              <button @click="prevImage(index)">&#9664;</button>
              <button @click="nextImage(index)">&#9654;</button>
            </div>
          </div>
        </div>
  
        <!-- Content Section -->
        <div class="postcard-content">
          <h3 class="room-title">{{ postcard.title }}</h3>
          <p class="description">{{ postcard.description }}</p>
          <ul class="facilities">
            <li v-for="(facility, i) in postcard.facilities" :key="i">{{ facility }}</li>
          </ul>
          <button class="pill-button" @click="onButtonClick('Book Now', postcard)">
            Book Now
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DestinationPostcardScroller",
    props: {
      postcards: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        activeImageIndex: {},
      };
    },
    methods: {
      onButtonClick(action, postcard) {
        console.log(`${action} clicked for ${postcard.title}`);
      },
      prevImage(index) {
        if (!this.activeImageIndex[index]) this.$set(this.activeImageIndex, index, 0);
        const images = this.postcards[index].images;
        this.activeImageIndex[index] =
          (this.activeImageIndex[index] - 1 + images.length) % images.length;
      },
      nextImage(index) {
        if (!this.activeImageIndex[index]) this.$set(this.activeImageIndex, index, 0);
        const images = this.postcards[index].images;
        this.activeImageIndex[index] = (this.activeImageIndex[index] + 1) % images.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .postcard-scroller {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }
  
  .postcard {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    max-width: 1200px;
    background: #f7f4f2;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .postcard-image {
    flex: 3;
    position: relative;
  }
  
  .image-gallery {
    position: relative;
    height: 100%;
  }
  
  .image-gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .gallery-controls {
    position: absolute;
    top: 50%;
    right: 10px;
    display: flex;
    flex-direction: column;
    transform: translateY(-50%);
  }
  
  .gallery-controls button {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
    margin: 5px 0;
    border-radius: 5px;
  }
  
  .gallery-controls button:hover {
    background: #000;
  }
  
  .postcard-content {
    flex: 7;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .room-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .description {
    margin-bottom: 20px;
  }
  
  .facilities {
    list-style: none;
    padding: 0;
    margin-bottom: auto;
  }
  
  .facilities li {
    margin-bottom: 5px;
  }
  
  .pill-button {
    align-self: flex-end;
    background: #c9a582;
    color: #1f1f1f;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .pill-button:hover {
    background: #562d33;
    color: #fff;
  }
  </style>
  