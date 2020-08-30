import axios from '@/plugins/axios'

class MeasureAngle {
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

  setMeasure = () => {
    this.socket.send(
      JSON.stringify({
        request: 'SET_CURRENT_LAMP',
        type: 'angle',
        name: 'measure'
      })
    )
  }

  unsetMeasure = () => {
    this.socket.send(JSON.stringify({ request: 'UNSET_CURRENT_LAMP' }))
  }

  deleteResult = async index => {
    try {
      const response = await axios.delete(
        `/checked-lamps?type=angle&name=measure&index=${index}`
      )
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

export default MeasureAngle
