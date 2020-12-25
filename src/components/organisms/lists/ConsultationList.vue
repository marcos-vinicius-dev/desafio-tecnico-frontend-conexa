<script>
import ApiConsultationList from '../../api/ConsultationList.js'
import ConsultationCard from '../card/ConsultationCard.vue'
import ConsultationCardAdd from '../card/ConsultationCardAdd.vue'
import ConsultationCardSkeleton from '../card/ConsultationCardSkeleton.vue'

export default {
  name: 'ConsultationList',

  components: {
    ApiConsultationList,
    ConsultationCard,
    ConsultationCardAdd,
    ConsultationCardSkeleton
  }
}
</script>

<template lang="pug">
api-consultation-list(v-slot="{ loading, submit, data }")

  //- Skeleton
  consultation-card-skeleton(v-if="loading")

  //- List
  div(
    class="row q-col-gutter-md"
    v-if="data && data.data"
  )
    div(
      class="col-12 full-width"
      v-for="(consultation, index) in data.data"
      :key="index"
    )
      consultation-card(:consultation="consultation")

    div(class="col-12 full-width")
      consultation-card-add

</template>
