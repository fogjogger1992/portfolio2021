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
            :key="project.title.replace(/\s/g, '')"
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
                      params: { id: encodeURIComponent(project.title) },
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
                    <div class="project-reveal-spacer flex-grow-1"></div>
                    <div
                      class="
                        project-reveal-content-wrapper
                        d-flex
                        justify-space-between
                      "
                    >
                      <div class="project-reveal-text-wrapper">
                        <div class="project-reveal-category pb-xl-2">
                          <span
                            v-for="(category, index) in project.categories"
                            :key="category.replace(/\s/g, '') + index"
                            class="white--text pr-2"
                          >
                            # {{ category }}</span
                          >
                        </div>
                        <div class="project-reveal-title">
                          <h2 class="white--text mb-8">{{ project.title }}</h2>
                        </div>
                      </div>

                      <div
                        class="
                          project-reveal-icon-wrapper
                          white--text
                          text-right
                        "
                      >
                        <v-icon large color="white" class="icon-nav-arrow"
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
  font-size: 1rem;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0) 50%);
}
.project-reveal-content-wrapper {
  width: 85%;
}
/* xl - >1904px */
@media screen and (min-width: 1904px) {
  .v-chip,
  .v-chip--active.v-chip--clickable.v-chip--no-color.theme--light.v-size--default
    >>> i {
    font-size: 1.2rem;
    line-height: 2.2rem;
    margin-left: 2px;
  }
  .project-reveal-category {
    font-size: 1.2rem;
  }
  .project-reveal-title {
    font-size: 1.5rem;
  }
}
/* xs - < 600px */
@media screen and (max-width: 600px) {
  .projects-wrapper {
    margin-bottom: 5vh;
  }
}
</style>

<script>
const pageData = {
  categories: ['All', 'Identity & Communication', 'Programming', 'UI/UX'],
  projects: [
    {
      id: '8',
      title: 'Simple Twitter',
      categories: ['Programming'],
      image: require('@/assets/projects/simple-twitter/cover.jpg'),
      thumbnail: require('@/assets/projects/simple-twitter/cover-thumbnail.jpg'),
    },
    {
      id: '7',
      title: 'Sole Fitness',
      categories: ['Identity & Communication'],
      image: require('@/assets/projects/sole-fitness/cover.jpg'),
      thumbnail: require('@/assets/projects/sole-fitness/cover-thumbnail.jpg'),
    },
    {
      id: '6',
      title: 'Fuel Fitness',
      categories: ['Identity & Communication'],
      image: require('@/assets/projects/fuel-fitness/cover-1.jpg'),
      thumbnail: require('@/assets/projects/fuel-fitness/cover-1-thumbnail.jpg'),
    },
    {
      id: '5',
      title: 'Expense Tracker',
      categories: ['Programming', 'UI/UX'],
      image: require('@/assets/projects/expense-tracker/cover.jpg'),
      thumbnail: require('@/assets/projects/expense-tracker/cover-thumbnail.jpg'),
    },
    {
      id: '4',
      title: 'Philips PTS Official Page',
      categories: ['UI/UX'],
      image: require('@/assets/projects/phillips-pts/cover.jpg'),
      thumbnail: require('@/assets/projects/phillips-pts/cover-thumbnail.jpg'),
    },
    {
      id: '3',
      title: 'Dyaco B2B Order Placing Site',
      categories: ['UI/UX'],
      image: require('@/assets/projects/dyaco-b2b/cover.jpg'),
      imageThumbnail: require('@/assets/projects/dyaco-b2b/cover-thumbnail.jpg'),
    },
    {
      id: '2',
      title: 'Alma Burton',
      categories: ['Identity & Communication'],
      image: require('@/assets/projects/alma-burton/cover.jpg'),
      thumbnail: require('@/assets/projects/alma-burton/cover-thumbnail.jpg'),
    },
    {
      id: '1',
      title: 'Alpha Jet',
      categories: ['Identity & Communication'],
      image: require('@/assets/projects/alpha-jet/cover-1.jpg'),
      thumbnail: require('@/assets/projects/alpha-jet/cover-1-thumbnail.jpg'),
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
      try {
        const category = decodeURIComponent(queryCategory)
        this.categoryFilter(category)
        const categoryFilter = (string) => string === category
        this.filter = this.categories.findIndex(categoryFilter)
        if (this.filter === -1) {
          this.categoryFilter('All')
        }
      } catch (e) {
        this.categoryFilter('All')
      }
    },
    categoryFilter(category) {
      if (category === 'All' || category === '' || !category) {
        return (this.filteredProjects = this.projects)
      }
      this.filteredProjects = this.projects.filter((project) =>
        project.categories.includes(category)
      )
    },
  },
}
</script>