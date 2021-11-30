<template>
    <div class="contact">
        <div class="contact-title">
            Contact Us
        </div>
    </div>
    <!-- <p v-if="errorMessage" class="contact-error">{{ errorMessage }}</p>
    <form action="https://formsubmit.co/opeyemiodedeyi@gmail.com" method="POST" ref="form">
        <maininput name="Name" placeholder="Full Name" inputType="text" controlType="input" v-model="form.name"/>
        <maininput name="Subject" placeholder="Subject" inputType="text" controlType="input" v-model="form.subject"/>
        <maininput name="Email" placeholder="Email Address" inputType="email" controlType="input" v-model="form.email"/>
        <maininput name="Message" placeholder="Tell us anything" inputType="textarea" controlType="textarea" v-model="form.message"/>
        <div class="empty-space"></div>
        <mainbutton type="button" size="medieum" :onClick="submitForm">Send Message</mainbutton>
    </form> -->
</template>

<script>
import maininput from "@/components/utilities/maininput";
import mainbutton from "@/components/utilities/mainbutton";

export default {
    components: {
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
    }
}
</script>

<style>
.desk {
    display: flex;
}

.contact {
    margin-top: 138px;
    width: 100%;
}

.contact-title {
    width: 100%;
    padding: 70px 78px 80px;
    text-align: center;
    font-family: "Questrial";
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 77px;
}

.contact-image {
    background-image: url('~assets/images/contactus.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
}
/* small screen */
@media only screen and (max-width: 1080px) {
    .desk {
        display: none;
    }

    .contact {
        margin-top: 110px;
        width: 100%;
    }

    .contact-title {
        width: 100%;
        padding: 40px 30px 60px;
        font-size: 45px;
        line-height: 128.5%;
    }
}
</style>
