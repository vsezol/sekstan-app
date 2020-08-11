<template>
  <v-card class="pb-2">
    <archive-item
      v-for="(item, index) in completedToDown(archive)"
      :key="index"
      v-bind="item"
    >
    </archive-item>
    <router-link
      class="mx-auto"
      tag="div"
      to="/location/archive/new"
      style="width: fit-content"
    >
      <v-btn color="primary">Новое измерение</v-btn>
    </router-link>
  </v-card>
</template>

<script>
import ArchiveItem from '@/components/ArchiveItem'

export default {
  name: 'Archive',
  data() {
    return {
      archive: [
        {
          date: '08 Feb 20',
          time: '14:53',
          completed: false,
          result: null,
          link: ''
        },
        {
          date: '08 Feb 20',
          time: null,
          completed: true,
          result: ['60° 30 N', '49° 20 E'],
          link: null
        },
        {
          date: '07 Feb 20',
          time: '13:20',
          completed: false,
          result: null,
          link: ''
        },
        {
          date: '04 Feb 20',
          time: null,
          completed: true,
          result: ['60° 30 N', '49° 20 E'],
          link: null
        },
        {
          date: '05 Feb 20',
          time: null,
          completed: true,
          result: ['60° 30 N', '49° 20 E'],
          link: null
        }
      ]
    }
  },
  methods: {
    completedToDown(arr) {
      const newArr = []
      const arrLen = arr.length
      for (let i = 0; i < arrLen; i++) {
        if (arr[i].completed) {
          newArr.push(arr[i])
        } else {
          newArr.unshift(arr[i])
        }
      }
      return newArr
    }
  },
  components: {
    ArchiveItem
  }
}
</script>
