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

  listen = (type, callback) => {
    return () => {
      this.socket.onmessage = event => {
        const data = JSON.parse(event.data)
        if (data.type === type) {
          callback(data)
        }
      }
    }
  }
}

export default Measurement
