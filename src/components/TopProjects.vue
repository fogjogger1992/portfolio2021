<template>
  <v-row class="top-project-wrapper col-12 pa-0 ma-0">
    <router-link
      v-for="(project, index) in topProjects"
      :key="project.title.replace(/\s/g, '')"
      :to="{
        name: 'project',
        params: { id: encodeURIComponent(project.title) },
      }"
    >
      <v-img
        :class="`top-project-${index + 1} secondary`"
        :lazy-src="project.thumbnail"
        :src="project.image"
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

  -webkit-animation: slide-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.top-project-2 {
  position: absolute;
  top: 5vh;
  left: 20vw;
  width: 30vw;
  height: 70vh;

  -webkit-animation: slide-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.top-project-3 {
  position: absolute;
  right: 20vw;
  bottom: 15vh;
  width: 30vw;
  height: 40vh;

  -webkit-animation: slide-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.top-project-4 {
  position: absolute;
  top: 10vh;
  right: 5vw;
  width: 25vw;
  height: 50vh;

  -webkit-animation: slide-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
/* top project animation - slide */
@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes slide-left {
  0% {
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes slide-left {
  0% {
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
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