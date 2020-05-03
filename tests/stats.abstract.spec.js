import AStats from '../src/classes/stats.abstract'

describe('AStats abstract class', () => {
  let min
  let max

  beforeEach(() => {
    min = 1
    max = 10
  })

  test('should be defined', () => {
    expect(AStats).toBeDefined()
  })

  test('should throw is parameters are invalid', () => {
    // intentionally passing null param
    expect(() => new AStats(null)).toThrow()
    // min > max
    expect(() => new AStats({ min: 1, max: 0 })).toThrow()
    // min < 0
    expect(() => new AStats({ min: -1, max: 10 })).toThrow()
    // max < 1
    expect(() => new AStats({ min: 0, max: 0 })).toThrow()
  })

  describe('stats', () => {
    test('should be defined between 0 and 5 by default', () => {
      const min = 0
      const max = 5
      const stats = new AStats()

      expect(stats.red).toBeGreaterThanOrEqual(min)
      expect(stats.red).toBeLessThanOrEqual(max)
      expect(stats.green).toBeGreaterThanOrEqual(min)
      expect(stats.green).toBeLessThanOrEqual(max)
      expect(stats.blue).toBeGreaterThanOrEqual(min)
      expect(stats.blue).toBeLessThanOrEqual(max)
    })

    test('should be equal to 5', () => {
      const value = 5
      const stats = new AStats({ min: value, max: value })

      expect(stats.red).toEqual(value)
      expect(stats.green).toEqual(value)
      expect(stats.blue).toEqual(value)
    })
  })
})
