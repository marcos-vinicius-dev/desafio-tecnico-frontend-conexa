import Vue from 'vue'

import AxiosPostMixin from '../../mixins/axios/post.js'

export default Vue.extend({
  name: 'ApiLogin',

  mixins: [AxiosPostMixin],

  created () {
    this.url = '/api/login'
  }
})
