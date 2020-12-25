<script>
import ApiLogin from '../../api/Login.js'

export default {
  name: 'FormLogin',

  components: {
    ApiLogin
  },

  data () {
    return {
      formData: {
        email: null,
        password: null
      },
      showPass: false
    }
  },

  methods: {
    async __onDone ({ data }) {
      const result = data && data.data

      if (result.token) {
        await this.$axios.onLogin(result.token)
        this.$store.commit('user/setUser', result)
        this.$router.push('/dashboard')
        this.$emit('done')
      }

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

    __onSubmit () {
      this.$refs.apiLoginForm.submit()
    }
  }
}
</script>

<template lang="pug">
api-login(
  ref="apiLoginForm"
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
        name="e-mail"
        rules="required|email"
        v-slot="{ errors, invalid, validated }"
        vid="email"
      )
        q-input(
          bottom-slots
          filled
          no-error-icon
          autocomplete="email"
          label="Digite seu e-mail"
          type="email"
          v-model="formData.email"
          :color="!invalid ? 'positive' : ''"
          :error-message="errors[0]"
          :error="invalid && validated"
        )

      ValidationProvider(
        class="col-12"
        name="senha"
        rules="required"
        v-slot="{ errors, invalid, validated }"
        vid="senha"
      )
        q-input(
          bottom-slots
          filled
          no-error-icon
          autocomplete="password"
          label="Digite sua senha"
          v-model="formData.password"
          :color="!invalid ? 'positive' : ''"
          :error-message="errors[0]"
          :error="invalid && validated"
          :type="showPass ? 'text' : 'password'"
        )
          template(v-slot:append)
            q-icon(
              class="cursor-pointer"
              :name="showPass ? 'visibility' : 'visibility_off'"
              @click="showPass = !showPass"
            )

      div(class="col-12")
        q-btn(
          no-caps
          class="full-width text-weight-medium"
          color="positive"
          label="Entrar"
          style="height: 50px"
          type="submit"
        )

</template>
