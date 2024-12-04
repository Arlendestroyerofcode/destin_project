<template>
  <div class="reviews-widget" :style="backgroundStyles">
    <h3 class="customer-review-heading">
      <img src="/images/White_D_Logo.svg" alt="Icon" class="review-icon" />
      In Our Opinion
    </h3>
    <div class="reviews-container" id="reviews">
      <!-- Reviews will be inserted here -->
    </div>
  </div>
</template>

<script>
import Papa from 'papaparse';
import { ref, onMounted } from 'vue';

export default {
  name: 'ReviewsWidget',
  props: {
    tags: {
      type: Array,
      required: true,
    },
    csvUrl: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    isRepeat: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const reviews = ref([]);

    const loadReviews = () => {
  // Fetch the CSV file and parse it
  fetch(props.csvUrl)
    .then(response => response.text())
    .then(csvText => {
      Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
          // Filter reviews based on the tags passed in
          const filteredReviews = results.data.filter(review => {
            return props.tags.some(tag => 
              (review.Country?.toLowerCase() === tag.toLowerCase() || 
              review.City?.toLowerCase() === tag.toLowerCase() || 
              review.Hotel?.toLowerCase() === tag.toLowerCase())
            );
          });
          reviews.value = filteredReviews;
          displayRandomReview();
        }
      });
    });
};


    const displayRandomReview = () => {
      if (reviews.value.length > 0) {
        // Select a random review from the filtered list
        const randomReview = reviews.value[Math.floor(Math.random() * reviews.value.length)];
        const reviewContainer = document.querySelector('.reviews-container');
        reviewContainer.innerHTML = `
          <div class="customer-review">
            <p><strong>${randomReview.Hotel} (${randomReview.City}, ${randomReview.Country}):</strong></p>
            <p>"${randomReview.Review}"</p>
          </div>
        `;
      }
    };

    onMounted(() => {
      loadReviews();  // Load the reviews once the component is mounted
    });

    return {
      reviews
    };
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

<style>
.reviews-widget {
  border: 1px solid #5e2b2b;
  border-radius: 8px;
  width: 80%; /* Limits the width to 80% of the page */
  min-height: 200px; /* Ensures the box has at least 200px height */
  margin: 20px auto; /* Centers the container */
  padding: 20px; /* Adds some space inside the box */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for the box */
  flex-direction: column;
  justify-content: center; /* Vertically centers the content */
  align-items: center; /* Centers the content horizontally */
  text-align: center; /* Centers the text */
  position: relative;
  z-index: 1; /* Makes sure content is above the background */
}

.review-icon {
  margin-right: 10px; /* Space between the image and the text */
  width: 30px; /* Adjust the size of the image */
  height: auto;
}

.customer-review-heading {
  color: #ffffff;
  text-align: left; /* Aligns review text to the left */
}
.customer-review {
  color: #ffffff;
  word-wrap: break-word; /* Ensures long text doesn't overflow */  
  padding: 15px;
  font-style: italic;
  text-align: left; /* Aligns review text to the left */
}

.customer-review:last-child {
  border-bottom: none;
}

.reviews-container {
  margin-top: 20px;
  text-align: left; /* Aligns reviews to the left */
}
</style>
