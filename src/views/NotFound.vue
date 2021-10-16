<template>
  <v-main class="main d-flex align-center text-center">
    <v-col cols="12" class="pb-0">
      <h1 class="num font-weight-bold black--text pl-2 pr-2">404</h1>
    </v-col>
    <v-col cols="12" class="headline pt-0">
      <h1 class="font-weight-bold black--text pl-2 pr-2">PAGE NOT FOUND</h1>
    </v-col>
    <v-col cols="12" class="pt-12">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <router-link to="/home" style="text-decoration: none">
            <v-icon
              aria-label="Go back to home page."
              x-large
              v-bind="attrs"
              v-on="on"
              color="primary"
              class="icon-arrow mb-5"
              >mdi-arrow-up-circle-outline</v-icon
            >
          </router-link>
        </template>
        <span class="tooltip">Not to worry. <br />Let's go home!</span>
      </v-tooltip>
    </v-col>
  </v-main>
</template>

<style scoped>
.main {
  height: 100vh;
}
.num {
  font-size: 100px;
  word-wrap: break-word;
}
.headline >>> h1 {
  font-size: 22px;
  line-height: 27px;
}
.icon-arrow {
  transform: rotate(45deg);
  font-size: 50px !important;
}
.icon-arrow:hover {
  transform: rotate(-90deg);
  transition-duration: 0.5s;
  transition-timing-function: ease;
}
.tooltip {
  text-align: center;
  display: block;
}
/* animation focus-in-expand */
.num,
.headline >>> h1,
.icon-arrow {
  -webkit-animation: focus-in-expand 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: focus-in-expand 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
/* xl - >1904px */
@media screen and (min-width: 1904px) {
  .num {
    font-size: 300px;
    line-height: 350px;
  }
  .headline >>> h1 {
    font-size: 65px;
    line-height: 110px;
  }
  .icon-arrow {
    font-size: 80px !important;
  }
}
</style>