<template>
  <v-alert color="success" dark class="skp-dev-alert px-4 py-2">
    <div><span class="font-weight-bold">СКП: </span>{{ skp }}</div>
    <div><span class="font-weight-bold">Deviation: </span>{{ deviation }}</div>
  </v-alert>
</template>

<script>
export default {
  props: ['skp', 'deviation']
}
</script>
