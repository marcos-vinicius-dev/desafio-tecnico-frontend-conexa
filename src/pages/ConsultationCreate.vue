<script>
import FormConsultationCreate from '../components/organisms/forms/FormConsultationCreate.vue'

export default {
  name: 'PageConsultationCreate',

  components: {
    FormConsultationCreate
  }
}
</script>

<template lang="pug">
q-page(class="bg-grey-2 row justify-center items-center")
  div(class="col-11 col-md-3 q-my-xl")
    q-card(class="shadow-card")
      div(class="row")
        q-card-section
          form-consultation-create

</template>
