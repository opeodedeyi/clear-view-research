<template>
    <div class="grid-card-layout">
        <slot/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.grid-card-layout {
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 100px));
    gap: 20px;
    width: 100%;
}
</style>