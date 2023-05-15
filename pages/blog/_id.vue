<template>
    <div class="blog-main">
        <div v-if="blogDetails!=null" class="blog-main-cont">
            <div class="blog-title">
                <div class="blog-date">{{blogDetails[0].customDate}}</div>
                <div class="blog-titlee">{{blogDetails[0].title}}</div>
            </div>
            <div class="blog-main-image">
                <img :src="blogDetails[0].featuredImage" alt="">
            </div>
            <div class="blog-main-content" v-html="blogDetails[0].details"></div>
            
            <div class="blog-learn-more" v-if="mainPdf!=null">
                <div class="blog-hl"></div>
                <p class="blog-learn-more-title">Click to find out more about {{blogDetails[0].title}}</p>
                <div class="blog-readmore"><mainbutton size="more" type="btn" :onClick="openPdf">Read More</mainbutton></div>
            </div>
        </div>
        <loadingb v-else-if="blogDetails===null"/>

        <div v-if="moreblogs!=null" class="blog-more-cont">
            <div class="blog-hl"></div>
            <p class="blog-more-title">Other Posts</p>
            <div class="blog-more-cards" v-if="moreblogs != null">
                <blogcard
                    v-for="(result, index) in moreblogs"
                    :key="index"
                    :slug="result.slug"
                    :featuredImage="result.featuredImage"
                    :title="result.title"
                    :description="result.description"
                    :date="result.createdAt" />
            </div>
        </div>
        <loadingb v-else-if="moreblogs===null & blogDetails!=null"/>
    </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import blogcard from "@/components/utilities/blogcard";
import loadingb from "@/components/utilities/loadingb";
import mainbutton from "@/components/utilities/mainbutton";

export default {
    data() {
        return {
            blogDetails: null,
            mainPdf: null,
            moreblogs: null,
            limit: 2
        }
    },
    head() {
        // Check if blogDetails is available and has at least one item
        if (this.blogDetails && this.blogDetails.length > 0) {
            return {
                title: this.blogDetails[0].title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.blogDetails[0].description, // Use description instead of details if you want to set meta description
                    },
                ],
            }
        } else {
            // Default values if blogDetails is not available yet
            return {
                title: 'Blog / ClearView Research',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: "this.$route.params.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());",
                    },
                ],
            }
        }
    },
    components: {
        loadingb,
        mainbutton,
        blogcard
    },
    methods: {
        async getTwoBlogs(limit = this.limit, skip = 0) {
            this.loading = true
            var response = await this.$contentful.client.getEntries({
                content_type: 'blog',
                order: '-sys.createdAt',
                'fields.slug[nin]': this.$route.params.id,
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
            return this.moreblogs = blogs;
        },
        getCustomDate(passedDate) {
            const date = new Date(passedDate);
            let year = date.getFullYear();
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let month = months[date.getMonth()];
            let dt = date.getDate();

            let newDate = `${dt} ${month}, ${year}`
            return newDate
        },
        async getOneBlog(slug) {
            var response = await this.$contentful.client.getEntries({
                content_type: 'blog',
                'fields.slug': slug
            })
            let blog = response.items;

            blog = blog.map((item) => {
                let renderOptions = {
                    renderNode: {
                        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                        if (node.data.target.sys.contentType.sys.id === "codeBlock") {
                            return `<pre>
                                <code>${node.data.target.fields.code}</code>
                            </pre>`;
                        }

                        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
                            return `<iframe
                                src='${node.data.target.fields.embedUrl}'
                                height='100%'
                                width='100%'
                                frameBorder='0'
                                scrolling='no'
                                title='${node.data.target.fields.title}'
                                allowFullScreen=true
                            />`;
                        }
                        },
                        [INLINES.HYPERLINK]: (node, next) => {
                        if (node.data.uri.includes("player.vimeo.com/video")) {
                            return `<div class="iframe-container">
                                <iframe
                                title="${next(node.content)}"
                                src="${node.data.uri}"
                                frameBorder='0'
                                allowFullScreen
                                ></iframe>
                            </div>`;
                        } else if (node.data.uri.includes("youtube.com/embed")) {
                            return `<div class="iframe-container">
                                <iframe
                                title="${next(node.content)}"
                                src="${node.data.uri}"
                                allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
                                frameBorder='0'
                                allowFullScreen
                                ></iframe>
                            </div>`;
                        } else {
                            return `<span class="color">
                            <a href="${node.data.uri}">${next(node.content)}</a>
                            </span>`;
                        }
                        },
                        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                        return `<div class="content-img"><img
                            src="https:${node.data.target.fields.file.url}"
                            width='100%'
                            alt="${node.data.target.fields.description}"
                            /></div>`;
                        },
                    },
                }

                const { id, createdAt } = item.sys;
                const { title, description } = item.fields;
                const featuredImage = item.fields.featuredImage.fields.file.url
                const content = item.fields.details;
                const details = documentToHtmlString(content, renderOptions)
                const customDate = this.getCustomDate(createdAt)

                return{
                    id, title, featuredImage, description, details, createdAt, customDate
                }
            })
            this.blogDetails = blog
        },
        async getPdf(slug) {
            var response = await this.$contentful.client.getEntries({
                content_type: 'blog',
                'fields.slug': slug
            })
            let pdf = response.items;

            pdf = await pdf.map((item) => {
                const attachedPdf = item.fields.attachedPdf.fields.file.url

                return{
                    attachedPdf
                }
            })
            this.mainPdf = pdf[0].attachedPdf
            console.log(this.mainPdf);
        },
        async openPdf() {
            var anchor = document.createElement('a');
            anchor.href = this.mainPdf;
            anchor.target="_blank";
            anchor.click();
        }
    },
    mounted() {
        this.getOneBlog(this.$route.params.id)
        this.getPdf(this.$route.params.id)
        this.getTwoBlogs()
    }
}
</script>

<style>
.blog-main {
    margin-top: 138px;
}

.blog-main-cont {
    width: 100%;
}

.blog-title {
    width: 100%;
    padding: 70px 78px 80px;
}

.blog-date {
    font-family: "Libre Franklin";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
    text-align: center;
    color: rgba(0, 0, 0, 0.29);
}

.blog-titlee {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 118%;
    text-align: center;
    margin-top: 5px;
}

.blog-main-image {
    width: 100%;
    height: 439px;
}

.blog-main-image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.blog-main-content {
    margin-top: 66px;
    padding: 0 200px 42px;
}

.blog-main-content p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
    color: var(--color-dark);
    padding: 20px 0;
}

.blog-main-content a {
    text-decoration: none;
    color: var(--color-danger);
}

.blog-main-content a:hover {
    color: var(--color-company);
    text-decoration: underline;
}

.blog-more-cont {
    padding: 0 78px;
}

.blog-hl {
    height: 1px;
    background-color: var(--color-danger);
    width: 100%;
    margin-bottom: 61px;
}

.blog-more-title {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 118%;
    margin-bottom: 36px;
}

.blog-more-cards {
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 200px));
    gap: 48px 24px;
    width: 100%;
    margin-bottom: 96px;
}

.blog-learn-more {
    width: 100%;
    padding: 0 200px;
    margin-bottom: 76px;
}

.blog-hl {
    height: 1px;
    background-color: var(--color-danger);
    width: 100%;
    margin-bottom: 91px;
}

.blog-learn-more-title {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 118%;
    text-align: center;
    margin-bottom: 30px;
}

.blog-readmore {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.blog-read-more {
    padding: 0 78px;
}


/* small screen */
@media only screen and (max-width: 1080px) {
    .blog-main {
        margin-top: 110px;
    }

    .blog-title {
        width: 100%;
        padding: 41px 30px 70px;
    }

    .blog-titlee {
        font-size: 35px;
        line-height: 118%;
        margin-top: 8px;
    }

    .blog-main-image {
        height: 424px;
    }

    .blog-main-content {
        margin-top: 59px;
        padding: 0 30px 31px;
    }

    .blog-main-content p {
        font-size: 12px;
        line-height: 227.7%;
        padding: 12px 0;
    }

    .blog-date {
        font-size: 15px;
        line-height: 227.7%;
    }

    .blog-more-cont {
        padding: 0 30px;
    }

    .blog-hl {
        margin-bottom: 31px;
    }

    .blog-more-title {
        font-size: 25px;
        line-height: 161%;
        margin-bottom: 32px;
    }

    .blog-more-cards {
        margin-bottom: 82px;
    }

    .blog-learn-more {
        padding: 0 30px;
        margin-bottom: 66px;
    }

    .blog-hl {
        margin-bottom: 53px;
    }

    .blog-learn-more-title {
        font-size: 20px;
        line-height: 168.5%;
        margin-bottom: 26px;
    }

    .blog-read-more {
        padding: 0 30px;
    }
}

@media only screen and (max-width: 800px) {
    .blog-more-cards {
        grid-template-columns: repeat(6, minmax(auto, 150px));
        gap: 50px 24px;
    }
}
</style>
