<template>
    <div class="gen-jumbo">
        <img :src="require(`~/assets/images/${jumboimage}`)" alt="jumboimage">
        <div class="gen-jumbo-overlay">
            <p class="gen-jumbo-overlay-title">{{ jumbotitle }}</p>
            <p class="gen-jumbo-overlay-description">{{ jumbodescription }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        jumbotitle: {
            type: String,
            required: false
        },
        jumbodescription: {
            type: String,
            required: false
        },
        jumboimage: {
            type: String,
            required: false
        }
    }
}
</script>

<style scoped>
.gen-jumbo {
    width: 100%;
    height: 360px;
    position: relative;
    margin-bottom: 54px;
}

.gen-jumbo img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
}

.gen-jumbo-overlay {
    z-index: 1;
    height: 100%;
    width: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    padding: 0 64px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.gen-jumbo-overlay-title {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--color-white);
    margin-bottom: 4px;
}

.gen-jumbo-overlay-description {
    font-weight: bold;
    font-size: 72px;
    line-height: 98px;
    text-align: center;
    color: var(--color-white);
}

/* small screen */
@media only screen and (max-width: 950px) {
    .gen-jumbo {
        height: 160px;
        margin-bottom: 32px;
    }

    .gen-jumbo-overlay-description {
        font-size: 24px;
        line-height: 32px
    }
}
</style>