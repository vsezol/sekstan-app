<template>
  <v-card class="pa-4">
    <v-row class="justify-center">
      <v-col
        cols="3"
        v-for="({ name, iconSrc, checked }, i) in planets"
        :key="i"
      >
        <check-planet
          :iconSrc="iconSrc"
          :name="name"
          :checked="checked"
          @check="checkPlanetHandler(i, $event)"
        ></check-planet>
      </v-col>
    </v-row>
    <v-row class="pa-1">
      <v-chip v-for="(num, i) in stars" :key="i" class="ma-1">{{ num }}</v-chip>
    </v-row>
    <add-star @delStar="delStar" @addStar="addStar" />
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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CheckPlanets',
  computed: {
    ...mapState('checkPlanets', ['planets', 'stars'])
  },
  methods: {
    submit() {
      console.log(this.planets, this.stars)
    },
    checkPlanetHandler(i, checked) {
      this.checkPlanet({ i, checked })
    },
    ...mapActions('checkPlanets', ['checkPlanet', 'addStar', 'delStar'])
  },
  mounted() {
    console.log(this.planets)
  },
  components: {
    CheckPlanet,
    AddStar
  }
}
</script>
