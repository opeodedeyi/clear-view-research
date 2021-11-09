<template>
    <div class="blog">
        <genpagetitle
            jumbotitle="CLEARVIEW RESEARCH"
            jumbodescription="Our Blog"
            jumboimage="jumboimg1.webp"
        />
        <div class="blog-jumbo-cards" v-if="blogs != null">
            <altcard
                typeofcard="blog"
                v-for="(result, index) in blogs"
                :key="index"
                :slug="result.slug"
                :featuredImage="result.thumbnail"
                :title="result.title"
                :description="result.description"
                :date="result.createdAt" />
        </div>
        <loadingb v-if="loading"/>
        <div class="blog-loadmore" v-if="loading==false & limit*page<total & blogs!=null"><mainbutton type="button" size="medium" :onClick="loadMoreBlogs">Load more Blogs</mainbutton></div>
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
            blogs: null,
            limit: 4,
            page: 1,
            total: null,
            loading: false
        }
    },
    methods: {
        async getAllBlogs(limit = this.limit, skip = 0) {
            this.loading = true
            var response = await this.$contentful.client.getEntries({
                content_type: 'blog',
                order: '-sys.createdAt',
                limit,
                skip
            })
            let blogs = response.items;

            blogs = blogs.map((item) => {
                const { id, createdAt } = item.sys;
                const { slug, title, authorName, description } = item.fields;
                const thumbnail = item.fields.thumbnail.fields.file.url
                const authorImage = item.fields.authorImage.fields.file.url
                return{
                    id, slug, title, description, thumbnail, authorName, authorImage, createdAt
                }
            })
            this.total = response.total
            this.loading = false
            return this.blogs = blogs;
        },
        async loadMoreBlogs(limit = this.limit, skip = this.limit*this.page) {
            this.loading = true
            var response = await this.$contentful.client.getEntries({
                content_type: 'blog',
                order: '-sys.createdAt',
                limit,
                skip
            })
            let blogs = response.items;

            blogs = blogs.map((item) => {
                const { id, createdAt } = item.sys;
                const { slug, title, authorName, description } = item.fields;
                const thumbnail = item.fields.thumbnail.fields.file.url
                const authorImage = item.fields.authorImage.fields.file.url
                return{
                    id, slug, title, description, thumbnail, authorName, authorImage, createdAt
                }
            })
            let BlogsToPatch = this.blogs
            this.page++

            blogs.forEach(eblog => {
                BlogsToPatch.push(eblog)
            });
            this.loading = false
            return this.blogs = BlogsToPatch;
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

.blog-jumbo-cards {
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 200px));
    gap: 48px 24px;
    width: 100%;
    padding: 0 64px;
    margin-bottom: 80px;
}

.blog-loadmore {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 100px;
    padding: 0 64px;
}

/* small screen */
@media only screen and (max-width: 800px) {
    .blog-jumbo-cards {
        grid-template-columns: repeat(6, minmax(auto, 150px));
        gap: 32px 24px;
    }
}

/* small screen */
@media only screen and (max-width: 950px) {
    .blog-jumbo-cards {
        padding: 0 20px;
        margin-bottom: 32px;
    }

    .blog-loadmore {
        padding: 0 20px;
        margin-bottom: 32px;
    }
}
</style>
