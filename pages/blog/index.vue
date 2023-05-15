<template>
    <div class="blog">
        <div class="blog-title">
            Blogs
        </div>
        <div class="blog-jumbo-cards" v-if="blogs != null">
            <blogcard
                v-for="(result, index) in blogs"
                :key="index"
                :slug="result.slug"
                :featuredImage="result.featuredImage"
                :title="result.title"
                :description="result.description"
                :date="result.createdAt" />
        </div>
        <loadingb v-if="loading"/>
        <div class="blog-loadmore" v-if="loading==false & limit*page<total & blogs!=null"><mainbutton type="button" size="medium" :onClick="loadMoreBlogs">Load More Blogs</mainbutton></div>
    </div>
</template>

<script>
import blogcard from "@/components/utilities/blogcard";
import mainbutton from "@/components/utilities/mainbutton";
import loadingb from "@/components/utilities/loadingb";

export default {
    components: {
        blogcard,
        mainbutton,
        loadingb
    },
    head() {
        return {
            title: 'Blog / ClearView Research',
            meta: [
                {
                    hid: 'Our Blog',
                    name: 'Our Blog',
                    content: ' Our blog serves as an extension of our commitment to sharing these insights and fostering informed conversations.',
                }
            ]
        }
    },
    data() {
        return {
            blogs: null,
            limit: 6,
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
                // order: 'fields.id', // Order by fields ID
                order: '-sys.createdAt', // Order by date created in descending order
                limit,
                skip
            })
            let blogs = response.items;

            blogs = blogs.map((item) => {
                const { id, createdAt } = item.sys;
                const { slug, title, description } = item.fields;
                const featuredImage = item.fields.featuredImage.fields.file.url
                return{
                    id, slug, title, featuredImage, description, createdAt
                }
            })
            console.log(blogs);
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
                const { slug, title, description } = item.fields;
                const featuredImage = item.fields.featuredImage.fields.file.url
                return{
                    id, slug, title, description, featuredImage, createdAt
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
    margin-top: 138px;
}

.blog-title {
    width: 100%;
    padding: 70px 78px 80px;
    text-align: center;
    font-family: "Questrial";
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 77px;
}

.blog-jumbo-cards {
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 200px));
    gap: 62px 24px;
    width: 100%;
    padding: 0 78px;
    margin-bottom: 84px;
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

@media only screen and (max-width: 1080px) {
    .blog {
        margin-top: 110px;
    }

    .blog-jumbo-cards {
        padding: 0 30px;
        margin-bottom: 78px;
    }

    .blog-title {
        width: 100%;
        padding: 40px 30px 60px;
        font-size: 45px;
        line-height: 128.5%;
    }
}

@media only screen and (max-width: 950px) {
    .blog-jumbo-cards {
        padding: 0 30px;
        margin-bottom: 78px;
    }

    .blog-loadmore {
        padding: 0 20px;
        margin-bottom: 32px;
    }
}

@media only screen and (max-width: 800px) {
    .blog-jumbo-cards {
        grid-template-columns: repeat(6, minmax(auto, 150px));
        gap: 50px 24px;
    }
}
</style>
