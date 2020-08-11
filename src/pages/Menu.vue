<template>
  <v-card>
    <v-list-item v-for="({ text, to }, index) in links" :key="index">
      <router-link :to="to" tag="div" class="mx-auto">
        <v-list-item-content>
          <v-btn color="primary" width="250">{{ text }}</v-btn>
        </v-list-item-content>
      </router-link>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      links: [
        { text: 'Определить место', to: '/location/archive' },
        { text: 'Измерить угол', to: '/angle' },
        { text: 'Калибровка', to: '/calibration' },
        { text: 'Настройки', to: '/settings' },
        { text: 'Завершение работы', to: '/poweroff' }
      ]
    }
  }
}
</script>
