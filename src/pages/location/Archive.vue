<template>
  <v-card>
    <archive-item
      v-for="(item, index) in completedToDown(archive)"
      :key="index"
      v-bind="item"
    >
    </archive-item>
  </v-card>
</template>

<script>
import ArchiveItem from '@/components/ArchiveItem'

export default {
  name: 'Archive',
  data() {
    return {
      archive: [
        { date: '08 Feb 20', time: '14:53', completed: false, result: null },
        {
          date: '08 Feb 20',
          time: null,
          completed: true,
          result: ['60° 30 N', '49° 20 E']
        },
        { date: '07 Feb 20', time: '13:20', completed: false, result: null },
        {
          date: '04 Feb 20',
          time: null,
          completed: true,
          result: ['60° 30 N', '49° 20 E']
        },
        {
          date: '05 Feb 20',
          time: null,
          completed: true,
          result: ['60° 30 N', '49° 20 E']
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
