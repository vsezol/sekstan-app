<template>
  <v-card class="pa-4">
    <v-card-title class="px-0 pt-0">
      <span class="ml-2">
        <v-icon color="success">
          mdi-map-marker
        </v-icon>
      </span>
      <span class="ml-2">Location</span>
    </v-card-title>
    <v-row>
      <v-col cols="6" class="pr-2 py-0">
        <information-block
          :values="[
            { value: data.phi, text: 'φ' },
            { value: data.lambda, text: 'λ' }
          ]"
          :color="'cyan'"
          :textColor="'white'"
        />
      </v-col>
      <v-col cols="6" class="pl-0 py-0">
        <information-block
          :values="[
            { value: data.date, text: 'date' },
            { value: data.time, text: 'time' }
          ]"
          :color="'success'"
          :textColor="'white'"
        />
      </v-col>
    </v-row>
    <router-link tag="div" :to="'/'" class="pt-4">
      <v-btn color="primary" width="100%">
        OK
      </v-btn>
    </router-link>
  </v-card>
</template>

<script>
import InformationBlock from '@/components/InformationBlock'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('location', { data: 'getDataToView' })
  },
  components: {
    InformationBlock
  }
}
</script>

<style lang="sass" scoped></style>
