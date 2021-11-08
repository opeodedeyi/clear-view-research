<template>
    <nuxt-link v-if="type==='li'" :to="to" tag="li" class="pl16">
        <a :class="[size, mode]">
            <slot/>
        </a>
    </nuxt-link>
    <nuxt-link v-else-if="type==='link'" :to="to" :class="[size, mode]">
        <slot/>
    </nuxt-link>
    <button v-else :class="[size, mode]" @click.prevent="onClick">
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
        cursor: pointer;
        text-decoration: none;
        font-weight: 500;
    }

    button {
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .normal {
        border: 1px solid var(--color-company);
        background-color: var(--color-company);
        color: var(--color-white) !important;
    }

    .normal:hover {
        background-color: var(--color-company-light);
        text-decoration: none;
    }

    .inverse {
        border: 1px solid var(--color-white);
        background-color: var(--color-white);
        color: var(--color-company) !important;
    }

    .inverse:hover {
        background-color: var(--color-white);
        text-decoration: none;
    }

    .special {
        border: 1px solid var(--color-white);
        /* background-color: var(--color-dark); */
        color: var(--color-white) !important;
    }

    .special:hover {
        background-color: var(--color-white);
        color: var(--color-dark) !important;
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

    .large {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        text-align: center;
        width: 100%;
        height: 50px;
        border-radius: 25px;
        max-width: 500px;
    }
</style>