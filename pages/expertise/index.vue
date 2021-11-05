<template>
    <div class="expertise">
        <genpagetitle
            jumbotitle="CLEARVIEW RESEARCH"
            jumbodescription="EXPERTISE"
            jumboimage="jumboimg1.webp"
        />
        
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
            team: null,
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
