import axios from '@/plugins/axios'

class newPoint {
  putVars = async (vars) => {
    try {
      const response = await axios.put('/begin-vars', vars)
      return response.data
    } catch (error) {
      return error
    }
  }
}

export default new newPoint()