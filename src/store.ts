import { defineStore } from 'pinia'
import { Category } from '@/types'

const versionString =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_APP_VERSION + '-dev'
    : import.meta.env.VITE_APP_VERSION

export const useStore = defineStore('main', {
  state: () => ({
    debug: import.meta.env.MODE === 'development',
    version: versionString,
    isInitialized: false,
    //定义分类
    category: {} as Category,
  }),

  actions: {
    initApp() {
      this.isInitialized = true
      console.log('app initialized!')
    },
  },

  getters: {
    isReady: (state) => {
      return !state.isInitialized
    },
  },
})
export const useUserStore = defineStore('user', {
  state: () => ({
    uuid: '',
    accessToken: '',
    refreshToken: '',
    userInfo: {},
  }),
  persist:true,
})
