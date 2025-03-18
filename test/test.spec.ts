import { describe, expect, it } from 'vitest'
import { test } from '../src'

describe('test', () => {
  it('Should be return 3', () => {
    const result = test(1, 2)

    expect(result).equal(3)
  })
})
