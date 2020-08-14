<template>
  <v-card>
    <v-card-title>
      <span class="ml-2">
        <v-icon v-if="type === 'star'" color="yellow">mdi-star</v-icon>
        <v-icon v-else color="primary">mdi-moon-full</v-icon>
      </span>
      <span class="ml-8">{{ this.$route.params.name }}</span>
    </v-card-title>
    <v-list rounded class="py-0">
      <measurement-item :number="1" />
      <measurement-item :number="2" />
      <measurement-item :number="3" />
    </v-list>
    <div class="pa-4 pb-2">
      <information-block
        :values="[
          { value: averageOc, text: 'Среднее OC' },
          { value: averageT, text: 'Средняя T' }
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
      <router-link tag="div" :to="'#'">
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
export default {
  data() {
    return {
      type: this.$route.query.type,
      averageOc: null,
      averageT: null,
      skp: null,
      deviation: null
    }
  },
  components: {
    MeasurementItem,
    InformationBlock
  }
}
</script>

<style></style>
