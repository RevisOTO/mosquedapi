let funciones = require('./funciones')
let chai = require('chai')
let should = chai.should()
let expect = chai.expect()
let assert = chai.assert()

describe('Pruebas XD (Should)', () => {
    it('Esto regresa 8', () => {
        let resultado = funciones.potencia(2,3);
        resultado.should.be.a('number')
        resultado.should.equal('number')
    });
    
    
});

describe('Pruebas XD (Expect)', () => {
    it('Esto regresa 8', () => {
        let resultado = funciones.potencia(2,3);
        expect(resultado).to.be.a('number')
        expect(resultado).to.equal(8)
    });
});

describe('Pruebas XD (assert)', () => {
    it('Esto regresa 8', () => {
        let resultado = funciones.potencia(2,3);
        assert.typeOf(resultado,'number')
        assert.equal(resultado,8)
    });
});
