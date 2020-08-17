<template>
  <v-card class="pa-4">
    <v-card-title class="px-0 pt-0">
      <span class="ml-2">
        <v-icon color="warning">
          mdi-gauge
        </v-icon>
      </span>
      <span class="ml-2">Калибровка</span>
    </v-card-title>
    <div class="calib-content">
      <div class="sensor">
        <v-subheader class="text-body-1 sensor__title px-0">
          <v-icon class="mr-2">mdi-video-input-svideo</v-icon>
          Калибровка датчика
        </v-subheader>
        <div>
          <v-btn
            v-for="(value, i) in degs"
            @click="degHandler(value)"
            :key="i"
            class="mr-2 text-body-1"
            fab
            small
            color="primary"
          >
            {{ value }}°
          </v-btn>
        </div>
      </div>

      <div class="date pt-8">
        <v-subheader class="text-body-1 sensor__title px-0">
          <v-icon class="mr-2">mdi-calendar-outline</v-icon>
          Калибровка даты
        </v-subheader>
        <div>
          <v-dialog
            ref="dialogDate"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Дата"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-if="modal" v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.dialogDate.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </div>
      </div>
      <div class="time">
        <v-subheader class="text-body-1 sensor__title px-0">
          <v-icon class="mr-2">mdi-clock-outline</v-icon>
          Калибровка времени
        </v-subheader>
        <div>
          <v-dialog
            ref="dialogTime"
            v-model="modal2"
            :return-value.sync="time"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time"
                label="Время"
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker v-if="modal2" v-model="time" full-width use-seconds>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.dialogTime.save(time)">
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </div>
      </div>

      <router-link tag="div" :to="'/'">
        <v-btn color="primary" width="100%">
          Главное меню
        </v-btn>
      </router-link>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Calibration',
  data() {
    return {
      degs: [0, 30, 45, 60, 90],
      date: new Date().toISOString().substr(0, 10),
      time: null,
      modal: false,
      modal2: false
    }
  },
  methods: {
    degHandler(value) {
      console.log('calib deg', value)
    }
  }
}
</script>

<style lang="sass" scoped>
.sensor, .date
  &__title
    color: #212121
    font-weight: bold
.calib-content
  max-width: 600px
  margin: 0 auto
</style>
