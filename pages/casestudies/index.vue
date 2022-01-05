<template>
    <div class="casestudies">
        <div class="casestudies-title">
            Case Studies
        </div>
        <div class="casestudies-jumbo-cards" v-if="projects != null">
            <casestudycard
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
import casestudycard from "@/components/utilities/casestudycard";
import mainbutton from "@/components/utilities/mainbutton";
import loadingb from "@/components/utilities/loadingb";

export default {
    components: {
        casestudycard,
        mainbutton,
        loadingb
    },
    head: {
        title: 'ClearView Research Case Studies',
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
                content_type: 'caseStudies',
                order: 'fields.id',
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
            console.log(projects);
            return this.projects = projects;
        },
        async loadMoreProjects(limit = this.limit, skip = this.limit*this.page) {
            this.loading = true
            var response = await this.$contentful.client.getEntries({
                content_type: 'caseStudies',
                order: 'fields.id',
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

<style scoped>
.casestudies {
    margin-top: 138px;
}

.casestudies-title {
    width: 100%;
    padding: 70px 78px 80px;
    text-align: center;
    font-family: "Questrial";
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 77px;
}

.casestudies-jumbo-cards {
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 200px));
    gap: 48px 24px;
    width: 100%;
    padding: 0 78px;
    margin-bottom: 84px;
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

@media only screen and (max-width: 1080px) {
    .casestudies {
        margin-top: 110px;
    }

    .casestudies-jumbo-cards {
        padding: 0 30px;
        margin-bottom: 78px;
    }

    .casestudies-title {
        width: 100%;
        padding: 40px 30px 60px;
        font-size: 45px;
        line-height: 128.5%;
    }
}

@media only screen and (max-width: 950px) {
    .casestudies-jumbo-cards {
        padding: 0 30px;
        margin-bottom: 78px;
    }

    .casestudies-loadmore {
        padding: 0 20px;
        margin-bottom: 32px;
    }
}

@media only screen and (max-width: 800px) {
    .casestudies-jumbo-cards {
        grid-template-columns: repeat(6, minmax(auto, 150px));
        gap: 50px 24px;
    }
}
</style>
