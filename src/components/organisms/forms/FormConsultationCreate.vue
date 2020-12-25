<script>
import ApiConsultationCreate from '../../api/ConsultationCreate.js'

import { date } from 'quasar'

const initFormData = {
  idMedico: 12,
  paciente: null,
  dataConsulta: null,
  observacao: null
}

export default {
  name: 'FormConsultationCreate',

  components: {
    ApiConsultationCreate
  },

  data () {
    return {
      dataLocal: '',
      formData: {
        idMedico: 12,
        paciente: null,
        dataConsulta: null,
        observacao: null
      },
      hourLocal: ''
    }
  },

  methods: {

    __dateFormated (date, hour) {
      if (!date) {
        return null
      }
      const [day, month, year] = date.split('/')
      return `${year}-${month}-${day}T${hour}`
    },

    __datesOptions (value) {
      const timeStamp = Date.now()
      return value >= date.formatDate(timeStamp, 'YYYY/MM/DD')
    },

    async __onDone ({ data }) {
      this.formData = initFormData
      this.$emit('done')
      this.$router.push('/consultationList')

      this.$q.notify({
        color: 'positive',
        message: 'Consulta criada com sucesso.',
        position: 'top-right'
      })

      return Promise.resolve()
    },

    async __onError (e) {
      if (e && e.message) {
        this.$q.notify({
          color: 'negative',
          message: e.message,
          position: 'top-right'
        })
      }
    },

    async __onSubmit () {
      this.formData.dataConsulta = this.__dateFormated(this.dataLocal, this.hourLocal)
      this.$refs.apiConsultationCreateForm.submit()
    }
  }
}
</script>

<template lang="pug">
api-consultation-create(
  ref="apiConsultationCreateForm"
  v-slot="{ loading, submit }"
  :variables="formData"
  @error="__onError"
  @done="__onDone"
)
  ValidationObserver(
    ref="observer"
    v-slot="{ handleSubmit }"
  )
    q-form(
      class="row justify-center items-center q-col-gutter-md q-pa-lg"
      @submit="handleSubmit(__onSubmit)"
    )
      div(class="text-h4 text-bold text-center text-grey-9 q-mb-lg")
        | Login

      ValidationProvider(
        class="col-12"
        name="nome"
        rules="required"
        v-slot="{ errors, invalid, validated }"
        vid="name"
      )
        q-input(
          bottom-slots
          filled
          no-error-icon
          autocomplete="name"
          label="Nome paciente"
          v-model="formData.paciente"
          :color="!invalid ? 'positive' : ''"
          :error-message="errors[0]"
          :error="invalid && validated"
        )

      ValidationProvider(
        class="col-12"
        name="data"
        rules="required"
        v-slot="{ errors, invalid, validated }"
        vid="date"
      )
        q-input(
          bottom-slots
          filled
          no-error-icon
          autocomplete="date"
          label="Data consulta"
          mask="##/##/####"
          v-model="dataLocal"
          :color="!invalid ? 'positive' : ''"
          :error-message="errors[0]"
          :error="invalid && validated"
        )
          template(v-slot:append)
            q-icon(
              class="cursor-pointer"
              name="event"
            )
              q-popup-proxy(
                ref="qDateProxy"
                transition-hide="scale"
                transition-show="scale"
              )
                q-date(
                  mask="DD/MM/YYYY"
                  v-model="dataLocal"
                  :options="__datesOptions"
                )
                  div(class="row items-center justify-end")
                    q-btn(
                      flat
                      v-close-popup
                      color="primary"
                      label="Fechar"
                    )

      ValidationProvider(
        class="col-12"
        name="Horário"
        rules="required"
        v-slot="{ errors, invalid, validated }"
        vid="hour"
      )
        q-input(
          bottom-slots
          filled
          no-error-icon
          autocomplete="hour"
          label="Horário consulta"
          mask="##:##"
          v-model="hourLocal"
          :color="!invalid ? 'positive' : ''"
          :error-message="errors[0]"
          :error="invalid && validated"
        )
          template(v-slot:append)
            q-icon(
              class="cursor-pointer"
              name="access_time"
            )
              q-popup-proxy(
                transition-show="scale"
                transition-hide="scale"
              )
                q-time(v-model="hourLocal")
                  div(class="row items-center justify-end")
                    q-btn(
                      flat
                      v-close-popup
                      color="primary"
                      label="Fechar"
                    )

      ValidationProvider(
        class="col-12"
        name="Observação"
        rules="required"
        v-slot="{ errors, invalid, validated }"
        vid="observacao"
      )
        q-input(
          bottom-slots
          filled
          no-error-icon
          autocomplete="observacao"
          label="observação"
          style="max-height: 200px"
          type="textarea"
          v-model="formData.observacao"
          :color="!invalid ? 'positive' : ''"
          :error-message="errors[0]"
          :error="invalid && validated"
        )

      div(class="col-12")
        q-btn(
          no-caps
          class="full-width text-weight-medium"
          color="positive"
          label="Salvar"
          style="height: 50px"
          type="submit"
        )

</template>
