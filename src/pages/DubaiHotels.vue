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
  
      <!-- Hotel Section begin -->
      <TextSection>
        <div class="container two-column">
          <!-- Image Column - Moved to Left -->
          <div class="column image-container medium-square">
            <img src="/images/atlantis-palm-dubai.jpg" alt="Landscape" />
          </div>
  
          <!-- Text Column -->
          <div class="column">
            <p class="x_small_body">united arab emirates | dubai</p>
            <h1>Atlantis The Palm, Dubai</h1>
            <p>
              Atlantis, The Palm, Dubai is the iconic resort situated on the crescent 
              of Dubai’s Palm Island. The resort is a luxury, ocean-themed destination, 
              with rooms and suites facing the Dubai skyline, the Atlantis beach front, Palm
            </p>
  
            <!-- Add SVG Infographic Here -->
            <div class="infographic-section">
              <InfographicIcon
                type="restaurants"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">4+ Restaurants</span>
            </div>
            <div class="infographic-section">
              <InfographicIcon
                type="beachfrontlocation"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">Beachfront Location</span>
            </div>
            <div class="infographic-section">
              <InfographicIcon
                type="onsitegym"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">Onsite Gym</span>
            </div>
            <div class="infographic-section">
              <InfographicIcon
                type="clubroomaccess"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">Club Room Access</span>
            </div>
            <div class="infographic-section">
              <InfographicIcon
                type="waterparks"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">Sea View</span>
            </div>
            <div class="button-case"><button class="pill-button cta_button">Click Me</button></div>
          </div>
        </div>
      </TextSection>
      <!-- Hotel Section End -->
  
      <!-- Hotel Section begin -->
      <TextSection>
        <div class="container two-column">
          <!-- Image Column - Moved to Left -->
          <div class="column image-container medium-square">
            <img src="/images/Jumeirah-Beach-Hotel.jpg" alt="Landscape" />
          </div>
  
          <!-- Text Column -->
          <div class="column">
            <p class="x_small_body">united arab emirates | dubai</p>
            <h1>Jumeirah Beach Hotel</h1>
            <p>
              Overlooking the iconic Burj Al Arab, and with its own distinctive wave 
              architecture, Jumeirah Beach is made up of rooms as well as one, two, or 
              three
            </p>
  
            <!-- Add SVG Infographic Here -->
            <div class="infographic-section">
              <InfographicIcon
                type="restaurants"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">4+ Restaurants</span>
            </div>
            <div class="infographic-section">
              <InfographicIcon
                type="interconnectingrooms"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">Interconnecting Rooms</span>
            </div>
            <div class="infographic-section">
              <InfographicIcon
                type="beachfrontlocation"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">Beachfront Location</span>
            </div>
            <div class="infographic-section">
              <InfographicIcon
                type="seaview"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">Sea View</span>
            </div>
            <div class="infographic-section">
              <InfographicIcon
                type="waterparks"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">Water Park</span>
            </div>
            <div class="button-case"><button class="pill-button cta_button">Click Me</button></div>
          </div>
        </div>
      </TextSection>
      <!-- Hotel Section End -->
  
      <!-- Hotel Section begin -->
      <TextSection>
        <div class="container two-column">
          <!-- Image Column - Moved to Left -->
          <div class="column image-container medium-square">
            <img src="/images/Al-Maha.jpg" alt="Landscape" />
          </div>
  
          <!-- Text Column -->
          <div class="column">
            <p class="x_small_body">united arab emirates | dubai</p>
            <h1>Al Maha, a Luxury Collection Desert Resort & Spa</h1>
            <p>
              Situated in the Dubai Desert Conservation Reserve, Al Maha, A Luxury 
              Collection Desert Resort & Spa resembles a Bedoin encampment and has just 
              42
            </p>
  
            <!-- Add SVG Infographic Here -->
            <div class="infographic-section">
              <InfographicIcon
                type="waterparks"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">Private Pool Available</span>
            </div>
            <div class="infographic-section">
              <InfographicIcon
                type="spafacilities"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">Spa Facilities</span>
            </div>
            <div class="infographic-section">
              <InfographicIcon
                type="onsitegym"
                size="20"
                fill-color="#232323"
                stroke-color="#2c3e50"
              />
              <span class="infographic-label">Onsite Gym</span>
            </div>
            <div class="button-case"><button class="pill-button cta_button">Click Me</button></div>
          </div>
        </div>
      </TextSection>
      <!-- Hotel Section End -->
  
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
  import AppPageFooter from "@/components/AppPageFooter.vue";
  import TextSection from "@/components/TextSection.vue";
  import InfographicIcon from "@/components/InfographicIcon.vue"; // Import InfographicIcon component
  
  export default {
    components: {
      MainNavbar,
      HeroImage,
      AppPageFooter,
      ResponsiveVideo,
      TextSection,
      InfographicIcon, // Add the InfographicIcon component
    },
  };
  </script>
  
  <style scoped>
  /* Infographic Section Styles */
  .infographic-section {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
  
  .infographic-label {
    margin-left: 0.5rem;
    font-size: 1rem;
  }
  
  /* Hotel Section Styling */
  .container.two-column {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  
  .column {
    width: 48%;
  }
  
  .column.image-container {
    flex-shrink: 0;
    margin-right: 2rem;
  }
  
  .column img {
    width: 100%;
    height: auto;
  }
  
  .column h1 {
    font-size: 2rem;
    margin-top: 0;
  }
  
  .column p {
    font-size: 1.1rem;
    margin-top: 1rem;
  }
  
  .column .button-case {
    margin-top: 1.5rem;
  }
  
  /* Button Styles */
  .pill-button.cta_button {
    background-color: #1e90ff;
    border: none;
    color: white;
    font-size: 1rem;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
  }
  
  .pill-button.cta_button:hover {
    background-color: #4682b4;
  }
  
  </style>
  