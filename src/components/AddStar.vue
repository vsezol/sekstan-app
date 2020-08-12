<template>
  <v-row>
    <v-col cols="12" class="mb-0 pb-0">
      <v-text-field
        type="number"
        label="Номер звезды"
        dense
        outlined
        class="start-text-field"
        v-model="starNum"
      ></v-text-field>
    </v-col>
    <v-col cols="6">
      <v-btn color="success" width="100%" @click="addHandler">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="6">
      <v-btn color="error" width="100%" @click="delHandler">
        <v-icon>mdi-backspace-outline</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      starNum: ''
    }
  },
  methods: {
    addHandler() {
      this.$emit('addStar', this.starNum)
      this.starNum = ''
    },
    delHandler() {
      this.$emit('delStar')
    }
  }
}
</script>

<style lang="sass">
.start-text-field
  .v-text-field__details
    display: none
</style>
