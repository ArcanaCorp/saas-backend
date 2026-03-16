import express from "express";
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//MÉTODOS GET, POST, PUT, DELETE, PATCH
import indexRouter from "./routes/index.routes.js";
app.use('/', indexRouter);


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        ok: false, 
        message: 'Error interno en el servidor',
    })
});

export default app;