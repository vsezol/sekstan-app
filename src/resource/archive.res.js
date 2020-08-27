import axios from '@/plugins/axios'

class Archive {
  getArchive = async () => {
    try {
      const response = await axios.get('/archive')
      return response.data.archive
    } catch (error) {
      return error
    }
  }
}

export default new Archive()