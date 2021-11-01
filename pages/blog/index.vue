<template>
    <div>
        get all blogs
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: null,
            next: null,
        }
    },
    methods: {
        async getAllBlogs(limit = 6, skip = 0) {
            var response = await this.$contentful.client.getEntries({
                content_type: 'blog',
                order: '-sys.createdAt',
                limit,
                skip
            })
            let blogs = response.items;

            blogs = blogs.map((item) => {
                const { id, createdAt } = item.sys;
                const { slug, title, authorName } = item.fields;
                const thumbnail = item.fields.thumbnail.fields.file.url
                const authorImage = item.fields.authorImage.fields.file.url
                return{
                    id, slug, title, thumbnail, authorName, authorImage, createdAt
                }
            })

            console.log(blogs);
        }
    },
    mounted() {
        this.getAllBlogs()
    }
}
</script>

<style>
/* styling goes here */
</style>
