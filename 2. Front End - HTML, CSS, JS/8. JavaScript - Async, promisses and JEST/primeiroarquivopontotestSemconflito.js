const calcs = require('./calcs')
const array = require('./array')
const exercicios = require('./exercicios')

describe.skip('Testes arquivos calcs e array', () => {

    test('soma 1 e 2 para dar 3', () => {
       expect(calcs.sum(1, 2)).toEqual(3)
    })
  
    test('divide 10 por 3 para dar 3.33...', () => {
       expect(calcs.division(10, 3)).toBeCloseTo(3.33)
    })
  
    test('retorna apenas os pares no array', () => {
       let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
       let array2 = [2, 4, 6, 8, 10]
       expect(array.retornePares(array1)).toEqual(array2)
    })

    test('to contain', () => {
        let arraycont = ['item1', 'item2', 'item3']
        expect(array.addItem4(arraycont)).toContain('item4')
      })
  
    test('3 mais 3', () => {
    let valor = 3 + 3
    expect(valor).toBeGreaterThan(5) ///maior que 5
    expect(valor).toBeGreaterThanOrEqual(6) ///maior ou igual a 6
    expect(valor).toBeLessThan(8) ///menor que 8
    expect(valor).toBeLessThanOrEqual(7) ///menor ou igual a 7
    expect(valor).not.toEqual(5) ///não igual a 5
    })

  })   
  
  describe('testes dos exercicios', () => {
   
    test('exercicio1: soma', () => {
        expect(exercicios.sum(4, 5)).toEqual(9)
        expect(exercicios.sum(0, 0)).toEqual(0)
        expect(() => {exercicios.sum(4, "5")}).toThrow()
        expect(() => {exercicios.sum(4, "5")}).toThrow('parameters must be numbers')
    })
    
    test('exercicio2: myIndex', () => {
        expect(exercicios.myIndexOf([1, 2, 3, 4], 3)).toBe(2)
        expect(exercicios.myIndexOf([1, 2, 3, 4], 5)).toEqual(-1)
    })
    test('exercicio3: mySumarray', () => {
        expect(exercicios.mySum([1, 2, 3, 4])).toBe(10)
        expect(exercicios.mySum([1, -2, -3, 4])).toEqual(0)
    })
    test('exercicio4: myRemove', () => {
        expect(exercicios.myRemove([1, 2, 3, 4], 3)).not.toContain(3)
        expect(exercicios.myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4])
        expect(exercicios.myRemove([1, 2, 3, 4], 5)).toContain(1, 2, 3, 4)
    })
    test('exercicio5: myRemoveWithouCopy', () => {
        expect(exercicios.myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContain(3)
        expect(exercicios.myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4])
        expect(exercicios.myRemoveWithoutCopy([1, 2, 3, 4], 5)).toContain(1, 2, 3, 4)
    })
    test('exercicio6: myMyFizzBuzz', () => {
        expect(exercicios.myFizzBuzz(15)).toBe('fizzbuzz')
        expect(exercicios.myFizzBuzz(3)).toBe('fizz')
        expect(exercicios.myFizzBuzz(5)).toBe('buzz')
        expect(exercicios.myFizzBuzz(7)).toBe(7)
        expect(exercicios.myFizzBuzz("K")).toBe(false)
    })
    test('exerciocio7: var definida', () => {
        const thereIs = '';
        expect(thereIs).toBeDefined()
    })
    test('exerciocio8: função definida', () => {
        function thereIs() {}
        expect(thereIs).toBeDefined()
    })

    test('exerciocio10: objetos', () => {
        expect(exercicios.obj1).toEqual(exercicios.obj2)
        expect(exercicios.obj1).not.toEqual(exercicios.obj3)
    })
    test('exercicio11: maior que', () => {
        expect(exercicios.isAbove(2, 1)).toBe(true)
        expect(exercicios.isAbove(1, 2)).toBe(false)
    })

  })