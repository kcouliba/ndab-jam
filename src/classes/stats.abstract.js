import Joi from '@hapi/joi'

const validator = Joi.object({
  min: Joi.number().min(0),
  max: Joi.number().min(1),
})

export default class AStats {
  red
  green
  blue

  constructor(options = {}) {
    const { min = 0, max = 5 } = options
    const { error } = validator.validate(options, {})

    if (error) throw new Error(error)

    this.red = Math.round(Math.random() * max)
    this.green = Math.round(Math.random() * max)
    this.blue = Math.round(Math.random() * max)
    this.red = this.red < min ? min : this.red
    this.green = this.green < min ? min : this.green
    this.blue = this.blue < min ? min : this.blue
  }
}
