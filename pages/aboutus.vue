<template>
    <div class="aboutus">
        <genpagetitle
            jumbotitle="CLEARVIEW RESEARCH"
            jumbodescription="ABOUT US"
            jumboimage="jumboimg1.webp"
        />
        <div class="aboutus-body">
            <div class="aboutus-body-left">
                <p class="mb-20">We assist corporations, lifestyle brands, charities, and governments in gaining access to unique and trustworthy audience insights, allowing them to make better decisions that solve complicated business challenges while also benefiting society as a whole.</p>
                <p class="mb-20">Children, Generation Z, millennials, under-represented groups (e.g. those from Black, Asian, or other ethnic minority groups), and vulnerable groups are among the audiences with whom we engage and acquire consumer intelligence.</p>
                <p class="mb-30">We've worked on projects in Australia, Brazil, and Spain, among other places on four continents. Starbucks UK, NHS England, the Vodafone Foundation, Unicef UK, and Tinder have all given us project briefs.</p>

                <p class="aboutus-title">MISSION</p>
                <p class="mb-30">To provide people from underrepresented and disadvantaged groups a voice in research.</p>

                <p class="aboutus-title">VISION</p>
                <p class="mb-30">To use research to empower individuals working for social, racial, and economic justice in society.</p>
            </div>
            <div class="aboutus-body-right">
                <img src="~/assets/images/aboutus.webp" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import genpagetitle from "@/components/utilities/genpagetitle";

export default {
    components: {
        genpagetitle
    },
    head: {
        title: 'About Clearview research',
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
.aboutus {
    margin-top: 72px;
}

.aboutus-body {
    padding: 0 64px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:flex-start;
    align-items: center;
    width: 100%;
}

.aboutus-body-left {
    font-size: 16px;
    line-height: 28px;
    width: 50%;
    padding-right: 76px;
}

.aboutus-body-right {
    width: 50%;
}

.aboutus-body-right img { 
    width: 100%;
}

.aboutus-title {
    color: var(--color-danger);
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 8px;
}


/* small screen */
@media only screen and (max-width: 950px) {
    .aboutus-body {
        padding: 0 20px;
        flex-direction: column;
    }

    .aboutus-body-left {
        width: 100%;
        padding-right: 0;
        text-align: center;
    }

    .aboutus-body-right {
        display: none;
    }
}
</style>
