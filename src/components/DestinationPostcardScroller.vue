<template>
    <div class="postcard-scroller">
      <div v-for="(postcard, index) in postcards" :key="index" class="postcard">
        <!-- Image Section -->
        <div class="postcard-image">
          <img :src="postcard.image" :alt="postcard.title" />
        </div>
  
        <!-- Text Section -->
        <div class="postcard-content">
          <h3>{{ postcard.title }}</h3>
          <p>{{ postcard.description }}</p>
        </div>
  
        <!-- Button Section -->
        <div class="postcard-buttons">
          <button class="button-mid" @click="onButtonClick('View Hotels', postcard)">
            View Hotels
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
    methods: {
      onButtonClick(action, postcard) {
        console.log(`${action} clicked for ${postcard.title}`);
      },
    },
  };
  </script>
  
  <style  >
.postcard-scroller {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 10px;
}

.postcard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  overflow: hidden;
  width: 300px;
  height: 570px; /* Total height: 215px (image) + 215px (text) + 140px (buttons) */
  background: #f7f4f2;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.postcard-image {
  height: 215px;
  overflow: hidden;
}

.postcard-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.postcard-content {
  height: 215px;
  padding: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.postcard-content h3 {
  margin-bottom: 10px;
}

.postcard-content p {
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Limits to 4 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.postcard-buttons {
  height: 50px; /* Ensure buttons are properly spaced */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box; /* Ensure padding and border are included in the height */
  padding: 10px 0; /* Add some internal spacing if necessary */
}

.postcard-buttons button {
  flex: 1;
  padding: 15px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline: none;
}

.postcard-buttons .button-mid {
  background: #c9a582;
  color: #1F1F1F;
  border-top: 1px solid #613e26;
  border-radius: 0 0 15px 15px;
}

.postcard-buttons button:hover {
  color: #ffffff;
  background: #562D33;
}
</style>

  