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
  </div>
</template>

<script scoped>
import videojumbotron from "@/components/general/videojumbotron";
import mainbutton from "@/components/utilities/mainbutton";

export default {
  data() {
    return {
      caseStudies: null,
      refrences: [],
      partners: [],
      whatwedo: [
        {id: 1, image: 'comms.svg', title: 'Communications & Marketing'},
        {id: 2, image: 'audienceinsight.svg', title: 'Audience Insight'},
        {id: 3, image: 'advisory.svg', title: 'Advisory'},
        {id: 4, image: 'monitoring.svg', title: 'Monitoring & Evaluation'},
        {id: 5, image: 'learningpartner.svg', title: 'Learning Partner'},
        {id: 6, image: 'strategicplanning.svg', title: 'Strategic Planning'},
      ],
      testimonials: [
        {id: 1, image: 'dpfemale.png', name: 'Kate Goodman', role: 'Senior Campaigns Manager, Bite Back 2030', content:'CVR were great to work with, bringing unique and valuable insight to the team - which really helped steer our strategic direction on how to engage teenagers with the tricky topic of childhood obesity.'},
        {id: 2, image: 'dpmale.png', name: 'Jess Bool', role: 'Youth Strategy Lead, Unicef UK', content:'We worked with ClearView in Spring 2018 as part of our work to develop Unicef UK’s framework for youth engagement. Through a series of Solutions Labs and a bespoke digital tool that reached young people all over the UK, they prepared recommendations that have informed our work since.'},
        {id: 3, image: 'dpfemale.png', name: 'Anna Whitton', role: 'CEO, WDP', content:'The Clearview team were great to work with. They were energising, practical and provided really good quality feedback with clear, tangible recommendations. They built good rapport really quickly with our teams and delivered what we needed at pace.'},
        {id: 4, image: 'dpfemale.png', name: 'Lucie Russell', role: 'CEO, StreetDoctors', content:'ClearView provided us with a really comprehensive service. We wanted to get to the nub of what young people affected by violence, and those who work with them, needed to better support them. ClearView took a really authentic and grassroots approach to achieving this task. Their work was thoughtful, down to earth, youth centric and efficient, leading to the production of a really comprehensive final report that was a gold mine of insights.'}
      ]
    }
  },
  components: {
    videojumbotron,
    mainbutton
  },
  methods: {
    async getCaseStudies(limit = 2, skip = 0) {
      var response = await this.$contentful.client.getEntries({
        content_type: 'projects',
        order: '-sys.createdAt',
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
}

.homepage-about-design {
  width: 188px;
  height: cover;
  background-color: var(--color-company-dark)
}

.homepage-about-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.homepage-about-wedo {
  padding: 100px 178px 120px 150px;
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
  font-size: 30px; /* prefer 20 */
  line-height: 227.7%;
  margin-top: 24px;
  margin-bottom: 44px;
}

.homepage-about-mission {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: var(--color-company-dark);
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
  line-height: 227.7%;
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

/* small screen */
@media only screen and (max-width: 1080px) {
  .desk {
    display: none;
  }

  .homepage-about {
    flex-direction: column;
  }

  .homepage-about-wedo {
    padding: 59px 46px 45px;
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
    padding: 55px 46px 63px;
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
}

/* small screen */
@media only screen and (max-width: 600px) {
  .mission-photo {
    background-image: url('~assets/images/homepage1-mobile.png');
  }
}
</style>
