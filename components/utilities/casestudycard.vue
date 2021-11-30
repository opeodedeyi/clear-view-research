<template>
    <div class="casestudy-card">
        <div class="casestudy-card-image">
            <img :src="featuredImage" alt="ima"/>
        </div>
        <div class="casestudy-card-content">
            <p class="casestudy-card-content-title">{{title}}</p>
            <button class="casestudy-card-content-button" @click.prevent="goTocasestudy">Read Case Study</button>
        </div>
    </div>
</template>

<script>
import mainbutton from "@/components/utilities/mainbutton";
export default {
    components: {
        mainbutton
    },
    props: {
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
            required: false,
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

            let newDate = `${dt} ${month}, ${year}`
            return newDate
        },
        goTocasestudy() {
            this.$router.push(`/casestudies/${this.slug}`)
        }
    },
}
</script>

<style scoped>
.casestudy-card {
    grid-column: span 6;
    border-radius: 20px;
}

.casestudy-card-image {
    width: 100%;
    height: 377px;
}

.casestudy-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
}

.casestudy-card-content {
    padding: 43px 60px 47px;
    background-color: var(--color-white);
    border-radius: 0 0 20px 20px;
}

.casestudy-card:hover .casestudy-card-content {
    background-color: var(--color-company);
}

.casestudy-card-content-title {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 143.2%;
    color: var(--color-company);
    margin-bottom: 20px;
}

.casestudy-card:hover .casestudy-card-content-title {
    color: var(--color-white);
}

.casestudy-card-content-button {
    text-decoration: none;
    border: 1px solid var(--color-danger);
    color: var(--color-danger);
    background-color: var(--color-white);
    border-radius: 31px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    width: 189px;
    height: 62px;
    cursor: pointer;
}

.casestudy-card:hover .casestudy-card-content-button {
    border: 1px solid var(--color-white);
    color: var(--color-white);
    background-color: var(--color-company);
}

.casestudy-card-content-button:hover {
    text-decoration: none;
    background: var(--color-danger);
    color: var(--color-white);
}

.casestudy-card:hover .casestudy-card-content-button:hover {
    border: 1px solid var(--color-white);
    color: var(--color-company);
    background-color: var(--color-white);
}

.casestudyml {
    margin-left: 6px;
}

/* small screen */
@media only screen and (max-width: 800px) {
    .casestudy-card-image {
        height: 245px;
    }

    .casestudy-card-content {
        padding: 28px 32px 32px;
    }

    .casestudy-card-content-date {
        font-size: 12px;
        line-height: 227.7%;
        margin-top: 20px;
    }

    .casestudy-card-content-title {
        font-size: 22px;
        line-height: 143.2%;
    }

    .casestudy-card-content-button {
        width: 157px;
        height: 51.5px;
    }
}
</style>