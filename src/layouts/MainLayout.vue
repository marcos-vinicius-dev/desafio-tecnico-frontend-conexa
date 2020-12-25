<script>
import UserDropdown from '../components/molecules/dropdowns/UserDropdown.vue'

export default {
  name: 'MainLayout',

  components: {
    UserDropdown
  }
}
</script>

<template lang="pug">
q-layout(view='hHh lpR fFf')
  q-header
    q-toolbar(
      class="justify-center"
      style="min-height:60px"
    )
      div(class="col-12 col-md-8")
        div(class="row items-center")
          img(
            alt="Quasar logo"
            class="cursor-pointer"
            src="~assets/logo-conexa-white.svg"
            @click="$router.push('/dashboard')"
          )

          q-space

          UserDropdown

  q-page-container
    router-view

</template>
