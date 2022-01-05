<template>
  <div class="homepage">
    <videojumbotron/>

    <div class="homepage-about">
      <div class="homepage-about-design desk"></div>
      <div class="homepage-about-content">
        <div class="homepage-about-wedo">
          <div class="wedo-header"><p class="wedo-title">WHAT WE DO</p><div class="wedo-hl"></div></div>
          <p class="wedo-text">We assist corporations, lifestyle brands, charities, and governments in gaining access to unique and trustworthy audience insights, allowing them to make better decisions that solve complicated business challenges while also benefiting society as a whole.</p>
          <div class="wedo-hl2"></div>
        </div>
        <div class="homepage-about-mission">
          <div class="mission-content">
            <p class="mission-content-title">OUR MISSION</p>
            <p class="mission-content-text">To provide people from underrepresented and disadvantaged groups a voice in research.</p>
            <div><mainbutton type="btn" :onClick="aboutUs" size="medium">Learn More</mainbutton></div>
          </div>
          <div class="mission-photo"></div>
        </div>
      </div>
    </div>

    <div class="expertise">
      <p class="expertise-title">Our Expertise</p>
      <div class="expertise-cards">
        <div class="expertise-card e-c-normal">
          <div class="e-c-line"></div>
          <div class="e-c-line2"></div>
          <div class="e-c-line3"></div>
          <img src="~assets/svg/aIIcon.svg" alt="">
          <p class="expertise-card-text">Audience <br>Insight</p>
        </div>
        <div class="expertise-card e-c-large">
          <div class="e-c-line"></div>
          <div class="e-c-line2"></div>
          <div class="e-c-line3"></div>
          <img src="~assets/svg/m&eIcon.svg" alt="">
          <p class="expertise-card-text">Monitioring & <br>Evaluation</p>
        </div>
        <div class="expertise-card e-c-large">
          <div class="e-c-line"></div>
          <div class="e-c-line2"></div>
          <div class="e-c-line3"></div>
          <img src="~assets/svg/c&mIcon.svg" alt="">
          <p class="expertise-card-text">Communications <br>& Marketing</p>
        </div>
        <div class="expertise-card e-c-normal">
          <div class="e-c-line"></div>
          <div class="e-c-line2"></div>
          <div class="e-c-line3"></div>
          <img src="~assets/svg/aIcon.svg" alt="">
          <p class="expertise-card-text">Advisory</p>
        </div>
        <div class="expertise-card e-c-normal">
          <div class="e-c-line"></div>
          <div class="e-c-line2"></div>
          <div class="e-c-line3"></div>
          <img src="~assets/svg/lPIcon.svg" alt="">
          <p class="expertise-card-text">Learning <br>Partner</p>
        </div>
        <div class="expertise-card e-c-normal">
          <div class="e-c-line"></div>
          <div class="e-c-line2"></div>
          <div class="e-c-line3"></div>
          <img src="~assets/svg/sPIcon.svg" alt="">
          <p class="expertise-card-text">Strategic <br>Planning</p>
        </div>
      </div>
    </div>

    <div class="casestudy">
      <p class="casestudy-title">Case Studies</p>
      <div class="casestudy-cards">
        <div class="casestudy-cards-inner">
          <casestudycard
            v-for="(result, index) in caseStudies"
            :key="index"
            :slug="result.slug"
            :featuredImage="result.featuredImage"
            :title="result.title"
            :date="result.createdAt"
            typeOf="alt" />
        </div>
      </div>
      <div class="casestudy-controls desk">
        <div class="arrow-container mr-15"><img src="~assets/svg/arrowleft.svg" alt=""></div>
        <div class="arrow-container"><img src="~assets/svg/arrowright.svg" alt=""></div>
        <div class="casestudy-controls-hl"></div>
      </div>
    </div>

    <div class="testimonial">
      <p class="testimonial-title">OUR CLIENTS SPEAK</p>
      <p class="testimonial-subtitle">What our clients and partners say about us</p>
      <div class="testimony">
        <div class="testimony-picture">
          <img :src="require(`@/assets/images/${testimony[testimonyNo-1].image}`)" alt="">
        </div>
        <div class="testimony-content">
          <p class="testimony-content-name">{{testimony[testimonyNo-1].name}}</p>
          <p class="testimony-content-role">{{testimony[testimonyNo-1].role}}</p>
          <div class="testimony-content-content">
            <div class="testimony-quote"></div>
            <p class="testimony-content-content-text">{{testimony[testimonyNo-1].content}}</p>
            <div class="testimony-controls">

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- clients and friends -->
    <div class="brands">
      <p class="brands-title">SOME OF OUR CLIENTS AND FRIENDS</p>
      <div class="brands-logos" :class="{ 'open-clients': closedClients }">
        <img v-for="(brand, index) in clients" :key="index" :src="require(`@/assets/brands/clients/${brand.src}`)" :alt="brand.src">
      </div>
      <div class="brand-center">
        <button @click.prevent="closedClients=!closedClients">
          {{ closedClients ? 'View All Clients' : 'View Less Clients' }}
        </button>
      </div>
    </div>

    <!-- insights -->
    <div class="brands-two">
      <p class="brands-title">OUR INSIGHTS AND PROJECTS HAVE BEEN NAME-CHECKED IN</p>
      <div class="brands-logos" :class="{ 'open-insights': closedInsights }">
        <img v-for="(brand, index) in insights" :key="index" :src="require(`@/assets/brands/insights/${brand.src}`)" :alt="brand.src">
      </div>
      <div class="brand-center">
        <button @click.prevent="closedInsights=!closedInsights">
          {{ closedInsights ? 'View All Outlets' : 'View Less Outlets' }}
        </button>
      </div>
    </div>

    <!-- closing -->
    <div class="homepage-close">
      <div class="homepage-close-text">
        <p class="close-title">You can’t make a great decision without, a clear view</p>
        <p class="close-text">ClearView is a research agency that focuses on dealing with people of color, Asians, and other ethnic groups.</p>
        <div><mainbutton type="btn" :onClick="aboutUs" size="medium">Learn More</mainbutton></div>
        <div class="close-line c-l-short"></div>
        <div class="close-line c-l-short2"></div>
        <div class="close-line c-l-long"></div>
        <div class="close-line c-l-long2"></div>
      </div>
      <div class="homepage-close-image"></div>
    </div>
  </div>
</template>

<script scoped>
import casestudycard from "@/components/utilities/casestudycard";
import videojumbotron from "@/components/general/videojumbotron";
import mainbutton from "@/components/utilities/mainbutton";

export default {
  data() {
    return {
      caseStudies: null,
      testimonyNo: 1,
      testimony: [
        {id: 1, image: 'dpfemale.png', name: 'Kate Goodman', role: 'Senior Campaigns Manager, Bite Back 2030', content:'CVR were great to work with, bringing unique and valuable insight to the team - which really helped steer our strategic direction on how to engage teenagers with the tricky topic of childhood obesity.'},
        {id: 2, image: 'dpmale.png', name: 'Jess Bool', role: 'Youth Strategy Lead, Unicef UK', content:'We worked with ClearView in Spring 2018 as part of our work to develop Unicef UK’s framework for youth engagement. Through a series of Solutions Labs and a bespoke digital tool that reached young people all over the UK, they prepared recommendations that have informed our work since.'},
        {id: 3, image: 'dpfemale.png', name: 'Anna Whitton', role: 'CEO, WDP', content:'The Clearview team were great to work with. They were energising, practical and provided really good quality feedback with clear, tangible recommendations. They built good rapport really quickly with our teams and delivered what we needed at pace.'},
        {id: 4, image: 'dpfemale.png', name: 'Lucie Russell', role: 'CEO, StreetDoctors', content:'ClearView provided us with a really comprehensive service. We wanted to get to the nub of what young people affected by violence, and those who work with them, needed to better support them. ClearView took a really authentic and grassroots approach to achieving this task. Their work was thoughtful, down to earth, youth centric and efficient, leading to the production of a really comprehensive final report that was a gold mine of insights.'}
      ],
      clients: [
        {src: 'starbucks.png', link: '/blog/'},
        {src: 'kpmg.png', link: '/blog/'},
        {src: 'uber.png', link: '/blog/'},
        {src: 'arts-council.png', link: '/blog/'},
        {src: 'impact.png', link: '/blog/'},
        {src: 'nhs.png', link: '/blog/'},
        {src: 'unicef.png', link: '/blog/'},
        {src: 'vodafone.png', link: '/blog/'},
        {src: 'ukyouth.png', link: '/blog/'},
        {src: 'kings.png', link: '/blog/'},
        {src: 'tinder.png', link: '/blog/'},
        {src: 'mandc.png', link: '/blog/'},
        {src: 'ms.png', link: '/blog/'},
        {src: 'ygam.png', link: '/blog/'},
        {src: 'youth.png', link: '/blog/'}
      ],
      insights: [
        {src: 'bbc.png'},
        {src: 'glamour.png'},
        {src: 'guardian.png'},
        {src: 'independent.png'},
        {src: 'metro.png'},
        {src: 'sky.png'},
        {src: 'telegraph.png'},
        {src: 'thesun.png'},
        {src: 'thevoice.png'},
        {src: 'wsj.png'}
      ],
      closedClients: true,
      closedInsights: true,
    }
  },
  components: {
    casestudycard,
    videojumbotron,
    mainbutton
  },
  methods: {
    async getCaseStudies(limit = 4, skip = 0) {
      var response = await this.$contentful.client.getEntries({
        content_type: 'caseStudies',
        order: 'fields.id',
        limit,
        skip
      })
      let caseStudies = response.items;

      caseStudies = caseStudies.map((item) => {
        const { id, createdAt } = item.sys;
        const { slug, title, description } = item.fields;
        const featuredImage = item.fields.featuredImage.fields.file.url
        return{
            id, slug, title, description, featuredImage, createdAt
        }
      })
      this.caseStudies = caseStudies
    },
    aboutUs() {
      return this.$router.push('/aboutus')
    }
  },
  mounted() {
    this.getCaseStudies()
  }
}
</script>

<style scoped>
.desk {
  display: flex;
}

.homepage-about {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: var(--color-company-dark);
  background-image: url('~assets/svg/homepage-patterns.svg');
}

.homepage-about-design {
  width: 188px;
  height: cover;
}

.homepage-about-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.homepage-about-wedo {
  padding: 100px 178px 120px 150px;
  background-color: var(--color-white);
}

.wedo-header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.wedo-title {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 193.7%;
  letter-spacing: 0.075em;
  color: var(--color-danger);
  margin-right: 26px;
  margin-bottom: 0;
}

.wedo-hl {
  flex: 1;
  height: 1px;
  background-color: var(--color-danger);
}

.wedo-hl2 {
  width: 100%;
  height: 1px;
  background-color: var(--color-danger);
}

.wedo-text {
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 183.7%; /* original font is 30px */
  margin-top: 24px;
  margin-bottom: 44px;
}

.homepage-about-mission {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.mission-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 92px 168px 101px 0;
}

.mission-content-title {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 193.7%;
  letter-spacing: 0.075em;
  color: var(--color-danger);
}

.mission-content-text {
  color: var(--color-white);
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 183.7%; /* original font 40px */
  margin-top: 11px;
  margin-bottom: 40px;
}

.mission-photo {
  width: 50%;
  height: cover;
  background-image: url('~assets/images/homepage1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* expertise */
.expertise {
  padding: 102px 120px 0;
}

.expertise-title {
  color: var(--color-company);
  font-family: 'Questrial';
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 46px;
  margin-bottom: 74px;
}

.expertise-cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 200px));
  gap: 50px 43px;
}

.expertise-card {
  position: relative;
  background-color: var(--color-white);
  border-radius: 10px;
  height: 346px;
  padding: 55px 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.expertise-card img {
  max-width: 60px;
  max-height: 57px;
}

.expertise-card-text {
  color: var(--color-company);
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 143.2%;
}

.e-c-line2 {
  position: absolute;
  top: 50px;
  right: 20px;
  height: 4px;
  width: 150px;
  background-color: rgba(0, 32, 71, 0.1);
  transform: rotate(56.15deg);
}

.e-c-line {
  position: absolute;
  bottom: 150px;
  right: -55px;
  height: 4px;
  width: 150px;
  background-color: rgba(0, 32, 71, 0.1);
  transform: rotate(-61.35deg);
}

.e-c-line3 {
  position: absolute;
  top: 20px;
  right: -55px;
  height: 4px;
  width: 120px;
  background-color: rgba(0, 32, 71, 0.1);
  transform: rotate(-61.35deg);
}

.e-c-large {
  grid-column: span 4; /* grid-column: span 6;  */
}

.e-c-normal {
  grid-column: span 4; /* grid-column: span 3;  */
}

/* casestudy */
.casestudy {
  padding: 127px 0 0 0;
  background: -webkit-linear-gradient(top, #f2f4f6 45%,#002047 45%,#002047 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #f2f4f6 45%,#002047 45%,#002047 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

.casestudy-title {
  color: var(--color-company);
  font-family: 'Questrial';
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 46px;
  margin-bottom: 54px;
  padding: 0 120px;
}

.casestudy-cards {
  position: relative;
  width: 100%;
  height: 585px;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.casestudy-cards::-webkit-scrollbar {
  display: none;
}

.casestudy-cards-inner {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
}

.casestudy-controls {
  width: 100%;
  padding: 0 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin-top: 45px;
}

.casestudy-controls-hl {
  flex: 1;
  height: 2px;
  background-color: var(--color-white);
  margin-left: 38px;
}

.arrow-container {
  height: 74px;
  width: 74px;
  border-radius: 100%;
  background-color: var(--color-danger);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}

/* testimonials */
.testimonial {
  width: 100%;
  padding: 100px 120px 118px;
  background-color: var(--color-company);
}

.testimonial-title {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 193.7%;
  letter-spacing: 0.075em;
  color: var(--color-danger);
  margin-bottom: 15px;
}

.testimonial-subtitle {
  font-family: 'Questrial';
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 46px;
  color: var(--color-white);
  margin-bottom: 55px;
}

.testimony {
  background-color: var(--color-company-dark);
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.testimony-picture {
  width: 38%;
  height: cover;
}

.testimony-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 0px 0px 20px;
}

.testimony-content-name,
.testimony-content-role,
.testimony-content-content-text {
  color: var(--color-white);
}

.testimony-content {
  flex: 1;
  padding: 61px 80px 56px;
}

.testimony-content-name {
  font-family: 'Questrial';
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 143.2%;
  margin-bottom: 5px;
}

.testimony-content-role {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 143.2%;
  margin-bottom: 28px;
}

.testimony-content-content {
  position: relative;
  padding: 29px 0 0 39px;
}

.testimony-quote {
  position: absolute;
  background: url('~assets/svg/quote.svg');
  height: 67px;
  width: 67px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
}

.testimony-content-content-text {
  position: relative;
  z-index: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 219.2%;
  margin-bottom: 36px;
}

/* brands */
.brands,
.brands-two {
  background: var(--color-white);
  width: 100%;
  padding: 75px 120px;
}

.brands-title {
  color: var(--color-company);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 193.7%;
  letter-spacing: 0.075em;
  text-align: center;
  margin-bottom: 48px;
}

.brands-logos {
  max-height: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 70px;
  transition: max-height .4s;
}

.brands-logos img {
  max-width: 210px;
  max-height: 140px;
  object-fit: scale-down;
}

.brand-center {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  margin-top: 40px;
}

.brand-center button {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 15px;
  line-height: 18px;
  color: var(--color-white);
  background: var(--color-company);
  border-radius: 31px;
  border: none;
  padding: 22px 43px;
}

/* clients and friends */
.open-clients {
  max-height: 360px;
  overflow: hidden;
}

/* insights */
.open-insights {
  max-height: 150px;
  overflow: hidden;
}

.homepage-close {
  width: 100%;
  min-height: 500px;
  background-color: var(--color-gray-2);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.homepage-close-text {
  padding: 137px 160px 136px 180px;
  flex: 1;
  position: relative;
}

.close-line {
  position: absolute;
  display: block;
}

.c-l-short,
.c-l-short2 {
  width: 150px;
  background: var(--color-danger);
  height: 4px;
  transform: rotate(56.15deg);
  left: -36px;
}

.c-l-long,
.c-l-long2 {
  width: 250px;
  background: var(--color-danger);
  height: 4px;
  transform: rotate(-61.35deg);
  right: -66px;
}

.c-l-short {
  top: 200px;
}

.c-l-short2 {
  bottom: 170px;
}

.c-l-long {
  top: 166px;
}

.c-l-long2 {
  bottom: 150px;
}

.close-title {
  font-family: 'Questrial';
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 143.2%;
  color: var(--color-dark);
  margin-bottom: 10px;
}

.close-text {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 183.7%;
  color: var(--color-dark);
  margin-bottom: 55px;
}

.homepage-close-image {
  height: cover;
  width: 45%;
  background-image: url('~assets/images/homepage2.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
}

@media only screen and (max-width: 1350px) {
  .homepage-close-text {
    padding: 100px 120px 100px 120px;
  }
}

/* small screen */
@media only screen and (max-width: 1080px) {
  .desk {
    display: none;
  }

  .homepage-about {
    flex-direction: column;
    background-image: none;
    /* background-image: url('~assets/svg/homepage-patterns-mobile.svg');
    background-position: center;
    background-repeat: repeat;
    background-size: cover; */
  }

  .homepage-about-wedo {
    padding: 59px 30px 45px;
  }

  .wedo-header {
    flex-direction: column;
    display: block;
  }

  .wedo-title {
    font-size: 12px;
    line-height: 193.7%;
    margin-right: 0;
    margin-bottom: 24px;
    text-align: center;
  }

  .wedo-hl {
    width: 100%;
    height: 1px;
  }

  .wedo-text {
    font-size: 15px;
    line-height: 227.7%;
    text-align: center;
  }

  .homepage-about-mission {
    flex-direction: column;
  }

  .mission-content {
    padding: 55px 30px 63px;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .mission-content-title {
    font-size: 12px;
    line-height: 193.7%;
    text-align: center;
  }

  .mission-content-text {
    font-size: 22px;
    line-height: 205.7%;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 40px;
  }

  .mission-photo {
    width: 100%;
    height: 292px;
  }

  /* expertise */
  .expertise {
    padding: 53px 30px 0;
  }

  .expertise-title {
    font-size: 25px;
    line-height: 26px;
    margin-bottom: 35px;
  }

  .expertise-card {
    height: 215px;
    padding: 38px 35px 30px;
  }

  .expertise-card img {
    max-width: 47px;
    max-height: 43px;
  }

  .expertise-card-text {
    font-size: 18px;
    line-height: 143.2%;
  }

  .e-c-line {
    bottom: 80px;
  }
  
  .e-c-large {
    grid-column: span 6; /* grid-column: span 6;  */
  }

  .e-c-normal {
    grid-column: span 6;
  }

  /* casestudy */
  .casestudy {
    padding: 60px 0 0 0;
  }

  .casestudy-title {
    font-size: 25px;
    line-height: 26px;
    margin-bottom: 38px;
    padding: 0 30px;
  }

  .casestudy-cards {
    height: 354px;
  }

  /* testimonials */
  .testimonial {
    padding: 54px 30px 61px;
  }

  .testimonial-title {
    font-size: 12px;
    line-height: 193.7%;
    text-align: center;
    margin-bottom: 6px;
  }

  .testimonial-subtitle {
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 54px;
  }

  /* brands */
  .brands {
    padding: 60px 30px 55px;
  }

  .brands-two {
    padding: 0 30px 75px;
  }

  .brands-title {
    font-size: 12px;
    line-height: 193.7%;
    margin-bottom: 30px;
  }

  .brands-logos {
    gap: 30px;
  }

  .brands-logos img {
    max-width: 130px;
    max-height: 90px;
  }

  .brand-center button {
    font-size: 12px;
    line-height: 15px;
    border-radius: 31px;
    border: none;
    padding: 16px 22px;
  }
  /* clients and friends */
  .open-clients {
    max-height: 220px;
  }
  /* insights */
  .open-insights {
    max-height: 220px;
  }

  /* closing statement */
  .homepage-close {
    flex-direction: column;
  }

  .homepage-close-text {
    padding: 74px 30px 74px;
    flex: 1;
  }

  .close-line {
    display: none;
  }

  .close-title {
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 143.2%;
    margin-bottom: 17px;
  }

  .close-text {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 183.7%;
    margin-bottom: 36px;
  }

  .homepage-close-image {
    width: 100%;
    height: 342px;
    background-image: url('~assets/images/homepage2-mobile.png');
  }
}

@media only screen and (max-width: 850px) {
  .testimony {
    flex-direction: column;
  }

  .testimony-picture {
    width: 100%;
    height: 300px;
  }

  .testimony-picture img {
    border-radius: 20px 20px 0px 0px;
  }

  .testimony-content {
    padding: 40px 30px 45px;
  }

  .testimony-content-name {
    text-align: center;
    font-size: 20px;
    line-height: 143.2%;
    margin-bottom: 7px;
  }

  .testimony-content-role {
    text-align: center;
    font-size: 12px;
    line-height: 168.2%;
    margin-bottom: 40px;
  }

  .testimony-content-content {
    padding: 11px 0 0;
  }

  .testimony-quote {
    height: 34px;
    width: 34px;
    top: 0;
    left: 45.6%;
  }

  .testimony-content-content-text {
    text-align: center;
    font-size: 15px;
    line-height: 219.2%;
    margin-bottom: 36px;
  }
}

@media only screen and (max-width: 800px) {
  .expertise-cards {
    grid-template-columns: repeat(6, minmax(auto, 150px));
    gap: 20px 20px;
  }
}

/* small screen */
@media only screen and (max-width: 600px) {
  .mission-photo {
    background-image: url('~assets/images/homepage1-mobile.png');
  }
}
</style>
