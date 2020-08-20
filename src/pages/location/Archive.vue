<template>
  <v-card class="pb-4 pt-4">
    <v-card-title class="px-4 py-0">
      <span class="ml-2">
        <v-icon color="primary">
          mdi-folder
        </v-icon>
      </span>
      <span class="ml-2">Архив</span>
    </v-card-title>
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
    <div v-else-if="error">
      <v-alert type="error">
        Что-то пошло не так.
      </v-alert>
    </div>
    <div v-else-if="loading">
      <div class="d-flex px-4" v-for="i in 3" :key="i">
        <v-skeleton-loader type="chip" class="mr-2" />
        <v-skeleton-loader type="chip" class="mr-2" />
        <v-skeleton-loader type="button" />
      </div>
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
  async mounted() {
    await this.getArchive()
  },
  components: {
    ArchiveItem
  }
}
</script>
