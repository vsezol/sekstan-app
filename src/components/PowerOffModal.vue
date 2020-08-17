<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="300">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="error" v-bind="attrs" v-on="on" width="250">
          <v-icon left>mdi-power</v-icon>
          Завершение работы
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="heaЯdline">
          Завершить работу?
        </v-card-title>
        <v-card-text class="text-body-1">
          Если вы завершите работу, то соединение с устройством прекратится.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog = false">Отмена</v-btn>
          <v-btn color="error" fab small @click="powerOffHandler">
            <v-icon>mdi-power</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'PowerOffModal',
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    powerOffHandler() {
      this.dialog = false
      console.log('send server off')
    }
  }
}
</script>

<style lang="sass" scoped>
.action-container
  width: 50%
  box-sizing: border-box
</style>
