<template>
  <v-alert :color="color" class="mb-0" :style="{ color: textColor }">
    <div v-for="({ text, value }, i) in values" :key="i">
      <span class="font-weight-bold">{{ text }}: </span>
      <span v-if="value">{{ value }}</span>
      <span v-else>Нет данных</span>
    </div>
  </v-alert>
</template>

<script>
export default {
  name: 'InformationBlock',
  props: ['values', 'color', 'textColor']
}
</script>
