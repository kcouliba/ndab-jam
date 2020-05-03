import { PROJECT_DEFAULT_STATS } from '../constants'
import AStats from './stats.abstract'

export default class Project extends AStats {
  constructor(options = {}) {
    super({ ...PROJECT_DEFAULT_STATS, ...options })
  }

  takeDamage(damage = {}) {
    const { red = 0, green = 0, blue = 0 } = damage

    this.red -= red
    this.green -= green
    this.blue -= blue
    this.red = this.red < 0 ? 0 : this.red
    this.green = this.green < 0 ? 0 : this.green
    this.blue = this.blue < 0 ? 0 : this.blue
  }

  get isActive() {
    return this.red + this.green + this.blue > 0
  }
}
