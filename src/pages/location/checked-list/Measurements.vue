<template>
  <v-card>
    <v-card-title>
      <span class="ml-2">
        <v-icon v-if="type === 'star' || name === 'sun'" color="yellow">
          mdi-star
        </v-icon>
        <v-icon v-else color="primary">mdi-moon-full</v-icon>
      </span>
      <span class="ml-8">{{ name }}</span>
    </v-card-title>
    <v-list rounded class="py-0">
      <measurement-item
        v-for="(result, i) in el.results"
        :OC="result.OC"
        :T="result.T"
        :number="i + 1"
        :key="i"
      />
    </v-list>
    <div class="pa-4 pb-2">
      <information-block
        :values="[
          { value: el.avOC, text: 'Среднее OC' },
          { value: el.avT, text: 'Средняя T' }
        ]"
        :color="'cyan'"
        :textColor="'white'"
      />
    </div>
    <div class="pa-0 px-4">
      <information-block
        :values="[
          { value: skp, text: 'СКП' },
          { value: deviation, text: 'Deviation' }
        ]"
        :color="'success'"
        :textColor="'white'"
      />
    </div>
    <div class="pa-4">
      <router-link tag="div" :to="'/location/checked-list'">
        <v-btn color="primary" width="100%">
          OK
        </v-btn>
      </router-link>
    </div>
  </v-card>
</template>

<script>
import MeasurementItem from '@/components/MeasurementItem'
import InformationBlock from '@/components/InformationBlock'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      type: this.$route.query.type,
      name: this.$route.params.name
    }
  },
  computed: {
    ...mapState('checkPlanets', ['skp', 'deviation']),
    el() {
      return this.$store.getters['checkPlanets/getByTypeAndName'](
        this.type,
        this.name
      )
    }
  },
  methods: {
    ...mapActions('checkPlanets', ['randomOCAndT'])
  },
  mounted() {
    setTimeout(() => {
      this.randomOCAndT({ type: this.type, name: this.name })
    }, 2000)
    setTimeout(() => {
      this.randomOCAndT({ type: this.type, name: this.name })
    }, 4000)
    setTimeout(() => {
      this.randomOCAndT({ type: this.type, name: this.name })
    }, 6000)
    setTimeout(() => {
      this.randomOCAndT({ type: this.type, name: this.name })
    }, 8000)
  },
  components: {
    MeasurementItem,
    InformationBlock
  }
}
</script>

<style></style>
