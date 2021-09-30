<template>
  <v-row class="top-project-wrapper col-12 pa-0 ma-0">
    <v-img
      v-for="(project, index) in topProjects"
      :key="project.id"
      :class="`top-project-${index + 1} secondary`"
      :lazy-src="project.thumbnail"
      :src="project.image"
    >
    </v-img>
  </v-row>
</template>

<style scoped>
.top-project-wrapper {
  position: relative;
  height: 80vh;
}
.top-project-1 {
  position: absolute;
  top: 15vh;
  left: 5vw;
  width: 25vw;
  height: 55vh;
}
.top-project-2 {
  position: absolute;
  top: 5vh;
  left: 20vw;
  width: 30vw;
  height: 70vh;
}
.top-project-3 {
  position: absolute;
  right: 20vw;
  bottom: 15vh;
  width: 30vw;
  height: 40vh;
}
.top-project-4 {
  position: absolute;
  top: 10vh;
  right: 5vw;
  width: 25vw;
  height: 50vh;
}
/* 1440px-1904px */
@media screen and (min-width: 1440px) and (max-width: 1904px) {
  .top-project-1 {
    top: 15vh;
    left: 0vw;
    width: 20vw;
    height: 55vh;
  }
  .top-project-2 {
    top: 5vh;
    left: 20vw;
    width: 25vw;
    height: 70vh;
  }
  .top-project-3 {
    right: 10vw;
    bottom: 10vh;
    width: 25vw;
    height: 40vh;
  }
  .top-project-4 {
    top: 10vh;
    right: 0vw;
    width: 20vw;
    height: 50vh;
  }
}
/* xs - < 600px */
@media screen and (max-width: 600px) {
  .top-project-wrapper {
    height: 50vh;
  }
  .top-project-1 {
    top: 20vh;
    left: 5vw;
    width: 35vw;
    height: 20vh;
  }
  .top-project-2 {
    top: 5vh;
    left: 20vw;
    width: 50vw;
    height: 25vh;
  }
  .top-project-3 {
    right: 15vw;
    bottom: 5vh;
    width: 40vw;
    height: 25vh;
  }
  .top-project-4 {
    top: 8vh;
    right: 5vw;
    width: 25vw;
    height: 15vh;
  }
}
</style>

<script>
export default {
  name: 'TopProjects',
  props: {
    topProjects: {
      type: Array,
      required: true,
    },
  },
}
</script>