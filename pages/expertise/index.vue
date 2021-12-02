<template>
    <div class="expertise">
        <div class="expertise-title">
            <h4 class="expertise-title-intro">We provide a platform through research and engagement for the voices and experiences of everyday people, who often go unheard, to be heard, respected and recognised.</h4>
            <div class="expertise-title-sub">
                <div class="expertise-title-hl"></div>
                <p class="expertise-title-explain">These decisions solve complicated business challenges while also benefiting society as a whole.Our truly diverse (and experienced) team allows us to connect with people from diverse communities.</p>
            </div>
        </div>
        <div class="expertise-image"></div>
        <!-- content to go here after lamina makes corrections -->
        <div class="expertise-team"></div>
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
            whatwedo: [
                {id: 1, image: 'audienceinsight2.svg', title: 'Audience Insight', content:"We interact and obtain trusted and culturally-informed input from the individuals our clients want to understand when they want to learn more about their audiences. We get this information by interacting with our current panels, databases, trusted sources, and networks, as well as our strategic community partners, with whom we've formed long-term, mutually beneficial partnerships."},
                {id: 2, image: 'advisory2.svg', title: 'Advisory', content:"We work closely with our clients who are seeking a key buddy to support them in building their current/future initiatives, utilizing our in-house experience (as well as the smart folks in our network). This might include anything from providing best practices on how to engage with certain populations with which we have experience. To sharing our knowledge and experience with funders and prominent organizations on how they can effectively use their existing resources to have a greater social impact or address societal issues that they care about."},
                {id: 3, image: 'comms2.svg', title: 'Communications & Marketing', content:"We provide communications and/or marketing teams with trusted and culturally sensitive knowledge in order to execute daring initiatives that cut through and resonate with people from the communities we specialize in. We've all seen how costly it can be for brands to make mistakes with their communication or campaigns, so we recognize the necessity of connecting properly with people."},
                {id: 4, image: 'learningpartner2.svg', title: 'Learning Partner', content:"Collaboration is critical to our organization's success, and we're committed to collaborating with donors and powerful organizations to address pressing societal concerns."},
                {id: 5, image: 'monitoring2.svg', title: 'Monitoring & Evaluation', content:"We have a lot of expertise with community-based monitoring and evaluation, as well as evaluating programs for vulnerable, excluded, and marginalized people. Allow us to assist you with developing or updating your organization's theory of change, developing a framework and method for examining outcomes and impact, and collecting insights and results to share with stakeholders."},
                {id: 6, image: 'strategicplanning2.svg', title: 'Strategic Planning', content:"Based on evidence-based insights and best practice, we assist socially-driven enterprises in developing clear and concrete strategies to achieve their business goals."},
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

<style>
.expertise {
    margin-top: 72px;
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

@media only screen and (max-width: 1350px) {
    .expertise-title {
        padding: 73px 200px 100px;
    }
}

/* important screen */
@media only screen and (max-width: 1080px) {
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
}

@media only screen and (max-width: 600px) {
    .expertise-image {
        height: 381px;
        background-image: url('~assets/images/expertise-mobile.png');
    }
}
</style>
