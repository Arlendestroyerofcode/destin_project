<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="logo">
      <template v-if="isImage">
        <img :src="logoText" alt="Logo" />
      </template>
      <template v-else>
        <h1>{{ logoText }}</h1>
      </template>
    </div>

    <!-- Hamburger Menu -->
    <button
      class="menu-button"
      @click="toggleMenu"
      aria-label="Toggle navigation"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Navigation Links -->
    <div
      class="nav-links-container"
      :class="{ open: isMenuOpen || isDesktop }"
    >
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li class="relative group">
          <a href="/dubai-hotels">Dubai</a>
          <!-- Dropdown Menu -->
          <ul class="dropdown">
            <li><a href="/bur-al-arab-hotel">Bur Al Arab Hotel</a></li>
            <li><a href="#">Middle East</a></li>
            <li><a href="#">Europe</a></li>
          </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
  props: {
    logoText: {
      type: String,
      default: "LOGO",
    },
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    isImage() {
      return /\.(jpg|jpeg|png|svg|gif)$/.test(this.logoText);
    },
    isDesktop() {
      return window.innerWidth >= 768;
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
/* General Navbar Styles */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 0.5rem 1rem;
  position: sticky; /* Ensures the navbar is sticky */
  top: 0;
  z-index: 1000; /* Ensures navbar stays above other content */
}

/* Logo */

.logo img {
  height: 2.5rem;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

/* Hamburger Menu */
.menu-button {
  display: none;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  border: none; /* Remove any default border */
  outline: none; 
}

.menu-button svg {
  height: 2rem;
  width: 2rem;
}

/* Navigation Links */
.nav-links-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 0.1rem;
  margin-right: auto;
}

.nav-links a {
  text-decoration: none;
  color: #1F1F1F;
  padding: 10px 15px;
  display: block;
  font-family: Poppins;
}

.nav-links li {
  position: relative; /* Important: Ensure dropdown aligns to this parent */
}

.nav-links li:hover > a {
  color: #f1f1f1;
}

/* Dropdown Menu */
.dropdown {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background: #ffffff;
  border-radius: 4px;
  min-width: 150px;
  z-index: 200;
  opacity: 0; /* Start hidden */
  visibility: hidden; /* Prevent interaction */
  transition: opacity 0.3s ease, visibility 0.3s ease; /* Smooth transition */
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  padding: 0.1rem 1rem;
}

.dropdown li a {
  text-decoration: none;
  color: #1F1F1F;
  display: block;
  white-space: nowrap; /* Prevent text from wrapping */
  transition: background-color 0.3s;
}

.dropdown a {
  display: block;
  padding: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.dropdown a:hover {
  color: #d5c4b5;
}

.nav-links li:hover .dropdown {
  opacity: 1;
  visibility: visible;
}

.group {
  position: relative; /* Required for dropdown positioning */
}

.group:hover .dropdown {
  display: block;
}

/* Desktop-specific adjustments for the dropdown *
@media (min-width: 768px) {
  .nav-links-container {
    display: flex;
    justify-content: flex-end; /* Align links to the right *
    position: relative;
  }

  .dropdown {
    position: absolute; /* Align dropdown relative to parent *
    top: calc(100% + 5px); /* Avoid overlapping *
    left: 0; /* Adjust alignment as needed *
  }
}

/* Mobile-Specific Styles */
@media (max-width: 767px) {
  .logo {
    margin: 0 auto; /* Center the logo */
    text-align: center; /* Ensure text-align is centered if logo is text */
  }
  .menu-button {
    display: block;
    background-color: #ffffff;
  }

  .nav-links-container {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #ffffff;
    flex-direction: column;
    align-items: center;
    transform: translateY(-200%);
    transition: transform 0.3s ease;
  }

  .nav-links-container.open {
    transform: translateY(0);
  }

  .nav-links {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links li .dropdown {
  display: none;
  }
  
  .dropdown {
    position: relative;
  }

  .group:hover .dropdown {
    display: block;
  }
}
</style>
