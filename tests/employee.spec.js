import Employee from '../src/classes/employee.class'
import { EMPLOYEE_DEFAULT_STATS } from '../src/constants'

describe('Employee', () => {
  test('should be defined', () => {
    expect(Employee).toBeDefined()
  })

  describe('stats', () => {
    test(`should be defined between ${EMPLOYEE_DEFAULT_STATS.min} and ${EMPLOYEE_DEFAULT_STATS.max} by default`, () => {
      const { min, max } = EMPLOYEE_DEFAULT_STATS
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
