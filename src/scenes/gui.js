import { EMPLOYEE_DEFAULT_STATS, GAME_CONFIG } from '../constants'

const SLOT_WIDTH = 200
const SLOT_HEIGHT = 96
const EMPLOYEE_SLOTS = 4
const STAT_COLORS = {
  red: 0xff0000,
  green: 0x00ff00,
  blue: 0x0000ff,
}
const STAT_OFFSET_X = 88
const STAT_OFFSET_Y = 18
const STAT_ARRAY = ['red', 'green', 'blue']

export default class GUI {
  constructor(scene) {
    this.scene = scene
  }

  create() {
    this.createHUD()
    this.createHDD()
  }

  update() {
    this.updateHUD()
  }

  createHUD() {
    const graphics = this.scene.add.graphics()

    graphics.fillStyle(0x000000, 0.6)
    graphics.beginPath()
    graphics.moveTo(0, 0)
    graphics.lineTo(GAME_CONFIG.width, 0)
    graphics.lineTo(GAME_CONFIG.width, SLOT_HEIGHT)
    graphics.lineTo(0, SLOT_HEIGHT)
    graphics.lineTo(0, 0)
    graphics.closePath()
    graphics.fillPath()

    this.scene.currentProjectText = this.scene.add.text(
      GAME_CONFIG.width / 2,
      SLOT_HEIGHT / 6,
    )
    this.scene.employeeCountText = this.scene.add.text(32, SLOT_HEIGHT / 6)
    this.scene.finishedProjectsText = this.scene.add.text(32, SLOT_HEIGHT / 2)
  }

  updateHUD() {
    this.scene.finishedProjectsText.setText(
      `finished projects: ${this.scene.finishedProjects}`,
    )
    this.scene.employeeCountText.setText(
      `employees: ${this.scene.employees.length}`,
    )
    this.scene.currentProjectText.setText(`project:
      red: ${this.scene.project.red}
      green: ${this.scene.project.green}
      blue: ${this.scene.project.blue}`)
  }

  createHDD() {
    for (let index = 0; index < EMPLOYEE_SLOTS; index++) {
      const employee = this.scene.employees[index]
      const employeeCard = this.scene.add.image(
        SLOT_WIDTH * index,
        GAME_CONFIG.height - SLOT_HEIGHT,
        'employee-card',
      )

      employeeCard.setOrigin(0, 0)
      STAT_ARRAY.forEach((key, index) => {
        if (!employee) return
        const value = employee[key]
        const x = employeeCard.x + STAT_OFFSET_X
        const y = employeeCard.y + STAT_OFFSET_Y * index + STAT_OFFSET_Y
        const width = (value / EMPLOYEE_DEFAULT_STATS.max) * 105
        const height = 5

        this.drawStatBar(x, y, width, height, STAT_COLORS[key])
      })
    }
  }

  drawStatBar(x, y, width, height, color) {
    const graphics = this.scene.add.graphics()

    graphics.fillStyle(color)
    graphics.beginPath()
    graphics.moveTo(x, y)
    graphics.lineTo(x + width, y)
    graphics.lineTo(x + width, y + height)
    graphics.lineTo(x, y + height)
    graphics.lineTo(x, y)
    graphics.closePath()
    graphics.fillPath()
  }
}
