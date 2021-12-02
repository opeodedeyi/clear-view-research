<template>
    <div class="aboutus">
        <div class="aboutus-title">
            <h4 class="aboutus-title-intro">We assist corporations to make better decisions</h4>
            <div class="aboutus-title-sub">
                <div class="aboutus-title-hl"></div>
                <p class="aboutus-title-explain">These decisions solve complicated business challenges while also benefiting society as a whole.</p>
            </div>
        </div>
        <div class="aboutus-image"></div>
        <div class="aboutus-content">
            <div class="aboutus-content-hl mbhl"></div>
            <p class="aboutus-content-text">Children, Generation Z, millennials, under-represented groups (e.g. those from Black, Asian, or other ethnic minority groups), and vulnerable groups are among the audiences with whom we engage and acquire consumer intelligence.</p>
            <p class="aboutus-content-subtext">We've worked on projects in Australia, Brazil, and Spain, among other places on four continents. Starbucks UK, NHS England, the Vodafone Foundation, Unicef UK, and Tinder have all given us project briefs.</p>
            <div class="aboutus-content-hl mthl"></div>
        </div>
        <div class="aboutus-close">

        </div>
    </div>
</template>

<script>
export default {
    components: {
        
    },
    head: {
        title: 'About Clearview research',
    }
}
</script>

<style>
.aboutus {
    margin-top: 138px;
}

.mbhl {
    margin-bottom: 66px;
}

.mthl {
    margin-top: 66px;
}

.aboutus-title-hl {
    width: 100%;
    height: 1px;
    background-color: var(--color-danger);
    margin-bottom: 31px;
    margin-top: 50px;
}

.aboutus-title {
    padding: 73px 200px 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.aboutus-title-intro {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 77px;
    flex: 1;
    margin-right: 60px;
}

.aboutus-title-sub {
    width: 330px;
}

.aboutus-title-explain {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
}

.aboutus-image {
    background-image: url('~assets/images/aboutus.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 511px;
    width: 100%;
}

.aboutus-content {
    padding: 125px 235px 115px;
}

.aboutus-content-hl {
    height: 1px;
    background-color: var(--color-danger);
    width: 100%;
}

.aboutus-content-text {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 166.5%;
    margin-bottom: 46px;
}

.aboutus-content-subtext {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 166.5%;
}

.aboutus-close {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

@media only screen and (max-width: 1350px) {
    .aboutus-title {
        padding: 73px 120px 100px;
    }

    .aboutus-content {
        padding: 125px 200px 115px;
    }
}

/* important screen */
@media only screen and (max-width: 1080px) {
    .mbhl {
        margin-bottom: 38px;
    }

    .mthl {
        margin-top: 52px;
    }

    .aboutus {
        margin-top: 110px;
    }

    .aboutus-title {
        padding: 53px 46px 70px;
        flex-direction: column;
    }

    .aboutus-title-intro {
        font-size: 45px;
        line-height: 128.5%;
        margin-right: 0;
    }

    .aboutus-title-sub {
        width: 100%;
    }

    .aboutus-title-hl {
        margin-bottom: 26px;
        margin-top: 44px;
    }

    .aboutus-title-explain {
        font-size: 15px;
        line-height: 227.7%;
    }

    .aboutus-content {
        padding: 60px 46px 48px;
    }

    .aboutus-content-text {
        font-size: 20px;
        line-height: 175.5%;
        margin-bottom: 12px;
    }

    .aboutus-content-subtext {
        font-size: 15px;
        line-height: 181.5%;
    }
}

@media only screen and (max-width: 600px) {
    .aboutus-image {
        height: 381px;
        background-image: url('~assets/images/aboutus-mobile.png');
    }
}

@media only screen and (max-width: 320px) {
    .aboutus-title-intro {
        font-size: 34px;
        line-height: 128.5%;
        margin-right: 0;
    }
}
</style>
