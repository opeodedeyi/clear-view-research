import { createClient } from 'contentful'

export default (context, inject) => {
    // Initialize the Contentful client with your credentials
    const contentfulClient = createClient({
        space: process.env.YOUR_SPACE_ID,  // replace with your space ID
        accessToken: process.env.CONTENT_DELIVERY_API_ACCESS_TOKEN // replace with your access token
    })

    const getBlogDetails = async (slug) => {
        const response = await contentfulClient.getEntries({
            content_type: 'blog',
            'fields.slug': slug
        })

        if (response.items.length > 0) {
            const blog = response.items[0].fields;
            return {
                title: blog.title,
                description: blog.description
            }
        } else {
            return null;
        }
    }

    // Inject the getBlogDetails function into the context and Vue components
    inject('getBlogDetails', getBlogDetails)
}