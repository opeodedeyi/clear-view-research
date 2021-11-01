<template>
    <div class="wwd-jumbotron">
        <p class="wwd-jumbo-header">WHAT WE DO</p>
        <p class="wwd-jumbo-title">An inisght into what we do</p>
        <div class="wwd-jumbo-content">
            <maincard
                typeofcard="wwd"
                v-for="(result, index) in whatWeDo"
                :key="index"
                :id="result.id"
                :image="result.image"
                :title="result.title"
                :content="result.content" />
        </div>
    </div>
</template>

<script>
import maincard from "@/components/utilities/maincard";

export default {
    props: {
        whatWeDo: {
            type: Array,
            required: false,
            default: "soop"
        }
    },
    components: {
        maincard
    },
}
</script>

<style scoped>
.wwd-jumbotron {
    padding: 100px 64px;
}

.wwd-jumbo-header {
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

.wwd-jumbo-title {
    text-align: center;
    color: var(--color-company);
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 48px;
}

.wwd-jumbo-content {
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 200px));
  gap: 22px 28px;
  width: 100%;
}

/* small screen */
@media only screen and (max-width: 950px) {
    .wwd-jumbotron {
        padding: 42px 20px;
    }

    .wwd-jumbo-title {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 48px;
    }
}

@media only screen and (max-width: 730px) {
    .wwd-jumbo-content {
        grid-template-columns: repeat(6, minmax(auto, 200px));
    }
}
</style>