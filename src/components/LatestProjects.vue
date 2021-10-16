<template>
  <v-container>
    <v-row
      v-for="(project, index) in latestProjects"
      :key="project.title.replace(/\s/g, '')"
      class="latest-project-wrapper d-flex flex-row-reverse mb-16 pb-sm-16"
    >
      <div
        :class="`project-image-wrapper pa-0 col-12 col-sm-${
          6 + ((index + 1) % 2) * 6
        }`"
      >
        <router-link
          :to="{
            name: 'project',
            params: { id: encodeURIComponent(project.title) },
          }"
        >
          <v-img
            :lazy-src="project.thumbnail"
            :src="project.image"
            class="project-image secondary"
            height="100%"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="black"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </router-link>
      </div>
      <div
        :class="`project-info-wrapper d-flex flex-wrap col-12 col-sm-${
          6 + ((index + 1) % 2) * 6
        } pa-0`"
      >
        <div
          :class="`project-text-wrapper col-12 col-sm-${
            10 + (index % 2) * 2
          } pa-0`"
        >
          <div
            v-if="index % 2 === 1"
            class="project-text-wrapper-spacer no gutter"
          ></div>
          <router-link
            :to="{ name: 'project', params: { id: project.id } }"
            class="text-decoration-none"
          >
            <p class="project-text-wrapper-title">
              {{ project.title.toUpperCase() }}
            </p>
            <p class="text-decoration-underline">View More</p>
          </router-link>
        </div>

        <div
          v-if="index % 2 !== 1"
          :class="`project-text-wrapper-icon col-12 col-sm-${
            2 + (index % 2) * 10
          } px-0 text-right`"
        >
          <router-link :to="{ name: 'project', params: { id: project.id } }">
            <img src="../assets/general/top-right-arrow.svg" />
          </router-link>
        </div>
        <div
          v-else
          :class="`project-text-wrapper-icon col-12 col-sm-${
            2 + (index % 2) * 10
          } px-0`"
        >
          <router-link :to="{ name: 'project', params: { id: project.id } }">
            <img src="../assets/general/top-right-arrow.svg" />
          </router-link>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.project-image-wrapper {
  height: 80vh;
}
.project-text-wrapper-spacer {
  height: 50vh;
}
.project-text-wrapper-title {
  font-size: 4rem;
  font-weight: 400;
  word-wrap: break-word;
}
.project-text-wrapper-icon >>> img {
  height: 5rem;
  width: 5rem;
}
/* xl - >1904px */
@media screen and (min-width: 1904px) {
  .latest-project-wrapper {
    padding: 4rem 0;
  }
  .project-text-wrapper-spacer {
    height: 45vh;
  }
  .project-image-wrapper {
    height: 75vh;
  }
}
/* sm - 600px-960px */
@media screen and (max-width: 960px) {
  .project-text-wrapper-spacer {
    height: 20vh;
  }
  .project-image-wrapper {
    height: 60vh;
  }
}
/* xs - < 600px */
@media screen and (max-width: 600px) {
  .project-text-wrapper-spacer {
    height: 0;
  }
  .project-text-wrapper-title {
    font-size: 3rem;
  }
  .project-text-wrapper-icon {
    text-align: left !important;
  }
  .project-text-wrapper-icon >>> img {
    height: 4rem;
    width: 4rem;
  }
}
/* iphoneSE - < 320px */
@media screen and (max-width: 320px) {
  .project-text-wrapper-title {
    font-size: 2rem;
  }
}
</style>

<script>
export default {
  name: 'LatestProjects',
  props: {
    latestProjects: {
      type: Array,
      required: true,
    },
  },
}
</script>
