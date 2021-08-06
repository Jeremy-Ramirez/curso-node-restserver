const {response,request}= require('express');



const usuariosGet=(req=request, res=response) => {

  //const query=req.query;
  const {q,nombre='No name',apikey,page=1,limit=10}= req.query;

    res.json({
        msg:'get API-controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
  }


const usuariosPost= (req, res=response) => {

  //const body= req.body;
  const{nombre,edad}=req.body;


    res.status(201).json({
        msg:'post API- controlador',
        nombre,edad
    });
  }  


const usuariosPut= (req, res) => {

  //cuando meto id en la URL se accede a traves de params
  const id= req.params.id;

    res.status(400).json({
        msg:'put API-controlador'
    });
  }  

const usuariosPatch=(req, res) => {
    res.json({
        msg:'patch API-controlador'
    });
  }


const usuariosDelete=(req, res) => {
    res.json({
        msg:'delete API-controlador'
    });
  }

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}