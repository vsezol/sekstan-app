<template>
  <v-card class="pa-4">
    <v-list rounded class="pa-0">
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
    <skp-dev-block class="mb-4 mt-4" :skp="111" :deviation="444"/>
    <router-link tag="div" :to="'#'">
      <v-btn color="primary" width="100%">
        Расчитать место
      </v-btn>
    </router-link>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import PlanetItem from '@/components/PlanetItem'
import SkpDevBlock from '@/components/SkpDevBlock'

export default {
  name: 'CheckedList',
  computed: {
    ...mapGetters('checkPlanets', ['onlyChecked'])
  },
  mounted() {
    console.log(this.onlyChecked)
  },
  components: {
    PlanetItem,
    SkpDevBlock
  }
}
</script>

<style></style>
