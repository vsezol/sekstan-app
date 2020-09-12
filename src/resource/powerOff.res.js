import axios from '@/plugins/axios'

class PowerOff {
  powerOffServer = async () => {
    try {
      const response = await axios.get('/power-off')
      return response.data
    } catch (error) {
      return error
    }
  }
}

export default new PowerOff()
