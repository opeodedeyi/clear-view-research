<template>
    <div v-if="typeofcard === 'weo'" class="weo-card">
        <div class="weo-card-image">
            <img :src="require(`@/assets/svg/${image}`)" alt="ima"/>
        </div>
        <div class="weo-card-content">
            <p class="weo-card-content-header">{{title}}</p>
            <p class="weo-card-content-content">{{content}}</p>
        </div>
    </div>

    <div v-else-if="typeofcard === 'wwd'" class="wwd-card">
        <div class="wwd-card-image">
            <img :src="require(`@/assets/svg/${image}`)" alt="ima"/>
        </div>
        <div class="wwd-card-content">
            <p class="wwd-card-content-header">{{title}}</p>
            <p class="wwd-card-content-content">{{content}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        typeofcard: {
            type: String,
            required: false,
            default: "weo"
        },
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        }
    }
}
</script>

<style scoped>
.weo-jumbotron {
    padding: 48px 20px 0;
}

.weo-card {
    grid-column: span 4;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}
/* 
.weo-card:nth-child(3) {
    align-self: center;
    justify-self: center;
} */

.wwd-card {
    grid-column: span 4;
    padding: 32px 20px 28px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.weo-card-image {
    width: 89px;
    height: 89px;
    margin-right: 24px;
    display: flex;
}

.wwd-card-image {
    width: 100px;
    height: 100px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.weo-card-content-header,
.wwd-card-content-header {
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-dark);
}

.wwd-card-content-header {
    text-align: center;
    margin-bottom: 18px;
}

.weo-card-content-content {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-dark);
}

.wwd-card-content-content {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: rgba(0, 0, 0, 0.4);;
}

/* small screen */
@media only screen and (max-width: 1300px) {
    .weo-card {
        grid-column: span 6;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin-bottom: 0;
    }

    .weo-card-image {
        width: 89px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin-bottom: 16px;
        margin-right: 0;
    }

    .weo-card-content-header {
        text-align: center;
    }

    .weo-card-content-content {
        text-align: center;
    }
}

/* small screen */
@media only screen and (max-width: 1112px) {
    .wwd-card {
        grid-column: span 6;
    }

    .weo-card {
        grid-column: span 6;
    }
}

/* small screen */
@media only screen and (max-width: 800px) {
    .weo-card {
        grid-column: span 6;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin-left: 0;
        margin-right: 0;
    }

    .wwd-card {
        grid-column: span 6;
        background: var(--color-text-header);
    }

    .wwd-card-image {
        margin-bottom: 16px;
    }

    .weo-card-image {
        width: 89px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin-bottom: 16px;
        margin-right: 0;
    }

    .weo-card-content-header {
        text-align: center;
    }

    .weo-card-content-content {
        text-align: center;
    }
}
</style>