<script>
import FormLogin from '../components/organisms/forms/FormLogin.vue'

export default {
  name: 'PageIndex',

  components: {
    FormLogin
  },

  data () {
    return {
      dataModel: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<template lang="pug">
q-page(class="bg-grey-2 row justify-center items-center")
  div(class="col-10 col-md-3 q-my-xl")
    q-card(class="shadow-card")
      div(class="row")
        //- div(class="col-6 bg-primary")
        //-   div(class="row justify-center items-center full-width full-height q-pa-xl")
        //-     q-img(
        //-       alt="Quasar logo"
        //-       src="~assets/medicine.svg"
        //-     )

        //- div(class="col-6")
        q-card-section
          form-login

</template>
