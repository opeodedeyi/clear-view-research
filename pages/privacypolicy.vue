<template>
    <div class="policy">
        <div class="policy-header">
            <h1 class="policy-title">Privacy Policy</h1>
            <p class="policy-date">Effective date: May 24, 2018</p>
        </div>
        <div class="policy-body">
            <p>At ClearView Research Limited (‘CVR’) we take your privacy very seriously and we are committed to protecting your personal data and handling it responsibly. We take great care in protecting your privacy and the information you provide whilst participating or wanting to participate inourresearchproject, as well as the personal data that we may receive from third parties.</p>
            <p>We do not use any of your personal data to sell anything to youor sell your data with third parties. We conduct our research using scientific methods and we commit, in obtaining your consent, not to mislead you about the nature of the research or how the findings will be used. Your responses will be treated as confidential unless you consent to be identified.</p>
            <p>We are committed to meeting the requirements of the following laws and codes:</p>
            <ul>
                <li><p>The EU General Data Protection Regulation (GDPR)</p></li>
                <li><p>Data  Protection  Act  1998  and  the  new  Data  Protection  Act  which  will  enact  GDPR requirements</p></li>
                <li><p>Market Research Society’s (MRS) Code of Conduct</p></li>
            </ul>
            <p>This policy covers the personal data that CVR collects whenever you interact with us and the sections below will explain in more detail:</p>
            <ul>
                <li><p>the types of personal data we collect from you</p></li>
                <li><p>what types of third parties we receive personal data from</p></li>
                <li><p>how and why we process your personal data</p></li>
                <li><p>who we share your personal data with</p></li>
                <li><p>how long we retain your personal data</p></li>
                <li><p>your rights to withdraw your consent and your other personal data rights</p></li>
                <li><p>how to contact us and exercise your rights</p></li>
            </ul>
            <p><b>Personal data CVR collects from you</b><br>
            The information we collect can contain your personal opinions as well as personal information such as name, address, postcode, gender, occupation, age, date of birth, email address, telephone number etc. We may occasionally collect sensitive personal information such as political views. Where relevant to the research being undertaken, we may collect business contact information, such as company name, job title, and department. We collect all different types of personal data and sensitive data dependent on the research project, therefore the data is collected on the grounds of consent.</p>
            <p>In addition, for online surveys or use of our online contact form, we will record your IP address, which type of browser you are using, your screen size and other basic metrics.</p>
            <p>We do not do any invisible processing of data from your computer. We will only collect and use personal information in accordance with this policy to the extent deemed reasonably necessary to serve our legitimate business purposes, and we will maintain appropriate safeguards to ensure the security, integrity, accuracy and privacy of the information you have provided.</p>
            <p><b>Personal data CVR receives from third parties</b><br>
            We often receive your personal data and sensitive data from thirdpartiesvia;</p>
            <ul>
                <li><p>our survey service providers i.e. SurveyMonkey, Verto, Poll Everywhere etc; and</p></li>
                <li><p>organisations  that  you  have  given  permission  to  supply  your  details  to  a  third  party  for research purposes.</p></li>
            </ul>
            <p><b>How and why CVR processes your personal data</b><br>
            The personal information we collect is:</p>
            <ul>
                <li><p>combined with the responses/views/opinions of others who participated in the same research and reported back anonymously to the client that commissioned the study; or</p></li>
                <li><p>used on anaggregated basis to determine which groups of people think certain things more than others; or</p></li>
                <li><p>used to administer andoperate prize draws and incentives; or</p></li>
                <li><p>occasionally used to re-contact you to validate your responses (if youhave consented to us doing so).</p></li>
            </ul>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
    head: {
        title: 'Clearview Privacy Policy',
    }
}
</script>

<style>
.policy {
    margin-top: 138px;
    width: 100%;
}

.policy-header {
    width: 100%;
    padding: 16px 78px 94px;
}

.policy-title {
    text-align: center;
    font-family: "Questrial";
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 77px;
}

.policy-date {
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
    margin-top: 5px;
}

.policy-body {
    padding: 0 200px 42px;
    background: var(--color-white);
}

.policy-body p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
    color: var(--color-dark);
    padding: 20px 0;
}

/* small screen */
@media only screen and (max-width: 1080px) {
    .desk {
        display: none;
    }

    .policy {
        margin-top: 110px;
        width: 100%;
    }

    .policy-header {
        padding: 40px 30px 60px;
    }

    .policy-title {
        font-size: 45px;
        line-height: 128.5%;
    }

    .policy-date {
        font-size: 15px;
        line-height: 227.7%;
    }

    .policy-body {
        padding: 0 30px 31px;
    }

    .policy-body p {
        font-size: 12px;
        line-height: 227.7%;
        padding: 12px 0;
    }
}
</style>
