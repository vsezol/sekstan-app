<template>
  <v-list-item link>
    <v-list-item-icon>
      <v-icon v-if="type === 'star' || name === 'sun'" color="yellow"
        >mdi-star</v-icon
      >
      <v-icon v-else color="primary">mdi-moon-full</v-icon>
    </v-list-item-icon>
    <v-list-item-title class="font-weight-bold text-h6">
      {{ name }}
    </v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  props: {
    name: [String, Number],
    type: String
  }
}
</script>
