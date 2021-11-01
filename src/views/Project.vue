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
          <div class="project-intro col-12 col-sm-7 pr-6 pr-sm-3">
            {{ project.intro }}
            <br />
            <br />
            <v-btn
              v-if="project.btnInfo.btn"
              :href="project.btnInfo.link"
              target="_blank"
              rel="noreferrer noopener"
              rounded
              depressed
              color="primary"
              >{{ project.btnInfo.lable }}</v-btn
            >
          </div>
          <div class="project-info col-12 col-sm-4 order-first order-sm-1">
            <div
              v-for="(info, index) in project.infos"
              :key="info.type.replace(/\s/g, '') + index"
            >
              <span class="project-info-type secondary--text">{{
                info.type
              }}</span>
              <div
                v-if="info.link"
                class="project-info-link-wrapper mb-1 mb-sm-4"
              >
                <div
                  v-for="content in info.contents"
                  :key="content.text.replace(/\s/g, '')"
                  class="ma-0"
                >
                  <a
                    :href="content.link"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="project-info-link black--text"
                    ><p class="mb-1">{{ content.text }}</p></a
                  >
                </div>
              </div>
              <p v-else class="mb-1 mb-sm-4">{{ info.content }}</p>
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
.v-image {
  height: 70vh;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
}
.project-info-title {
  font-size: 3rem;
}
.project-info-spacer {
  height: 2rem;
}
.project-info,
.project-intro,
.project-content-text {
  white-space: pre-line;
}
.project-info-type {
  font-size: 0.8rem;
}
/* xl - >1904px */
@media screen and (min-width: 1904px) {
  .v-image {
    height: 70vh;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    height: 44px;
    min-width: 78px;
    padding: 0 19.5px;
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
  .container {
    margin-bottom: 5vh;
  }
  .v-image {
    height: auto;
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
      id: '8',
      title: 'Simple Twitter',
      year: '2021',
      categories: ['Programming'],
      image: require('@/assets/projects/simple-twitter/cover.jpg'),
      thumbnail: require('@/assets/projects/simple-twitter/cover-thumbnail.jpg'),
      intro:
        'This project is a part of the Full Stack Web Development Program at Alpha Camp. It\'s our final project before graduation. \n\n"Simple Twitter" is a SPA built by separating the front-end and the back-end. \n\nWe started this project from scratch. Getting through the process of discussing the API design, building up all the pages, and integrating API into the front-end, we complete the site in 2 weeks. \n\nCheck out the live demo with the following accounts: \nAdmin: root@example.com | 12345678 \nUser: user1@example.com | 12345678',
      btnInfo: {
        btn: true,
        lable: 'Live Demo',
        link: 'https://fogjogger1992.github.io/simple-twitter/',
      },
      infos: [
        { link: false, type: 'role', content: 'Front-end Developer' },
        { link: false, type: 'stack', content: 'Vue.js, Vuetify, Socket.IO' },
        {
          link: true,
          type: 'team members',
          contents: [
            {
              text: 'Brady Cheng (Back-end)',
              link: 'https://github.com/bradychen2',
            },
            {
              text: 'Chris Chen (Back-end)',
              link: 'https://github.com/chriszychen',
            },
            {
              text: 'Leslie Chang (Full-stack)',
              link: 'https://github.com/lesliezsy',
            },
          ],
        },
        {
          link: false,
          type: 'program',
          content: 'Alpha Camp | \nFull Stack Web Development Program',
        },
        {
          link: true,
          type: 'source code',
          contents: [
            {
              text: 'Back-end',
              link: 'https://github.com/bradychen2/twitter-api-2020',
            },
            {
              text: 'Front-end',
              link: 'https://github.com/fogjogger1992/simple-twitter',
            },
          ],
        },
      ],
      contents: [
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/simple-twitter/admin.jpg'),
          imageLeftThumbnail: require('@/assets/projects/simple-twitter/admin-thumbnail.jpg'),
          imageRight: require('@/assets/projects/simple-twitter/user.jpg'),
          imageRightThumbnail: require('@/assets/projects/simple-twitter/user-thumbnail.jpg'),
          content:
            'This site is built for both general users and admin users. General users can follow others; and publish, reply or like posts, just like the real Twitter. On the other hand, the admin user can check the general users on the admin page. They can also check all the posts here and remove the inappropriate ones.',
        },
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/simple-twitter/sync-1.gif'),
          imageLeftThumbnail: require('@/assets/projects/simple-twitter/sync-1-thumbnail.jpg'),
          imageRight: require('@/assets/projects/simple-twitter/sync-2.gif'),
          imageRightThumbnail: require('@/assets/projects/simple-twitter/sync-2-thumbnail.jpg'),
          content:
            'By using Vuex, we keep all the following states synchronized without time interval.',
        },
        {
          type: 'text',
          content:
            'After completing the basic functions, we joined the 48HRs hackathon. The goal of the hackathon is to build a real-time chat room, a direct messaging function, and a subscription function for general users by using Socket.io.',
        },
        {
          type: 'singleImage',
          image: require('@/assets/projects/simple-twitter/chatroom.gif'),
          imageThumbnail: require('@/assets/projects/simple-twitter/chatroom-thumbnail.jpg'),
          content:
            'The real-time chat room shows current online users. It also keeps chatting history.',
        },
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/simple-twitter/tbc-1.jpg'),
          imageLeftThumbnail: require('@/assets/projects/simple-twitter/tbc-1-thumbnail.jpg'),
          imageRight: require('@/assets/projects/simple-twitter/tbc-2.jpg'),
          imageRightThumbnail: require('@/assets/projects/simple-twitter/tbc-2-thumbnail.jpg'),
          content:
            'The pages of the direct message and the notification of subscription. We only finish the views in the hackathon. These two functions are still under construction.',
        },
        {
          type: 'text',
          content:
            'This is our first group project in the program. I learned a lot about teamwork, especially the communication between the front-end and the back-end in this project. It’s an invaluable experience for me.',
        },
      ],
    },
    {
      id: '7',
      title: 'Sole Fitness',
      year: '2018 - 2021',
      categories: ['Identity & Communication'],
      image: require('@/assets/projects/sole-fitness/3fold.jpg'),
      thumbnail: require('@/assets/projects/sole-fitness/3fold-thumbnail.jpg'),
      intro:
        'This is a rebranding project for Sole Fitness. \n\nSole is the leading global brand in the fitness industry and has become the most recommended brand by independent review companies. They have been providing indoor fitness equipment for North America for decades. And now, the Sole name continues to expand its presence throughout the globe.',
      btnInfo: {
        btn: false,
      },
      infos: [
        { link: false, type: 'role', content: 'Graphic Designer' },
        { link: false, type: 'tool', content: 'Adobe Creative Suite' },
        { link: false, type: 'client', content: 'Dyaco International Inc.' },
      ],
      contents: [
        {
          type: 'singleImage',
          image: require('@/assets/projects/sole-fitness/catalog-1.jpg'),
          thumbnail: require('@/assets/projects/sole-fitness/catalog-1-thumbnail.jpg'),
          content:
            "In the past, we used a lot of black color in the design of marketing materials for Sole Fitness. Starting in 2019, with the launch of the new series, we began to redesign the overall appearance of the brand. By rearranging the use of each color in the brand's color scheme, we have achieved a sense of freshness for the brand.",
        },
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/sole-fitness/catalog-2.jpg'),
          imageLeftThumbnail: require('@/assets/projects/sole-fitness/catalog-2-thumbnail.jpg'),
          imageRight: require('@/assets/projects/sole-fitness/flyer.jpg'),
          imageRightThumbnail: require('@/assets/projects/sole-fitness/flyer-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/sole-fitness/had-1.jpg'),
          imageLeftThumbnail: require('@/assets/projects/sole-fitness/had-1-thumbnail.jpg'),
          imageRight: require('@/assets/projects/sole-fitness/had-2.jpg'),
          imageRightThumbnail: require('@/assets/projects/sole-fitness/had-2-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/sole-fitness/vad-2.jpg'),
          imageLeftThumbnail: require('@/assets/projects/sole-fitness/vad-2-thumbnail.jpg'),
          imageRight: require('@/assets/projects/sole-fitness/vad-1.jpg'),
          imageRightThumbnail: require('@/assets/projects/sole-fitness/vad-1-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'text',
          content:
            'From catalogs, flyers to billboards, we maintain a bright and clean design style to convey the benefits of sports.',
        },
        {
          type: 'singleImage',
          image: require('@/assets/projects/sole-fitness/ig.jpg'),
          thumbnail: require('@/assets/projects/sole-fitness/ig-thumbnail.jpg'),
          content:
            'In this project, we also begin to put the new design styles into practice in the materials of social media.',
        },
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/sole-fitness/ig-1.gif'),
          imageLeftThumbnail: require('@/assets/projects/sole-fitness/ig-1-thumbnail.jpg'),
          imageRight: require('@/assets/projects/sole-fitness/ig-2.jpg'),
          imageRightThumbnail: require('@/assets/projects/sole-fitness/ig-2-thumbnail.jpg'),
          content: 'Instagram posts and stories with a fresh new look.',
        },
      ],
    },
    {
      id: '6',
      title: 'Fuel Fitness',
      year: '2020-2021',
      categories: ['Identity & Communication'],
      image: require('@/assets/projects/fuel-fitness/cover-2.jpg'),
      thumbnail: require('@/assets/projects/fuel-fitness/cover-2-thumbnail.jpg'),
      intro:
        "This is a rebranding project for Fuel Fitness. \n\nFuel Fitness was established in the '90s with a group of fitness experts in the States, with a simple goal: to provide an excellent daily workout experience that everyone could afford at home.\n\nAffordability and favored by novices are the core characteristics that promote the rise of Fuel Fitness.",
      btnInfo: {
        btn: false,
      },
      infos: [
        { link: false, type: 'role', content: 'Graphic Designer' },
        { link: false, type: 'tool', content: 'Adobe Creative Suite' },
        { link: false, type: 'client', content: 'Dyaco International Inc.' },
      ],
      contents: [
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/fuel-fitness/brand-book-1.jpg'),
          imageLeftThumbnail: require('@/assets/projects/fuel-fitness/brand-book-1-thumbnail.jpg'),
          imageRight: require('@/assets/projects/fuel-fitness/brand-book-2.jpg'),
          imageRightThumbnail: require('@/assets/projects/fuel-fitness/brand-book-2-thumbnail.jpg'),
          content:
            'In order to comply with the main value of Fuel Fitness, we use enthusiastic and eye-catching orange-red as its main color. We also try to show the joy of exercise through images in the entire brand book.',
        },
        {
          type: 'singleImage',
          image: require('@/assets/projects/fuel-fitness/brand-book-3.jpg'),
          imageThumbnail: require('@/assets/projects/fuel-fitness/brand-book-3-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'singleImage',
          image: require('@/assets/projects/fuel-fitness/brand-book-4.jpg'),
          imageThumbnail: require('@/assets/projects/fuel-fitness/brand-book-4-thumbnail.jpg'),
          content: '',
        },
      ],
    },
    {
      id: '5',
      title: 'Expense Tracker',
      year: '2021',
      categories: ['Programming', 'UI/UX'],
      image: require('@/assets/projects/expense-tracker/cover.jpg'),
      thumbnail: require('@/assets/projects/expense-tracker/cover-thumbnail.jpg'),
      intro:
        "This project is a part of the Full Stack Web Development Program at Alpha Camp. It's also my first CRUD app. \n\nExpense Tracker is a web app built with Node.js and Express. It allows users to track their expenditures and break down expenditures by the category.",
      btnInfo: {
        btn: true,
        lable: 'Live Site',
        link: 'https://agile-meadow-42555.herokuapp.com/',
      },
      infos: [
        {
          link: false,
          type: 'role',
          content: 'Full-stack Developer, UI/UX Designer',
        },
        {
          link: false,
          type: 'stack',
          content: 'Handlebars.js, MongoDB, Node.js, Express',
        },
        {
          link: false,
          type: 'program',
          content: 'Alpha Camp | \nFull Stack Web Development Program',
        },
        {
          link: true,
          type: 'source code',
          contents: [
            {
              text: 'GitHub',
              link: 'https://github.com/fogjogger1992/ExpenseTracker',
            },
          ],
        },
      ],
      contents: [
        {
          type: 'singleImage',
          image: require('@/assets/projects/expense-tracker/showcase.jpg'),
          thumbnail: require('@/assets/projects/expense-tracker/showcase-thumbnail.jpg'),
          content:
            "It's a CRUD app, which means you can whether create, read, update or delete the data in the app.",
        },
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/expense-tracker/filter.jpg'),
          imageLeftThumbnail: require('@/assets/projects/expense-tracker/filter-thumbnail.jpg'),
          imageRight: require('@/assets/projects/expense-tracker/cd.jpg'),
          imageRightThumbnail: require('@/assets/projects/expense-tracker/cd-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'text',
          content:
            'By working on this project, I learned about how to work with the database management system MongoDB. When the application is running, it does bring a lot of accomplishment.',
        },
      ],
    },
    {
      id: '4',
      title: 'Philips PTS Official Page',
      year: '2019 - 2020',
      categories: ['UI/UX'],
      image: require('@/assets/projects/phillips-pts/cover.jpg'),
      thumbnail: require('@/assets/projects/phillips-pts/cover-thumbnail.jpg'),
      intro:
        'Dyaco International announced the establishment of a global licensing partnership with Philips in early 2019. \n\nIn line with Philips’ core values, this partnership comes at a critical moment when the active aging population continues to grow and the demand for physical therapy intervention and programming in the medical and rehabilitation environment continues to grow. Philips Physical Therapy Solutions break down barriers to exercise through program versatility, ease-of-use, tracking, and seamless communication of relevant metrics between individuals and their care communities to deliver better outcomes.',
      btnInfo: {
        btn: false,
      },
      infos: [
        { link: false, type: 'role', content: 'UI/UX Designer, Webmaster' },
        { link: false, type: 'tool', content: 'Adobe Creative Suite, Figma' },
        { link: false, type: 'client', content: 'Dyaco International Inc.' },
      ],
      contents: [
        {
          type: 'text',
          content:
            'In this project, I am responsible for the design, construction, and maintenance of the official page of Philips Physical Therapy Solutions (PTS). \n\nThese official PTS pages are located under the Philips Global site, which is built using Adobe Experience Manager (AEM). The prefabricated components provided by the Philips team are limited. Therefore, when we dealt with this project, we first selected components that might meet our needs. Then integrate all the resources together.',
        },
        {
          type: 'singleImage',
          image: require('@/assets/projects/phillips-pts/recare.jpg'),
          imageThumbnail: require('@/assets/projects/phillips-pts/recare-thumbnail.jpg'),
          content:
            'The ReCare series is a fully medically certified series, focusing on clinical and inpatient rehabilitation, and is designed to be used under professional supervision.',
        },
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/phillips-pts/recare-1.jpg'),
          imageLeftThumbnail: require('@/assets/projects/phillips-pts/recare-1-thumbnail.jpg'),
          imageRight: require('@/assets/projects/phillips-pts/recare-2.jpg'),
          imageRightThumbnail: require('@/assets/projects/phillips-pts/recare-2-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'singleImage',
          image: require('@/assets/projects/phillips-pts/reactiv.jpg'),
          imageThumbnail: require('@/assets/projects/phillips-pts/reactiv-thumbnail.jpg'),
          content:
            'The ReActiv series is commercial-level certified, focusing on the auxiliary medical needs in outpatient care and chronic disease treatment, and is designed to be seamlessly integrated into active aging facilities.',
        },
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/phillips-pts/reactiv-1.jpg'),
          imageLeftThumbnail: require('@/assets/projects/phillips-pts/reactiv-1-thumbnail.jpg'),
          imageRight: require('@/assets/projects/phillips-pts/reactiv-2.jpg'),
          imageRightThumbnail: require('@/assets/projects/phillips-pts/reactiv-2-thumbnail.jpg'),
          content: '',
        },
      ],
    },
    {
      id: '3',
      title: 'Dyaco B2B Order Placing Site',
      year: '2018 - 2020',
      categories: ['UI/UX'],
      image: require('@/assets/projects/dyaco-b2b/cover.jpg'),
      imageThumbnail: require('@/assets/projects/dyaco-b2b/cover-thumbnail.jpg'),
      intro:
        'To prevent verbal misunderstandings and mailing time costs, Dyaco decided to launch a B2B order placing site for its distributors. The site provides users with different filters to narrow the search results and make the ordering process shorter and smoother. \n\nFrom category structure to order placing methods, this is the very first time for me to work on a user experience project.',
      btnInfo: {
        btn: false,
      },
      infos: [
        { link: false, type: 'role', content: 'UI/UX Designer, Webmaster' },
        { link: false, type: 'tool', content: 'Adobe Creative Suite' },
        {
          link: true,
          type: 'production',
          contents: [
            {
              text: 'NTT DATA TAIWAN',
              link: 'https://www.nttdata-taiwan.com/',
            },
          ],
        },
        { link: false, type: 'client', content: 'Dyaco International Inc.' },
      ],
      contents: [
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/dyaco-b2b/mobile.jpg'),
          imageLeftThumbnail: require('@/assets/projects/dyaco-b2b/mobile-thumbnail.jpg'),
          imageRight: require('@/assets/projects/dyaco-b2b/laptop.jpg'),
          imageRightThumbnail: require('@/assets/projects/dyaco-b2b/laptop-thumbnail.jpg'),
          content:
            "It's a full RWD site, users can place the order on their smartphone, tablet, or laptop when they have access to the internet.",
        },
        {
          type: 'text',
          content:
            'Dyaco has a wide range of products. How to sensibly categorize the products is the hardest part of this project. \n\nWe have proposed 3 different category structures and some additional filters to make it easier for the customers to find what they want.',
        },
        {
          type: 'singleImage',
          image: require('@/assets/projects/dyaco-b2b/ux-1.jpg'),
          imageThumbnail: require('@/assets/projects/dyaco-b2b/ux-1-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'singleImage',
          image: require('@/assets/projects/dyaco-b2b/ux-2.jpg'),
          imageThumbnail: require('@/assets/projects/dyaco-b2b/ux-2-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'singleImage',
          image: require('@/assets/projects/dyaco-b2b/ux-3.jpg'),
          imageThumbnail: require('@/assets/projects/dyaco-b2b/ux-3-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'singleImage',
          image: require('@/assets/projects/dyaco-b2b/ux-4.jpg'),
          imageThumbnail: require('@/assets/projects/dyaco-b2b/ux-4-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'singleImage',
          image: require('@/assets/projects/dyaco-b2b/ux-5.jpg'),
          imageThumbnail: require('@/assets/projects/dyaco-b2b/ux-5-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'text',
          content:
            'Users can search the product by function, by business category, or by brand. If they already have something on their mind, they can easily search the product by keywords on the Quick Order page.',
        },
      ],
    },
    {
      id: '2',
      title: 'Alma Burton',
      year: '2017',
      categories: ['Identity & Communication'],
      image: require('@/assets/projects/alma-burton/cover.jpg'),
      thumbnail: require('@/assets/projects/alma-burton/cover-thumbnail.jpg'),
      intro:
        'The main business of Alma Burton is high-end customized tourism. The company is named after a pair of children of the boss. The "A" and "B" in the logotype are replaced with alpha and beta to achieve a smoother look. \n\nAs the chief designer of this project, I designed the logo, marketing materials, and established the official website using the Wix platform. \n\nHere are some of the results of this project.',
      btnInfo: {
        btn: false,
      },
      infos: [
        { link: false, type: 'role', content: 'Graphic Designer, Webmaster' },
        { link: false, type: 'tool', content: 'Adobe Creative Suite, Wix' },
        { link: false, type: 'client', content: 'Alma Burton' },
      ],
      contents: [
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/alma-burton/business-card.jpg'),
          imageLeftThumbnail: require('@/assets/projects/alma-burton/business-card-thumbnail.jpg'),
          imageRight: require('@/assets/projects/alma-burton/paper.jpg'),
          imageRightThumbnail: require('@/assets/projects/alma-burton/paper-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'singleImage',
          image: require('@/assets/projects/alma-burton/stationery.jpg'),
          thumbnail: require('@/assets/projects/alma-burton/stationery-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/alma-burton/brochure-1.jpg'),
          imageLeftThumbnail: require('@/assets/projects/alma-burton/brochure-1-thumbnail.jpg'),
          imageRight: require('@/assets/projects/alma-burton/website-2.jpg'),
          imageRightThumbnail: require('@/assets/projects/alma-burton/website-2-thumbnail.jpg'),
          content: '',
        },
      ],
    },
    {
      id: '1',
      title: 'Alpha Jet',
      year: '2017',
      categories: ['Identity & Communication'],
      image: require('@/assets/projects/alpha-jet/cover-2.jpg'),
      thumbnail: require('@/assets/projects/alpha-jet/cover-2-thumbnail.jpg'),
      intro:
        "ALPHA JET is one of Asia's premier business aviation companies. Their main services are aircraft management, aircraft trading, aircraft maintenance, charter services and ground handling services. \n\nWith the most experienced pilots and flight attendants, ALPHA JET promise to provide the highest level of service and reliability.",
      btnInfo: {
        btn: false,
      },
      infos: [
        { link: false, type: 'role', content: 'Graphic Designer, Webmaster' },
        { link: false, type: 'tool', content: 'Adobe Creative Suite, Wix' },
        { link: false, type: 'client', content: 'ALPHA JET Co., Ltd.' },
      ],
      contents: [
        {
          type: 'singleImage',
          image: require('@/assets/projects/alpha-jet/invitation.jpg'),
          imageThumbnail: require('@/assets/projects/alpha-jet/invitation-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'text',
          content:
            'As the chief designer of this project, I designed the logo, marketing materials, and established the official website using the Wix platform. \n\nHere are some of the results of this project.',
        },
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/alpha-jet/business-card-1.jpg'),
          imageLeftThumbnail: require('@/assets/projects/alpha-jet/business-card-1-thumbnail.jpg'),
          imageRight: require('@/assets/projects/alpha-jet/business-card-2.jpg'),
          imageRightThumbnail: require('@/assets/projects/alpha-jet/business-card-2-thumbnail.jpg'),
          content: '',
        },
        {
          type: 'duoImage',
          imageLeft: require('@/assets/projects/alpha-jet/website.jpg'),
          imageLeftThumbnail: require('@/assets/projects/alpha-jet/website-thumbnail.jpg'),
          imageRight: require('@/assets/projects/alpha-jet/stationery.jpg'),
          imageRightThumbnail: require('@/assets/projects/alpha-jet/stationery-thumbnail.jpg'),
          content: '',
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