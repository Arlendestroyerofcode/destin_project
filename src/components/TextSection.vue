<template>
  <div class="text-section">
    <slot></slot> <!-- This allows the parent (e.g., HomePage) to add content inside the container -->
  </div>
</template>

<script>
export default {
  name: "TextSection",
};
</script>

<style>
.container {
  padding-top: 20px;
  padding-bottom: 20px;
}
.text-section {
  margin: 0;
  padding: 0;
}

/* Text inside lines */
.text-with-lines {
  display: flex;
  align-items: center; /* Center align lines and text vertically */
  justify-content: center; /* Distribute space evenly */
  gap: 10px; /* Add space between text and lines */
  padding: 0 20px 20px 20px;
}

.line-frame {
  flex-grow: 1; /* Allow lines to stretch */
  height: 1px; /* Line thickness */
  background-color: #888; /* Line color */
}

.text-in-lines {
  white-space: nowrap; /* Prevent text from wrapping */
  font-weight: bold; /* Make text prominent */
  color: #333; /* Text color */
}

/* One column layout */
.container.one-column {
  display: flex;
  width: 100%;
  max-height: 500px;
  padding: 0;
}

.single-text-center {
  padding-top: 10px;
  text-align: center;
}

.single-text-left {
  padding-top: 10px;
  padding-left: 5px;
  text-align: left;
}

/* Two Column Layout (50% / 50%) */
.container.two-column {
  display: flex;
  width: 100%;
  flex-wrap: wrap; /* Allow wrapping to next line when space is constrained */
}

.container.two-column .column {
  flex: 1; /* Each column takes up 50% */
  padding: 0 15px; /* Padding for the content */
  min-width: 300px; /* Prevent columns from becoming too narrow */
}

/* Three Column Layout (33% / 33% / 33%) */
.container.three-column {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.container.three-column .column {
  flex: 1; /* Each column takes up 33.33% */
  padding: 0 15px; /* Padding for the content */
  min-width: 200px; /* Prevent columns from becoming too narrow */
  margin-bottom: 20px;
}

/* Four Column Layout (25% / 25% / 25% / 25%) */
.container.four-column {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 15px; /* Adds spacing between items */
}

.container.four-column .column {
  flex: 1 1 25%; /* Default: 4 columns, 25% each */
  box-sizing: border-box; /* To ensure padding doesn't affect width */
  padding: 0 15px;
  margin-bottom: 20px; /* Padding bottom to prevent sections from touching on tablet/mobile */
}

/* Two Column Layout (25% / 75%) */
.container.two-column-25-75 {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}

.container.two-column-25-75 .column:first-child {
  flex: 0 0 25%; /* First column takes 25% */
}

.container.two-column-25-75 .column:last-child {
  flex: 0 0 75%; /* Second column takes 75% */
}

.container.two-column-25-75 .column {
  padding: 0 15px; /* Padding for the content */
}

/* Responsive Design for Image Containers */
.image-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

.image-container img {
  width: 100%; /* Makes sure the image fits container width */
  height: 100%; /* Makes sure the image fills the container height */
  object-fit: cover; /* Ensures the image covers the container area, cropping where necessary */
  display: block;
}

/* Regular Styles for image types */
.image-container.large-square, .image-container.large-square-rounded, .image-container.large-square-rounded-left, .image-container.large-square-rounded-right {
  width: 100%;
  max-height: 800px;
  margin: 0 auto; /* Center the image horizontally */
}

/* Regular Styles for image types */
.image-container.medium-square {
  width: 100%;
  max-height: 500px; /* Restrict the max width of the image */
  margin: 0 auto; /* Center the image horizontally */
}

/* Regular Styles for image types */
.image-container.small-square, .image-container.small-square-rounded {
  width: 100%;
  max-width: 300px; /* Restrict the max width of the image */
  margin: 0 auto; /* Center the image horizontally */
}

.image-container.large-square-rounded img, .image-container.small-square-rounded img {
  border-radius: 8px;
  object-position: center center;
}

.image-container.large-square-rounded-left img {
  border-radius: 8px 0 0 8px;
  object-position: center center;
}

.image-container.large-square-rounded-right img {
  border-radius: 0 8px 8px 0;
  object-position: center center;
}

/* Large Landscape Style */
.image-container.large-landscape {
  width: 100%;
  height: 300px;
}

.image-container.large-landscape img {
  border-radius: 8px;
  object-position: center center;
}

/* Pill-shaped button styles */

.button-case {
  padding: 20px;
}

.pill-button {
  display: inline-block;
  padding: 10px 50px; /* Adjust padding for desired size */
  font-size: 16px; /* Adjust font size as needed */
  color: white; /* Text color */
  background-color: #783F48; /* Button background color */
  border: none; /* Remove border */
  border-radius: 50px;
  cursor: pointer; /* Changes cursor to pointer on hover */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */
}

/* Hover and active states for button */
.pill-button:hover {
  background-color: #333333; /* Darker blue for hover state */
}

/* General Box Sizing */
*,
*::before,
*::after {
  box-sizing: border-box; /* Ensure padding is included inside element width */
}

body {
  overflow-x: hidden; /* Prevent horizontal scrolling */
  margin: 0;  /* Ensure there's no default body margin */
}

/* Adding padding to the text-section for mobile screens */
@media (max-width: 767px) {
  .text-section {
    padding-left: 15px;  /* Adding padding to the left */
    padding-right: 15px; /* Adding padding to the right */
    width: 100%;  /* Ensure the section does not overflow */
  }

  .container.two-column,
  .container.three-column,
  .container.four-column {
    flex-direction: column; /* Stack columns vertically */
  }

  .container.two-column .column,
  .container.three-column .column,
  .container.four-column .column {
    min-width: 100%; /* Ensure each column takes full width */
    padding: 0 15px; /* Padding for columns */
  }

  /* Two Column (25% / 75%) - Mobile */
  .container.two-column-25-75 .column:first-child {
    flex: 0 0 100%; /* First column (text) takes 100% */
  }

  .container.two-column-25-75 .column:last-child {
    flex: 0 0 100%; /* Second column takes 100% */
  }

  /* Adjusting the image containers for smaller screens */
  .image-container.large-square,
  .image-container.small-square,
  .image-container.large-square-rounded,
  .image-container.small-square-rounded {
    width: 100%;
    max-width: none; /* Allow images to scale down naturally */
    height: auto;
  }

  .image-container.large-square img,
  .image-container.small-square img,
  .image-container.large-square-rounded img,
  .image-container.small-square-rounded img {
    border-radius: 8px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* Two Column (25% / 75%) - Tablet */
  .container.two-column-25-75 .column:first-child {
    flex: 0 0 50%; /* First column takes 50% */
  }

  .container.two-column-25-75 .column:last-child {
    flex: 0 0 50%; /* Second column takes 50% */
  }

  /* Four Column Layout - Tablet */
  .container.four-column .column {
    flex: 1 1 50%; /* Each column takes 50% width */
    padding: 0 15px;
    margin-bottom: 20px; /* Ensuring spacing between rows */
  }
}

@media (min-width: 1025px) {
  /* Two Column (25% / 75%) - Desktop */
  .container.two-column-25-75 .column:first-child {
    flex: 0 0 25%; /* First column takes 25% */
  }

  .container.two-column-25-75 .column:last-child {
    flex: 0 0 75%; /* Second column takes 75% */
  }

  /* Four Column Layout - Desktop */
  .container.four-column .column {
    flex: 1 1 25%; /* Each column takes 25% width */
    padding: 0 15px;
    margin-bottom: 20px; /* Padding bottom added to avoid sections touching */
  }
}

/* Mobile: Stack columns, each 100% width */
@media (max-width: 767px) {
  .container.four-column .column {
    flex: 1 1 100%; /* Each column takes full width */
    padding: 0 15px;
  }
}

</style>
