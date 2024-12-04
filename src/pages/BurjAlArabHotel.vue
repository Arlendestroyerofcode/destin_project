<template>
    <div>
      <!-- Main Content -->
      <section id="content-section">
        <MainNavbar logoText="/images/Destinology_Black_Logo.svg" />
      </section>

      <TextSection>
        <div class="line-container">
          <div class="thin-black-line"></div>
        </div>      
      </TextSection>
  
      <!-- Text Section 50/50 (Text + Image) -->
      <TextSection>
        <!-- 2-Column Layout (50% / 50%) -->
        <div class="container two-column-25-75">
          <div class="column">
            <p class="x_small_body">Centered Heading</p>

            <h3>‘A One-Of-A-Kind Entertainment, Leisure and Hotel Icon’</h3>
            <p>
                Atlantis, The Palm, Dubai is the iconic resort situated on the crescent 
                of Dubai’s Palm Island. The resort is a luxury, ocean-themed destination, 
                with rooms and suites facing the Dubai skyline, the Atlantis beach front, 
                Palm and Arabian Sea, or the sealife-inhabited Ambassador Lagoon located 
                within the hotel's Lost Chambers Aquarium. Guests staying at Atlantis, 
                The Palm have the benefit of daily access to Aquaventure Waterpark, the 
                world's largest waterpark with a total of 105 slides, attractions and 
                experiences, as well as 36 incredible restaurants, bars and lounges that 
                include both celebrity and Michelin-starred venues. The Awaken Spa 
                presents the brand new Nailology, the first licenced nail salon in the 
                region. The Atlantis Explorers Club is open for little ones aged 4-12 
                years and The Zone for teenagers 13-17 years old. 
            </p>
          </div>
            <div class="column">
                <ImageSlider :images="imageList" />
            </div>
        </div>
      </TextSection>

      <div class="review-container">
        <div class="review-text">
          <ReviewsWidget
            :tags="['UAE', 'Dubai']"
            :csvUrl="'/assets/reviews.csv'"
            image-src="/images/Brand_Refresh_Textures_Wine.jpg"
            :isRepeat="false"
          />        
      </div>

            <!-- Text Section 50/50 (Text + Image) -->
            <TextSection>
        <!-- 2-Column Layout (50% / 50%) -->
        <div class="container three-column">
          <div class="column">
            <h3>Location</h3>
            <p>
                Atlantis The Palm, Dubai is located on the crescent road of the Palm Island
                 Dubai, 23 miles and 30 mins from Dubai International Airport.
            </p>
            <p>
                <strong>
                    Nearby attractions
                </strong>
            </p>
            <ul>
                <li>Dubai Marina – 7 miles</li>
                <li>Mall of the Emirates – 10 miles </li>
                <li>Dubai Creek – 18 miles </li>
                <li>Dubai Parks and Resorts – 24 miles</li>
            </ul>  
          </div>
          <div class="column image-container large-square-rounded">
            <img src="/images/Al-Maha2.jpg" alt="Landscape" />
          </div>
            <div class="column">
            </div>
        </div>
      </TextSection>

      <DestinationPostcardScroller :postcards="postcards" />
      <TextSection>

        <TextSection>
        <div class="line-container">
          <div class="thin-black-line"></div>
        </div>      
      </TextSection>
      <!-- 2-Column Layout (50% / 50%) -->
      <div class="container two-column">
            <div class="column">
                <h3>Facilities</h3>

                <p><strong>Leisure</strong></p>
                <ul>
                <li>Resort beach</li>
                <li>3 outdoor pools - the Palm Pool, Family Pool and Infinity Pool at White Beach Club</li>
                <li>Imperial Club Beach</li>
                <li>Tennis courts & academy</li>
                <li>Outdoor playgrounds</li>
                <li>Atlantis Kids Club, 4-12 years old</li>
                <li>The Zone, 13-17 years old</li>
                </ul>

                <p><strong>Awaken Spa & Fitness</strong></p>
                <ul>
                <li>Separate his/hers areas</li>
                <li>27 treatment rooms</li>
                <li>State of the art fitness centre</li>
                <li>Technogym</li>
                <li>Zero entry pool and Royal Pool</li>
                <li>Range of training sessions</li>
                <li>Yoga in the Lost Chambers</li>
                <li>Ladies and men’s grooming</li>
                </ul>

                <p><strong>Aquaventure Waterpark - daily access</strong></p>
                <ul>
                <li>700m beach</li>
                <li>Thrilling waterslides</li>
                <li>River rides</li>
                <li>Splash areas</li>
                <li>Ray feeding</li>
                </ul>

                <p><strong>The Lost Chambers Experience - daily access</strong></p>
                <ul>
                <li>Lost Chambers’ ruins</li>
                <li>Aquarium experience</li>
                <li>Aquatheatre shows</li>
                <li>Diving or snorkelling</li>
                <li>Aquatrek</li>
                <li>Ambassadors lagoon</li>
                <li>Marine animal education</li>
                </ul>

                <p><strong>Wavehouse</strong></p>
                <p>Located in the Avenues, Wavehouse is an industrial-themed entertainment centre.</p>
                <ul>
                <li>Waverider</li>
                <li>Bowling</li>
                <li>Levels climbing structure</li>
                <li>Restaurants and bars</li>
                </ul>

                <p><strong>Water Sports</strong></p>
                <ul>
                <li>Kayaking</li>
                <li>Surfing</li>
                <li>Paddleboarding</li>
                <li>Banana boat</li>
                <li>Tubing</li>
                </ul>

                <p><strong>White Beach</strong></p>
                <p>
                This beach club overlooks the inner waters of the Palm and has views of the Dubai skyline. 
                Book a cabana poolside, join in the fun of Friday Brunch, or settle down to dine at the White Beach restaurant.
                </p>

                <p><strong>Services</strong></p>
                <ul>
                <li>Valet parking</li>
                <li>Wi-Fi</li>
                <li>Concierge</li>
                <li>Retail shopping</li>
                <li>Limousine service</li>
                <li>Business centre</li>
                <li>Dry cleaning and laundry service</li>
                <li>Helipad</li>
                <li>Babysitting services</li>
                </ul>

          </div>
          <div class="column">
            <h3>Families</h3>
            <p>Atlantis The Palm, Dubai welcomes families with children of all ages and offers the following facilities and services to ensure they have an enjoyable stay.</p>

            <h3>Accommodation</h3>
            <ul>
            <li>The Two Bedroom Family Room will provide guaranteed interconnecting rooms.</li>
            <li>Two-bedroom suites are available with a maximum capacity of 6 people - adults or children.</li>
            <li>Baby cots are available free of charge.</li>
            <li>Bottle sterilisers, warmers, monitors in guest rooms upon request and subject to availability.</li>
            <li>The minibar can be locked or fitted with soft drinks only.</li>
            </ul>

            <h3>Dining</h3>
            <ul>
            <li>Children’s menus are available.</li>
            <li>Baby food is available at the hotel.</li>
            <li>Highchairs are available at all times of the year.</li>
            <li>Children have restricted access to Seafire, Ossiano, and Nobu.</li>
            </ul>

            <h3>Amenities</h3>
            <ul>
            <li>Medical facilities available.</li>
            <li>Ramps and lifts for buggies.</li>
            <li>Shop for baby goods in West Tower.</li>
            <li>Nappy changing facilities in public toilets.</li>
            <li>Complimentary Aquaventure Waterpark access to all guests.</li>
            <li>Complimentary The Lost Chambers Aquarium access to all guests.</li>
            <li>Children menus in select restaurants.</li>
            <li>A kids club, The Zone for teenagers, babysitting (extra charge), family Zero Entry pool.</li>
            <li>Play area outside Bread Street Kitchen and Zero Entry pool.</li>
            <li>Car seat available subject to request at time of booking.</li>
            </ul>

            <h3>Leisure</h3>
            <ul>
            <li>Aquaventure beach.</li>
            <li>Family pools.</li>
            <li>Underwater theatre.</li>
            <li>Little Pirates Playground.</li>
            </ul>

            <h3>Beach & Sea</h3>
            <ul>
            <li>Lifeguards on duty.</li>
            <li>Shallow water entry.</li>
            <li>Pristine white sand.</li>
            <li>Beach is safe and suitable for children.</li>
            <li>Calm and warm sea.</li>
            <li>There is shade at the beach.</li>
            </ul>

            <h3>Swimming Pools</h3>
            <ul>
            <li>Lifeguard at swimming pools.</li>
            <li>Family swimming pool with zero entry.</li>
            <li>Dedicated pool for children.</li>
            <li>Shadings available such as parasols, cabanas, and daybeds.</li>
            </ul>

            <h3>Sports</h3>
            <ul>
            <li>There is a tennis academy.</li>
            <li>Charges for certain sports.</li>
            </ul>

            <h3>Atlantis Explorers Club</h3>

            <p><strong>Ages</strong></p>
            <ul>
            <li>4-12 years</li>
            </ul>

            <p><strong>Opening times</strong> – subject to change</p>
            <ul>
            <li>10:30 – 13:30</li>
            <li>14:00 – 17:00</li>
            <li>17:30 – 20:30</li>
            </ul>

            <p><strong>Cost</strong></p>
            <ul>
            <li>Complimentary with some room types – see room details.</li>
            </ul>

            <p><strong>Note that adults aren't allowed in the Kids Club during operating hours. Parents of children aged 3 and under must hire a babysitter.</strong></p>

            <h3>For Ages 3 – 7 Activities include:</h3>
            <ul>
            <li>Sandcastle building</li>
            <li>Scavenger hunt</li>
            <li>Junior yoga</li>
            <li>Art and craft</li>
            <li>Softplay</li>
            <li>Games</li>
            </ul>

            <h3>For Ages 8 – 12</h3>
            <ul>
            <li>Step by step drawing</li>
            <li>Mini football</li>
            <li>Ball handling skills</li>
            <li>Cross the river challenge</li>
            <li>Tag tail challenge</li>
            </ul>

            <h3>The Zone</h3>
            <p>A place for teenagers to hangout. Chill, play, dance, sing, and read – connect to new friends around the world.</p>

            <p><strong>Ages</strong></p>
            <ul>
            <li>13 – 17</li>
            </ul>

            <p><strong>Opening times</strong> – subject to change</p>
            <ul>
            <li>Day 10:30 – 18:00</li>
            <li>Evening 19:00 – 23:00</li>
            </ul>

            <h3>Babysitting</h3>
            <p><strong>Babysitting is offered at an extra charge</strong> – enquire for details.</p>
            <ul>
            <li>Fully qualified babysitters.</li>
            <li>A one-to-one babysitter is required for any child younger than 18 months in-room babysitting.</li>
            <li>A one-to-one babysitter is required for any child younger than 36 months around the resort or in the Kids Club.</li>
            <li>They do not provide babysitting services for 24 hours. The babysitter can stay in the room from 7:00 until 3:00 at the latest.</li>
            <li>Booking in advance on a first-come, first-served basis.</li>
            <li>Minimum of 3 hours will be charged.</li>
            <li>A meal must be provided if booking exceeds 4 hours.</li>
            </ul>


          </div>
        </div>
        
        
      </TextSection>
    </div>
      <TextSection>
        <div class="text-with-lines">
          <div class="line-frame"></div>
          <span class="text-in-lines small_body">Embrace your Middle Eastern Adventure</span>
          <div class="line-frame"></div>
        </div>
      </TextSection>
  
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
  import ResponsiveVideo from "@/components/ResponsiveVideo.vue";
  import ReviewsWidget from '@/components/ReviewsWidget.vue';
  import DestinationPostcardScroller from "@/components/DestinationPostcardScroller.vue";
  import ImageSlider from "@/components/ImageSlider.vue";
  import AppPageFooter from "@/components/AppPageFooter.vue";
  import TextSection from "@/components/TextSection.vue"; // Assuming TextSection component exists
  
  export default {
    components: {
      MainNavbar,
      AppPageFooter,
      ReviewsWidget,
      ImageSlider,
      ResponsiveVideo,
      DestinationPostcardScroller,
      TextSection, // Import TextSection component
    },
    data() {
    return {
      imageList: [
        "/images/Al-Maha2.jpg",
        "/images/hotel-gallery-image-1.png",
        "/images/hotel-gallery-image-8.png",
      ],
      postcards: [
        {
          image: "images/Chalet_Bellevue.jpg",
          title: "Two Bedroom Terrace Suite",
          description: "This suite has a balcony overlooking the ocean or The Palm tropical landscape. There is a separate living room, alongside two bedrooms and two bathrooms.",
        },
        {
          image: "/images/destinology_dubai.jpg",
          title: "Discover Tokyo",
          description: "Dive into the bustling streets and serene temples of Tokyo.",
        },
      ],
    };
  },
};
  </script>
  