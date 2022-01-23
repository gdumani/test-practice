import Calc from "./calc.js";

describe('calculator tests',()=>{
  describe ('Addition',()=>{
    test('add 5+10',()=>{
     let a = 10;
     let b = 5;
     let addition = Calc.add(a,b);
     expect(addition).toBe(15);    
    })
    test('add 12+3',()=>{
      let a = 12;
      let b = 4;
      let addition = Calc.add(a,b);
      expect(addition).toBe(16);    
     })
     test('add 5000+25',()=>{
      let a = 5000;
      let b = 25;
      let addition = Calc.add(a,b);
      expect(addition).toBe(5025);    
     })
  })
  describe ('Subtraction',()=>{
    test('subtract 10-5',()=>{
     let a = 10;
     let b = 5;
     let res = Calc.sub(a,b);
     expect(res).toBe(5);    
    })
    test('subtract 12-4',()=>{
      let a = 12;
      let b = 4;
      let res = Calc.sub(a,b);
      expect(res).toBe(8);    
     })
     test('subtract 5000-25',()=>{
      let a = 5000;
      let b = 25;
      let res = Calc.sub(a,b);
      expect(res).toBe(4975);    
     })
  })
  describe ('multiplication',()=>{
    test('multiply 5*10',()=>{
     let a = 10;
     let b = 5;
     let res = Calc.mul(a,b);
     expect(res).toBe(50);    
    })
    test('multiply 12*4',()=>{
      let a = 12;
      let b = 4;
      let res = Calc.mul(a,b);
      expect(res).toBe(48);    
     })
     test('multiply 5000*25',()=>{
      let a = 5000;
      let b = 25;
      let res = Calc.mul(a,b);
      expect(res).toBe(125000);    
     })
  })
  describe ('divition',()=>{
    test('divide 10/5',()=>{
     let a = 10;
     let b = 5;
     let res = Calc.div(a,b);
     expect(res).toBe(2);    
    })
    test('divide 12/4',()=>{
      let a = 12;
      let b = 4;
      let res = Calc.div(a,b);
      expect(res).toBe(3);    
     })
     test('divide 5000/25',()=>{
      let a = 5000;
      let b = 25;
      let res = Calc.div(a,b);
      expect(res).toBe(200);    
     })
  })

});

