<template>
  <v-card>
    <v-list rounded>
      <planet-item
        v-for="(planet, i) in onlyChecked.planets"
        :key="i + '-planet'"
        type="planet"
        :name="planet.name"
      />
      <planet-item
        v-for="(star, i) in onlyChecked.stars"
        :key="i + '-star'"
        type="star"
        :name="star"
      />
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import PlanetItem from '@/components/PlanetItem'

export default {
  name: 'CheckedList',
  computed: {
    ...mapGetters('checkPlanets', ['onlyChecked'])
  },
  mounted() {
    console.log(this.onlyChecked)
  },
  components: {
    PlanetItem
  }
}
</script>

<style></style>
