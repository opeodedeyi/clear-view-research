<template>
    <div class="blog">
        <genpagetitle
            jumbotitle="CLEARVIEW RESEARCH"
            jumbodescription="HOT OFF THE PRESS"
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
.blog {
    margin-top: 72px;
}

/* small screen */
@media only screen and (max-width: 950px) {
    /* .blog {
        margin-top: 72px;
    } */
}
</style>
