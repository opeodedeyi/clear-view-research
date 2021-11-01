<template>
    <div>
        <div  v-if="blogDetails" v-html="blogDetails[0].details"></div>
    </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export default {
    data() {
        return {
            blogDetails: null,
        }
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
/* styling goes here */
</style>
