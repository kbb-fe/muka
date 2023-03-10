import { LogLevel } from './constants'

class MukaLogger {
  // constructor () {
  //   console.log('nice work', LogLevel.LOG)
  // }
  
  hello () {
    return `nice work LOG: ${LogLevel.LOG}`
  }
}

export { MukaLogger as Logger }

export default MukaLogger
