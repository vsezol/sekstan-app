<template>
  <v-list-item link style="background: #F5F5F5" :to="link">
    <v-list-item-icon>
      <v-icon v-if="type === 'star' || name === 'sun'" color="yellow">
        mdi-star
      </v-icon>
      <v-icon v-else color="primary">mdi-moon-full</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title class="font-weight-bold text-h6">
        {{ name }}
      </v-list-item-title>
      <div class="d-flex">
        <span class="mr-4">
          <span class="font-weight-bold">
            av. OC:
          </span>
          {{ avOC ? avOC : '&times;' }}
        </span>
        <span>
          <span class="font-weight-bold">
            av. T:
          </span>
          {{ avT ? avT : '&times;' }}
        </span>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    name: [String, Number],
    type: String,
    avOC: [Number, null],
    avT: [Number, null],
    link: String
  }
}
</script>
