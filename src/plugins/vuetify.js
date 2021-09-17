import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
  options: {
    customProperties: true,
  },
  theme: {
    // 在這裡設定主題配色
    dark: false, // 關閉深色主題
    // 使用淺色主題，設定他的配色
    themes: {
      light: {
        primary: '#244533',
        secondary: '#FC620',
        accent: '#0066CC',
        white: '#ffffff',
        // error: '#f44336',
        // warning: '#ff5722',
        // info: '#607d8b',
        // success: '#4caf50'
      },
    },
  },
}

export default new Vuetify(opts)
