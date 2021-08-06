
const express = require('express');
const cors= require('cors');
//const app = express();
//const port = process.env.PORT;

class Server{

    constructor(){
        this.app =express();
        this.port=process.env.PORT;
        this.usuariosPath='/api/usuarios';

       
        
        //Middlewares -> utilizan el .use , para recibir datos json
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }


    middlewares(){

        //cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));


    }

    routes(){

        this.app.use(this.usuariosPath,require('../routes/usuarios'));



    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
          })
    }


}



module.exports=Server;