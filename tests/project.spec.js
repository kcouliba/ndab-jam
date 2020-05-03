import Project from '../src/classes/project.class'
import { PROJECT_DEFAULT_STATS } from '../src/constants'

describe('description', () => {
  test('should be defined', () => {
    expect(Project).toBeDefined()
  })

  test(`should be defined between ${PROJECT_DEFAULT_STATS.min} and ${PROJECT_DEFAULT_STATS.max} by default`, () => {
    const { min, max } = PROJECT_DEFAULT_STATS
    const project = new Project()

    expect(project.red).toBeGreaterThanOrEqual(min)
    expect(project.red).toBeLessThanOrEqual(max)
    expect(project.green).toBeGreaterThanOrEqual(min)
    expect(project.green).toBeLessThanOrEqual(max)
    expect(project.blue).toBeGreaterThanOrEqual(min)
    expect(project.blue).toBeLessThanOrEqual(max)
  })

  test('should lower stats', () => {
    const project = new Project()

    project.red = 1
    project.green = 2
    project.blue = 3
    project.takeDamage({ red: 0, green: 3, blue: 1 })

    expect(project).toMatchObject({
      red: 1,
      green: 0,
      blue: 2,
    })
  })

  test('should be active if stats sum is greater than 0', () => {
    const project = new Project()

    expect(project.isActive).toBeTruthy()
  })

  test('should not be active if stats sum is lesser than or equal 0', () => {
    const project = new Project()

    project.red = 0
    project.green = 0
    project.blue = 0
    expect(project.isActive).toBeFalsy()
  })
})
