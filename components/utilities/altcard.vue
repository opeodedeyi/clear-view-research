<template>
    <div v-if="typeofcard === 'soop'" class="soop-card">
        <div class="soop-card-image">
            <img :src="featuredImage" alt="ima"/>
        </div>
        <div class="soop-card-content">
            <p class="soop-card-content-date">{{getCustomDate()}}</p>
            <p class="soop-card-content-header">{{title}}</p>
            <p class="soop-card-content-description">{{description}}</p>
            <div class="soop-card-content-link"><nuxt-link :to="`casestudies/${slug}`">Read Casetudy <img src="~/assets/svg/arrowright.svg" class="soopml" alt=""></nuxt-link></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        typeofcard: {
            type: String,
            required: false,
            default: "soop"
        },
        featuredImage: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        }
    },
    methods: {
        getCustomDate() {
            const date = new Date(this.date);
            let year = date.getFullYear();
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let month = months[date.getMonth()];
            let dt = date.getDate();

            let newDate = `${month} ${dt}, ${year}`
            return newDate
        }
    },
}
</script>

<style scoped>
.soop-card {
    grid-column: span 6;
}

.soop-card-image{
    width: 100%;
    height: 366px;
}

.soop-card-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.soop-card-content-date {
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: var(--color-dark);
    opacity: 0.5;
    margin-top: 24px;
}

.soop-card-content-header {
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: var(--color-dark);
    margin-top: 8px;
}

.soop-card-content-description {
    margin-top: 16px;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: var(--color-dark);
}

.soop-card-content-link {
    margin-top: 24px;
}

.soop-card-content-link a {
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-danger);
}

.soopml {
    margin-left: 6px;
}

/* small screen */
@media only screen and (max-width: 800px) {
    .soop-card-content-date {
        font-size: 14px;
        line-height: 24px;
    }

    .soop-card-content-header {
        font-size: 18px;
        line-height: 28px;
    }

    .soop-card-content-link {
        margin-top: 16px;
    }
}
</style>