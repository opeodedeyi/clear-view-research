<template>
    <div class="cs-jumbotron">
        <div class="cs-jumbo-content">
            <p class="cs-jumbo-content-title">You can’t make a great decision without, a clear view</p>
            <div class="cs-jumbo-content-text mb-20">
                <p class="mb-20">We help businesses, lifestyle brands, charities and governments to access unique and trustworthy audience insights, and make great decisions that solve complex business problems, and benefit society at large.</p>
                <p class="mb-20">We engage and gather consumer insight from various audiences such as: children, Generation Z, millennials, under-represented groups (e.g. people from Black, Asian or other ethnic minority groups) and vulnerable groups.</p>
                <p class="mb-20">We have worked on projects across 4 continents and in countries such as Australia, Brazil and Spain. We have worked on project briefs for the likes of Starbucks UK, NHS England, the Vodafone Foundation, Unicef UK, and Tinder.</p>
            </div>
            <mainbutton type="link" to="/aboutus" size="medium">Learn more about us</mainbutton>
        </div>
    </div>
</template>

<script>
import mainbutton from "@/components/utilities/mainbutton";

export default {
    components: {
        mainbutton
    }
}
</script>

<style scoped>
.cs-jumbotron {
    width: 100%;
    min-height: 400px;
    padding: 150px 175px;
    background: url('~assets/images/outrojumbotron.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.cs-jumbo-content {
    padding: 62px 150px;
    max-width: 1090px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: var(--color-white);
}

.cs-jumbo-content-title {
    font-weight: bold;
    font-size: 42px;
    line-height: 60px;
    text-align: center;
    color: var(--color-company);
    margin-bottom: 45px;
}

.cs-jumbo-content-text {
    width: 100%;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: var(--color-company);
}

@media only screen and (max-width: 1137px) {
    .cs-jumbo-content-title {
        font-size: 32px;
        line-height: 45px;
        margin-bottom: 16px;
    }

    .cs-jumbo-content-text {
        font-size: 16px;
        line-height: 26px;
    }
}

/* small screen */
@media only screen and (max-width: 950px) {
    .cs-jumbotron {
        padding: 40px 20px;
    }

    .cs-jumbo-content {
        padding: 48px 20px;
    }

    .cs-jumbo-content-title {
        font-size: 19px;
        line-height: 28px;
        margin-bottom: 32px;
    }

    .cs-jumbo-content-text {
        font-size: 14px;
        line-height: 24px;
    }
}
</style>