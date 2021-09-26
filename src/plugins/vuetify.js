import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
  options: {
    customProperties: true,
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#FC620F',
        secondary: '#C7C7C7',
        accent: '#FC620F',
        white: '#ffffff',
        black: '#181818',
        olive: '#244533',
        // error: '',
        // warning: '',
        // info: '',
        // success: ''
      },
    },
  },
}

export default new Vuetify(opts)
