<template>
  <div class="homepage">
    <videojumbotron/>
    <weojumbotron/> <!-- WE EMPOWER ORGANIZATIONS SECTION -->
    <div class="soop-jumbotron">
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
      <div class="soop-jumbo-cta">
          <mainbutton type="link" to="/casestudies" size="medium">Read more casestudies</mainbutton>
      </div>
    </div>
    <brands
      header="REFRENCES"
      title="Our insights and projects have been refrenced in"
      :logos="refrences" />
    <wwdjumbotron
      :whatWeDo="whatwedo" />
    <brands
      header="PARTNERS"
      title="Some of our clients and friends"
      :logos="partners" />
    <testimonials
      :testimonials="testimonials" />
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

export default {
  data() {
    return {
      caseStudies: null,
      refrences: ['bbcradio.svg','glamour.svg','metro.svg','skynews.svg','theguardian.svg','theindependent.svg','thesun.svg','thetelegraph.svg'],
      partners: ['m&c.svg','artscouncil.svg','uber.svg','tinder.svg','starbucks.svg','kingscollege.svg','kpmg.svg'],
      whatwedo: [
        {id: 1, image: 'ccc.svg', title: 'Create Clear Communication', content:'To engage diverse communities and make strong and authentic connections and strong connections'},
        {id: 2, image: 'dgu.svg', title: 'Develop Greater Understanding', content:'Using innovative research approaches we help you to uncover real insight from those who often go unheard'},
        {id: 3, image: 'eli.svg', title: 'Ensure Lasting Impact', content:'We provide critical and strategic support to enable you to make a meaningful difference'},
        {id: 4, image: 'ccc.svg', title: 'Create Clear Communication', content:'To engage diverse communities and make strong and authentic connections and strong connections'},
        {id: 5, image: 'dgu.svg', title: 'Develop Greater Understanding', content:'Using innovative research approaches we help you to uncover real insight from those who often go unheard'},
        {id: 6, image: 'eli.svg', title: 'Ensure Lasting Impact', content:'We provide critical and strategic support to enable you to make a meaningful difference'},
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
    altcard
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
      console.log(caseStudies);
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
  padding: 100px 64px;
}

.soop-jumbo-header {
  color: var(--color-danger);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
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
  gap: 48px 24px;
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
    padding: 48px 20px;
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
    gap: 32px 24px;
  }
}
</style>
