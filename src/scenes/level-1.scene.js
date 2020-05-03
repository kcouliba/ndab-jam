import Phaser from 'phaser'
import Employee from '../classes/employee.class'
import Project from '../classes/project.class'

let employeeCount = 2

export default class Level1Scene extends Phaser.Scene {
  constructor() {
    super('hello-world')

    this.employees = []
    this.project = new Project()
    for (let index = 0; index < employeeCount; index++) {
      this.employees[index] = new Employee()
    }
  }

  preload() {
    this.load.setBaseURL('http://localhost:8000')

    this.load.image('office', 'assets/sprites/background.png')
    this.load.image('desk', 'assets/sprites/desk.png')
    this.load.image('employee', 'assets/sprites/character.png')
  }

  create() {
    this.add.image(400, 300, 'office')
    this.add.image(400, 300, 'desk')
    this.add.image(350, 270, 'employee')

    this.timedEvent = this.time.addEvent({
      delay: 3000,
      callback: this.makeTurnActions,
      callbackScope: this,
      loop: true,
    })
  }

  update() {
    if (this.project.isActive === false) {
      this.spawnNewProject()
    }
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
    this.project = new Project()
  }

  spawnNewEmployee() {
    this.employees.push(new Employee())
  }

  fireEmployee(index) {
    this.employees.splice(index, 1)
  }
}
