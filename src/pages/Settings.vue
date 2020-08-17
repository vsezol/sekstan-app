<template>
  <v-card class="pa-4">
    <v-card-title class="px-0 pt-0">
      <span class="ml-2">
        <v-icon color="success">
          mdi-cog
        </v-icon>
      </span>
      <span class="ml-2">Settings</span>
    </v-card-title>
    <v-form class="settings-form mx-auto">
      <v-select :items="items" label="Язык" outlined></v-select>
      <v-slider v-model="brightness" prepend-icon="mdi-white-balance-sunny" />
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      items: ['Русский', 'English'],
      brightness: 50
    }
  }
}
</script>

<style lang="sass" scoped>
.settings-form
  max-width: 600px
</style>
