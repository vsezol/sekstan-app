<template>
  <v-card>
    <v-card-title>
      <span class="ml-2">
        <v-icon v-if="type === 'star' || name === 'sun'" color="yellow">
          mdi-star
        </v-icon>
        <v-icon v-else color="primary">mdi-moon-full</v-icon>
      </span>
      <span class="ml-2">{{ name }}</span>
    </v-card-title>
    <v-list rounded class="py-0">
      <measurement-item
        v-for="(result, i) in el.results"
        :OC="result.OC"
        :T="result.T"
        :number="i + 1"
        @remove="removeResultHandler"
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
  name: 'Measurements',
  data() {
    return {
      type: this.$route.query.type,
      name: this.$route.params.name
    }
  },
  computed: {
    ...mapState('checkPlanets', ['skp', 'deviation']),
    ...mapState(['socket']),
    el() {
      return this.$store.getters['checkPlanets/getByTypeAndName'](
        this.type,
        this.name
      )
    }
  },
  methods: {
    ...mapActions('checkPlanets', ['randomOCAndT', 'removeResult']),
    removeResultHandler(number) {
      const index = number - 1
      this.removeResult({ index, type: this.type, name: this.name })
    }
  },
  mounted() {
    const socket = this.socket
    socket.send(
      JSON.stringify({
        request: 'SET_CURRENT_LAMP',
        name: this.name,
        type: this.type
      })
    )
    socket.onmessage = evt => {
      console.log(JSON.parse(evt.data))
    }
  },
  beforeDestroy() {
    const socket = this.socket
    socket.send(
      JSON.stringify({
        request: 'CLEAR_CURRENT_LAMP'
      })
    )
  },
  components: {
    MeasurementItem,
    InformationBlock
  }
}
</script>
