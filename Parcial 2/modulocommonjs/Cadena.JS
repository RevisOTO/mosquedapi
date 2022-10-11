function Mayuscula(cadena){
    return cadena.toUpperCase()
}

function SinEspacios(cadena){
    return cadena.replace(/ /g,"")
}

function Longitud(cadena){
    return cadena.length
}

console.log(module)

exports.Mayuscula = Mayuscula
exports.SinEspacios = SinEspacios
exports.Longitud = Longitud