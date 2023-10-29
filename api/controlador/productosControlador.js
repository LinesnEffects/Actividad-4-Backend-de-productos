
var ProductosModelo = require("../modelos/productosModelo.js").ProductosModelo
var ProductosControler = {}

ProductosControler.Guardar = function(request, response){

    try {
        var post = {            
            codigo: request.body.codigo,
            nombre: request.body.nombre,
            descripcion: request.body.descripcion,
            precio: request.body.precio,
        }
        
        if(post.codigo == undefined || post.codigo == null || post.codigo == ""){
            response.json({state: false, mensaje: "Se requiere el campo codigo"})
            return false
        }

        if(post.nombre == undefined || post.nombre == null || post.nombre == ""){
            response.json({state: false, mensaje: "Se requiere el campo nombre"})
            return false
        }

        if(post.descripcion == undefined || post.descripcion == null || post.descripcion == ""){
            response.json({state: false, mensaje: "Se requiere el campo descripcion"})
            return false
        }

        if(post.precio == undefined || post.precio == null || post.precio == ""){
            response.json({state: false, mensaje: "Se requiere el campo precio"})
            return false
        }      

        ProductosModelo.Guardar(post, function(respuestaProductos){
            response.json(respuestaProductos)
        })        

    } catch (error) {
        response.json({state: false, mensaje: "Error inesperado", error: error})   
    }    
}

ProductosControler.ListarTodos = function(request, response){
    ProductosModelo.ListarTodos(null, function(respuestaProductos){
    response.json(respuestaProductos)
    })
}

ProductosControler.Modificar = function(request, response){

    var post = {            
        codigo: request.body.codigo,
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
        precio: request.body.precio,
    }

    if(post.codigo == undefined || post.codigo == null || post.codigo == ""){
        response.json({state: false, mensaje: "Se requiere el campo codigo"})
        return false
    }

    if(post.nombre == undefined || post.nombre == null || post.nombre == ""){
        response.json({state: false, mensaje: "Se requiere el campo nombre"})
        return false
    }

    if(post.descripcion == undefined || post.descripcion == null || post.descripcion == ""){
        response.json({state: false, mensaje: "Se requiere el campo descripcion"})
        return false
    }

    if(post.precio == undefined || post.precio == null || post.precio == ""){
        response.json({state: false, mensaje: "Se requiere el campo precio"})
        return false
    }      

    ProductosModelo.Modificar(post, function(respuestaProductos){
        response.json(respuestaProductos)
    })
}

ProductosControler.Eliminar = function(request, response){
    var post = {            
        codigo: request.body.codigo,        
    }

    if(post.codigo == undefined || post.codigo == null || post.codigo == ""){
        response.json({state: false, mensaje: "Se requiere el campo codigo"})
        return false
    }    

    ProductosModelo.Eliminar(post, function(respuestaProductos){
        response.json(respuestaProductos)
    })
}    

ProductosControler.ListarPorCodigo = function(request, response){
    var post = {            
        codigo: request.body.codigo,        
    } 

    if(post.codigo == undefined || post.codigo == null || post.codigo == ""){
        response.json({state: false, mensaje: "Se requiere el campo codigo"})
        return false
    }    
    
    ProductosModelo.ListarPorCodigo(post, function(respuestaProductos){
        response.json(respuestaProductos)
    })    
}


module.exports.ProductosControler = ProductosControler

