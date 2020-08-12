<template>
  <div class="wrapper">
    <img :src="iconSrc" width="32" height="32" />
    <p>{{ name }}</p>
    <v-checkbox
      @change="$emit('check', !!$event)"
      class="checkbox"
      :input-value="checked"
    />
  </div>
</template>

<script>
export default {
  props: {
    iconSrc: String,
    name: String,
    checked: Boolean
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  flex-direction: column
  justify-content: center
  align-content: center
img
  margin: 0 auto
  display: block
p, .checkbox
  width: min-content
  margin: 0 auto
</style>
