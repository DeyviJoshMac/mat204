class Cliente {
  constructor (ci, nombre, apellido, sexo, edad){
    this.ci = ci
    this.nombre = nombre
    this.apellido = apellido
    this.sexo = sexo
    this.edad = edad
  }

}
class Compra {
  constructor (ci, codigo, diaCompra, cantidad){
    this.ci = ci
    this.codigo = codigo
    this.diaCompra = diaCompra
    this.cantidad = cantidad
  }
}

class Producto {
  constructor (codigo, nombre, precio ){
    this.codigo = codigo
    this.nombre = nombre
    this.precio = precio
  }
}

class Suministra {
  constructor( codigo, nit){
    this.codigo = codigo
    this.nit = nit
  }
}

class Proveedor {
  constructor( nit, nombre){
    this.nit = nit
    this.nombre = nombre
  }
}    

module.exports = {
    Cliente, 
    Compra,
    Producto,
    Suministra, 
    Proveedor
}




