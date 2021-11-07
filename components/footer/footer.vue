<template>
    <footer class="footer">
        <div class="footer-top">
            <p class="footer-top-text">Whether you’d like to discuss a project or say hi, we always love to hear from you.</p>
            <mainbutton mode="special" type="link" to="/contactus" size="medium">Contact Us</mainbutton>
        </div>
        <div class="footer-hl"></div>
        <div class="footer-bottom">
            <p>ClearView Research Ltd,</p>
            <p class="mb-15">86-90 Paul Street, London, EC2A 4NE</p>
            <p>ClearView Research Ltd © 2021 <span class="break mob"><br></span> All Rights Reserved | Privacy Policy</p>
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
.mob {
    display: none;
}

.footer {
    background-color: var(--color-dark);
    color: var(--color-white);
    padding: 62px 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.footer-top,
.footer-bottom {
    width: 100%;
}

.footer-top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}

.footer-top-text {
    font-weight: bold;
    font-size: 42px;
    line-height: 60px;
    width: 80%;
}

.footer-bottom {
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
}

.footer-bottom p {
    font-size: 16px;
    line-height: 28px;
}

.break {
    height: 0;
}

.footer-hl {
    border-bottom: 1px solid var(--color-white);
    width: 100%;
    margin: 48px 0;
}

/* small screen */
@media only screen and (max-width: 950px) {
    .mob {
        display: flex;
    }

    .footer {
        padding: 32px 20px;
    }

    .footer-top {
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .footer-top-text {
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 32px;
        text-align: center;
    }

    .footer-bottom {
        font-size: 14px;
        line-height: 24px;
        text-align: center;
    }

    .footer-hl {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
}
</style>
