<template>
    <div class="casestudies">
        get all projects
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: null,
            next: null,
        }
    },
    methods: {
        async getAllProjects(limit = 6, skip = 0) {
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

            console.log(projects);
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
</style>
