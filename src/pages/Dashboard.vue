<script>
import ApiConsultationList from '../components/api/ConsultationList.js'
import ConsultationList from '../components/organisms/lists/ConsultationList.vue'

export default {
  name: 'PageDashboard',

  components: {
    ApiConsultationList,
    ConsultationList
  },

  data () {
    return {
      consultationCalendar: null
    }
  },

  methods: {
    async __onDoneList ({ data }) {
      this.consultationCalendar = data.data.map((consultation) => consultation.dataConsulta)
    }
  }
}
</script>

<template lang="pug">
q-page(class="bg-grey-2 row justify-center q-px-md")
  api-consultation-list(
    class="col-12 col-md-8"
    v-slot="{ loading, submit, data }"
    @done="__onDoneList"
  )
    div(class="row justify-center q-col-gutter-xl")
      div(class="col-12 col-md-6 q-my-xl")
        div(class="row justify-between")
          div(class="text-h4 text-grey-9 text-bold")
            | Consultas

          div
            q-btn(
              no-caps
              unelevated
              class="text-secondary text-bold"
              icon-right="play_circle_outline"
              label="Ver todas"
              to="/consultationList"
            )

        consultation-list(class="q-mt-lg")

      div(class="col-12 col-md-6 q-my-xl")
        div(class="text-h4 text-grey-9 text-bold")
          | Calendário

        //-Skeleton calendar
        div(
          class="q-mt-lg"
          v-if="loading"
        )
          q-skeleton(
            class="full-width"
            height="416px"
          )

        //- Calendar
        div(v-else)
          q-date(
            flat
            multiple
            class="full-width no-border shadow-card q-mt-lg"
            mask="YYYY-MM-DD HH:mm"
            :value="consultationCalendar"
          )

</template>
