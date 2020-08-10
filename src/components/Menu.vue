<template>
  <v-card>
    <v-list-item v-for="({ text, to }, index) in links" :key="index">
      <router-link :to="to" tag="div">
        <v-list-item-content>
          <v-btn color="primary">{{ text }}</v-btn>
        </v-list-item-content>
      </router-link>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'Определить место', to: '/location' },
        { text: 'Измерить угол', to: '/angle' },
        { text: 'Калибровка', to: '/calibration' },
        { text: 'Настройки', to: '/settings' },
        { text: 'Завершение работы', to: '/poweroff' }
      ]
    }
  }
}
</script>
