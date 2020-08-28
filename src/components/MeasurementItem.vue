<template>
  <v-list-item style="background: #F5F5F5">
    <v-list-item-icon>
      <v-icon color="primary">mdi-numeric-{{ number }}-box</v-icon>
    </v-list-item-icon>
    <v-list-item-content class="d-flex flex-wrap flex-row">
      <div class="parametr mr-4">
        <span class="font-weight-bold">OC:</span> {{ OC | formatOC }}
      </div>
      <div class="parametr">
        <span class="font-weight-bold">T:</span> {{ T | formatT}}
      </div>
      <div class="remove-it ml-auto" @click="$emit('remove', number)">
        <span><v-icon color="error">mdi-delete</v-icon></span>
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'Measurement',
  props: {
    number: Number,
    OC: Number,
    T: Number
  },
  filters: {
    formatOC: OC => parseInt(OC / 60) + '°' + (OC % 60) + "'",
    formatT: T => {
      const date = new Date(0)
      date.setSeconds(T) 
      return date.toISOString().substr(11, 8)
    }
  }
}
</script>

<style lang="sass" scoped>
.parametr, .remove-it
  flex: none
  margin: 0
.remove-it
  cursor: pointer
</style>
