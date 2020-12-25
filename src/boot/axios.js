import Vue from 'vue'
import axios from 'axios'

axios.defaults.headers.common.Accept = 'application/json'

export default ({ store }) => {
  const AUTH_TOKEN_NAME = 'axios-token'

  /* ---------------------------------- */
  /*              Auth Main             */
  /* ---------------------------------- */
  function authMain () {
    const authorization = defaultGetAuth()
    if (authorization) {
      setAxiosHeaders(authorization)
      store.commit('user/isAuthenticated', true)
    }
  }

  /* ---------------------------------- */
  /*        Get token in cookies        */
  /* ---------------------------------- */
  function defaultGetAuth () {
    if (Vue.prototype.$q && Vue.prototype.$q.cookies) {
      const token = Vue.prototype.$q.cookies.get(AUTH_TOKEN_NAME)
      return token ? 'Bearer ' + token : ''
    }
    return ''
  }

  /* ---------------------------------- */
  /*      Set token without header      */
  /* ---------------------------------- */
  function setAxiosHeaders (token) {
    axios.defaults.headers.common.Authorization = token
  }

  authMain()

  Vue.prototype.$axios = {
    ...axios,

    /* ---------------------------------- */
    /*           Function Login           */
    /* ---------------------------------- */
    onLogin (token) {
      if (token) {
        store.commit('user/isAuthenticated', true)
        Vue.prototype.$q.cookies.set(AUTH_TOKEN_NAME, token, { path: '/' })
        axios.defaults.headers.common.Authorization = 'Bearer ' + token
      }
    },

    /* ---------------------------------- */
    /*          Function Logount          */
    /* ---------------------------------- */
    onLogount () {
      store.commit('user/setUser', null)
      store.commit('user/isAuthenticated', false)
      Vue.prototype.$q.cookies.set(AUTH_TOKEN_NAME, '', { path: '/' })
    }
  }
}
