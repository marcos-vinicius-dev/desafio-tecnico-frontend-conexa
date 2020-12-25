// import { Cookies } from 'quasar'
import createPersistedState from 'vuex-persistedstate'

export default function ({ store }) {
  // const cookies = process.env.SERVER
  //   ? Cookies.parseSSR(ssrContext)
  //   : Vue.prototype.$q.cookies

  createPersistedState({
    // storage: {
    //   getItem (key) {
    //     return JSON.stringify(cookies.get(key))
    //   },
    //   setItem (key, value) {
    //     cookies.set(key, value, {
    //       path: '/'
    //     })
    //   },
    //   removeItem (key) {
    //     cookies.remove(key)
    //   }
    // },
    // overwrite: true,
    fetchBeforeUse: true
    // rehydrated: (v) => {
    //   console.log(v)
    // }
  })(store)
}
