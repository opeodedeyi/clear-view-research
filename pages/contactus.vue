<template>
    <div class="contact">
        <div class="contact-image desk"></div>
        <div class="contact-main">
            <div class="contact-main-content">
                <p class="contact-main-title">Whether you’d like to discuss a project or say hi, we always love to hear from you.</p>
                <p v-if="errorMessage" class="contact-error">{{ errorMessage }}</p>
                <form action="https://formsubmit.co/opeyemiodedeyi@gmail.com" method="POST" ref="form">
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
    head: {
        title: 'Contact Clearview research',
    },
    data() {
        return {
            errorMessage: null,
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
            if (!this.form.name || !this.form.subject || !this.form.message) {
                return this.errorMessage = "please make user your 'fullname', 'subject' and 'message' fields are filled"
            } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
                return this.errorMessage = "please fill in a valid 'email'"
            } else if (this.form.message.length<20) {
                return this.errorMessage = "please add some more context to the 'message'"
            }
            console.log("submitted");
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
    background-image: url('~assets/images/contactus.webp');
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

.contact-error {
    font-weight: normal;
    color: var(--color-danger);
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 16px;
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
        padding: 0 20px;
    }

    .contact-main-title {
        font-size: 18px;
        line-height: 28px;
    }
}
</style>
