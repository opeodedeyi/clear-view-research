<template>
    <div class="nav" :class="{ open: isvisible }">
        <div class="nav-header">
            <div class="nav-header-logo" @click="cancel">
                <img src="~/assets/images/logo.png" alt="" />
            </div>
            <div class="nav-header-cancle" @click="cancel">
                <img src="~/assets/svg/cancelwhite.svg" alt="" />
            </div>
        </div>
        <ul class="nav-main" @click="cancel">
            <li class="nav-item"><nuxt-link to="/expertise"><div  class="nav-item-image"><img src="~/assets/svg/people.svg" alt=""></div> <div>Expertise</div></nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/casestudies"><div class="nav-item-image"><img src="~/assets/svg/briefcase.svg" alt=""></div> <div>Our Works</div></nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/blog"><div class="nav-item-image"><img src="~/assets/svg/book.svg" alt=""></div> <div>Hot Of The Press</div></nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/aboutus"><div class="nav-item-image"><img src="~/assets/svg/bars.svg" alt=""></div> <div>About Us</div></nuxt-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        isvisible: {
            type: Boolean,
            required: false
        }
    },
    methods: {
        cancel() {
            this.$emit("hide-nav");
        },
        goHome() {
            this.$emit("go-home");
        }
    }
}
</script>

<style scoped>
.nav-item a {
  position: relative;
}

.nav-item a.nuxt-link-exact-active:after,
.nav-item a:hover:after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: var(--color-white);
}

.nav {
    display: none;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -420px;
    bottom: 0;
    z-index: 10;
    overflow-y: auto;
    width: 100%;
    max-width: 420px;
    padding: 0 20px;
    background: var(--color-company);
    color: var(--color-white);
    transition: all 3s;
}

.open {
    right: 0;
}

.nav-header {
    height: 72px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}

.nav-header-logo {
    height: 40px;
}

.nav-header-cancle {
    height: 20px;
}

.nav-header-logo img,
.nav-header-cancle img {
    height: 100%;
}

.nav-main {
    margin-top: 80px;
    padding: 0;
    list-style: none;
}

.nav-item {
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
}

.nav-item-image {
    width: 20px;
    margin: 0 15px 0 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
}

.nav-item a {
    text-decoration: none;
    color: var(--color-white);
    font-size: 16px;
    /* line-height: 24px; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
}

/* small screen */
@media only screen and (max-width: 950px) {
    .nav {
        display: flex;
    }
}
</style>