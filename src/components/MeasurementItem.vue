<template>
  <v-list-item style="background: #F5F5F5">
    <v-list-item-icon>
      <v-icon color="primary">mdi-numeric-{{ number }}-box</v-icon>
    </v-list-item-icon>
    <v-list-item-content class="d-flex flex-wrap flex-row">
      <div class="parametr mr-4">
        <span class="font-weight-bold">OC:</span> {{ OC }}
      </div>
      <div class="parametr">
        <span class="font-weight-bold">T:</span> {{ T }}
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    number: Number,
    OC: Number,
    T: Number
  }
}
</script>

<style lang="sass" scoped>
.parametr
  flex: none
  margin: 0
</style>
