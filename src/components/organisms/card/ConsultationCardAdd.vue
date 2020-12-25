<script>

export default {
  name: 'ConsultationCardAdd'
}
</script>

<template lang="pug">
q-card(
  flat
  class="full-width cursor-pointer bg-transparent"
  style="border: dashed #c7c7c7"
  @click="$router.push({ path: 'consultationCreate' })"
)
  q-card-section(class="row justify-between items-center")
    div(class="text-subtitle1 text-bold text-grey-9")
      | Criar consulta

    q-btn(
      dense
      flat
      class="text-primary"
      icon="control_point"
      size="14px"
    )

</template>
