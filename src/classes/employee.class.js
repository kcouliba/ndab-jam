import { EMPLOYEE_DEFAULT_STATS } from '../constants'
import AStats from './stats.abstract'

export default class Employee extends AStats {
  constructor(options = {}) {
    super({ ...EMPLOYEE_DEFAULT_STATS, ...options })
  }
}
