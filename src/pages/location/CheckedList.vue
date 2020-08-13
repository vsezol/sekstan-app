<template>
  <v-card class="pa-2 pb-4">
    <v-list rounded>
      <planet-item
        v-for="(planet, i) in onlyChecked.planets"
        :key="i + '-planet'"
        type="planet"
        :name="planet.name"
        :calc="22"
      />
      <planet-item
        v-for="(star, i) in onlyChecked.stars"
        :key="i + '-star'"
        type="star"
        :name="star"
        :calc="null"
      />
    </v-list>
    <router-link tag="div" :to="'#'" class="mt-2">
      <v-btn color="primary" width="100%">
        Расчитать место
      </v-btn>
    </router-link>
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
