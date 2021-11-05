<template>
  <header class="header" :class="{ extraStyling: page != 'index' || ses }">
    <nuxt-link to="/" class="header-logo">
      <img src="~/assets/images/logo.png" alt="" />
    </nuxt-link>
    <div class="header-content desk">
      <ul class="header-content-links">
        <nuxt-link to="/expertise" tag="li" ><a>Expertise</a></nuxt-link>
        <nuxt-link to="/casestudies" tag="li" class="pl32" ><a>Our Work</a></nuxt-link>
        <nuxt-link to="/blog" tag="li" class="pl32" ><a>Hot Of The Press</a></nuxt-link>
        <nuxt-link to="/aboutus" tag="li" class="pl32 pr48" ><a>About</a></nuxt-link>
        <mainbutton type="li" to="/contactus" size="small">Contact Us</mainbutton>
      </ul>
    </div>
    <div class="header-menu-bar mob" @click="showMenuBar = true">
      <img src="~/assets/svg/menubar.svg" alt="+" />
    </div>
  </header>
</template>

<script>
import mainbutton from "@/components/utilities/mainbutton";

export default {
  components: {
    mainbutton
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
  height: 72px; /* 5.5rem */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 64px;
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

.header-content ul {
  list-style: none;
  padding: 0;
}

.pl32 {
  padding-left: 32px;
}

.pr48 {
  padding-right: 48px;
}

.pr64 {
  padding-right: 64px;
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
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-white);
}

.header-menu-bar {
  height: 16px;
}

.header-menu-bar img {
  height: 100%;
}

.extraStyling {
  background-color: var(--color-dark);
}

.extraStyling a {
  color: var(--color-white);
  text-decoration: none;
}

.mob {
  display: none;
}

/* small screen */
@media only screen and (max-width: 950px) {
  .header {
    padding: 0 20px;
  }

  .desk {
    display: none;
  }

  .mob {
    display: block;
  }

  .header-logo {
    height: 40px;
  }
}
</style>
