let {
  Cliente,
  Compra,
  Producto,
  Suministra, 
  Proveedor} = require('./crearObjetos.js')

var clientes =[]
clientes.push( new Cliente( 3124567, 'Ramiro','Cardozo',null, 23 ))
clientes.push(new Cliente (1234567, 'Pamela', 'Rios', 'F', 37))
clientes.push(new Cliente (4123567, 'Luis', null, 'M', 15))
clientes.push(new Cliente (7654321, 'Mario', 'Casas', 'M', 67))
clientes.push(new Cliente (4561234, 'Maria', 'Casazola', 'F', 63))
clientes.push(new Cliente (2134567, 'Carla', 'Barron', 'F', 16))
clientes.push(new Cliente (666666, 'Deyvi', 'Bustamante', 'M', 16))
clientes.push(new Cliente (2134567, 'Carla', 'Barron', 'M', 16))
clientes.push(new Cliente (3124567, 'Ramiro', 'Cardozo', 'M', 23))

const compras = []
compras.push ( new Compra(3124567, 1, 'L', 1))
compras.push ( new Compra(1234567, 2, 'M', 2))
compras.push ( new Compra(4123567, 3, 'MI', 3))
compras.push ( new Compra(666666, 5, 'J', 200))
compras.push ( new Compra(2134567, 1, 'L', 5))

compras.push ( new Compra(2134567, 1, 'M', 6))
compras.push ( new Compra(2134567, 2, 'MI', 3))
compras.push ( new Compra(2134567, 2, 'J', 2))
compras.push ( new Compra(777777, 4, 'L', 3))

const productos =[]
productos.push( new Producto(1, 'Cuaderno',3 ))
productos.push( new Producto(2, 'Celular',2000 ))
productos.push( new Producto(3, 'Antigripal',4 ))
productos.push( new Producto(4, 'Pan',0.5 ))

const suministros=[]
suministros.push(new Suministra( 1, 3124567018 ))
suministros.push(new Suministra( 2, 1112223014 ))
suministros.push(new Suministra( 3, 1112223014 ))
suministros.push(new Suministra( 4, 4561234018 ))

const proveedores =[]
proveedores.push(new Proveedor(3124567018, 'libreriaSA'))
proveedores.push(new Proveedor(1112223014, 'electronicaSA'))
proveedores.push(new Proveedor(4561234018, 'PanaderiaSA'))

module.exports = {
  clientes, compras, productos, suministros, proveedores
} 
