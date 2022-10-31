const {returnTwo:Two, 
       greeting:g, 
       add, 
       multiply, 
       divide, 
       subtract} 
       = require('./functions.js')//

test('This should return 2', () => {
    expect(Two()).toBe(2)
})

test('This should return Hello, name', () => {
    expect(g('James')).toBe('Hello, James.')
    expect(g('Jill')).toBe('Hello, Jill.')
})

describe("Math Functions", () => {
    test('Expect add to function properly', () => {
        expect(add(1,2)).toBe(3)
        expect(add(5,9)).toBe(14)
    })

    test('Multiplication testing', () => {
        expect(multiply(5,6)).toBe(30)
        expect(multiply(4,4)).toBe(16)
    })

    test('Division testing', () => {
        expect(divide(6,2)).toBe(3)
        expect(divide(3,4)).toBe(.75)
    })

    test('Subtraction testing', () => {
        expect(subtract(6,2)).toBe(4)
        expect(subtract(3,4)).toBe(-1)
    })
})

describe("Breaking things", () => {
    test("this returns the correct data type", () => {
         expect(typeof g("jon")).toBe("string")
         expect(typeof add(1,"4")).toBe('string')
         expect(add(1,"4")).toBe("14")
         expect(add(1,"4")).toBe(5)//this failed
    })
})