<template>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-logo">
        <template v-if="isImage">
          <img :src="footerLogoText" alt="Footer Logo" class="h-10" />
        </template>
        <template v-else>
          <h2>{{ footerLogoText }}</h2>
        </template>
        <p class="x_small_body">© Destinology 2024. All Rights Reserved</p>
      </div>
      <div class="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Help</a>
      </div>
    </footer>
</template>

<script>
export default {
  name: "AppPageFooter",
  props: {
    footerLogoText: {
      type: String,
      default: "LOGO",
    },
  },
  computed: {
    isImage() {
      return /\.(jpg|jpeg|png|svg|gif)$/.test(this.footerLogoText);
    },
  },
};
</script>

<style>
/* Ensure the body takes full height */
html, body {
  height: 100%;
  margin: 0;
}

/* Footer styling */
.footer {
  background-color: #f7f4f2;
  color: #313131;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  margin-top: auto;
  width: 100%;
}

.footer-logo {
  display: flex;
  flex-direction: column;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  color: #313131;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.section-two .col-2 {
  flex: 4; /* 80% of the container */
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
