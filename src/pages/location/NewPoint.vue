<template>
  <v-card>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="6" md="4">
            <v-text-field
              :value="vars.p"
              @input="inputHandler('p', $event)"
              label="p"
            />
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              :value="vars.c"
              @input="inputHandler('c', $event)"
              label="c"
            />
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              :value="vars.t"
              @input="inputHandler('t', $event)"
              label="t"
            />
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              :value="vars.u"
              @input="inputHandler('u', $event)"
              label="u"
            />
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              :value="vars.s"
              @input="inputHandler('s', $event)"
              label="s"
            />
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              :value="vars.v"
              @input="inputHandler('v', $event)"
              label="v"
            />
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              :value="vars.py"
              @input="inputHandler('py', $event)"
              label="py"
            />
          </v-col>
          <v-col cols="6" md="4" class="d-flex align-center">
            <v-btn width="100%" color="primary" @click="submit">ok</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('newPoint', ['vars'])
  },
  methods: {
    submit() {
      console.log(this.vars)
      this.$router.push('/location/check-planets')
    },
    ...mapActions('newPoint', ['updateVar']),
    inputHandler(name, value) {
      this.updateVar({ name, value })
    }
  }
}
</script>
