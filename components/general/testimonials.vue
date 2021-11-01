<template>
    <div class="testimonials-jumbotron">
        <div class="testimonials-jumbo-lefticon desk" @click="previousTestimony"><img src="~/assets/svg/lefticon.svg" alt=""></div> <!-- lefticon -->
        <div class="testimonials-jumbo-righticon desk" @click="nextTestimony"><img src="~/assets/svg/righticon.svg" alt=""></div> <!-- righticon -->
        <p class="testimonials-jumbo-header">OUR CLIENTS SPEAK</p>
        <p class="testimonials-jumbo-title">Feedback from our customers</p>
        <div class="testimonials-jumbo-image">
            <img :src="require(`~/assets/images/${testimonials[this.step-1].image}`)" alt="testimonial photo">
        </div>
        <p class="testimonials-jumbo-name">{{testimonials[this.step-1].name}}</p>
        <p class="testimonials-jumbo-role">{{testimonials[this.step-1].role}}</p>
        <div class="testimonials-jumbo-card-content">
            <p class="testimonials-brace-open">“</p>
            <p class="testimonials-main-text">{{testimonials[this.step-1].content}}</p>
            <p class="testimonials-brace-close">“</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            step: 1
        }
    },
    props: {
        testimonials: {
            type: Array,
            required: true
        }
    },
    methods: {
        previousTestimony() {
            if (this.step == 1) {
                return this.step = 4
            }
            this.step--
        },
        nextTestimony() {
            if (this.step == 4) {
                return this.step = 1
            }
            this.step++
        }
    },
}
</script>

<style scoped>
.testimonials-jumbotron {
    padding: 100px 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.testimonials-jumbo-lefticon,
.testimonials-jumbo-righticon {
    position: absolute;
    top: 50%;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    padding: 15px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.testimonials-jumbo-lefticon:hover,
.testimonials-jumbo-righticon:hover {
    background-color: var(--color-text-header);
}

.testimonials-jumbo-lefticon {
    left: 100px;
}

.testimonials-jumbo-righticon {
    right: 100px;
}

.testimonials-jumbo-lefticon img,
.testimonials-jumbo-righticon img {
    width: 100%;
}

.testimonials-jumbo-header {
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

.testimonials-jumbo-title {
    text-align: center;
    color: var(--color-company);
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 48px;
}

.testimonials-jumbo-image {
    width: 300px;
    height: 300px;
    border-radius: 100%;
    display: block;
    overflow: hidden;
    margin-bottom: 48px;
}

.testimonials-jumbo-image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
}

.testimonials-jumbo-name {
    margin-bottom: 8px;
    text-align: center;
}

.testimonials-jumbo-role {
    text-align: center;
    margin-bottom: 32px;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: var(--color-dark);
    opacity: 0.5;
}

.testimonials-jumbo-card-content {
    width: 100%;
    max-width: 855px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 10px 20px 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.testimonials-main-text {
    padding: 0 18px;
    text-align: center;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    min-height: 190px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.testimonials-brace-open,
.testimonials-brace-close {
    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 72px;
    line-height: 48px;
    color: var(--color-testimonial-brace);
}

.testimonials-brace-close {
    transform: rotate(-180deg);
}
/* small screen */
@media only screen and (max-width: 800px) {
    .testimonials-jumbotron {
        padding: 48px 20px;
    }

    .testimonials-jumbo-title {
        font-size: 22px;
        line-height: 32px;
        margin-bottom: 32px;
    }

    .testimonials-jumbo-card-content {
        padding: 20px 0;
    }

    .desk {
        display: none;
    }
}

@media only screen and (max-width: 340px) {
    .testimonials-jumbo-image {
        width: 240px;
        height: 240px;
    }
}
</style>