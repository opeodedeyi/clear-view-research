<template>
    <nuxt-link v-if="type==='li'" :to="to" tag="li" class="pl25 spc">
        <a :class="size" class="btn">
            <slot/>
        </a>
    </nuxt-link>
    <nuxt-link v-else-if="type==='link'" :to="to" :class="size" class="btn">
        <slot/>
    </nuxt-link>
    <button v-else :class="size" class="btn" @click.prevent="onClick">
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

    .btn {
        border: 1px solid var(--color-danger);
        background-color: var(--color-danger);
        color: var(--color-white) !important;
    }

    .btn:hover {
        border: 1px solid var(--color-danger-dark);
        background-color: var(--color-danger-dark);
        color: var(--color-white) !important;
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

    .header {
        font-style: normal;
        font-weight: normal;
        font-size: 0.8rem;
        line-height: 14.54px;
        padding: 16px 40px;
        text-align: center;
        border-radius: 27px;
        max-width: 500px;
    }
</style>