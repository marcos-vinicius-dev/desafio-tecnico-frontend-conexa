<script>
import FormLogin from '../components/organisms/forms/FormLogin.vue'

export default {
  name: 'PageIndex',

  components: {
    FormLogin
  },

  data () {
    return {
      differentials: [
        {
          icon: 'flash_on',
          text: 'Agende sua consulta com rapidez e facilidade.'
        },
        {
          icon: 'date_range',
          text: 'Calendário de consultas.'
        },
        {
          icon: 'verified',
          text: 'O aplicativo mais seguro do mercado.'
        }
      ]
    }
  }
}
</script>

<template lang="pug">
q-page(class="bg-grey-2")
  div(
    class="row justify-center items-center"
    :style="`background: url(${require('../assets/banner.jpg')}) no-repeat center center; background-size: cover; width: 100%; height: 339px;`"
  )
    div(class="col-10 col-md-8 q-my-xl q-px-md")
      div(class="row text-h5 text-white")
        img(
          alt="Conexa"
          class="cursor-pointer"
          src="~assets/logo-conexa-white.svg"
        )

        q-separator(
          inset
          vertical
          color="white"
          class="q-mx-md"
          style="width: 2px"
        )

        div
          | Médico

  div(class="row justify-center items-center")
    div(class="col-11 col-md-8 q-my-xl q-px-md")
      div(class="row justify-between text-grey-9")
        div(class="col-12 col-md-4 q-pt-xl")
          div(class="text-bold text-h4")
            | Sou o seu consultório online.

          div(class="q-mt-lg text-subtitle1")
            | Fácil, intuitivo, tecnológico e integrado. Tudo o que você precisa para sua clinica virtual em um só lugar.

          div(
            class="row no-wrap items-center q-col-gutter-sm q-mt-md"
            v-for="(differential, index) in differentials"
            :key="index"
          )
            q-icon(
              color="positive"
              size="32px"
              :name="differential.icon"
            )
            div(class="text-subtitle1")
              | {{ differential.text }}

        div(
          class="col-12 col-md-4 "
          :class="$q.screen.lt.md ? 'order-first' : ''"
        )
          q-card(
            class="shadow-card"
            style="margin-top: -100px"
          )
            q-card-section
              form-login

</template>
