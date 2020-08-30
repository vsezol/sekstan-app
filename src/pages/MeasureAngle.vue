<template>
  <v-card class="pa-4">
    <v-card-title class="px-0 pt-0">
      <span class="ml-2">
        <v-icon color="teal">
          mdi-chart-ppf
        </v-icon>
      </span>
      <span class="ml-2">Измерить угол</span>
    </v-card-title>
    <v-list rounded class="py-0 px-0">
      <measurement-item
        v-for="(result, i) in results"
        :OC="result.OC"
        :T="result.T"
        :number="i + 1"
        @remove="delResultHandler"
        :key="i"
      />
    </v-list>
    <div class="pb-2 pt-4">
      <information-block
        :values="[
          { value: avOC, text: 'Среднее OC' },
          { value: avT, text: 'Средняя T' }
        ]"
        :color="'cyan'"
        :textColor="'white'"
      />
    </div>
    <div class="pa-0">
      <information-block
        :values="[
          { value: skp, text: 'СКП' },
          { value: deviation, text: 'Deviation' }
        ]"
        :color="'success'"
        :textColor="'white'"
      />
    </div>
    <div class="pt-4 d-flex">
      <v-col class="pa-0 pr-2">
        <v-btn color="teal" dark width="100%">
          Запомнить
        </v-btn>
      </v-col>
      <v-col class="pa-0">
        <router-link tag="div" :to="'/'">
          <v-btn color="primary" width="100%">
            Главное меню
          </v-btn>
        </router-link>
      </v-col>
    </div>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import InformationBlock from '@/components/InformationBlock'
import MeasurementItem from '@/components/MeasurementItem'

export default {
  name: 'MeasureAngle',
  computed: {
    ...mapState('measureAngle', ['skp', 'deviation', 'avOC', 'avT', 'results'])
  },
  methods: {
    ...mapActions('measureAngle', [
      'init',
      'listenServerEvents',
      'setMeasure',
      'unsetMeasure',
      'deleteResult'
    ]),
    delResultHandler(number) {
      const index = number - 1
      this.deleteResult(index)
    }
  },
  async mounted() {
    await this.init()
    await this.listenServerEvents()
    this.setMeasure()
  },
  beforeDestroy() {
    this.unsetMeasure()
  },
  components: {
    InformationBlock,
    MeasurementItem
  }
}
</script>
