<template>
    <div class="casestudies">
        <genpagetitle
            jumbotitle="CLEARVIEW RESEARCH"
            jumbodescription="CASE STUDIES"
            jumboimage="jumboimg1.webp"
        />
        <div class="casestudies-jumbo-cards" v-if="projects != null">
            <altcard
                typeofcard="soop"
                v-for="(result, index) in projects"
                :key="index"
                :slug="result.slug"
                :featuredImage="result.featuredImage"
                :title="result.title"
                :date="result.createdAt" />
        </div>
        <loadingb v-if="loading"/>
        <div class="casestudies-loadmore" v-if="loading==false & limit*page<total & projects!=null"><mainbutton type="button" size="medium" :onClick="loadMoreProjects">Load more Casestudies</mainbutton></div>
    </div>
</template>

<script>
import genpagetitle from "@/components/utilities/genpagetitle";
import altcard from "@/components/utilities/altcard";
import mainbutton from "@/components/utilities/mainbutton";
import loadingb from "@/components/utilities/loadingb";

export default {
    components: {
        genpagetitle,
        altcard,
        mainbutton,
        loadingb
    },
    data() {
        return {
            projects: null,
            limit: 4,
            page: 1,
            total: null,
            loading: false
        }
    },
    methods: {
        async getAllProjects(limit = this.limit, skip = 0) {
            this.loading = true
            var response = await this.$contentful.client.getEntries({
                content_type: 'projects',
                order: '-sys.createdAt',
                limit,
                skip
            })
            let projects = response.items;

            projects = projects.map((item) => {
                const { id, createdAt } = item.sys;
                const { slug, title } = item.fields;
                const featuredImage = item.fields.featuredImage.fields.file.url
                return{
                    id, slug, title, featuredImage, createdAt
                }
            })
            this.total = response.total
            this.loading = false
            return this.projects = projects;
        },
        async loadMoreProjects(limit = this.limit, skip = this.limit*this.page) {
            this.loading = true
            var response = await this.$contentful.client.getEntries({
                content_type: 'projects',
                order: '-sys.createdAt',
                limit,
                skip
            })
            let projects = response.items;

            projects = projects.map((item) => {
                const { id, createdAt } = item.sys;
                const { slug, title } = item.fields;
                const featuredImage = item.fields.featuredImage.fields.file.url
                return{
                    id, slug, title, featuredImage, createdAt
                }
            })
            let projectsToPatch = this.projects
            this.page++

            projects.forEach(project => {
                projectsToPatch.push(project)
            });
            this.loading = false
            return this.projects = projectsToPatch;
        }
    },
    mounted() {
        this.getAllProjects()
    }
}
</script>

<style>
.casestudies {
    margin-top: 72px;
}

.casestudies-jumbo-cards {
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 200px));
    gap: 24px;
    width: 100%;
    padding: 0 64px;
    margin-bottom: 40px;
}

.casestudies-loadmore {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 100px;
    padding: 0 64px;
}

@media only screen and (max-width: 950px) {
    .casestudies-jumbo-cards {
        padding: 0 20px;
    }
}

/* small screen */
@media only screen and (max-width: 800px) {
    .casestudies-jumbo-cards {
        grid-template-columns: repeat(6, minmax(auto, 150px));
        gap: 24px;
    }
}
</style>
