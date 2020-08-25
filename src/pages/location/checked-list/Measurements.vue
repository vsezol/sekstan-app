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
          { value: formatOC(el.avOC), text: 'Среднее OC' },
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
        <v-btn color="primary" width="100%"> OK </v-btn>
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
    ...mapActions('checkPlanets', ['addResult', 'removeResult']),
    removeResultHandler(number) {
      const index = number - 1
      const socket = this.socket
      socket.send(
        JSON.stringify({
          request: 'REMOVE_RESULT',
          index
        })
      )
      this.removeResult({ index, type: this.type, name: this.name })
    },
    formatOC(OC) {
      return parseInt(OC / 60) + '°' + (OC % 60) + "'"
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
      const msg = JSON.parse(evt.data)
      if (msg.request === 'RESULT') {
        const OC = msg.OC
        const T = msg.T
        this.addResult({ name: this.name, type: this.type, OC, T })
      }
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
