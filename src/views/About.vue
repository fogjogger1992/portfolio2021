<template>
  <v-container>
    <v-row class="about-wrapper mt-0 mt-sm-16">
      <div class="about-image-wrapper col-12 col-sm-6">
        <v-img
          class="about-portrait-bg"
          :lazy-src="portraitBg.lazySrc"
          :src="portraitBg.src"
        ></v-img>
        <v-img
          class="about-portrait"
          :lazy-src="portrait.lazySrc"
          :src="portrait.src"
        ></v-img>
      </div>
      <div class="col-sm-1"></div>
      <div class="about-info-wrapper col-12 col-sm-5 mb-0 mb-sm-16">
        <div class="about-info-title col-12">Introduction</div>
        <div class="about-info-content col-12 pl-10">{{ intro }}</div>
        <div class="about-info-title col-12">Experience</div>
        <div
          v-for="experience in experiences"
          :key="experience.time.replace(/\s/g, '')"
          class="about-info-content col-12 pl-10"
        >
          <h3>{{ experience.position }}</h3>
          <span>{{ experience.company }} | {{ experience.time }}</span>
          <p class="pt-4">{{ experience.description }}</p>
        </div>
        <div class="about-info-title col-12">Education</div>
        <div
          v-for="education in educations"
          :key="education.time.replace(/\s/g, '')"
          class="about-info-content col-12 pl-10"
        >
          <h3>{{ education.major }}</h3>
          <span>{{ education.school }} | {{ education.time }}</span>
          <p class="pt-4">{{ education.program }}</p>
        </div>
      </div>
      <div class="about-spacer col-12"></div>
    </v-row>
  </v-container>
</template>

<style scoped>
.about-wrapper {
  height: 80vh;
}
.about-image-wrapper {
  position: relative;
  overflow: visible;
}
.about-portrait-bg {
  position: -webkit-sticky;
  position: sticky;
  top: 5vh;
  margin: 10vh 2vw 0 0;
  height: 60vh;
}
.about-portrait {
  position: -webkit-sticky;
  position: sticky;
  bottom: 20vh;
  top: 10vh;
  margin: 5vh 0 0 50%;
  height: 30vh;
  width: 50%;
}
.about-info-title {
  font-size: 1.2rem;
  font-weight: 200;
  color: gray;
}
.about-info-content {
  white-space: pre-line;
  font-weight: 300;
}
.about-info-content >>> span {
  font-size: 0.8rem;
}
.about-spacer {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  height: 10vh;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 35%,
    rgba(255, 255, 255, 0) 100%
  );
}
/* xl - >1904px */
@media screen and (min-width: 1904px) {
  .about-wrapper {
    font-size: 1.5rem;
  }
  .about-info-title {
    font-size: 2rem;
  }
  .about-info-content >>> span {
    font-size: 1rem;
  }
}
/* xs - < 600px */
@media screen and (max-width: 600px) {
  .about-wrapper {
    padding: 5vh 0;
    margin: 0;
    height: 100%;
  }
  .about-image-wrapper {
    padding: 0;
    height: 60vh;
  }
  .about-portrait-bg {
    position: relative;
    top: 0;
    margin: 0;
    height: 40vh;
  }
  .about-portrait {
    position: relative;
    top: -15vh;
    margin: 0 20% 0 20%;
    height: 30vh;
    width: 60%;
  }
  .about-info-wrapper {
    padding: 0;
  }
  .about-spacer {
    display: none;
  }
}
</style>

<script>
const pageData = {
  portrait: {
    src: 'https://picsum.photos/id/275/4288/2848.jpg',
    lazySrc: 'https://picsum.photos/id/275/16/9.jpg',
  },
  portraitBg: {
    src: 'https://picsum.photos/id/106/2592/1728.jpg',
    lazySrc: 'https://picsum.photos/id/106/16/9.jpg',
  },
  intro:
    "I am a designer with front-end development skills. I like to study various fields such as UXUI, graphic design and programming. \n\nKnowledge in various fields leads to creative synergy. That's my strength.",
  experiences: [
    {
      time: 'Jun. 2018 - Present',
      company: 'Dyaco International Inc.',
      position: 'Graphic Designer',
      description:
        'Graphic designer of the global marketing team. Lead graphic designer of Sole Fitness in HQ. Cooperated with Gym80, Johnny G, Philips and other brands in a wide range of fields.',
    },
    {
      time: 'Nov. 2017 - Apr. 2018',
      company: 'Alma Burton Inc.',
      position: 'Graphic Designer',
      description:
        'Chief designer of the start-up team. Participated in the establishment of the entire brand identity, from logo design to web design and development.',
    },
    {
      time: 'Apr. 2017 - Apr. 2018',
      company: 'ALPHA JET CO. Ltd',
      position: 'Graphic Designer',
      description:
        'Chief designer of the start-up team. Participated in the establishment of the entire brand identity, from logo design to web design and development.',
    },
  ],
  educations: [
    {
      time: 'Sep. 2021 - Present',
      school: 'Google',
      major: 'UX Design',
      program: 'Google UX Design Professional Certificate',
    },
    {
      time: 'Oct. 2020 - Aug. 2021',
      school: 'Alpha Camp',
      major: 'Front-End',
      program: 'Full Stack Web Development Program',
    },
    {
      time: 'Sep. 2011 - Jun. 2015',
      school: 'National Yunlin University of Science and Technology',
      major: 'Creative Design',
      program: 'Bachelor of Arts',
    },
  ],
}

export default {
  name: 'About',
  data() {
    return {
      portrait: {},
      portraitBg: {},
      intro: '',
      experiences: [],
      educations: [],
    }
  },
  created() {
    this.fetchpageData()
  },
  methods: {
    fetchpageData() {
      const { portrait, portraitBg, intro, experiences, educations } = pageData
      this.portrait = portrait
      this.portraitBg = portraitBg
      this.intro = intro
      this.experiences = experiences
      this.educations = educations
    },
  },
}
</script>
