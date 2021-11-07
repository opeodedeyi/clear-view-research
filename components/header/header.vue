<template>
  <header class="header" :class="{ extraStyling: page != 'index' || ses }">
    <nuxt-link to="/" class="header-logo">
      <img src="~/assets/images/logo.png" alt="" />
    </nuxt-link>
    <div class="header-content desk">
      <ul class="header-content-links">
        <li class="header-item"><nuxt-link to="/expertise" class="plr16">Expertise</nuxt-link></li>
        <li class="header-item"><nuxt-link to="/casestudies" class="plr16">Our Works</nuxt-link></li>
        <li class="header-item"><nuxt-link to="/blog" class="plr16">Hot Of The Press</nuxt-link></li>
        <li class="header-item"><nuxt-link to="/aboutus" class="plr16">About Us</nuxt-link></li>
        <mainbutton type="li" to="/contactus" size="small">Contact Us</mainbutton>
      </ul>
    </div>
    <div class="header-menu-bar mob" @click="showMenuBar = true">
      <img src="~/assets/svg/menubar.svg" alt="+" />
    </div>
    <mobilenav v-if="showMenuBar" @hide-nav="hideNav()" @go-home="goHome()" :isvisible="showMenuBar"/>
  </header>
</template>

<script>
import mainbutton from "@/components/utilities/mainbutton";
import mobilenav from "@/components/mobile/mobilenav";

export default {
  components: {
    mainbutton,
    mobilenav
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
    goHome() {
      this.$router.push('/')
      // this.showMenuBar = false
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
.header-item a {
  position: relative;
}

.header-item a.nuxt-link-exact-active:after,
.header-item a:hover:after {
  content: "";
  display: block;
  position: absolute;
  bottom: -7px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 3px;
  border-radius: 3px;
  background: var(--color-white);
}

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
