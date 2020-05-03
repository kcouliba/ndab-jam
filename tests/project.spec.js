import Project, { DEFAULT_STATS } from '../src/classes/project.class'

describe('description', () => {
  test('should be defined', () => {
    expect(Project).toBeDefined()
  })

  test(`should be defined between ${DEFAULT_STATS.min} and ${DEFAULT_STATS.max} by default`, () => {
    const { min, max } = DEFAULT_STATS
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
})
