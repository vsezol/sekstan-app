import axios from '@/plugins/axios'

class Measurement {
  init = async () => {
    const socket = new WebSocket('ws://localhost:5000')
    try {
      await new Promise((res, rej) => {
        socket.onopen = () => {
          this.socket = socket
          res()
        }
        socket.onerror = () => rej()
      })
      return 'OK'
    } catch (error) {
      return error
    }
  }

  setCurrentLamp = (name, type) => {
    this.socket.send(
      JSON.stringify({ request: 'SET_CURRENT_LAMP', name, type })
    )
  }

  unsetCurrentLamp = () => {
    this.socket.send(JSON.stringify({ request: 'UNSET_CURRENT_LAMP' }))
  }

  deleteResult = async ({type, name, index}) => {
    try {
      const response = await axios.delete(`/checked-lamps?type=${type}&name=${name}&index=${index}`)
      return response.data
    } catch (error) {
      return error
    }
  }

  listen = (requestType, callback) => {
    return () => {
      this.socket.onmessage = event => {
        const data = JSON.parse(event.data)
        if (data.request === requestType) {
          callback(data)
        }
      }
    }
  }
}

export default Measurement
