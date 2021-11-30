<template>
    <footer class="footer">
        <div class="footer-top">
            <p class="footer-top-text">Whether you’d like to discuss a project or say hi, we always love to hear from you.</p>
            <mainbutton mode="special" type="link" to="/contactus" size="medium">Contact Us</mainbutton>
        </div>
        <div class="footer-hl"></div>
        <div class="footer-bottom">
            <div class="footer-bottom-header">
                <div class="footer-bottom-header-top">
                    <nuxt-link to="/" class="footer-bottom-header-logo">
                        <img src="~/assets/svg/logo.svg" class="logo-color" alt="" />
                    </nuxt-link>
                    <div class="footer-bottom-header-content desk">
                        <ul class="footer-bottom-header-content-links">
                            <li class="footer-bottom-header-item"><nuxt-link to="/aboutus" class="plr-footer-bottom-header">About Us</nuxt-link></li>
                            <li class="footer-bottom-header-item"><nuxt-link to="/expertise" class="plr-footer-bottom-header">Our Expertise</nuxt-link></li>
                            <li class="footer-bottom-header-item"><nuxt-link to="/casestudies" class="plr-footer-bottom-header">Case Studies</nuxt-link></li>
                            <li class="footer-bottom-header-item"><nuxt-link to="/blog" class="plr-footer-bottom-header">Blog</nuxt-link></li>
                        </ul>
                    </div>
                    <div class="footer-bottom-header-menu-bar mob"  @click="showMenu">
                        <img src="~/assets/svg/menubar.svg" alt="+" />
                    </div>
                </div>

                <div class="footer-bottom-header-address">
                    <div class="footer-bottom-header-address-logo">
                        <img src="~/assets/svg/locationicon.svg" class="location-logo-color" alt="" />
                    </div>
                    <div class="footer-address">
                        <p>Clearview Research Ltd,
                        <br> 86-90 Paul Street, London, EC2A 4NE</p>
                    </div>
                </div>
            </div>
            <div class="footer-hl-two desk"></div>
            <div class="footer-outro">
                <div class="footer-outro-pp">ClearView Research Ltd © 2021 All Rights <br class="mob"> Reserved | <nuxt-link to="/privacypolicy"> Privacy Policy</nuxt-link></div>
                <div class="footer-outro-connect">
                    <p class="footer-outro-con">Connect with us</p>
                    <div class="footer-outro-hl"></div>
                    <ul class="footer-outro-social">
                        <li class="footer-outro-social-item mlrico"><a href="http://google.com"><img src="~/assets/svg/instagramicon2.svg" alt="" /></a></li>
                        <li class="footer-outro-social-item mlrico"><a href="http://google.com"><img src="~/assets/svg/twittericon2.svg" alt="" /></a></li>
                        <li class="footer-outro-social-item mlrico"><a href="http://google.com"><img src="~/assets/svg/facebookicon2.svg" alt="" /></a></li>
                        <li class="footer-outro-social-item mlrico"><a href="http://google.com"><img src="~/assets/svg/linkedinicon2.svg" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import mainbutton from "@/components/utilities/mainbutton";

export default {
    components: {
        mainbutton
    },
    methods: {
        showMenu() {
            this.$emit("show-menu");
        }
    }
}
</script>

<style scoped>
.mob {
    display: none;
}

.desk {
    display: flex;
}

.mlrico {
    margin: 0 2.5px;
}

.footer {
    background-color: var(--color-company-dark);
    color: var(--color-white);
    padding: 60px 78px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.footer-top,
.footer-bottom {
    width: 100%;
}

.footer-top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}

.footer-top-text {
    width: 80%;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
}

.footer-bottom {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.footer-bottom-header {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.logo-color {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(305deg) brightness(103%) contrast(103%);
}

.footer-bottom-header-top {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    margin-bottom: 0;
}

.footer-bottom-header-content ul {
    list-style: none;
    padding: 0;
}

.footer-bottom-header-logo {
    margin-right: 30px;
    height: 45px;
}

.footer-bottom-header-address-logo {
    height: 36px;
    margin-right: 5px;
    margin-bottom: 0px;
}

.footer-bottom-header-logo img,
.footer-bottom-header-address-logo img {
    height: 100%;
}

.footer-bottom-header-content-links {
    display: flex;
    flex-direction: row;
}

.footer-bottom-header-content-links a {
    font-size: 0.9375rem;
    color: var(--color-white);
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    line-height: 24px;
}

.footer-bottom-header-menu-bar {
    height: 45px;
    cursor: pointer;
}

.footer-bottom-header-menu-bar img {
    height: 100%;
}

.footer-bottom-header-address {
    display: flex;
    flex-direction: row;
}

.footer-hl {
    border-bottom: 1px solid var(--color-white);
    width: 100%;
    margin: 48px 0 48px;
}

.footer-hl-two {
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);
    width: 100%;
    margin: 45px 0 0;
}

.footer-address {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 23px;
}

.footer-outro {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-top: 32px;
}

.footer-outro-pp {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: rgba(255, 255, 255, 0.56);
    margin-top: 0;
}

.footer-outro-pp a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.56);
}

.footer-outro-pp a:hover {
    color: var(--color-danger);
}

.footer-outro-connect {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.footer-outro-con {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
}

.footer-outro-hl {
    width: 25px;
    height: 1.5px;
    background-color: var(--color-danger);
    margin: 0 14px;
}

.footer-outro-connect ul {
    list-style: none;
    padding: 0;
}

.footer-outro-social {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

}

/* small screen */
@media only screen and (max-width: 1270px) {
    .mob {
        display: flex;
    }

    .desk {
        display: none;
    }

    .footer {
        padding: 60px 78px;
    }

    .footer-top {
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .footer-top-text {
        margin-bottom: 30px;
        text-align: center;
        font-size: 18px;
        line-height: 30px;
    }

    .footer-bottom {
        font-size: 14px;
        line-height: 24px;
        text-align: center;
    }

    .footer-bottom-header {
        flex-direction: column;
        justify-content: center;
    }

    .footer-bottom-header-top {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .footer-bottom-header-address {
        flex-direction: column;
    }

    .footer-bottom-header-address-logo {
        margin-right: 0;
        margin-bottom: 10px;
    }

    .footer-outro {
        flex-direction: column-reverse;
        flex-wrap: nowrap;
        justify-content: center;
        margin-top: 45px;
    }

    .footer-outro-pp {
        text-align: center;
        margin-top: 30px;
    }

    .footer-hl {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .footer-outro-connect {
        flex-direction: column;
    }

    .footer-outro-hl {
        border: 1px solid var(--color-danger);
        margin: 24px 0;
    }
}

@media only screen and (max-width: 1080px) {
    .footer {
        padding: 60px 30px;
    }
}

</style>
