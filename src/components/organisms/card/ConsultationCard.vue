<script>

import { date } from 'quasar'

export default {
  name: 'ConsultationCard',

  props: {
    consultation: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    dateFormated (type) {
      return date.formatDate(this.consultation.dataConsulta, type)
    }
  }
}
</script>

<template lang="pug">
q-card(
  class="shadow-card full-width cursor-pointer"
  @click="$router.push({ name: 'consultationDetails', params: { consultation: consultation.id } })"
)
  q-card-section(class="row items-center justify-between no-wrap")
    div(class="row q-col-gutter-md items-center no-wrap")
      div
        q-card(
          flat
          class="bg-grey-1 q-py-xs q-px-sm"
        )
          div(class="row items-center no-wrap")
            div(class="row column items-center")
              div(class="text-bold text-primary text-subtitle2")
                |  {{ dateFormated('MMM') }}

              div(class="text-bold text-subtitle1 text-grey-9")
                |  {{ dateFormated('DD') }}

            q-separator(
              inset
              vertical
              color="primary"
              class="q-mx-sm"
            )

            div(class="row column items-center")
              div(class="text-bold text-primary text-subtitle2")
                 |  {{ dateFormated('A') }}

              div(class="text-bold text-subtitle1 text-grey-9")
                |  {{ dateFormated('HH:mm') }}

      div(class="row")
        div(class="text-subtitle2 text-grey-7")
          | Paciente
        div(class="text-subtitle1 text-bold text-grey-9 col-12")
          | {{ consultation.paciente }}

    q-btn(
      dense
      flat
      class="text-primary"
      icon="keyboard_arrow_right"
      size="14px"
    )

</template>
