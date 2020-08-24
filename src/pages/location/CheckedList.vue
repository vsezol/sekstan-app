<template>
  <v-card class="pa-4">
    <v-card-title class="px-0 pt-0 pb-4">
      <span class="ml-2">
        <v-icon color="primary">
          mdi-brightness-7
        </v-icon>
      </span>
      <span class="ml-2">Выбранные светила</span>
    </v-card-title>
    <v-list rounded class="pa-0">
      <planet-item
        v-for="(planet, i) in onlyChecked.planets"
        :key="i + '-planet'"
        type="planet"
        :name="planet.name"
        :avT="planet.avT"
        :avOC="planet.avOC"
        :link="planet.link"
      />
      <planet-item
        v-for="(star, i) in onlyChecked.stars"
        :key="i + '-star'"
        type="star"
        :name="star.name"
        :avT="star.avT"
        :avOC="star.avOC"
        :link="star.link"
      />
    </v-list>
    <information-block
      class="mb-4 mt-4 px-4 py-2"
      :values="[
        { value: skp, text: 'СКП' },
        { value: deviation, text: 'Deviation' }
      ]"
      :color="'success'"
      :textColor="'white'"
    />
    <router-link tag="div" :to="'/location'">
      <v-btn color="primary" width="100%">
        Расчитать место
      </v-btn>
    </router-link>
  </v-card>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import PlanetItem from '@/components/PlanetItem'
import InformationBlock from '@/components/InformationBlock'

export default {
  name: 'CheckedList',
  computed: {
    ...mapState('checkPlanets', ['skp', 'deviation']),
    ...mapGetters('checkPlanets', ['onlyChecked'])
  },
  components: {
    PlanetItem,
    InformationBlock
  }
}
</script>

<style></style>
