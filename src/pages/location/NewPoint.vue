<template>
  <v-card class="pa-4 pb-0">
    <v-card-title class="px-0 py-0">
      <span class="ml-2">
        <v-icon color="primary">
          mdi-alert-circle-outline
        </v-icon>
      </span>
      <span class="ml-2">Начальные переменные</span>
    </v-card-title>
    <v-container>
      <v-row>
        <v-col cols="6" md="4" class="pb-0">
          <v-text-field
            dense
            outlined
            :value="vars.p"
            @input="inputHandler('p', $event)"
            label="p"
            type="number"
          />
        </v-col>
        <v-col cols="6" md="4" class="pb-0">
          <v-text-field
            dense
            outlined
            :value="vars.c"
            @input="inputHandler('c', $event)"
            label="c"
            type="number"
          />
        </v-col>
        <v-col cols="6" md="4" class="pb-0">
          <v-text-field
            dense
            outlined
            :value="vars.t"
            @input="inputHandler('t', $event)"
            label="t"
            type="number"
          />
        </v-col>
        <v-col cols="6" md="4" class="pb-0">
          <v-text-field
            dense
            outlined
            :value="vars.u"
            @input="inputHandler('u', $event)"
            label="u"
            type="number"
          />
        </v-col>
        <v-col cols="6" md="4" class="pb-0">
          <v-text-field
            dense
            outlined
            :value="vars.s"
            @input="inputHandler('s', $event)"
            label="s"
            type="number"
          />
        </v-col>
        <v-col cols="6" md="4" class="pb-0">
          <v-text-field
            dense
            outlined
            :value="vars.v"
            @input="inputHandler('v', $event)"
            label="v"
            type="number"
          />
        </v-col>
        <v-col cols="6" md="4" class="pb-0">
          <v-text-field
            dense
            outlined
            :value="vars.py"
            @input="inputHandler('py', $event)"
            label="py"
            type="number"
          />
        </v-col>
        <v-col cols="6" md="4" class="pb-0">
          <v-btn width="100%" color="primary" @click="submit">ok</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'NewPoint',
  computed: {
    ...mapState('newPoint', ['vars'])
  },
  methods: {
    ...mapActions('newPoint', ['updateVar', 'submitVars']),
    async submit() {
      if (await this.submitVars()) {
        this.$router.push('/location/check-planets')
      }
    },
    inputHandler(name, value) {
      this.updateVar({ name, value })
    }
  }
}
</script>
