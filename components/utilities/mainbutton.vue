<template>
    <nuxt-link v-if="type==='li'" :to="to" tag="li">
        <a :class="[size]">
            <slot/>
        </a>
    </nuxt-link>
    <nuxt-link v-else-if="type==='link'" :to="to" :class="[size]">
        <slot/>
    </nuxt-link>
    <button v-else :class="[size]" @click.prevent="onClick">
        <slot/>
    </button>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            required: false,
            default: "small"
        },
        mode: {
            type: String,
            required: false,
            default: "normal"
        },
        type: {
            type: String,
            required: false,
            default: "link"
        },
        to: {
            type: String,
            required: false,
            default: '/'
        },
        onClick: {
            type: Function,
            required: false
        }
    }
}
</script>

<style scoped>
    button,
    a {
        text-decoration: none;
        border: 1px solid var(--color-company);
        cursor: pointer;
        text-decoration: none;
        font-weight: 500;
        background-color: var(--color-company);
        color: var(--color-white) !important;
    }

    button {
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    button:hover,
    a:hover {
        background-color: var(--color-company);
        text-decoration: none;
    }

    .small {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        padding: 10.6px 24px;
        border-radius: 20px;
    }

    .medium {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        text-align: center;
        padding: 14.4px 32px;
        border-radius: 25px;
    }

    /* .large {
        font-size: 16px;
        padding: 12px 20px;
    } */
</style>