<template>
  <v-list-item style="background: #F5F5F5">
    <v-list-item-icon>
      <v-icon color="primary">mdi-numeric-{{ number }}-box</v-icon>
    </v-list-item-icon>
    <v-list-item-content class="d-flex flex-wrap flex-row">
      <div class="parametr mr-4">
        <span class="font-weight-bold">OC: </span>
        <span>{{ oc }}</span>
      </div>
      <div class="parametr">
        <span class="font-weight-bold">T: </span>
        <span>{{ t }}</span>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  data() {
    return {
      oc: 7444,
      t: 6666666
    }
  },
  props: {
    number: Number
  }
}
</script>

<style lang="sass" scoped>
.parametr
  flex: none
  margin: 0
</style>
