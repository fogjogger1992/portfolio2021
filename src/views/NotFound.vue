<template>
  <v-main class="main d-flex align-center text-center">
    <v-col cols="12" class="pb-0">
      <h1 class="num font-weight-bold pl-2 pr-2">404</h1>
    </v-col>
    <v-col cols="12" class="pt-0">
      <h1 class="headline font-weight-bold pl-2 pr-2">PAGE NOT FOUND</h1>
    </v-col>
    <v-col cols="12" class="pt-12">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <router-link to="/" style="text-decoration: none">
            <v-icon
              aria-label="Go back to home page."
              x-large
              v-bind="attrs"
              v-on="on"
              color="black"
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
  color: #181818;
}
.num {
  font-size: 100px;
  word-wrap: break-word;
}
.icon-arrow {
  transform: rotate(45deg);
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
</style>