import Vue from 'vue'

import AxiosGetMixin from '../../mixins/axios/get.js'

export default Vue.extend({
  name: 'ApiConsultationList',

  mixins: [AxiosGetMixin],

  created () {
    this.url = '/api/consultas'
  }
})
