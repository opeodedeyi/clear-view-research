<template>
    <div class="contactus">
        <!-- <genpagetitle
            jumbotitle="CLEARVIEW RESEARCH"
            jumbodescription="HOT OFF THE PRESS"
            jumboimage="jumboimg1.webp"
        /> -->
    </div>
</template>

<script>
import genpagetitle from "@/components/utilities/genpagetitle";

export default {
    components: {
        genpagetitle
    },
    data() {
        return {
            form: null
        }
    },
    methods: {
    }
}
</script>

<style>
.contactus {
    margin-top: 72px;
}

/* small screen */
@media only screen and (max-width: 950px) {
    /* .contactus {
        margin-top: 72px;
    } */
}
</style>
