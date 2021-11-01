<template>
  <v-container>
    <TopProjects :topProjects="topProjects" />
    <v-row class="home-latest-project-intro-wrapper">
      <div class="col-12 col-sm-7">
        <p class="home-latest-project-subtitle">Latest Projects</p>
      </div>
      <div class="home-latest-project-intro col-12 col-sm-5">
        Over the last 5 years, I've worked on a diverse range of products across
        multiple disciplines from branding, visual design, and programming.<br /><br />Take
        a peek at my latest projects:
      </div>
    </v-row>
    <LatestProjects :latestProjects="latestProjects" />
  </v-container>
</template>

<style scoped>
.home-latest-project-intro-wrapper {
  padding: 10rem 0 1rem 0;
}
.home-latest-project-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: underline;
}
.home-latest-project-intro {
  word-wrap: break-word;
}
/* xl - >1904px */
@media screen and (min-width: 1904px) {
  .home-latest-project-subtitle {
    font-size: 2.5rem;
  }
  .home-latest-project-intro {
    font-size: 1.5rem;
  }
}
/* xs - < 600px */
@media screen and (max-width: 600px) {
  .home-latest-project-intro-wrapper {
    padding: 5rem 0 1rem 0;
  }
}
</style>

<script>
import TopProjects from '../components/TopProjects.vue'
import LatestProjects from '../components/LatestProjects.vue'

const pageData = {
  topProjects: [
    {
      id: '3',
      title: 'Dyaco B2B Order Placing Site',
      image: require('@/assets/projects/dyaco-b2b/laptop.jpg'),
      imageThumbnail: require('@/assets/projects/dyaco-b2b/laptop-thumbnail.jpg'),
    },
    {
      id: '7',
      title: 'Sole Fitness',
      image: require('@/assets/projects/sole-fitness/3fold.jpg'),
      thumbnail: require('@/assets/projects/sole-fitness/3fold-thumbnail.jpg'),
    },
    {
      id: '2',
      title: 'Alma Burton',
      image: require('@/assets/projects/alma-burton/stationery.jpg'),
      thumbnail: require('@/assets/projects/alma-burton/stationery-thumbnail.jpg'),
    },
    {
      id: '4',
      title: 'Philips PTS Official Page',
      image: require('@/assets/projects/phillips-pts/recare.jpg'),
      thumbnail: require('@/assets/projects/phillips-pts/recare-thumbnail.jpg'),
    },
  ],
  latestProjects: [
    {
      id: '8',
      title: 'Simple Twitter',
      image: require('@/assets/projects/simple-twitter/cover.jpg'),
      thumbnail: require('@/assets/projects/simple-twitter/cover-thumbnail.jpg'),
    },
    {
      id: '7',
      title: 'Sole Fitness',
      image: require('@/assets/projects/sole-fitness/cover.jpg'),
      thumbnail: require('@/assets/projects/sole-fitness/cover-thumbnail.jpg'),
    },
    {
      id: '6',
      title: 'Fuel Fitness',
      image: require('@/assets/projects/fuel-fitness/cover-1.jpg'),
      thumbnail: require('@/assets/projects/fuel-fitness/cover-1-thumbnail.jpg'),
    },
    {
      id: '5',
      title: 'Expense Tracker',
      image: require('@/assets/projects/expense-tracker/cover.jpg'),
      thumbnail: require('@/assets/projects/expense-tracker/cover-thumbnail.jpg'),
    },
  ],
}

export default {
  name: 'Home',
  components: {
    TopProjects,
    LatestProjects,
  },
  data() {
    return {
      topProjects: [],
      latestProjects: [],
    }
  },
  created() {
    this.fetchpageData()
  },
  methods: {
    fetchpageData() {
      const { topProjects, latestProjects } = pageData
      this.topProjects = topProjects
      this.latestProjects = latestProjects
    },
  },
}
</script>
