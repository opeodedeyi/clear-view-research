<template>
    <footer class="footer">
        <div class="footer-bottom">
            <p>ClearView Research Ltd,</p>
            <p class="mb-15">86-90 Paul Street, London, EC2A 4NE</p>
            <p>ClearView Research Ltd © 2021 <span class="break"><br></span> All Rights Reserved | Privacy Policy</p>
        </div>
    </footer>
</template>

<script>
import mainbutton from "@/components/utilities/mainbutton";

export default {
    components: {
        mainbutton
    }
}
</script>

<style scoped>
.footer {
    background-color: var(--color-dark);
    color: var(--color-white);
    padding: 48px 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 64px;
}

.footer-bottom {
    width: 100%;
}

.footer-bottom {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
}

.break {
    height: 0;
}

/* small screen */
@media only screen and (max-width: 950px) {
    .footer {
        padding: 32px 20px;
        margin-top: 32px;
    }

    /* .footer-bottom {
        text-align: center;
    } */
}
</style>
