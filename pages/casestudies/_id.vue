<template>
    <div class="project-main">
        <div v-if="projectDetails!=null" class="project-main-cont">
            <div class="project-title">
                <div class="project-titlee">{{projectDetails[0].title}}</div>
            </div>
            <div class="project-main-image">
                <img :src="projectDetails[0].featuredImage" alt="">
            </div>
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
            title: 'case study'
        }
    },
    head: {
        title: `Clearview research casestudy`,
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
                            width='100%'
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
    margin-top: 138px;
}

.project-main-cont {
    width: 100%;
}

.project-title {
    width: 100%;
    padding: 70px 78px 80px;
}

.project-titlee {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 118%;
    text-align: center;
}

.project-main-image {
    width: 100%;
    height: 439px;
}

.project-main-image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.project-main-content {
    margin-top: 66px;
    padding: 0 200px 42px;
}

.project-main-content p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
    color: var(--color-dark);
    padding: 20px 0;
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
@media only screen and (max-width: 1080px) {
    .project-main {
        margin-top: 110px;
        margin-bottom: 41px;
    }

    .project-title {
        width: 100%;
        padding: 41px 30px 70px;
    }

    .project-titlee {
        font-size: 35px;
        line-height: 118%;
    }

    .project-main-content {
        margin-top: 59px;
        padding: 0 30px 31px;
    }

    .project-main-content p {
        font-size: 12px;
        line-height: 227.7%;
        padding: 12px 0;
    }

    .project-main-image {
        height: 424px;
    }
}
</style>