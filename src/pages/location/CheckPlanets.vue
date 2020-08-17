<template>
  <v-card class="pa-4">
    <v-card-title class="px-0 py-0">
      <span class="ml-2">
        <v-icon color="primary">
          mdi-brightness-7
        </v-icon>
      </span>
      <span class="ml-2">Выбор светил</span>
    </v-card-title>
    <v-row class="justify-center">
      <v-col
        cols="3"
        v-for="({ name, iconSrc, checked }, i) in planets"
        :key="i"
        class="border"
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
      <v-chip v-for="(star, i) in stars" :key="i" class="ma-1">{{
        star.name
      }}</v-chip>
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
      this.$router.push('/location/checked-list')
    },
    checkPlanetHandler(i, checked) {
      this.checkPlanet({ i, checked })
    },
    ...mapActions('checkPlanets', ['checkPlanet', 'addStar', 'delStar'])
  },
  components: {
    CheckPlanet,
    AddStar
  }
}
</script>
