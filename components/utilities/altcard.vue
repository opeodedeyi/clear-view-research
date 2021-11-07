<template>
    <div v-if="typeofcard === 'soop'" class="soop-card">
        <div class="soop-card-image">
            <img :src="featuredImage" alt="ima"/>
        </div>
        <div class="soop-card-overlay">
            <div class="soop-card-overlay-inner">
                <p class="soop-card-text">{{title}}</p>
                <mainbutton mode="special" class="soop-card-btn" :to="`casestudies/${slug}`">Read case study <img src="~/assets/svg/rightarrowfff.svg" alt="right arrow"/></mainbutton>
            </div>
        </div>
    </div>
    <div v-else-if="typeofcard === 'blog'" class="blog-card">
        <div class="blog-card-image">
            <img :src="featuredImage" alt="ima"/>
        </div>
        <div class="blog-card-content">
            <p class="blog-card-content-date">{{getCustomDate()}}</p>
            <p class="blog-card-content-header">{{title}}</p>
            <p class="blog-card-content-description">{{description}}</p>
            <div class="blog-card-content-link"><nuxt-link :to="`blog/${slug}`">Read Blog <img src="~/assets/svg/arrowright.svg" class="blogml" alt=""></nuxt-link></div>
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

            let newDate = `${month} ${dt}, ${year}`
            return newDate
        }
    },
}
</script>

<style scoped>
.blog-card,
.soop-card {
    grid-column: span 6;
}

.soop-card {
    height: 500px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
}

.soop-card-image {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 20px;
}

.soop-card-image img {
    border-radius: 20px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform .5s ease;
}

.soop-card-overlay {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    padding: 20px;
}

.soop-card-overlay-inner {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    border-radius: 20px;
    padding: 20px;
}

.soop-card-btn,
.soop-card-text {
    display: none;
    color: var(--color-white);
}

.soop-card-btn img {
    margin-left: 10px;
}

.soop-card-text {
    margin-bottom: 20px;
    text-align: center;
}

.soop-card:hover .soop-card-overlay {
    background-color: rgba(0, 0, 0, 0.5);
}

.soop-card:hover img {
    transform: scale(1.2);
}

.soop-card:hover .soop-card-overlay .soop-card-overlay-inner {
    border: 2px var(--color-white) solid;
}

.soop-card:hover .soop-card-overlay .soop-card-overlay-inner .soop-card-btn {
    cursor: pointer;
    display: flex;
}

.soop-card:hover .soop-card-overlay .soop-card-overlay-inner .soop-card-text {
    display: flex;
}

.blog-card-image{
    width: 100%;
    height: 366px;
}

.blog-card-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.blog-card-content-date {
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: var(--color-dark);
    opacity: 0.5;
    margin-top: 24px;
}

.blog-card-content-header {
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: var(--color-dark);
    margin-top: 8px;
}

.blog-card-content-description {
    margin-top: 16px;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: var(--color-dark);
}

.blog-card-content-link {
    margin-top: 24px;
}

.blog-card-content-link a {
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-danger);
}

.blogml {
    margin-left: 6px;
}

@media only screen and (max-width: 1040px) {
    .soop-card-overlay {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .soop-card-overlay-inner {
        border: 2px var(--color-white) solid;
    }

    .soop-card-btn,
    .soop-card-text {
        display: flex;
    }
}

@media only screen and (max-width: 950px) {
    .soop-card {
        height: 400px;
    }
}

/* small screen */
@media only screen and (max-width: 800px) {
    .soop-card {
        height: 300px;
    }

    .blog-card-content-date {
        font-size: 14px;
        line-height: 24px;
    }

    .blog-card-content-header {
        font-size: 18px;
        line-height: 28px;
    }

    .blog-card-content-link {
        margin-top: 16px;
    }
}
</style>