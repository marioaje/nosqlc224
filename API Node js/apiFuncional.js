const express = require('express');
const connectDB = require('./conexionMogoDB');
const Usuario = require('./models/Usuario');

const app = express();
const port = 3000;

//Conexion DB
connectDB();

//Convierto todo a JSON
app.use(express.json());

//Definimos una ruta base,para la url del api
app.get('/', (req, res) => {
        res.send("Estoy alive!!!");
    }
);


//Definimos una ruta base,para la url del api
//Trae todos los datos de la coleccion
app.get('/usuario', async (req, res) => {
    try {
        const usuario = await Usuario.find();
        res.json(usuario);
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}
);
//
//Definimos una ruta base,para la url del api
app.get('/usuario/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({message: "Elemento no encontrado"});
        }

        res.json(usuario);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);



// //       "nombre": "Douglas",
// //Definimos una ruta base,para la url del api
// app.get('/usuario/:id', async (req, res) => {
//     try {
//         const usuario = await Usuario.find({nombre: req.params.id});

//         if(!usuario) {
//             res.status(404).json({message: "Elemento no encontrado"});
//         }

//         res.json(usuario);
//     } catch (error) {
//         res.status(500).json({message: error.message});
        
//     }
// }
// );

//Sirve para insertar datos
//Definimos una ruta base,para la url del api
app.post('/usuario', async (req, res) => {
    try {
        const newusuario =  new Usuario(req.body);
        await newusuario.save();
        res.status(201).json(newusuario);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);


//Definimos una ruta base,para la url del api
//sirve para actualizar
app.put('/usuario/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!usuario) {
            res.status(404).json({message: "Elemento no encontrado"});
        }

        res.json(usuario);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);


//sirve para eliminar
app.delete('/usuario/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);

        if(!usuario) {
            res.status(404).json({message: "Elemento no encontrado"});
        }

        res.json({message: "Elemento eliminado"});
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);


app.listen(port, () =>{
        console.log(`API URl en http://localhost:${port}`); 
    }
);