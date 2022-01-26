<template>
  <header class="header" :class="{ extraStyling: page != 'index' || ses }">
    <nuxt-link to="/" class="header-logo">
      <img src="~/assets/svg/logo.svg" class="logo-color" alt="" />
    </nuxt-link>
    <div class="header-content desk">
      <ul class="header-content-links">
        <li class="header-item"><nuxt-link to="/aboutus" class="plr-header">About Us</nuxt-link></li>
        <li class="header-item"><nuxt-link to="/expertise" class="plr-header">Our Expertise</nuxt-link></li>
        <li class="header-item"><nuxt-link to="/casestudies" class="plr-header">Case Studies</nuxt-link></li>
        <li class="header-item"><nuxt-link to="/blog" class="plr-header">Blogs</nuxt-link></li>
        <mainbutton type="li" to="/contactus" size="header">Contact Us</mainbutton>
      </ul>
    </div>
    <div class="header-menu-bar mob" @click="showMenuBar = true">
      <img src="~/assets/svg/menubar.svg" alt="+" />
    </div>
    <mobilenav @hide-nav="hideNav()" :isvisible="showMenuBar"/>
    <mobileoverlay v-show="showMenuBar" @hide-nav="hideNav()"/>
  </header>
</template>

<script>
import mainbutton from "@/components/utilities/mainbutton";
import mobilenav from "@/components/mobile/mobilenav";
import mobileoverlay from "@/components/mobile/mobileoverlay";

export default {
  components: {
    mainbutton,
    mobilenav,
    mobileoverlay
  },
  props: {
    menuTrigger: { 
      type: Number
    }
  },
  watch: {
    '$route' () {
      this.showMenuBar = false;
    },
    'menuTrigger' () {
      this.showMenuBar = true;
    }
  },
  data() {
    return {
      ses: false,
      showMenuBar: false
    }
  },
  computed: {
    page() {
      return this.$route.name
    }  
  },
  methods: {
    hideNav() {
      this.showMenuBar = false
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition) > 5) {
        return this.ses = true
      }
      return this.ses = false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style scoped>
.header {
  height: 138px; /* 5.5rem */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 78px;
  z-index: 99;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

a {
  text-decoration: none;
}

.logo-color {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(305deg) brightness(103%) contrast(103%);
}

.header-content ul {
  list-style: none;
  padding: 0;
}

.header-logo {
  height: 45px;
}

.header-logo img {
  height: 100%;
}

.header-content-links {
  display: flex;
  flex-direction: row;
}

.header-content-links a {
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-white);
}

/* active class */
.header-item a.nuxt-link-exact-active,
.header-item a:hover {
  color: var(--color-danger);
}

.header-menu-bar {
  height: 45px;
  cursor: pointer;
}

.header-menu-bar img {
  height: 100%;
}

.extraStyling {
  background-color: var(--color-gray);
  box-shadow: 0px 0 4px rgba(0, 0, 0, 0.1);
}

.extraStyling a {
  color: var(--color-dark);
  text-decoration: none;
}

.extraStyling .logo-color {
  filter: invert(0%) sepia(0%) saturate(17%) hue-rotate(292deg) brightness(101%) contrast(106%);
}

.mob {
  display: none;
}

/* small screen */
@media only screen and (max-width: 1080px) {
  .header {
    padding: 0 30px;
    height: 110px;
  }

  .desk {
    display: none;
  }

  .mob {
    display: block;
  }

  .header-logo {
    height: 45px;
  }
}
</style>
