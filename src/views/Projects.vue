<template>
  <v-container>
    <v-row>
      <div class="projects-wrapper col-12 mt-0 mt-sm-16">
        <v-chip-group
          v-model="filter"
          column
          mandatory
          active-class="primary"
          class="projects-chip-group"
        >
          <v-chip
            v-for="category in categories"
            :key="category"
            @click.stop.prevent="categoryFilter(category)"
            filter
            filter-icon="mdi-arrow-down-left"
            class="ma-2"
          >
            <router-link
              class="nav-link text-decoration-none black--text"
              :to="{
                name: 'projects',
                query: { category: encodeURIComponent(category) },
              }"
            >
              {{ category }}
            </router-link>
          </v-chip>
        </v-chip-group>

        <v-row class="ma-0">
          <v-col
            v-for="project in filteredProjects"
            :key="project.id"
            class="d-flex child-flex"
            cols="12"
            sm="6"
            xl="4"
          >
            <v-hover v-slot="{ hover }">
              <v-img
                :src="project.image"
                :lazy-src="project.thumbnail"
                aspect-ratio="1"
                class="secondary"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="black"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <v-expand-transition>
                  <router-link
                    :to="{
                      name: 'project',
                      params: { id: project.title.replace(/\s/g, '') },
                    }"
                    v-if="hover"
                    class="
                      d-flex
                      flex-column
                      transition-fast-in-fast-out
                      v-card--reveal
                      text-decoration-none
                    "
                    style="height: 100%"
                  >
                    <div class="project-reveal-spacer"></div>
                    <div
                      class="
                        project-reveal-content-wrapper
                        d-flex
                        justify-space-between
                      "
                    >
                      <div class="project-reveal-text-wrapper">
                        <div class="project-reveal-category white--text">
                          # {{ project.category }}
                        </div>
                        <div class="project-reveal-title">
                          <h2 class="white--text">{{ project.title }}</h2>
                        </div>
                      </div>

                      <div
                        class="
                          project-reveal-icon-wrapper
                          white--text
                          text-right
                        "
                      >
                        <v-icon color="white" class="icon-nav-arrow"
                          >mdi-arrow-top-right</v-icon
                        >
                      </div>
                    </div>
                  </router-link>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-chip--active.v-chip--clickable.v-chip--no-color.theme--light.v-size--default
  >>> i {
  margin-left: -2px;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0) 50%);
}
.project-reveal-spacer {
  height: 70%;
}
.project-reveal-content-wrapper {
  width: 85%;
}
.project-reveal-icon-wrapper {
}
/* xl - >1904px */
@media screen and (min-width: 1904px) {
  .v-chip {
    font-size: 1.2rem;
    line-height: 2.2rem;
  }
}
</style>

<script>
const pageData = {
  categories: ['All', 'Identity & Communication', 'Programming', 'UI/UX'],
  projects: [
    {
      id: '1',
      title: 'Project 1',
      category: 'Identity & Communication',
      image: 'https://picsum.photos/id/10/1920/1080',
      thumbnail: 'https://picsum.photos/id/10/16/9',
    },
    {
      id: '2',
      title: 'Project 2',
      category: 'Identity & Communication',
      image: 'https://picsum.photos/id/1000/1920/1080',
      thumbnail: 'https://picsum.photos/id/1000/16/9',
    },
    {
      id: '3',
      title: 'Project 3',
      category: 'Identity & Communication',
      image: 'https://picsum.photos/id/1018/1920/1080',
      thumbnail: 'https://picsum.photos/id/1018/16/9',
    },
    {
      id: '4',
      title: 'Project 4',
      category: 'Programming',
      image: 'https://picsum.photos/id/1020/1920/1080',
      thumbnail: 'https://picsum.photos/id/1020/16/9',
    },
    {
      id: '5',
      title: 'Project 5',
      category: 'Programming',
      image: 'https://picsum.photos/id/1023/1920/1080',
      thumbnail: 'https://picsum.photos/id/1023/16/9',
    },
    {
      id: '6',
      title: 'Project 6',
      category: 'Programming',
      image: 'https://picsum.photos/id/1026/1920/1080',
      thumbnail: 'https://picsum.photos/id/1026/16/9',
    },
    {
      id: '7',
      title: 'Project 7',
      category: 'UI/UX',
      image: 'https://picsum.photos/id/1029/1920/1080',
      thumbnail: 'https://picsum.photos/id/1029/16/9',
    },
    {
      id: '8',
      title: 'Project 8',
      category: 'UI/UX',
      image: 'https://picsum.photos/id/1031/1920/1080',
      thumbnail: 'https://picsum.photos/id/1031/16/9',
    },
  ],
}

export default {
  name: 'Projects',
  data() {
    return {
      filter: 0,
      categories: [],
      projects: [],
      filteredProjects: [],
    }
  },
  created() {
    const { category = '' } = this.$route.query
    this.fetchpageData({
      queryCategory: category,
    })
  },
  beforeRouteUpdate(to, from, next) {
    const { category = '' } = to.query
    this.fetchpageData({
      queryCategory: category,
    })
    next()
  },
  methods: {
    fetchpageData({ queryCategory }) {
      const { categories, projects } = pageData
      this.categories = categories
      this.projects = projects
      const category = decodeURIComponent(queryCategory)
      if (category) {
        this.categoryFilter(category)

        const categoryFilter = (string) => string === category
        this.filter = this.categories.findIndex(categoryFilter)
      } else {
        this.categoryFilter('All')
      }
    },
    categoryFilter(category) {
      if (category === 'All') {
        return (this.filteredProjects = this.projects)
      }
      this.filteredProjects = this.projects.filter(
        (project) => project.category === category
      )
    },
  },
}
</script>