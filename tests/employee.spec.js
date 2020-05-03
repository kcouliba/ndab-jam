import Employee, { DEFAULT_STATS } from '../src/classes/employee.class'

describe('Employee', () => {
  test('should be defined', () => {
    expect(Employee).toBeDefined()
  })

  describe('stats', () => {
    test(`should be defined between ${DEFAULT_STATS.min} and ${DEFAULT_STATS.max} by default`, () => {
      const { min, max } = DEFAULT_STATS
      const employee = new Employee()

      expect(employee.red).toBeGreaterThanOrEqual(min)
      expect(employee.red).toBeLessThanOrEqual(max)
      expect(employee.green).toBeGreaterThanOrEqual(min)
      expect(employee.green).toBeLessThanOrEqual(max)
      expect(employee.blue).toBeGreaterThanOrEqual(min)
      expect(employee.blue).toBeLessThanOrEqual(max)
    })
  })
})
