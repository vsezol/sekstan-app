import axios from '@/plugins/axios'

class newPoint {
  putAllChecked = async (onlyChecked) => {
    try {
      const response = await axios.put('/checked-planets-stars', onlyChecked)
      return response.data
    } catch (error) {
      return error
    }
  }
}

export default new newPoint()