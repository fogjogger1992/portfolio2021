<template>
  <v-container>
    <v-row class="nav justify-space-between">
      <!--Nav Overlay-->
      <v-overlay
        :absolute="menu.absolute"
        :opacity="menu.opacity"
        :value="menu.overlay"
        class="overlay"
        color="olive"
      >
        <div class="overlay-menu-wrapper">
          <v-icon
            x-large
            color="white"
            class="icon-nav-menu-close"
            @click.stop.prevent="menu.overlay = false"
            >mdi-close</v-icon
          >
          <v-row class="justify-center">
            <div class="overlay-menu-spacer col-12"></div>
            <!--Menu-->
            <div class="overlay-menu-list col-12 col-sm-5 col-xl-3">
              <p @click.stop.prevent="menu.overlay = false">
                <router-link
                  :to="{ name: 'home' }"
                  style="text-decoration: none"
                >
                  HOME
                </router-link>
              </p>
              <p @click.stop.prevent="menu.overlay = false">
                <router-link
                  :to="{ name: 'about' }"
                  style="text-decoration: none"
                >
                  ABOUT
                </router-link>
              </p>
              <p @click.stop.prevent="menu.overlay = false">
                <router-link
                  :to="{ name: 'projects' }"
                  style="text-decoration: none"
                >
                  PROJECTS
                </router-link>
              </p>
            </div>
            <!--Info-->
            <div class="overlay-info col-12 col-sm-5 col-xl-3">
              <div class="overlay-info-logo-wrapper col-12 mb-4">
                <img
                  src="../assets/logo.svg"
                  class="overlay-menu-site-logo"
                  alt="logo"
                />
              </div>
              <div class="col-12 mb-4">
                <p>EJ TSENG</p>
                <a href="mailto:hello@ejtseng.com">hello@ejtseng.com</a>
              </div>
              <a
                href="https://github.com/fogjogger1992"
                target="_blank"
                rel="noreferrer noopener"
                class="justify-space-between"
                style="text-decoration: none"
              >
                <div class="nav-link col-12 d-flex">
                  <div class="col-1 pa-0 ma-0 mr-2">
                    <v-icon color="white" class="icon-nav-arrow"
                      >mdi-arrow-bottom-right</v-icon
                    >
                  </div>
                  <div class="col-9 pa-0 ma-0">GitHub</div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/ej-tseng-671b0b142/"
                target="_blank"
                rel="noreferrer noopener"
                class="justify-space-between"
                style="text-decoration: none"
              >
                <div class="nav-link col-12 d-flex">
                  <div class="col-1 pa-0 ma-0 mr-2">
                    <v-icon color="white" class="icon-nav-arrow"
                      >mdi-arrow-bottom-right</v-icon
                    >
                  </div>
                  <div class="col-9 pa-0 ma-0">Linkedin</div>
                </div>
              </a>
              <a
                href="https://ejtseng.medium.com/"
                target="_blank"
                rel="noreferrer noopener"
                class="justify-space-between"
                style="text-decoration: none"
              >
                <div class="nav-link col-12 d-flex">
                  <div class="col-1 pa-0 ma-0 mr-2">
                    <v-icon color="white" class="icon-nav-arrow"
                      >mdi-arrow-bottom-right</v-icon
                    >
                  </div>
                  <div class="col-9 pa-0 ma-0">Medium</div>
                </div>
              </a>
            </div>
          </v-row>
        </div>
      </v-overlay>
      <!--Header-->
      <div class="logo-wrapper col-12 col-sm-5 col-md-3">
        <router-link :to="{ name: 'home' }">
          <img src="../assets/logo.svg" class="site-logo" alt="logo" />
        </router-link>
      </div>
      <div class="intro-wrapper col-12 col-sm-12 col-md-4">
        Hi, I am EJ, a designer also a developer. I enjoy creating delightful
        online experiences.
      </div>
      <div
        class="
          link-wrapper
          col-9 col-sm-5 col-md-2
          d-flex
          flex-wrap
          justify-space-between
        "
      >
        <router-link
          :to="{ name: 'about' }"
          class="
            nav-link
            col-6 col-md-12
            pt-0
            pr-2
            pl-0
            pb-2
            ma-0
            d-flex
            justify-space-between
          "
          style="text-decoration: none"
        >
          <div class="col-8 pa-0 ma-0">Who I Am</div>
          <div class="col-3 pa-0 ma-0">
            <v-icon color="black" class="icon-nav-arrow"
              >mdi-arrow-bottom-right</v-icon
            >
          </div>
        </router-link>
        <router-link
          :to="{ name: 'projects' }"
          class="
            nav-link
            col-6 col-md-12
            pt-0
            pr-2
            pl-0
            pb-2
            ma-0
            d-flex
            justify-space-between
          "
          style="text-decoration: none"
        >
          <div class="col-8 pa-0 ma-0">What I Do</div>
          <div class="col-3 pa-0 ma-0">
            <v-icon color="black" class="icon-nav-arrow"
              >mdi-arrow-bottom-right</v-icon
            >
          </div>
        </router-link>
      </div>
      <div class="menu-wrapper col-2 col-sm-1 col-md-1 text-end">
        <v-icon
          x-large
          color="black"
          class="icon-nav-menu"
          @click.stop.prevent="menu.overlay = !menu.overlay"
          >mdi-menu</v-icon
        >
      </div>
    </v-row>
    <v-row>
      <!--Main-->
      <router-view></router-view>
    </v-row>
    <v-row class="footer">
      <!--Footer-->
      <div class="footer-spacer col-12"></div>
      <div class="footer-info col-12 col-sm-8">
        <div class="footer-info-logo-wrapper col-3 col-sm-2 px-0 mb-4">
          <img src="../assets/logo.svg" class="footer-site-logo" alt="logo" />
        </div>
        <p class="mb-0">EJ TSENG</p>
        <a href="mailto:hello@ejtseng.com">hello@ejtseng.com</a>
      </div>
      <div class="footer-link col-12 col-sm-4">
        <a
          href="https://github.com/fogjogger1992"
          target="_blank"
          rel="noreferrer noopener"
          class="justify-space-between"
          style="text-decoration: none"
        >
          <div class="nav-link col-12 d-flex pa-0">
            <div class="text-sm-right text-left col-5 col-sm-10 pa-0 ma-0">
              GitHub
            </div>
            <div class="text-sm-right text-left col-2 pa-0 ma-0 mr-2">
              <v-icon color="black" class="icon-nav-arrow"
                >mdi-arrow-bottom-right</v-icon
              >
            </div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/ej-tseng-671b0b142/"
          target="_blank"
          rel="noreferrer noopener"
          class="justify-space-between"
          style="text-decoration: none"
        >
          <div class="nav-link col-12 d-flex pa-0">
            <div class="text-sm-right text-left col-5 col-sm-10 pa-0 ma-0">
              Linkedin
            </div>
            <div class="text-sm-right text-left col-2 pa-0 ma-0 mr-2">
              <v-icon color="black" class="icon-nav-arrow"
                >mdi-arrow-bottom-right</v-icon
              >
            </div>
          </div>
        </a>
        <a
          href="https://ejtseng.medium.com/"
          target="_blank"
          rel="noreferrer noopener"
          class="justify-space-between"
          style="text-decoration: none"
        >
          <div class="nav-link col-12 d-flex pa-0">
            <div class="text-sm-right text-left col-5 col-sm-10 pa-0 ma-0">
              Medium
            </div>
            <div class="text-sm-right text-left col-2 pa-0 ma-0 mr-2">
              <v-icon color="black" class="icon-nav-arrow"
                >mdi-arrow-bottom-right</v-icon
              >
            </div>
          </div>
        </a>
      </div>
      <div class="footer-all-rights-reserved col-7 col-sm-12">
        <p>EJ TSENG © 2021 ALL RIGHTS RESERVED</p>
      </div>
      <div class="footer-back-to-top text-right col-4 col-sm-3">
        <v-icon
          @click.stop.prevent="backToTop()"
          aria-label="Go back to top."
          color="black"
          class="icon-back-to-top mb-5"
          >mdi-arrow-up-circle-outline</v-icon
        >
      </div>
    </v-row>
  </v-container>
</template>

<style scoped>
.overlay >>> .v-overlay__content {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
.overlay-menu-wrapper {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.icon-nav-menu-close {
  position: fixed;
  top: 10vh;
  right: -85vw;
}
.overlay-menu-spacer {
  height: 8rem;
}
.overlay-menu-list {
  font-size: 3rem;
  font-weight: 300;
}
.overlay-menu-list >>> a {
  color: white;
}
.overlay-info {
  font-size: 1.5rem;
  font-weight: 400;
}
.overlay-info >>> p,
.overlay-info >>> a,
.overlay-info >>> div {
  color: white;
}
.overlay-menu-site-logo {
  width: 30%;
  -webkit-filter: invert(100%);
  filter: invert(100%);
}
.nav {
  padding: 1rem;
}
.site-logo {
  width: 35%;
}
.nav-link:hover .icon-nav-arrow {
  transform: rotate(-45deg);
  transition-duration: 0.25s;
  transition-timing-function: ease;
}
.footer {
  position: relative;
  padding: 1rem;
  font-size: 1.5rem;
}
.footer-spacer {
  height: 4rem;
}
.footer-info {
  font-weight: 500;
}
.footer-info >>> a {
  color: #181818;
}
.footer-all-rights-reserved {
  font-size: 0.8rem;
}
.footer-back-to-top {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  overflow: visible;
}
.footer-back-to-top >>> .v-icon {
  font-size: 5rem;
}
.footer-back-to-top >>> .v-icon:hover {
  transform: translateY(-1rem);
}
/* xl - >1904px */
@media screen and (min-width: 1904px) {
  .overlay-menu-spacer {
    height: 12rem;
  }
  .logo-wrapper,
  .intro-wrapper,
  .link-wrapper,
  .link-wrapper >>> .v-icon {
    font-size: 2rem;
  }
  .menu-wrapper >>> .v-icon {
    font-size: 3rem !important;
  }
  .overlay-menu-list {
    font-size: 5rem;
  }
  .overlay-info {
    font-size: 2rem;
  }
  .footer-back-to-top >>> .v-icon {
    font-size: 8rem;
  }
}
/* sm - 600px-960px */
@media screen and (max-width: 960px) {
  .intro-wrapper {
    order: 3;
    font-size: 2rem;
    padding-top: 10rem;
    padding-right: 15rem;
  }
}
/* xs - < 600px */
@media screen and (max-width: 600px) {
  .logo-wrapper {
    order: 2;
  }
  .intro-wrapper {
    order: 3;
    font-size: 1.2rem;
    padding-top: 10rem;
    padding-right: 5rem;
  }
  .site-logo {
    width: 25%;
  }
  .icon-nav-menu-close {
    top: 5vh;
  }
  .overlay-menu-spacer {
    height: 0rem;
  }
  .overlay-menu-list,
  .overlay-info {
    padding: 0 40px;
  }
  .overlay-menu-list {
    padding-bottom: 40px;
  }
  .overlay-info >>> p,
  .overlay-menu-list >>> p {
    margin-bottom: 0;
  }
  .overlay-info .nav-link {
    padding-top: 0;
    padding-bottom: 0;
  }
  .overlay-menu-site-logo {
    width: 25%;
  }
}
/* iphoneSE - < 320px */
@media screen and (max-width: 320px) {
  .overlay-menu-spacer {
    padding: 0;
  }
  .overlay-menu-list {
    font-size: 2rem;
  }
}
</style>

<script>
export default {
  name: 'Master',
  data() {
    return {
      menu: {
        absolute: true,
        opacity: 1,
        overlay: false,
      },
    }
  },
  methods: {
    backToTop() {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    },
  },
}
</script> 