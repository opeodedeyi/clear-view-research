<template>
    <div class="expertise">
        <genpagetitle
            jumbotitle="CLEARVIEW RESEARCH"
            jumbodescription="EXPERTISE"
            jumboimage="jumboimg1.webp"
        />
        <div class="expertise-explanation">
            <div class="expertise-card">
                <div class="expertise-card-image">
                    <!-- <img :src="require(`@/assets/svg/${image}`)" alt=""> -->
                </div>
                <div class="expertise-card-explain"></div>
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
    data() {
        return {
            whatwedo: [
                {id: 1, image: 'audienceinsight.svg', title: 'Audience Insight', content:'Learn more about the audience you seek to understand and gather relevant and culturally informed insight'},
                {id: 2, image: 'advisory.svg', title: 'Advisory', content:'We share our expertise with you to help you in developing effective strategies to make a huge social impact'},
                {id: 3, image: 'comms.svg', title: 'Communications & Marketing', content:'Want to create bold campaigns that make an impact and hit close to home? We help you do just that'},
                {id: 4, image: 'learningpartner.svg', title: 'Learning Partner', content:'Team work makes the dream work. We collaborate with organizations that are truly about solving problems in the society'},
                {id: 5, image: 'monitoring.svg', title: 'Monitoring & Evaluation', content:'We have the experience in monitoring diverse and excluded communities, and evaluating initiatives targeted at them'},
                {id: 6, image: 'strategicplanning.svg', title: 'Strategic Planning', content:'Crush those business goals with our actionable strategies based on relevant insights'},
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
</style>
