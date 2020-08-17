<template>
  <v-card class="pa-4">
    <v-card-title class="px-0 pt-0">
      <span class="ml-2">
        <v-icon color="secondary">
          mdi-cog
        </v-icon>
      </span>
      <span class="ml-2">Settings</span>
    </v-card-title>
    <div class="settings-form mx-auto">
      <v-select :items="items" label="Язык" outlined></v-select>
      <v-slider v-model="brightness" prepend-icon="mdi-white-balance-sunny" />
      <div class="pt-4 d-flex">
        <v-col class="pa-0 pr-2">
          <v-btn color="success" dark width="100%">
            Применить
          </v-btn>
        </v-col>
        <v-col class="pa-0">
          <router-link tag="div" :to="'/'">
            <v-btn color="primary" width="100%">
              Главное меню
            </v-btn>
          </router-link>
        </v-col>
      </div>
    </div>
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
