import Vue from 'vue'

import {
  localize,
  ValidationObserver,
  ValidationProvider
} from 'vee-validate/dist/vee-validate.full'

import ptBR from 'vee-validate/dist/locale/pt_BR.json'

localize('pt_BR', ptBR)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

export default function () { }
