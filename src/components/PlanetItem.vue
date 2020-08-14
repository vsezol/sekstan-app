<template>
  <v-list-item link style="background: #F5F5F5" :to="link">
    <v-list-item-icon>
      <v-icon v-if="type === 'star' || name === 'sun'" color="yellow"
        >mdi-star</v-icon
      >
      <v-icon v-else color="primary">mdi-moon-full</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title class="font-weight-bold text-h6">
        {{ name }}
      </v-list-item-title>
      <span v-if="h">h = {{ h }}</span>
      <span v-else>Нет данных</span>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    name: [String, Number],
    type: String,
    h: [Number, null],
    link: String
  }
}
</script>
