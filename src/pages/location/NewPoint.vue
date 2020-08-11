<template>
  <v-card>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="6" md="4">
            <v-text-field label="p" v-model="vars.p" />
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field label="c" v-model="vars.c" />
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field label="t" v-model="vars.t" />
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field label="u" v-model="vars.u" />
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field label="s" v-model="vars.s" />
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field label="v" v-model="vars.v" />
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field label="py" v-model="vars.py" />
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
export default {
  data: () => ({
    vars: {
      c: '',
      t: '',
      p: '',
      u: '',
      s: '',
      v: '',
      py: ''
    }
  }),
  methods: {
    submit() {
      console.log(this.vars)
    }
  }
}
</script>
