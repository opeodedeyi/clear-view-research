<template>
  <div class="homepage">
    <videojumbotron/>
    <weojumbotron 
      :weempowerorganizations="weempowerorganizations"/> <!-- WE EMPOWER ORGANIZATIONS SECTION -->
    <div class="soop-jumbotron"> <!-- SOME OF OUR PROJECTS SECTION -->
      <p class="soop-jumbo-header">SOME OF OUR PROJECTS</p>
      <p class="soop-jumbo-title">Read some of our casestudies</p>
      <div class="soop-jumbo-cards" v-if="caseStudies != null">
        <altcard
          typeofcard="soop"
          v-for="(result, index) in caseStudies"
          :key="index"
          :slug="result.slug"
          :featuredImage="result.featuredImage"
          :title="result.title"
          :description="result.description"
          :date="result.createdAt" />
      </div>
      <loadingcard v-else/>
      <div class="soop-jumbo-cta">
          <mainbutton type="link" to="/casestudies" size="medium">Read more case studies</mainbutton>
      </div>
    </div>
    <brands
      header="REFRENCES"
      title="Our insights and projects have been refrenced in"
      :logos="refrences" /> <!-- REFRENCES SECTION -->
    <wwdjumbotron
      :whatWeDo="whatwedo" /> <!-- WHAT WE DO SECTION -->
    <brands
      header="PARTNERS"
      title="Our clients and friends"
      :logos="partners" /> <!-- PARTNERS SECTION -->
    <testimonials
      :testimonials="testimonials" /> <!-- TESTIMONIALS SECTION -->
    <closingstatement/>
  </div>
</template>

<script>
import videojumbotron from "@/components/general/videojumbotron";
import weojumbotron from "@/components/general/weojumbotron";
import brands from "@/components/general/brands";
import wwdjumbotron from "@/components/general/wwdjumbotron";
import testimonials from "@/components/general/testimonials";
import closingstatement from "@/components/general/closingstatement";
import mainbutton from "@/components/utilities/mainbutton";
import altcard from "@/components/utilities/altcard";
import loadingcard from "@/components/utilities/loadingcard";

export default {
  data() {
    return {
      caseStudies: null,
      refrences: ['bbcradio.svg','glamour.svg','metro.svg','skynews.svg','theguardian.svg','theindependent.svg','thesun.svg','thetelegraph.svg'],
      partners: ['m&c.svg','artscouncil.svg','uber.svg','tinder.png','starbucks.svg','kingscollege.svg','kpmg.svg','nhs.svg', 'ms.png'],
      weempowerorganizations: [
          {id: 1, image: 'ccc.svg', title: 'Create Clear Communication', content:'We work with a variety of communities to build strong and meaningful connections.'},
          {id: 2, image: 'dgu.svg', title: 'Develop Greater Understanding', content:'We help you discover actual information from folks who are typically unheard by using creative research methods.'},
          {id: 3, image: 'eli.svg', title: 'Ensure Lasting Impact', content:'We give vital and strategic support so that you can have a significant impact.'},
      ],
      whatwedo: [
        {id: 1, image: 'audienceinsight.svg', title: 'Audience Insight', content:'Learn more about the aaudience you seek to  understand and gather relevant and culturally informed insight'},
        {id: 2, image: 'advisory.svg', title: 'Advisory', content:'We share our expertise with you to help you in developing effective strategies to make a huge social impact'},
        {id: 3, image: 'comms.svg', title: 'Comms & Marketing', content:'Want to create bold campaigns that make an impact and hit close to home? We help you do just that'},
        {id: 4, image: 'learningpartner.svg', title: 'Learning Partner', content:'Team work makes the dream work. We collaborate with organizations that are truly about solving problems in the society'},
        {id: 5, image: 'monitoring.svg', title: 'Monitoring & Evaluation', content:'We have the experience in monitoring diverse and excluded communities, and evaluating initiatives targeted at them'},
        {id: 6, image: 'strategicplanning.svg', title: 'Strategic Planning', content:'Crush those business goals with our actionable strategies based on relevant insights'},
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
    weojumbotron,
    brands,
    wwdjumbotron,
    testimonials,
    closingstatement,
    mainbutton,
    altcard,
    loadingcard
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
    }
  },
  mounted() {
    this.getCaseStudies()
  }
}
</script>

<style scoped>
.soop-jumbotron {
  padding: 100px 64px 100px;
}

.soop-jumbo-header {
  color: var(--color-danger);
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.soop-jumbo-title {
  text-align: center;
  color: var(--color-company);
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 48px;
}

.soop-jumbo-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.soop-jumbo-cards {
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 200px));
  gap: 24px;
  width: 100%;
}

.soop-jumbo-cta {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-top: 48px;
}

/* small screen */
@media only screen and (max-width: 800px) {
  .soop-jumbotron {
    padding: 48px 20px 48px;
    border-top: 1px solid var(--color-form-border);
  }

  .soop-jumbo-title {
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 32px;
  }

  .soop-jumbo-cta {
    margin-top: 40px;
  }

  .soop-jumbo-cards {
    grid-template-columns: repeat(6, minmax(auto, 150px));
    gap: 24px;
  }
}
</style>
