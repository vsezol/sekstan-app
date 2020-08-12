<template>
  <v-card class="pb-2">
    <div v-if="!loading">
      <archive-item
        v-for="(item, index) in completedToDown(archive)"
        :key="index"
        v-bind="item"
      >
      </archive-item>
      <router-link
        class="mx-auto"
        tag="div"
        to="/location/new-point"
        style="width: fit-content"
      >
        <v-btn color="primary">Новое измерение</v-btn>
      </router-link>
    </div>
  </v-card>
</template>

<script>
import ArchiveItem from '@/components/ArchiveItem'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Archive',
  computed: {
    ...mapState('archive', ['loading', 'archive', 'error'])
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
    },
    ...mapActions('archive', ['getArchive'])
  },
  mounted() {
    this.getArchive()
  },
  components: {
    ArchiveItem
  }
}
</script>
