<template>
    <div class="ref-jumbotron">
        <p class="ref-jumbo-header">{{header}}</p>
        <p class="ref-jumbo-title">{{title}}</p>
        <div class="ref-jumbo-content">
            <div class="ref-jumbo-content-overlay1"></div> <!-- give a fadeout effect to the left -->
            <div class="ref-jumbo-content-container">
                <div class="ref-jumbo-content-layout">
                    <img
                        v-for="(logo, index) in logos"
                        :key="index"
                        :src="require(`@/assets/svg/${logo}`)" 
                        :alt="logo"
                    >

                    <img
                        v-for="(logo, index) in logos"
                        :key="index+1*111"
                        :src="require(`@/assets/svg/${logo}`)" 
                        :alt="logo"
                    >
                </div>
            </div>
            <div class="ref-jumbo-content-overlay2"></div> <!-- give a fadeout effect to the right -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        header: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        logos: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
.ref-jumbotron {
    padding: 36px 0 80px;
    background: rgba(65, 77, 92, 0.05);
}

.ref-jumbo-header {
    color: var(--color-danger);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.ref-jumbo-title {
    text-align: center;
    color: var(--color-company);
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 32px;
    padding: 0 64px;
}

.ref-jumbo-content {
    position: relative;
    width: 100%;
    height: 90px;
}

.ref-jumbo-content-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
}

.ref-jumbo-content-container::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.ref-jumbo-content-container {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.ref-jumbo-content-layout {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    animation: marquee 10s linear infinite;
}

.ref-jumbo-content-layout:hover {
    animation-play-state: paused;
}

.ref-jumbo-content-layout img {
    padding: 0 40px;
}

.ref-jumbo-content-overlay1 {
    content: '';
    height: 100%;
    width: 200px;
    background: -webkit-gradient(linear,right top,left top,from(rgba(255,255,255,0)),to(#fff));
    background: linear-gradient(270deg,rgba(255,255,255,0) 0,#fff 100%);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

.ref-jumbo-content-overlay2 {
    content: '';
    height: 100%;
    width: 200px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    background: -webkit-gradient(linear,right top,left top,from(rgba(255,255,255,0)),to(#fff));
    background: linear-gradient(270deg,rgba(255,255,255,0) 0,#fff 100%);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
}

@keyframes marquee {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    100% {
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);
    }
}

/* small screen */
@media only screen and (max-width: 950px) {
    .ref-jumbotron {
        padding: 48px 0 32px;
    }

    .ref-jumbo-title {
        font-size: 22px;
        line-height: 32px;
        margin-bottom: 32px;
        padding: 0 20px;
    }

    .ref-jumbo-content-overlay1 {
        width: 150px;
    }

    .ref-jumbo-content-overlay2 {
        width: 150px;
    }

    .ref-jumbo-content-layout img {
        padding: 0 20px;
    }
}
</style>