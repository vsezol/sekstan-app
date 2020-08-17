<template>
  <v-card>
    <v-list-item
      v-for="({ text, to, color, icon }, index) in links"
      :key="index"
    >
      <router-link :to="to" tag="div" class="mx-auto">
        <v-list-item-content>
          <v-btn :color="color" width="250" dark>
            <v-icon left>{{ icon }}</v-icon>
            {{ text }}
          </v-btn>
        </v-list-item-content>
      </router-link>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <power-off-modal />
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import PowerOffModal from '@/components/PowerOffModal'

export default {
  name: 'Menu',
  data() {
    return {
      links: [
        {
          text: 'Определить место',
          to: '/location/archive',
          color: 'primary',
          icon: 'mdi-map-marker'
        },
        {
          text: 'Измерить угол',
          to: '/measure-angle',
          color: 'teal',
          icon: 'mdi-chart-ppf'
        },
        {
          text: 'Калибровка',
          to: '/calibration',
          color: 'warning',
          icon: 'mdi-camera-control'
        },
        {
          text: 'Настройки',
          to: '/settings',
          color: 'secondary',
          icon: 'mdi-cog'
        }
      ]
    }
  },
  components: {
    PowerOffModal
  }
}
</script>
