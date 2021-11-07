<template>
    <div class="project-main">
        <div v-if="projectDetails!=null" class="project-main-cont">
            <div class="project-main-image">
                <img :src="projectDetails[0].featuredImage" alt="">
            </div>
            <p class="project-main-title">{{projectDetails[0].title}}</p>
            <p class="project-main-date">{{projectDetails[0].formattedDate}}</p>
            <div class="project-main-content" v-html="projectDetails[0].details"></div>
        </div>
        <loadingb v-else-if="projectDetails===null"/>
    </div>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import loadingb from "@/components/utilities/loadingb";

export default {
    data() {
        return {
            projectDetails: null,
        }
    },
    components: {
        loadingb
    },
    methods: {
        getCustomDate(passedDate) {
            const date = new Date(passedDate);
            let year = date.getFullYear();
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let month = months[date.getMonth()];
            let dt = date.getDate();

            let newDate = `${month} ${dt}, ${year}`
            return newDate
        },
        async getOneProject(slug) {
            var response = await this.$contentful.client.getEntries({
                content_type: 'projects',
                'fields.slug': slug
            })
            let project = response.items;

            project = project.map((item) => {
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
                const { slug, title } = item.fields;
                const featuredImage = item.fields.featuredImage.fields.file.url
                const content = item.fields.details;
                const details = documentToHtmlString(content, renderOptions)
                const formattedDate = this.getCustomDate(createdAt)

                return{
                    id, slug, title, details, featuredImage, formattedDate
                }
            })
            this.projectDetails = project
            console.log(project);
        }
    },
    mounted() {
        this.getOneProject(this.$route.params.id)
    }
}
</script>

<style>
.project-main {
    margin-top: 104px;
    padding: 0 64px;
    margin-bottom: 82px;
}

.project-main-cont {
    width: 100%;
}

.project-main-image {
    width: 100%;
    height: 500px;
}

.project-main-image img {
    /* position: absolute; */
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.project-main-title {
    font-weight: bold;
    font-size: 40px;
    line-height: 54px;
    color: var(--color-company);
    margin-top: 32px;
}

.project-main-date {
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    margin-top: 20px;
    color: var(--color-blog-gray);
}

.project-main-content {
    margin-top: 24px;
}

.project-main-content p {
    font-size: 16px;
    line-height: 26px;
    color: var(--color-dark);
}

.project-main-content a {
    text-decoration: none;
    color: var(--color-danger);
}

.project-main-content a:hover {
    color: var(--color-company);
    text-decoration: underline;
}

/* small screen */
@media only screen and (max-width: 950px) {
    .project-main {
        margin-top: 96px;
        padding: 0 20px;
        margin-bottom: 41px;
    }

    .project-main-image {
        height: 360px;
    }

    .project-main-title {
        font-size: 18px;
        line-height: 28px;
        margin-top: 24px;
    }

    .project-main-date {
        margin-top: 8px;
    }
}
</style>