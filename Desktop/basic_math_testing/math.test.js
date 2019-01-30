const math = require('./math.js');

describe('the math module', () => {

    describe('the add function', () => {

        test('adds two numbers', () => {
            expect(math.add(3, 5)).toEqual(8);
            expect(math.add(2, -3)).toEqual(-1);
            expect(math.add(1.2, 3.1)).toEqual(4.3);
        });

        test('throws error on non number inputs', () => {
            expect(() => {
                math.add('2', '3');
            }).toThrow();
            expect(() => {
                math.add([], 3);
            }).toThrow();
        });
        
        // test('converts numerical strings', () => {
        //     expect(math.add('3', '2')).toEqual(5);
        // });
        
        // test('returns NaN for non numerical input', () => {
        //     expect(math.add('a', 'b')).toBeNaN();
        //     expect(math.add('x', 3)).toBeNaN();
        //     expect(math.add([1, 2, 3], [3, 4, 4])).toBeNaN();
        // });
    });
    
    describe('the subtract function', () => {
    
        test('subtracts two numbers', () => {
            expect(math.subtract(1, 4)).toEqual(-3);
            expect(math.subtract(4, 1)).toEqual(3);
        });
        
        test('subtracts numerical strings', () => {
            expect(math.subtract('4', 0)).toEqual(4);
            expect(math.subtract(4, 1)).toEqual(3);
        });
    
    });
    
    test('to be versus to equal', () => {
        expect(3).toBe(3);
        expect([1, 2]).toEqual([1, 2]);
    })
    

});

