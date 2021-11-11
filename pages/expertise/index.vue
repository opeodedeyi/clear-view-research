<template>
    <div class="expertise">
        <genpagetitle
            jumbotitle="CLEARVIEW RESEARCH"
            jumbodescription="EXPERTISE"
            jumboimage="jumboimg1.webp"
        />
        <div class="expertise-section">
            <div class="expertise-explanation">
                <div 
                    class="expertise-card" 
                    v-for="(item, index) in whatwedo"
                    :key="index"
                    >
                    <div class="expertise-card-image">
                        <img :src="require(`@/assets/svg/${item.image}`)" alt="">
                    </div>
                    <div class="expertise-card-explain">
                        <p class="expertise-card-explain-title">{{item.title}}</p>
                        <p class="expertise-card-explain-content">{{item.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import genpagetitle from "@/components/utilities/genpagetitle";
export default {
    components: {
        genpagetitle
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
        async getAllTeamMembers(limit = 20, skip = 0) {
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

.expertise-section {
    padding: 0 64px;
    width: 100%;
}

.expertise-explanation {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 150px));
    gap: 48px 24px;
    margin-bottom: 100px;
}

.expertise-card {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    grid-column: span 6;
}

.expertise-card-image {
    width: 90px;
    height: 90px;
    background-color: var(--color-text-header);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-right: 24px;
}

.expertise-card-explain-title {
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 12px;
}

.expertise-card-explain-content {
    font-size: 16px;
    line-height: 24px;
}

/* small screen */
@media only screen and (max-width: 900px) {
    .expertise-explanation {
        padding: 0 20px;
        grid-template-columns: repeat(6, minmax(auto, 150px));
        gap: 48px 24px;
    }
}
</style>
