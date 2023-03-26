import parseDuration from './parseDuration';

describe('parseDuration', () => {
  test('should return the correct seconds', () => {
    expect(parseDuration('PT30S')).toEqual(30);
    expect(parseDuration('PT2M30S')).toEqual(150);
    expect(parseDuration('PT1H30M30S')).toEqual(5430);
    expect(parseDuration('P1Y10DT2H30M')).toEqual(32409000);
    expect(parseDuration('PT1H30M30.1S')).toEqual(5430.1);
   
    
  });

   test(' throws the error', () => {
         expect(() => {
              try {
                parseDuration('P1Y2M10DT2H30M');
              } catch (error) {
                throw new Error(error.message);
              }
            }).toThrow('month is present');
        
    });



});
