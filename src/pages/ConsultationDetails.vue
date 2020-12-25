<script>
import ApiConsultationDetails from '../components/api/ConsultationDetails.js'

export default {
  name: 'PageConsultationDetails',

  components: {
    ApiConsultationDetails
  },

  data () {
    return {
      idConsultation: null
    }
  },

  watch: {
    $route: {
      immediate: true,
      handler (val) {
        this.idConsultation = val.params.consultation
      }
    }
  }
}
</script>

<template lang="pug">
q-page(class="bg-grey-2 row justify-center")
  div(class="col-11 col-md-8 q-my-xl")
    div(class="text-h4 text-grey-9 text-bold")
      | Detalhe consulta

    api-consultation-details(
      v-slot="{ loading, submit, data }"
      :id="idConsultation"
    )
      //- Skeleton
      q-card(
        class="shadow-card q-pa-sm q-pa-md-md q-mt-lg"
        v-if="loading"
      )
        q-card-section
          div(class="row justify-between q-col-gutter-md justify-center")
            div(class="q-mb-lg")
              div(class="text-grey-8")
                q-skeleton(
                  type="text"
                  width="150px"
                )

              div(class="text-h6 text-bold text-grey-9")
                q-skeleton(
                  type="text"
                  width="200px"
                )

              div(class="text-grey-8 q-mt-xl")
                q-skeleton(
                  type="text"
                  width="150px"
                )

              div(class="text-h6 text-bold text-grey-9")
                q-skeleton(
                  type="text"
                  width="200px"
                )

            div(class="row q-col-gutter-md")
              div
                q-skeleton(
                  height="300px"
                  width="280px"
                )
              div
                q-skeleton(
                  height="300px"
                  width="280px"
                )

      //- Details
      div(
        class="q-mt-lg"
        v-if="data && data.data"
      )
        q-card(class="shadow-card q-pa-sm q-pa-md-md")
          q-card-section
            div(class="row justify-between q-col-gutter-md justify-center")
              div(class="q-mb-lg")
                div(class="text-grey-8")
                  | Paciente

                div(class="text-h6 text-bold text-grey-9")
                  | {{ data.data.paciente }}

                div(class="text-grey-8 q-mt-xl")
                  | Observações

                div(class="text-h6 text-bold text-grey-9")
                  | {{ data.data.observacao }}

              div(class="row q-col-gutter-md")
                div
                  q-date(
                    flat
                    readonly
                    class="shadow-card"
                    mask="YYYY-MM-DD HH:mm"
                    v-model="data.data.dataConsulta"
                  )
                div
                  q-time(
                    flat
                    readonly
                    class="shadow-card"
                    mask="YYYY-MM-DD HH:mm"
                    v-model="data.data.dataConsulta"
                  )

</template>
