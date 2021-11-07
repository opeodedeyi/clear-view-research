<template>
    <div class="weo-jumbotron">
        <p class="weo-jumbo-header">WE EMPOWER ORGANIZATIONS</p>
        <p class="weo-jumbo-title">Empowering  organizations</p>
        <div class="weo-jumbo-content">
            <maincard
                typeofcard="weo"
                v-for="(result, index) in weempowerorganizations"
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
        weempowerorganizations: {
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
.pb48 {
    padding-bottom: 48px;
}

.weo-jumbotron {
    padding: 100px 64px 0;
}

.weo-jumbo-header {
    color: var(--color-danger);
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.weo-jumbo-title {
    text-align: center;
    color: var(--color-company);
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 48px;
}

.weo-jumbo-content {
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 200px));
    gap: 40px 20px;
    /* justify-items: center; */
    justify-content: center;
    align-content: center;
}

/* smaller screen */
@media only screen and (max-width: 730px) {
    .weo-jumbo-content {
        grid-template-columns: repeat(6, minmax(auto, 200px));
        gap: 40px 20px;
    }
}

/* small screen */
@media only screen and (max-width: 950px) {
    .weo-jumbotron {
        padding: 48px 20px 48px;
    }

    .weo-jumbo-title {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 32px;
    }

    .weo-jumbo-content {
        grid-template-columns: repeat(6, minmax(auto, 200px));
        gap: 40px 20px;
    }
}
</style>