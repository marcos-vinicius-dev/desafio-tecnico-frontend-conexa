import Vue from 'vue'

import AxiosGetMixin from '../../mixins/axios/get.js'

export default Vue.extend({
  name: 'ApiConsultationDetails',

  mixins: [AxiosGetMixin],

  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },

  created () {
    this.url = `/api/consulta/${this.id}`
  }
})
