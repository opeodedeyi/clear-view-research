<template>
    <div class="expertise">
        <div class="expertise-title">
            <h4 class="expertise-title-intro">We provide a platform through research and engagement for the voices and experiences of everyday people, who often go unheard, to be heard, respected and recognised.</h4>
            <div class="expertise-title-sub">
                <div class="expertise-title-hl"></div>
                <p class="expertise-title-explain">These decisions solve complicated business challenges while also benefiting society as a whole. Our truly diverse (and experienced) team allows us to connect with people from diverse communities.</p>
            </div>
        </div>
        <div class="expertise-image"></div>
        <!-- content to go here after lamina makes corrections -->
        <div class="expertise-support">
            <p class="expertise-support-title">We can support you with</p>
            <div class="expertise-support-cards">
                <div class="expertise-support-card" v-for="(result, index) in weSupportWith" :key="index">
                    <img :src="require(`@/assets/svg/${result.image}`)" alt="">
                    <p class="support-card-title">{{ result.title }}</p>
                    <p class="support-card-content">{{ result.content }}</p>
                </div>
            </div>
        </div>
        <div class="expertise-team">
            <p class="expertise-team-title">Our Team</p>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        
    },
    head: {
        title: 'Clearview research expertise',
    },
    data() {
        return {
            weSupportWith: [
                {id: 1, image: 'aIIcon.svg', title: 'Audience Insight', content:"Want to create bold campaigns that make an impact and hit close to home? We help you do just that"},
                {id: 2, image: 'aIcon.svg', title: 'Advisory', content:"Learn more about the audience you seek to understand and gather relevant and culturally informed insight"},
                {id: 3, image: 'c&mIcon.svg', title: 'Communications & Marketing', content:"We share our expertise with you to help you in developing effective strategies to make a huge social impact"},
                {id: 4, image: 'lPIcon.svg', title: 'Learning Partner', content:"We have the experience in monitoring diverse and excluded communities, and evaluating initiatives targeted at them"},
                {id: 5, image: 'm&eIcon.svg', title: 'Monitoring & Evaluation', content:"Team work makes the dream work. We collaborate with organizations that are truly about solving problems in the society"},
                {id: 6, image: 'sPIcon.svg', title: 'Strategic Planning', content:"Crush those business goals with our actionable strategies based on relevant insights"},
            ],
            team: null
        }
    },
    methods: {
        async getAllTeamMembers(limit = 200, skip = 0) {
            var response = await this.$contentful.client.getEntries({
                content_type: 'team',
                order: 'fields.id',
                limit,
                skip
            })
            let team = response.items;

            team = team.map((item) => {
                const { createdAt } = item.sys;
                const { id, fullName, role, bio } = item.fields;
                const displayPicture = item.fields.displayPicture.fields.file.url
                return{
                    id, fullName, role, bio, displayPicture, createdAt
                }
            })
            console.log(team);
        }
    },
    mounted() {
        this.getAllTeamMembers()
    }
}
</script>

<style scoped>
.expertise {
    margin-top: 138px;
}

.expertise-title-hl {
    width: 100%;
    height: 1px;
    background-color: var(--color-danger);
    margin-bottom: 31px;
    margin-top: 50px;
}

.expertise-title {
    padding: 73px 213px 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

.expertise-title-intro {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 145%;
    flex: 1;
    margin-right: 80px;
}

.expertise-title-sub {
    width: 363px;
}

.expertise-title-explain {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
}

.expertise-image {
    background-image: url('~assets/images/expertise.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 511px;
    width: 100%;
}

/* content to go here */

/* support */
.expertise-support {
    padding: 60px 150px 107px;
    background: var(--color-gray);
}

.expertise-support-title {
    color: var(--color-dark);
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 227.7%;
    margin-bottom: 30px;
}

.expertise-support-cards {
    width: 100%;
}

.expertise-support-card {
    background-color: var(--color-white);
    width: 100%;
    border-radius: 10px;
    padding: 62px 160px 62px 84px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-bottom: 40px;
}

.expertise-support-card:last-of-type {
    margin-bottom: 0;
}

.expertise-support-card img {
    max-height: 57px;
    max-width: 67px;
}

.support-card-title {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 143.2%;
    color: var(--color-company);
    margin-left: 90px; /* 95px */
}

.support-card-content {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 166.5%;
    color: var(--color-dark);
    margin-left: 100px; /* 125px */
}

/* expertise team */
.expertise-team {
    padding: 106px 150px 127px;
    background: var(--color-company);
}

.expertise-team-title {
    color: var(--color-white);
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
    line-height: 46px;
    margin-bottom: 65px;
}

@media only screen and (max-width: 1350px) {
    .expertise-title {
        padding: 73px 200px 100px;
    }
}

/* important screen */
@media only screen and (max-width: 1080px) {
    .expertise {
        margin-top: 110px;
    }

    .expertise-title {
        padding: 53px 46px 70px;
        flex-direction: column;
    }

    .expertise-title-intro {
        font-size: 30px;
        line-height: 156.5%;
        margin-right: 0;
    }

    .expertise-title-sub {
        width: 100%;
    }

    .expertise-title-hl {
        margin-bottom: 26px;
        margin-top: 44px;
    }

    .expertise-title-explain {
        font-size: 15px;
        line-height: 227.7%;
    }

    /* content goes here */
    /* support */
    .expertise-support {
        padding: 70px 46px 84px;
        background: var(--color-gray);
    }

    .expertise-support-title {
        font-size: 25px;
        line-height: 227.7%;
    }

    .expertise-support-card img {
        max-height: 57px;
        max-width: 67px;
    }

    .support-card-title {
        font-size: 18px;
        line-height: 143.2%;
        margin-left: 90px; /* 95px */
        margin-top: 0;
    }

    .support-card-content {
        font-size: 15px;
        line-height: 166.5%;
        margin-left: 100px; /* 125px */
        margin-top: 0;
    }

    /* team */
    .expertise-team {
        padding: 40px 46px 101px;
    }

    .expertise-team-title {
        font-size: 25px;
        line-height: 26px;
        margin-bottom: 25px;
    }
}

@media only screen and (max-width: 850px) {
    /* ignore media querry until needed */
    .expertise-support-card {
        padding: 38px 35px 45px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        margin-bottom: 25px;
    }

    .support-card-title {
        font-size: 18px;
        line-height: 143.2%;
        margin-left: 0;
        margin-top: 60px;
    }

    .support-card-content {
        font-size: 15px;
        line-height: 166.5%;
        margin-left: 0;
        margin-top: 23px;
    }
}

@media only screen and (max-width: 600px) {
    .expertise-image {
        height: 381px;
        background-image: url('~assets/images/expertise-mobile.png');
    }
}
</style>
