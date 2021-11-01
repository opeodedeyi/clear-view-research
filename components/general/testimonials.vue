<template>
    <div class="testimonials-jumbotron">
        <p class="testimonials-jumbo-header">OUR CLIENTS SPEAK</p>
        <p class="testimonials-jumbo-title">Feedback from our customers</p>
        <div class="testimonials-jumbo-image">
            <img src="~/assets/images/dpfemale.png" alt="testimonial photo">
        </div>
        <p class="testimonials-jumbo-name">Kate Goodman</p>
        <p class="testimonials-jumbo-role">Senior Campaigns Manager, Bite Back 2030</p>
        <div class="testimonials-jumbo-card-content">
            <p class="testimonials-brace-open">“</p>
            <p class="testimonials-main-text">CVR were great to work with, bringing unique and valuable insight to the team - which really helped steer our strategic direction on how to engage teenagers with the tricky topic of childhood obesity.</p>
            <p class="testimonials-brace-close">“</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.testimonials-jumbotron {
    padding: 100px 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    padding: 0 20px 20px;
}

.testimonials-main-text {
    padding: 0 18px;
    text-align: center;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
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
}

@media only screen and (max-width: 340px) {
    .testimonials-jumbo-image {
        width: 240px;
        height: 240px;
    }
}
</style>