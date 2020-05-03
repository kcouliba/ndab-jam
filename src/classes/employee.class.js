import AStats from './stats.abstract'

export const DEFAULT_STATS = {
  min: 0,
  max: 5,
}

export default class Employee extends AStats {
  constructor(options = {}) {
    super({ ...DEFAULT_STATS, ...options })
  }
}
