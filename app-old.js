
const http=require('http')

//Crea el servidor
//Request lo que se solicita por parte del cliente
//Responsive mi respuesta
http.createServer((req,res)=>{

    // res.writeHead(200 ,{'Content-Type':'application/json'})

    // const persona={
    //     id:1,
    //     nombre:'Mateo'
    // }

    res.write('Hola Mundo')
    res.end()
})

.listen(8080)

console.log('Escuchando el puerto',8080);


