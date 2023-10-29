var ProductosModelo = {}

var Productos = [
    {codigo: 1, nombre: "cerveza", descripcion: "bebida alcoholica ligera", precio: 3000},
    {codigo: 2, nombre: "mani", descripcion: "mani salado", precio: 2000},
    {codigo: 3, nombre: "chocolate", descripcion: "barra de chocolate", precio: 2500},
    {codigo: 4, nombre: "gaseosa", descripcion: "bebida con gas refrescante", precio: 2700},
    {codigo: 5, nombre: "platanos", descripcion: "platanos fritos salados", precio: 1500},
]

ProductosModelo.Guardar = function(post, callback){

    Productos.push({codigo: post.codigo, nombre: post.nombre, descripcion: post.descripcion, precio: post.precio})
    
    return callback({state: true, mensaje: "Se almaceno el producto correctamente"})
}

ProductosModelo.ListarTodos = function(post, callback){
    return callback(Productos)
}

ProductosModelo.Modificar = function(post, callback){
    var posicion = Productos.findIndex((item) => item.codigo == post.codigo)

    if(posicion == -1){
        callback({state: false, mensaje: "No se encontro ningun resultado con este codigo"})
    }
    else{
        Productos[posicion].nombre = post.nombre
        Productos[posicion].descripcion = post.descripcion
        Productos[posicion].precio = post.precio
        callback({state: true, mensaje: "El registro fue modificado correctamente"})
    }
}

ProductosModelo.Eliminar = function(post, callback){
    var posicion = Productos.findIndex((item) => item.codigo == post.codigo)

    if(posicion == -1){
        callback({state: false, mensaje: "No se encontraron resultados para este codigo, no es posible eliminar"})
    }
    else{
        Productos.splice(posicion, 1)
        callback({state: true, mensaje: "Este registro se elimino correctamente"})
    }
}

ProductosModelo.ListarPorCodigo = function(post, callback){
    var posicion = Productos.findIndex((item) => item.codigo == post.codigo)

    if(posicion == -1){
        callback({state: false, mensaje: "No se encontraron resultados para este codigo, no es posible listar"})
    }
    else{
        callback(Productos[posicion])
    }
}


module.exports.ProductosModelo = ProductosModelo