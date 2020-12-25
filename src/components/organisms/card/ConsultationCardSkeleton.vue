<script>

export default {
  name: 'ConsultationCardSkeleton'
}
</script>

<template lang="pug">
q-card(class="shadow-card full-width cursor-pointer")
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
                q-skeleton(
                  type="text"
                  width="20px"
                )

              div(class="text-bold text-subtitle1 text-grey-9")
                q-skeleton(
                  type="text"
                  width="20px"
                )

            q-separator(
              inset
              vertical
              color="primary"
              class="q-mx-sm"
            )

            div(class="row column items-center")
              div(class="text-bold text-primary text-subtitle2")
                q-skeleton(
                  type="text"
                  width="20px"
                )

              div(class="text-bold text-subtitle1 text-grey-9")
                q-skeleton(
                  type="text"
                  width="20px"
                )

      div(class="row")
        div(class="text-subtitle2 text-grey-7")
          q-skeleton(
            type="text"
            width="200px"
          )

        div(class="text-subtitle1 text-bold text-grey-9 col-12")
          q-skeleton(
            type="text"
            width="150px"
          )

    q-skeleton(
      type="QBtn"
      size="28px"
    )

</template>
