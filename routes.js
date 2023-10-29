
var ProductosControler = require("./api/controlador/productosControlador.js").ProductosControler

app.post("/Productos/Guardar", function(request, response){
    ProductosControler.Guardar(request, response)
})

app.post("/Productos/ListarTodos", function(request, response){
    ProductosControler.ListarTodos(request, response)
})

app.post("/Productos/Modificar", function(request, response){
    ProductosControler.Modificar(request, response)
})

app.post("/Productos/Eliminar", function(request, response){
    ProductosControler.Eliminar(request, response)
})

app.post("/Productos/ListarPorCodigo", function(request, response){
    ProductosControler.ListarPorCodigo(request, response)
})

