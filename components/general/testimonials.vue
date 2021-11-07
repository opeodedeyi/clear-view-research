<template>
    <div class="testimonials-jumbotron">
        <div v-if="step>0" class="testimonials-jumbo-lefticon desk" @click="previousTestimony"><img src="~/assets/svg/lefticon.svg" alt=""></div> <!-- lefticon -->
        <div v-if="step<3" class="testimonials-jumbo-righticon desk" @click="nextTestimony"><img src="~/assets/svg/righticon.svg" alt=""></div> <!-- righticon -->
        <p class="testimonials-jumbo-header">OUR CLIENTS SPEAK</p>
        <p class="testimonials-jumbo-title">Feedback from our customers</p>

        <div class="testimonials-wrapper"  v-touch:swipe.left="nextTestimony" v-touch:swipe.right="previousTestimony">
            <div class="testimonials-wrapper-inner" ref="slider">
                <!-- card -->
                <div class="testimonials-jumbo-card" 
                    v-for="(testimony, index) in testimonials"
                    :key="index">
                    <div class="testimonials-jumbo-image">
                        <img :src="require(`~/assets/images/${testimony.image}`)" alt="testimonial photo">
                    </div>
                    <p class="testimonials-jumbo-name">{{testimony.name}}</p>
                    <p class="testimonials-jumbo-role">{{testimony.role}}</p>
                    <div class="testimonials-jumbo-card-content">
                        <p class="testimonials-brace-open">“</p>
                        <p class="testimonials-main-text">{{testimony.content}}</p>
                        <p class="testimonials-brace-close">“</p>
                    </div>
                </div>
                <!-- card -->
            </div>
        </div>
        <div class="testimonials-control"  ref="indicator">
            <div class="testimonials-control-b" :class="{ selected: step===0 }"></div>
            <div class="testimonials-control-b" :class="{ selected: step===1 }"></div>
            <div class="testimonials-control-b" :class="{ selected: step===2 }"></div>
            <div class="testimonials-control-b" :class="{ selected: step===3 }"></div>
        </div>

    </div>
</template>

<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents, {
    disableClick: false,
    touchClass: '',
    tapTolerance: 10,
    touchHoldTolerance: 400,
    swipeTolerance: 30,
    longTapTimeInterval: 400,
    namespace: 'touch'
})

export default {
    data() {
        return {
            step: 0
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
            this.step = (this.step > 0) ? this.step - 1 : 0
            this.$refs.slider.style.transform = "translate(" + (this.step) * -25 + "%)"
        },
        nextTestimony() {
            this.step = (this.step < 3) ? this.step + 1 : 3
            this.$refs.slider.style.transform = "translate(" + (this.step) * -25 + "%)"
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
    z-index: 2;
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

/* extra */
.testimonials-wrapper {
    width: 100%;
    overflow: hidden;
}

.testimonials-wrapper-inner {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 400%;
    transition: all 0.3s;
}

.testimonials-jumbo-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    /* box-shadow: 0 4px 2px -2px rgba(0,0,0,0.12); */
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

.testimonials-control {
    width: 100%;
    display: flex; /* none */
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 10px;
    margin-top: 16px;
    margin-bottom: 32px;
}

.testimonials-control-b {
    height: 10px;
    width: 10px;
    margin: 0 6px;
    border-radius: 100%;
    background-color: var(--color-carousel);
    cursor: pointer;
}

.testimonials-control-b.selected {
    background-color: var(--color-company);
}
/* small screen */
@media only screen and (max-width: 800px) {
    .testimonials-control {
        display: flex;
    }

    .testimonials-jumbotron {
        padding: 48px 20px;
    }

    .testimonials-jumbo-title {
        font-size: 22px;
        line-height: 32px;
        margin-bottom: 16px;
    }

    .testimonials-jumbo-image {
        margin-bottom: 24px;
    }

    .testimonials-jumbo-role {
        margin-bottom: 16px;
    }

    .testimonials-jumbo-card-content {
        padding: 10px 0;
        min-height: 500px;
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