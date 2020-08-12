<template>
  <v-card class="pa-4">
    <v-row>
      <v-col cols="3" v-for="({ name, iconSrc }, i) in planets" :key="i">
        <check-planet
          :iconSrc="iconSrc"
          v-model="planets[name].value"
          :name="name"
        ></check-planet>
      </v-col>
      <v-col cols="6" class="d-flex align-center">
        <v-btn width="100%" color="primary" @click="submit">ok</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CheckPlanet from '@/components/CheckPlanet'

export default {
  data() {
    return {
      planets: {
        mars: {
          name: 'mars',
          value: false,
          iconSrc: require('@/assets/img/icons/mars.svg')
        },
        jupiter: {
          name: 'jupiter',
          value: false,
          iconSrc: require('@/assets/img/icons/jupiter.svg')
        },
        moon: {
          name: 'moon',
          value: false,
          iconSrc: require('@/assets/img/icons/moon.svg')
        },
        saturn: {
          name: 'saturn',
          value: false,
          iconSrc: require('@/assets/img/icons/saturn.svg')
        },
        sun: {
          name: 'sun',
          value: false,
          iconSrc: require('@/assets/img/icons/sun.svg')
        },
        venus: {
          name: 'venus',
          value: false,
          iconSrc: require('@/assets/img/icons/venus.svg')
        }
      }
    }
  },
  components: {
    CheckPlanet
  },
  methods: {
    submit() {
      console.log(this.planets)
    }
  }
}
</script>

<style></style>
