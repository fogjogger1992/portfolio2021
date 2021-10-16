<template>
  <v-container>
    <v-row class="project-info-wrapper justify-end mt-0 mt-sm-16">
      <div class="col-12 col-sm-11 px-sm-0 pr-0">
        <v-img
          :src="project.image"
          :lazy-src="project.thumbnail"
          aspect-ratio="1.35"
          class="secondary"
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
        <div class="d-flex">
          <div class="col-12 col-sm-7">
            <h1 class="project-info-title pb-sm-2">{{ project.title }}</h1>
            <span class="secondary--text pr-4">{{ project.year }}</span>
            <span
              class="secondary--text pr-2"
              v-for="(category, index) in project.categories"
              :key="category.replace(/\s/g, '') + index"
              ># {{ category }}</span
            >
          </div>
        </div>
        <div class="d-flex flex-wrap justify-space-between pt-10 pt-xl-16">
          <div class="col-12 col-sm-7 pr-6 pr-sm-3">
            {{ project.intro }}
          </div>
          <div class="col-12 col-sm-4 order-first order-sm-1">
            <div
              v-for="(info, index) in project.infos"
              :key="info.type.replace(/\s/g, '') + index"
            >
              <span class="project-info-type secondary--text">{{
                info.type
              }}</span>
              <p class="mb-1 mb-sm-4">{{ info.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </v-row>
    <v-row
      v-for="(content, index) in project.contents"
      :key="content.type.replace(/\s/g, '') + index"
      class="project-content-wrapper pa-0"
    >
      <v-row
        v-if="content.type === 'singleImage'"
        class="
          project-content-single-image
          col-12
          mx-0
          my-auto
          px-0
          py-auto
          pt-10 pt-xl-16
        "
      >
        <div class="col-12">
          <v-img
            :src="content.image"
            :lazy-src="content.imageThumbnail"
            aspect-ratio="1.75"
            class="secondary"
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
        </div>
        <div v-if="content.content !== ''" class="col-12 col-sm-6 px-6 px-sm-3">
          {{ content.content }}
        </div>
      </v-row>
      <v-row
        v-if="content.type === 'duoImage'"
        class="
          project-content-duo-image
          col-12
          justify-start
          mx-0
          my-auto
          px-0
          py-auto
          pt-10 pt-xl-16
        "
      >
        <div class="d-flex flex-wrap col-12 col-sm-11 px-sm-0 pa-0">
          <div class="col-12 col-sm-6 pl-sm-0">
            <v-img
              :src="content.imageLeft"
              :lazy-src="content.imageLeftThumbnail"
              aspect-ratio="0.8"
              class="secondary"
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
          </div>
          <div class="col-12 col-sm-6 pr-sm-0">
            <v-img
              :src="content.imageRight"
              :lazy-src="content.imageRightThumbnail"
              aspect-ratio="0.8"
              class="secondary"
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
          </div>
          <div v-if="content.content !== ''" class="col-12 col-sm-6 pa-0"></div>
          <div
            v-if="content.content !== ''"
            class="col-12 col-sm-6 px-6 px-sm-3"
          >
            {{ content.content }}
          </div>
        </div>
      </v-row>
      <v-row
        v-if="content.type === 'text'"
        class="
          project-content-text
          col-12
          mx-0
          my-auto
          px-0
          py-auto
          pt-10 pt-xl-16
        "
      >
        <div class="col-12 col-sm-6 px-6 px-sm-3">
          {{ content.content }}
        </div>
      </v-row>
    </v-row>
  </v-container>
</template>

<style scoped>
.project-info-title {
  font-size: 3rem;
}
.project-info-spacer {
  height: 2rem;
}
.project-info-type {
  font-size: 0.8rem;
}
/* xl - >1904px */
@media screen and (min-width: 1904px) {
  .v-image {
    height: 70vh;
  }
  .project-info-wrapper,
  .project-content-wrapper {
    font-size: 1.5rem;
  }
  .project-info-title {
    font-size: 5rem;
  }
  .project-info-spacer {
    height: 3rem;
  }
  .project-info-type {
    font-size: 1.2rem;
  }
}
/* xs - < 600px */
@media screen and (max-width: 600px) {
  .project-content-wrapper {
    margin-bottom: 5vh;
  }
  .project-content-duo-image >>> .v-image {
    aspect-ratio: 1;
  }
  .project-content-single-image >>> .v-image {
    aspect-ratio: 1;
  }
}
</style>

<script>
const pageData = {
  projects: [
    {
      id: '1',
      title: 'Project 1',
      year: 2021,
      categories: ['Identity & Communication'],
      image: 'https://picsum.photos/id/10/1920/1080',
      thumbnail: 'https://picsum.photos/id/10/16/9',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
      infos: [
        { type: 'role', content: 'Designer' },
        { type: 'tool', content: 'AI, PS, Figma' },
        { type: 'client', content: 'Lorem' },
      ],
      contents: [
        {
          type: 'duoImage',
          imageLeft: 'https://picsum.photos/id/1044/1920/1080',
          imageLeftThumbnail: 'https://picsum.photos/id/1044/16/9',
          imageRight: 'https://picsum.photos/id/1045/1920/1080',
          imageRightThumbnail: 'https://picsum.photos/id/1045/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam.',
        },
        {
          type: 'text',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
        },
        {
          type: 'singleImage',
          image: 'https://picsum.photos/id/1049/1920/1080',
          imageThumbnail: 'https://picsum.photos/id/1049/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque.',
        },
      ],
    },
    {
      id: '2',
      title: 'Project 2',
      year: 2021,
      categories: ['Identity & Communication'],
      image: 'https://picsum.photos/id/1000/1920/1080',
      thumbnail: 'https://picsum.photos/id/1000/16/9',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
      infos: [
        { type: 'role', content: 'Designer' },
        { type: 'tool', content: 'AI, PS' },
        { type: 'client', content: 'Lorem' },
      ],
      contents: [
        {
          type: 'singleImage',
          image: 'https://picsum.photos/id/1050/1920/1080',
          imageThumbnail: 'https://picsum.photos/id/1050/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque.',
        },
        {
          type: 'text',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
        },
        {
          type: 'duoImage',
          imageLeft: 'https://picsum.photos/id/1052/1920/1080',
          imageLeftThumbnail: 'https://picsum.photos/id/1052/16/9',
          imageRight: 'https://picsum.photos/id/1053/1920/1080',
          imageRightThumbnail: 'https://picsum.photos/id/1053/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam.',
        },
      ],
    },
    {
      id: '3',
      title: 'Project 3',
      year: 2021,
      categories: ['Identity & Communication'],
      image: 'https://picsum.photos/id/1018/1920/1080',
      thumbnail: 'https://picsum.photos/id/1018/16/9',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
      infos: [
        { type: 'role', content: 'Designer' },
        { type: 'tool', content: 'AI, PS' },
        { type: 'client', content: 'Lorem' },
      ],
      contents: [
        {
          type: 'singleImage',
          image: 'https://picsum.photos/id/1051/1920/1080',
          imageThumbnail: 'https://picsum.photos/id/1051/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque.',
        },
        {
          type: 'text',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
        },
        {
          type: 'text',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
        },
        {
          type: 'duoImage',
          imageLeft: 'https://picsum.photos/id/1055/1920/1080',
          imageLeftThumbnail: 'https://picsum.photos/id/1055/16/9',
          imageRight: 'https://picsum.photos/id/1056/1920/1080',
          imageRightThumbnail: 'https://picsum.photos/id/1056/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam.',
        },
      ],
    },
    {
      id: '4',
      title: 'Project 4',
      year: 2021,
      categories: ['Programming'],
      image: 'https://picsum.photos/id/1020/1920/1080',
      thumbnail: 'https://picsum.photos/id/1020/16/9',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
      infos: [
        { type: 'role', content: 'Developer' },
        { type: 'tool', content: 'HTML, CSS, VUE.js' },
        { type: 'program', content: 'Alpha Camp' },
      ],
      contents: [
        {
          type: 'duoImage',
          imageLeft: 'https://picsum.photos/id/1059/1920/1080',
          imageLeftThumbnail: 'https://picsum.photos/id/1059/16/9',
          imageRight: 'https://picsum.photos/id/1060/1920/1080',
          imageRightThumbnail: 'https://picsum.photos/id/1060/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam.',
        },
        {
          type: 'text',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
        },
        {
          type: 'singleImage',
          image: 'https://picsum.photos/id/1060/1920/1080',
          imageThumbnail: 'https://picsum.photos/id/1060/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque.',
        },
      ],
    },
    {
      id: '5',
      title: 'Project 5',
      year: 2020,
      categories: ['Programming'],
      image: 'https://picsum.photos/id/1023/1920/1080',
      thumbnail: 'https://picsum.photos/id/1023/16/9',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
      infos: [
        { type: 'role', content: 'Developer' },
        { type: 'tool', content: 'HTML, CSS, VUE.js' },
        { type: 'program', content: 'Alpha Camp' },
      ],
      contents: [
        {
          type: 'singleImage',
          image: 'https://picsum.photos/id/107/1920/1080',
          imageThumbnail: 'https://picsum.photos/id/107/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque.',
        },
        {
          type: 'text',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
        },
        {
          type: 'duoImage',
          imageLeft: 'https://picsum.photos/id/1063/1920/1080',
          imageLeftThumbnail: 'https://picsum.photos/id/1063/16/9',
          imageRight: 'https://picsum.photos/id/1065/1920/1080',
          imageRightThumbnail: 'https://picsum.photos/id/1065/16/9',
          content: '',
        },
        {
          type: 'duoImage',
          imageLeft: 'https://picsum.photos/id/1063/1920/1080',
          imageLeftThumbnail: 'https://picsum.photos/id/1063/16/9',
          imageRight: 'https://picsum.photos/id/1065/1920/1080',
          imageRightThumbnail: 'https://picsum.photos/id/1065/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque.',
        },
      ],
    },
    {
      id: '6',
      title: 'Project 6',
      year: 2019,
      categories: ['Programming', 'UI/UX'],
      image: 'https://picsum.photos/id/1026/1920/1080',
      thumbnail: 'https://picsum.photos/id/1026/16/9',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
      infos: [
        { type: 'role', content: 'Designer, Developer' },
        { type: 'tool', content: 'HTML, CSS, VUE.js' },
        { type: 'program', content: 'Alpha Camp' },
      ],
      contents: [
        {
          type: 'singleImage',
          image: 'https://picsum.photos/id/1076/1920/1080',
          imageThumbnail: 'https://picsum.photos/id/1076/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque.',
        },
        {
          type: 'text',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
        },
        {
          type: 'duoImage',
          imageLeft: 'https://picsum.photos/id/1075/1920/1080',
          imageLeftThumbnail: 'https://picsum.photos/id/1075/16/9',
          imageRight: 'https://picsum.photos/id/1077/1920/1080',
          imageRightThumbnail: 'https://picsum.photos/id/1077/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam.',
        },
      ],
    },
    {
      id: '7',
      title: 'Project 7',
      year: 2018,
      categories: ['Programming', 'UI/UX'],
      image: 'https://picsum.photos/id/1029/1920/1080',
      thumbnail: 'https://picsum.photos/id/1029/16/9',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
      infos: [
        { type: 'role', content: 'Designer, Developer' },
        { type: 'tool', content: 'HTML, CSS, VUE.js' },
        { type: 'program', content: 'Alpha Camp' },
      ],
      contents: [
        {
          type: 'singleImage',
          image: 'https://picsum.photos/id/1081/1920/1080',
          imageThumbnail: 'https://picsum.photos/id/1081/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque.',
        },
        {
          type: 'text',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
        },
        {
          type: 'duoImage',
          imageLeft: 'https://picsum.photos/id/114/1920/1080',
          imageLeftThumbnail: 'https://picsum.photos/id/114/16/9',
          imageRight: 'https://picsum.photos/id/115/1920/1080',
          imageRightThumbnail: 'https://picsum.photos/id/115/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam.',
        },
      ],
    },
    {
      id: '8',
      title: 'Project 8',
      year: 2018,
      categories: ['Programming', 'UI/UX'],
      image: 'https://picsum.photos/id/1031/1920/1080',
      thumbnail: 'https://picsum.photos/id/1031/16/9',
      intro:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
      infos: [
        { type: 'role', content: 'Designer, Developer' },
        { type: 'tool', content: 'HTML, CSS, VUE.js' },
        { type: 'program', content: 'Alpha Camp' },
      ],
      contents: [
        {
          type: 'singleImage',
          image: 'https://picsum.photos/id/12/1920/1080',
          imageThumbnail: 'https://picsum.photos/id/12/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque.',
        },
        {
          type: 'text',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam. Curabitur laoreet mattis quam, eu hendrerit odio ullamcorper ac. Integer quis metus ipsum. Cras nec eros tortor. Etiam ullamcorper facilisis bibendum. Sed elementum pretium enim.',
        },
        {
          type: 'duoImage',
          imageLeft: 'https://picsum.photos/id/123/1920/1080',
          imageLeftThumbnail: 'https://picsum.photos/id/123/16/9',
          imageRight: 'https://picsum.photos/id/125/1920/1080',
          imageRightThumbnail: 'https://picsum.photos/id/125/16/9',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit ante, placerat vulputate est ut, aliquam dignissim neque. Nullam eget finibus quam.',
        },
      ],
    },
  ],
}

export default {
  name: 'Project',
  data() {
    return {
      project: {},
    }
  },
  created() {
    const { id = '' } = this.$route.params
    this.fetchpageData({ id: id })
  },
  beforeRouteUpdate(to, from, next) {
    const { id = '' } = this.$route.params
    this.fetchpageData({
      id: id,
    })
    next()
  },
  mounted() {
    this.scrollToTop()
  },
  methods: {
    fetchpageData({ id }) {
      const { projects } = pageData
      try {
        const projectTitle = decodeURIComponent(id)
        this.project = projects.find(
          (project) => project.title === projectTitle
        )
      } catch (e) {
        this.project = {}
      }
      this.checkProject(this.project)
    },
    checkProject(project) {
      if (project === undefined || Object.keys(project).length === 0) {
        this.$router.replace({ name: 'not-found' })
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>