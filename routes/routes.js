/*jshint esversion: 6 */

//importar modulos 
const { resolveInclude } = require('ejs');
const express = require('express');
const path = require('path');

//Creamos un objeto de Router Express
const router = express.Router();
// Acceso carpeta
const llamado = require('../public/js/funcion.js');

//Exportar nuestro modulo ROUTES
module.exports = router;

//Valores de Reportes
const CajaEnPesos = 10000;
const CajaEnDolares = 900;
var InicioPesos = 10000;
var InicioDolares = 900;
var ActualPesos, ActualDolares;

router.get('/', (req, res) =>{
    res.render('pages/home', {
        Titulo : "Casa de Divisas Galgos"
    });
});


router.post('/CompraVenta', (req, res) =>{
    console.log(req.body)
    if(req.body.Transaccion == 'Venta'){
        console.log('if')
        ActualPesos = Number(req.body.PesoActual) + Number(InicioPesos);
        ActualDolares = (Number(InicioDolares) - Number(req.body.DolarActual));
        InicioPesos = ActualPesos;
        InicioDolares = ActualDolares;
    }
    else{
        console.log('else')
        ActualPesos = Number(InicioPesos) - Number(req.body.PesoActual);
        ActualDolares = Number(req.body.DolarActual) + Number(InicioDolares);
        InicioPesos = ActualPesos;
        InicioDolares = ActualDolares;
    }
    res.render('pages/CompraVenta', {
        Titulo : "Compra y venta"
    });
    
});

router.get('/CompraVenta', (req, res) =>{
    res.render('pages/CompraVenta', {
        Titulo : "Compra y venta"
    });
});

router.get('/Reportes', (req, res) =>{
    res.render('pages/Reportes', {
        Titulo : "Reportes", 
        CajaEnPesos,
        CajaEnDolares,
        ActualPesos, 
        ActualDolares
    });
});