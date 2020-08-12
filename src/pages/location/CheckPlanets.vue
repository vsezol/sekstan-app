<template>
  <v-card class="pa-4">
    <v-row class="justify-center">
      <v-col cols="3" v-for="({ name, iconSrc }, i) in planets" :key="i">
        <check-planet
          :iconSrc="iconSrc"
          v-model="planets[name].value"
          :name="name"
        ></check-planet>
      </v-col>
    </v-row>
    <v-row class="pa-1">
      <v-chip v-for="(num, i) in stars" :key="i" class="ma-1">{{ num }}</v-chip>
    </v-row>
    <add-star @delStar="delStarHandler" @addStar="addStarHandler"/>
    <v-btn
      width="50%"
      class="d-block mx-auto mt-2"
      color="primary"
      @click="submit"
      >ok</v-btn
    >
  </v-card>
</template>

<script>
import CheckPlanet from '@/components/CheckPlanet'
import AddStar from '@/components/AddStar'

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
      },
      stars: [11, 33, 55, 1, 566, 3, 55]
    }
  },
  components: {
    CheckPlanet,
    AddStar
  },
  methods: {
    submit() {
      console.log(this.planets)
    },
    delStarHandler() {
      this.stars.pop()
    },
    addStarHandler(value) {
      this.stars.push(value)
    }
  }
}
</script>

<style></style>
