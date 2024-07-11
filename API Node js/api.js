const express = require('express');
const app = express();//esta instancia nos permite 
//usar las propiedads de express
const port = 3001;

//crud
app.get('/', (req, res) => {
    res.send('Respuesta del get desde express')
})


app.get('/servicios', (req, res) => {
    res.send('Respuesta de servicios')
})

app.get('/test', (req, res) => {
    res.send('Respuesta de is alive')
})

app.listen(port,()=>{
    console.log('Puerto de servicio', port)
})