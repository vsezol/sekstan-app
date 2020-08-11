import {
  START_GET_ARCHIVE,
  SUCCESS_GET_ARCHIVE
  // ERROR_GET_ARCHIVE
} from '../mutations/mutationTypes'

const externalArchive = [
  {
    date: '08 Feb 20',
    time: '14:53',
    completed: false,
    result: null,
    link: ''
  },
  {
    date: '08 Feb 20',
    time: null,
    completed: true,
    result: ['60° 30 N', '49° 20 E'],
    link: null
  },
  {
    date: '07 Feb 20',
    time: '13:20',
    completed: false,
    result: null,
    link: ''
  },
  {
    date: '04 Feb 20',
    time: null,
    completed: true,
    result: ['60° 30 N', '49° 20 E'],
    link: null
  },
  {
    date: '05 Feb 20',
    time: null,
    completed: true,
    result: ['60° 30 N', '49° 20 E'],
    link: null
  }
]

export default {
  getArchive(context) {
    context.commit(START_GET_ARCHIVE)
    context.commit(SUCCESS_GET_ARCHIVE, externalArchive)
  }
}
