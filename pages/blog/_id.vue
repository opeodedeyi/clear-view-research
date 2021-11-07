<template>
    <div class="blog-main">
        <div v-if="blogDetails!=null" class="blog-main-cont">
            <div class="blog-main-image">
                <img :src="blogDetails[0].featuredImage" alt="">
            </div>
            <p class="blog-main-title">{{blogDetails[0].title}}</p>
            <p class="blog-main-author">{{blogDetails[0].authorName}}</p>
            <div class="blog-main-content" v-html="blogDetails[0].details"></div>
        </div>
        <loadingb v-else-if="blogDetails===null"/>
        <div v-if="moreblogs!=null" class="blog-more-cont">
            <p class="blog-more-title">You may also be interested in</p>
        </div>
        <loadingb v-else-if="moreblogs===null & blogDetails!=null"/>
    </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import loadingb from "@/components/utilities/loadingb";

export default {
    data() {
        return {
            blogDetails: null,
            moreblogs: null
        }
    },
    components: {
        loadingb
    },
    methods: {
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
                            height="${node.data.target.fields.file.details.image.height}"
                            width="${node.data.target.fields.file.details.image.width}"
                            alt="${node.data.target.fields.description}"
                            /></div>`;
                        },
                    },
                }

                const { id, createdAt } = item.sys;
                const { title, description, authorName } = item.fields;
                const featuredImage = item.fields.featuredImage.fields.file.url;
                const authorImage = item.fields.authorImage.fields.file.url;
                const content = item.fields.details;
                const details = documentToHtmlString(content, renderOptions)

                return{
                    id, title, featuredImage, description, details, authorName, authorImage, createdAt
                }
            })
            this.blogDetails = blog
            console.log(blog);
        }
    },
    mounted() {
        this.getOneBlog(this.$route.params.id)
    }
}
</script>

<style>
.blog-main {
    margin-top: 104px;
    padding: 0 64px;
}

.blog-main-cont {
    width: 100%;
}

.blog-main-image {
    width: 100%;
    height: 500px;
}

.blog-main-image img {
    /* position: absolute; */
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.blog-main-title {
    font-weight: bold;
    font-size: 40px;
    line-height: 54px;
    color: var(--color-company);
    margin-top: 32px;
}

.blog-main-author {
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    margin-top: 20px;
    color: var(--color-blog-gray);
}

.blog-main-content {
    margin-top: 24px;
}

.blog-main-content p {
    font-size: 16px;
    line-height: 26px;
    color: var(--color-dark);
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
    width: 100%;
    padding: 32px 0 70px;
}

.blog-more-title {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: var(--color-dark);
    margin-bottom: 32px;
}

/* small screen */
@media only screen and (max-width: 950px) {
    .blog-main {
        margin-top: 96px;
        padding: 0 20px;
    }

    .blog-main-image {
        height: 360px;
    }

    .blog-main-title {
        font-size: 18px;
        line-height: 28px;
        margin-top: 24px;
    }

    .blog-main-author {
        margin-top: 8px;
    }

    .blog-more-cont {
        padding: 24px 0 36px;
    }

    .blog-more-title {
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 24px;
    }
}
</style>
