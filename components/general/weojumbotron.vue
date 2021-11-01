<template>
    <div class="weo-jumbotron">
        <p class="weo-jumbo-header">WE EMPOWER ORGANIZATIONS</p>
        <p class="weo-jumbo-title">Empowering  organizations</p>
        <div class="weo-jumbo-content">
            <maincard
                typeofcard="weo"
                v-for="(result, index) in result"
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
    data() {
        return {
            result : [
                {id: 1, image: 'ccc.svg', title: 'Create Clear Communication', content:'To engage diverse communities and make strong and authentic connections and strong connections'},
                {id: 2, image: 'dgu.svg', title: 'Develop Greater Understanding', content:'Using innovative research approaches we help you to uncover real insight from those who often go unheard'},
                {id: 3, image: 'eli.svg', title: 'Ensure Lasting Impact', content:'We provide critical and strategic support to enable you to make a meaningful difference'},
            ]
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
    font-size: 14px;
    line-height: 18px;
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
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: flex-start;
}

/* smaller screen */
@media only screen and (max-width: 730px) {
    .weo-jumbo-content {
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
    }
}

/* small screen */
@media only screen and (max-width: 950px) {
    .weo-jumbotron {
        padding: 48px 20px 0;
    }

    .weo-jumbo-title {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 32px;
    }
}
</style>