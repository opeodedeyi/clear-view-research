<template>
    <div class="cs-jumbotron">
        <div class="cs-jumbo-content">
            <p class="cs-jumbo-content-title desk">You can’t make a great decision without, a clear view</p>
            <div class="cs-jumbo-content-text mb-20">
                <p class="mb-20">ClearView is a research agency that focuses on dealing with people of color, Asians, and other ethnic groups.</p>
                <p class="mb-20">We assist organizations in understanding them because they are referred to as "hard to reach" and their voices are not well represented in research.</p>
                <p class="mb-20">We seek to fill that research void by bringing together organizations and members of the black, Asian, and ethnic minority communities.</p>
            </div>
            <mainbutton type="link" to="/aboutus" size="medium" mode="inverse">Learn more about us</mainbutton>
        </div>
        <div class="cs-jumbo-image">
            <p class="cs-jumbo-image-title mob">You can’t make a great decision without, a clear view</p>
            <div class="cs-jumbo-image-line mob"></div>
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
.desk {
    display: block;
}

.mob {
    display: none;
}

.cs-jumbotron {
    widows: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.cs-jumbo-content {
    padding: 64px 64px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    background-color: var(--color-company);
}

.cs-jumbo-image {
    width: 40%;
    background: url('~assets/images/outrojumbotron.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.cs-jumbo-content-title {
    font-weight: bold;
    font-size: 42px;
    line-height: 60px;
    /* text-align: center; */
    color: var(--color-white);
    margin-bottom: 45px;
}

.cs-jumbo-content-text {
    width: 100%;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    /* text-align: center; */
    color: var(--color-white);
}

/* small screen */
@media only screen and (max-width: 950px) {
    .desk {
        display: none;
    }

    .mob {
        display: block;
    }

    .cs-jumbotron {
        widows: 100%;
        flex-direction: column-reverse
    }

    .cs-jumbo-content {
        padding: 48px 20px;
        width: 100%;
        align-items: center;
    }

    .cs-jumbo-image {
        width: 100%;
        height: 160px;
        background:linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('~assets/images/jumboimg1.webp');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding: 0 20px;
        color: var(--color-text-header);
        font-weight: bold;
        font-size: 18px;
        line-height: 28px;
    }

    .cs-jumbo-content-title {
        font-size: 19px;
        line-height: 28px;
        margin-bottom: 32px;
    }

    .cs-jumbo-image-title {
        margin-bottom: 24px;
        text-align: center;
    }

    .cs-jumbo-image-line {
        width: 100%;
        border-bottom: 1px solid var(--color-white);
    }

    .cs-jumbo-content-text {
        font-size: 14px;
        line-height: 24px;
        text-align: center;
    }
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
</style>