<template>
    <div class="nav" :class="{ open: isvisible }">
        <div class="nav-header">
            <nuxt-link to="/" class="nav-header-logo">
                <img src="~/assets/images/logo.png" alt="" />
            </nuxt-link>
            <div class="nav-header-cancle">
                <img src="~/assets/svg/cancelwhite.svg" alt="" />
            </div>
        </div>
        <ul class="nav-main">
            <li class="nav-item"><nuxt-link to="/expertise"><div  class="nav-item-image"><img src="~/assets/svg/people.svg" alt=""></div> <div>Expertise</div></nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/casestudies"><div class="nav-item-image"><img src="~/assets/svg/briefcase.svg" alt=""></div> <div>Our Works</div></nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/blog"><div class="nav-item-image"><img src="~/assets/svg/book.svg" alt=""></div> <div>Hot Of The Press</div></nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/aboutus"><div class="nav-item-image"><img src="~/assets/svg/bars.svg" alt=""></div> <div>About Us</div></nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/contactus"><div class="nav-item-image"><img src="~/assets/svg/message.svg" alt=""></div> <div>Contact Us</div></nuxt-link></li>
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
    width: 100%;
    max-width: 420px;
    padding: 0 20px;
    background: var(--color-company);
    color: var(--color-white);
    transition: right .3s;
    height: 100vh;
    overflow: hidden;
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
    margin-top: 120px;
    padding: 0;
    list-style: none;
}

.nav-item {
    margin-bottom: 50px;
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

/* -- slideRight -- */
@-webkit-keyframes vodal-slideRight-enter {
    from {
        -webkit-transform: translate3d(150px, 0, 0);
        transform: translate3d(150px, 0, 0);
    }
}

@keyframes vodal-slideRight-enter {
    from {
        -webkit-transform: translate3d(150px, 0, 0);
        transform: translate3d(150px, 0, 0);
    }
}

.vodal-slideRight-enter-active {
    -webkit-animation: vodal-slideRight-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: vodal-slideRight-enter both cubic-bezier(0.4, 0, 0, 1.5);
}

@-webkit-keyframes vodal-slideRight-leave {
    to {
        -webkit-transform: translate3d(150px, 0, 0);
        transform: translate3d(150px, 0, 0);
    }
}

@keyframes vodal-slideRight-leave {
    to {
        -webkit-transform: translate3d(150px, 0, 0);
        transform: translate3d(150px, 0, 0);
    }
}

.vodal-slideRight-leave-active {
    -webkit-animation: vodal-slideRight-leave both;
    animation: vodal-slideRight-leave both;
}

/* small screen */
@media only screen and (max-width: 950px) {
    .nav {
        display: flex;
    }
}
</style>