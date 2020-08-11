<template>
  <v-list-item>
    <div class="d-flex align-center ma-2 mx-auto">
      <v-chip color="teal" text-color="white" class="mr-2">{{ date }}</v-chip>
      <div v-if="!completed" class="mr-2 time-or-result">
        <v-chip color="cyan darken-2" text-color="white">{{ time }}</v-chip>
      </div>
      <div v-else class="mr-2 d-flex flex-column time-or-result">
        <v-chip
          small
          color="light-green"
          text-color="white"
          :class="index !== result.length - 1 && 'mb-1'"
          v-for="(item, index) in result"
          :key="index"
          >{{ item }}</v-chip
        >
      </div>
      <router-link tag="div" :to="!!link ? link : '#'">
        <v-btn :disabled="completed" color="primary" width="150">
          <span v-if="completed">Завершено</span>
          <span v-else>Продолжить</span>
        </v-btn>
      </router-link>
    </div>
  </v-list-item>
</template>

<script>
export default {
  props: {
    date: String,
    time: [String, null],
    completed: Boolean,
    result: [Array, null],
    link: [String, null]
  }
}
</script>

<style lang="sass" scoped>
.time-or-result
  width: 75px
  span
    width: 100%
    display: flex
    justify-content: center
</style>
