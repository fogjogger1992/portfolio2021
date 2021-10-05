<template>
  <v-container>
    <TopProjects :topProjects="topProjects" />
    <v-row class="home-latest-project-intro-wrapper">
      <div class="col-12 col-sm-7">
        <p class="home-latest-project-subtitle">Latest Projects</p>
      </div>
      <div class="home-latest-project-intro col-12 col-sm-5">
        Over the last 5 years, I've worked on a diverse range of products across
        multiple disciplines from branding, visual design, and code.<br /><br />Take
        a peek at my latest projects:
      </div>
    </v-row>
    <LatestProjects :latestProjects="latestProjects" />
  </v-container>
</template>

<style scoped>
</style>

<script>
import TopProjects from '../components/TopProjects.vue'
import LatestProjects from '../components/LatestProjects.vue'

const pageData = {
  topProjects: [
    {
      id: '1',
      title: 'Project 1',
      image: 'https://picsum.photos/id/10/1920/1080',
      thumbnail: 'https://picsum.photos/id/10/16/9',
    },
    {
      id: '2',
      title: 'Project 2',
      image: 'https://picsum.photos/id/1000/1920/1080',
      thumbnail: 'https://picsum.photos/id/1000/16/9',
    },
    {
      id: '3',
      title: 'Project 3',
      image: 'https://picsum.photos/id/1018/1920/1080',
      thumbnail: 'https://picsum.photos/id/1018/16/9',
    },
    {
      id: '4',
      title: 'Project 4',
      image: 'https://picsum.photos/id/1020/1920/1080',
      thumbnail: 'https://picsum.photos/id/1020/16/9',
    },
  ],
  latestProjects: [
    {
      id: '5',
      title: 'Project 5',
      image: 'https://picsum.photos/id/1023/1920/1080',
      thumbnail: 'https://picsum.photos/id/1023/16/9',
    },
    {
      id: '6',
      title: 'Project 6',
      image: 'https://picsum.photos/id/1026/1920/1080',
      thumbnail: 'https://picsum.photos/id/1026/16/9',
    },
    {
      id: '7',
      title: 'Project 7',
      image: 'https://picsum.photos/id/1029/1920/1080',
      thumbnail: 'https://picsum.photos/id/1029/16/9',
    },
    {
      id: '8',
      title: 'Project 8',
      image: 'https://picsum.photos/id/1031/1920/1080',
      thumbnail: 'https://picsum.photos/id/1031/16/9',
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
