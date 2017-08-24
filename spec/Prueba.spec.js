var {Calculadora}= require('../src/Calculadora.js')
describe('',function(){
    it('some test',function(){
  var calc=new Calculadora();
       var result= calc.add(5,5);
       expect(result).toBe(10);
    })

    it('some test',function(){
        var calc=new Calculadora();
             var result= calc.add(5,10);
             expect(result).toBe(15);
          })
})