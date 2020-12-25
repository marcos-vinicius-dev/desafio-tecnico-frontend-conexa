<script>

export default {
  name: 'UserDropdown',

  data () {
    return {
      me: null
    }
  },

  computed: {
    isAuthenticated () {
      return this.$store.state.user.isAuthenticated
    },
    user () {
      return this.$store.state.user.user
    }
  },

  methods: {
    async __onLogount () {
      await this.$axios.onLogount()
      this.$router.push('/login')
    }
  }
}
</script>
<template lang="pug">
q-btn-dropdown(
  flat
  stretch
  v-if="isAuthenticated && user"
)
  template(v-slot:label)
    q-avatar(
      color="grey-2"
      text-color="grey-9"
    )
      q-icon(
        class="q-pa-xs"
        name="face"
      )

  q-list(class="text-weight-medium text-grey-9")
    q-item
      q-item-section
        q-item-label(class="text-bold text-primary")
          | {{ user.nome }}
        q-item-label(caption)
          | {{ user.email }}

    q-separator

    q-item(
      clickable
      v-close-popup
      to="/consultationCreate"
    )
      q-item-section
        | Criar consulta

    q-item(
      clickable
      v-close-popup
      to="/consultationList"
    )
      q-item-section
        | Lista de consulta

    q-separator

    q-item(
      clickable
      v-close-popup
      @click="__onLogount"
    )
      q-item-section
        q-item-label
          | Sair

</template>
