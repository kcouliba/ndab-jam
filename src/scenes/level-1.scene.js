import Phaser from 'phaser'
import Employee from '../classes/employee.class'
import Project from '../classes/project.class'
import { GAME_CONFIG } from '../constants'

let employeeCount = 2

export default class Level1Scene extends Phaser.Scene {
  constructor() {
    super('hello-world')

    this.employees = []
    this.project = new Project()
    this.finishedProjects = 0
    for (let index = 0; index < employeeCount; index++) {
      this.employees[index] = new Employee()
    }
  }

  preload() {
    this.load.setBaseURL('http://localhost:8000')

    this.load.image('office', 'assets/sprites/background.png')
    this.load.image('desk', 'assets/sprites/desk.png')
    this.load.image('employee', 'assets/sprites/character.png')
    this.load.image('employee-card', 'assets/sprites/employee-card.png')
  }

  create() {
    this.add.image(400, 300, 'office')
    this.add.image(400, 300, 'desk')
    this.add.image(350, 270, 'employee')

    this.createGUI()

    // this.timedEvent = this.time.addEvent({
    //   delay: 500,
    //   callback: this.makeTurnActions,
    //   callbackScope: this,
    //   loop: true,
    // })
  }

  createHUD() {
    const height = 96
    const graphics = this.add.graphics()

    graphics.fillStyle(0x000000, 0.6)
    graphics.beginPath()
    graphics.moveTo(0, 0)
    graphics.lineTo(GAME_CONFIG.width, 0)
    graphics.lineTo(GAME_CONFIG.width, height)
    graphics.lineTo(0, height)
    graphics.lineTo(0, 0)
    graphics.closePath()
    graphics.fillPath()

    this.currentProjectText = this.add.text(GAME_CONFIG.width / 2, height / 6)
    this.employeeCountText = this.add.text(32, height / 6)
    this.finishedProjectsText = this.add.text(32, height / 2)
  }

  createHDD() {
    const height = 96
    const graphics = this.add.graphics()

    graphics.fillStyle(0x000000, 0.6)
    graphics.beginPath()
    graphics.moveTo(0, GAME_CONFIG.height - height)
    graphics.lineTo(GAME_CONFIG.width, GAME_CONFIG.height - height)
    graphics.lineTo(GAME_CONFIG.width, GAME_CONFIG.height)
    graphics.lineTo(0, GAME_CONFIG.height)
    graphics.lineTo(0, GAME_CONFIG.height - height)
    graphics.closePath()
    graphics.fillPath()

    for (let index = 0; index < this.employees.length; index++) {
      const employee = this.employees[index]
      const employeeCard = this.add.image(
        200 * index,
        GAME_CONFIG.height - height,
        'employee-card',
      )
      const offsetX = 88
      let offsetY = 18

      employeeCard.setOrigin(0, 0)

      const gRed = this.add.graphics()

      gRed.fillStyle(0xff0000, 1)
      gRed.beginPath()
      gRed.moveTo(employeeCard.x + offsetX, employeeCard.y + offsetY)
      gRed.lineTo(employeeCard.x + offsetX + 105, employeeCard.y + offsetY)
      gRed.lineTo(employeeCard.x + offsetX + 105, employeeCard.y + offsetY + 5)
      gRed.lineTo(employeeCard.x + offsetX, employeeCard.y + offsetY + 5)
      gRed.lineTo(employeeCard.x + offsetX, employeeCard.y + offsetY)
      gRed.closePath()
      gRed.fillPath()

      const gGreen = this.add.graphics()

      offsetY += 18

      gGreen.fillStyle(0x00ff00, 1)
      gGreen.beginPath()
      gGreen.moveTo(employeeCard.x + offsetX, employeeCard.y + offsetY)
      gGreen.lineTo(employeeCard.x + offsetX + 105, employeeCard.y + offsetY)
      gGreen.lineTo(
        employeeCard.x + offsetX + 105,
        employeeCard.y + offsetY + 5,
      )
      gGreen.lineTo(employeeCard.x + offsetX, employeeCard.y + offsetY + 5)
      gGreen.lineTo(employeeCard.x + offsetX, employeeCard.y + offsetY)
      gGreen.closePath()
      gGreen.fillPath()

      const gBlue = this.add.graphics()

      offsetY += 18

      gBlue.fillStyle(0x0000ff, 1)
      gBlue.beginPath()
      gBlue.moveTo(employeeCard.x + offsetX, employeeCard.y + offsetY)
      gBlue.lineTo(employeeCard.x + offsetX + 105, employeeCard.y + offsetY)
      gBlue.lineTo(employeeCard.x + offsetX + 105, employeeCard.y + offsetY + 5)
      gBlue.lineTo(employeeCard.x + offsetX, employeeCard.y + offsetY + 5)
      gBlue.lineTo(employeeCard.x + offsetX, employeeCard.y + offsetY)
      gBlue.closePath()
      gBlue.fillPath()
    }
    // this.currentProjectText = this.add.text(GAME_CONFIG.width / 2, height / 6)
    // this.employeeCountText = this.add.text(32, height / 6)
    // this.finishedProjectsText = this.add.text(32, height / 2)
  }

  // displayEmployees() {
  //   const height = 96
  //   const graphics = this.add.graphics()

  //   graphics.fillStyle(0x000000, 0.6)
  //   graphics.beginPath()
  //   graphics.moveTo(0, GAME_CONFIG.height - height)
  //   graphics.lineTo(GAME_CONFIG.width, GAME_CONFIG.height - height)
  //   graphics.lineTo(GAME_CONFIG.width, GAME_CONFIG.height)
  //   graphics.lineTo(0, GAME_CONFIG.height)
  //   graphics.lineTo(0, GAME_CONFIG.height - height)
  //   graphics.closePath()
  //   graphics.fillPath()
  // }

  createGUI() {
    this.createHUD()
    this.createHDD()
  }

  displayEmployee(subject) {}

  update() {
    // var pointer = this.input.activePointer

    // this.text.setText([
    //   'x: ' + pointer.worldX,
    //   'y: ' + pointer.worldY,
    //   'isDown: ' + pointer.isDown,
    //   'rightButtonDown: ' + pointer.rightButtonDown(),
    //   'leftReleased: ' + pointer.leftButtonReleased(),
    // ])
    if (this.project.isActive === false) {
      this.spawnNewProject()
    }
    this.updateGUI()
  }

  updateGUI() {
    this.finishedProjectsText.setText(
      `finished projects: ${this.finishedProjects}`,
    )
    this.employeeCountText.setText(`employees: ${this.employees.length}`)
    this.currentProjectText.setText(`project:
      red: ${this.project.red}
      green: ${this.project.green}
      blue: ${this.project.blue}`)
  }

  makeTurnActions() {
    const totalStrength = this.employees.reduce(
      (acc, employee) => ({
        red: acc.red + employee.red,
        green: acc.green + employee.green,
        blue: acc.blue + employee.blue,
      }),
      { red: 0, green: 0, blue: 0 },
    )

    if (this.project?.isActive) this.project.takeDamage(totalStrength)
    if (this.employees.length < employeeCount) this.spawnNewEmployee()
  }

  spawnNewProject() {
    this.finishedProjects++
    this.project = new Project()
  }

  spawnNewEmployee() {
    this.employees.push(new Employee())
  }

  fireEmployee(index) {
    this.employees.splice(index, 1)
  }
}
