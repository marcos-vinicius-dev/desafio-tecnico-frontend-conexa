<script>
import ConsultationList from '../components/organisms/lists/ConsultationList.vue'

export default {
  name: 'PageConsultationList',

  components: {
    ConsultationList
  }
}
</script>

<template lang="pug">
q-page(class="bg-grey-2 row justify-center")
  div(class="col-11 col-md-8 q-my-xl")
    div(class="text-h4 text-grey-9 text-bold q-mb-lg")
      | Consultas

    consultation-list(class="q-mt-lg")

</template>
