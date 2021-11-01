<template>
    <div class="video-jumbotron">
        <video src="~/assets/videos/main-video2.mp4" muted loop autoplay></video>
        <div class="video-jumbotron-overlay">
            <div class="jumbo-over-empty mb"></div>
            <h1 class="jumbo-over-header plr">A clear view on complex, new and "so called" hard to reach audiences</h1>
            <div class="jumbo-over-explanation plr pb">For organisations that want to make an impact - and give a damn.</div>
            <mainbutton type="link" to="/contactus" size="medium">More about Clearview</mainbutton>
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
.pb {
    padding-bottom: 48px;
}

.mb {
    margin-bottom: 50px;
}

.plr {
    padding-left: 64px;
    padding-right: 64px;
}

.video-jumbotron {
    position: relative;
    height: 700px;
}

.video-jumbotron video {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.video-jumbotron-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

.jumbo-over-empty::before {
    content: "";
    height: 32px;
}

.jumbo-over-header {
    font-weight: bold;
    font-size: 64px;
    line-height: 98px;
    text-align: center;
    color: var(--color-white);
}

.jumbo-over-explanation {
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: var(--color-text-header);
    margin-top: 16px;
}

/* small screen */
@media only screen and (max-width: 950px) {
    .pb {
        padding-bottom: 32px;
    }

    .plr {
        padding-left: 20px;
        padding-right: 20px;
    }

    .video-jumbotron {
        height: 615px;
    }

    .jumbo-over-header {
        font-size: 36px;
        line-height: 44px;
    }

    .jumbo-over-explanation {
        font-size: 16px;
        line-height: 26px;
        margin-top: 24px;
    }
}
</style>