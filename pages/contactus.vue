<template>
    <div class="contact">
        <div class="contact-image desk"></div>
        <div class="contact-main">
            <div class="contact-main-content">
                <p class="contact-main-title">Whether you’d like to discuss a project or say hi, we always love to hear from you.</p>
                <form action="https://formsubmit.co/opeyemiodedeyi@gmail.com" ref="form">
                    <maininput name="Name" placeholder="Full Name" inputType="text" controlType="input" v-model="form.name"/>
                    <maininput name="Subject" placeholder="Subject" inputType="text" controlType="input" v-model="form.subject"/>
                    <maininput name="Email" placeholder="Email Address" inputType="email" controlType="input" v-model="form.email"/>
                    <maininput name="Message" placeholder="Tell us anything" inputType="textarea" controlType="textarea" v-model="form.message"/>
                    <div class="empty-space"></div>
                    <mainbutton type="button" size="large" :onClick="submitForm">Send Message</mainbutton>
                </form>
            </div>
            <footertwo/>
        </div>
    </div>
</template>

<script>
import genpagetitle from "@/components/utilities/genpagetitle";
import maininput from "@/components/utilities/maininput";
import mainbutton from "@/components/utilities/mainbutton";
import footertwo from "~/components/footer/footertwo";

export default {
    components: {
        footertwo,
        genpagetitle,
        mainbutton,
        maininput
    },
    data() {
        return {
            form: {
                name: null,
                subject: null,
                email: null,
                message: null
            },
        }
    },
    methods: {
        submitForm() {
            if (this.form.name) {
                
            }
            this.$refs.form.submit()
        }
    },
    layout: 'contact'
}
</script>

<style>
.desk {
    display: flex;
}

.contact {
    margin-top: 72px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 500px;
}

.contact-image {
    background-image: url('~assets/images/contactus.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
}

.contact-main {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.contact-main-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-content: center;
    align-items: center; */
    padding: 0 64px;
}

.contact-main-title {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    /* text-align: center; */
    margin: 34px 0;
}

.empty-space{
    height: 16px;
}

/* small screen */
@media only screen and (max-width: 950px) {
    .desk {
        display: none;
    }

    .contact-main {
        width: 100%;
    }

    .contact-main-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* align-content: center;
        align-items: center; */
        padding: 0 20px;
    }

    .contact-main-title {
        font-size: 18px;
        line-height: 28px;
    }
}
</style>
