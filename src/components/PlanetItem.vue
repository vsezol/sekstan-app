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
          {{ avOC ? formatOC(avOC) : '&times;' }}
        </span>
        <span>
          <span class="font-weight-bold">
            av. T:
          </span>
          {{ avT ? formatT(avT) : '&times;' }}
        </span>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'PlanetItem',
  props: {
    name: [String],
    type: String,
    avOC: [Number, null],
    avT: [Number, null],
    link: String
  },
  methods: {
    formatOC: OC =>
      parseInt(OC / 60) + '°' + Math.round((OC % 60) * 100) / 100 + "'",
    formatT: T => {
      const date = new Date(0)
      date.setSeconds(T)
      return date.toISOString().substr(11, 8)
    }
  }
}
</script>
