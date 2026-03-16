import { Router } from "express";
import { healtController } from "../controllers/healt.controller.js";

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ ok: true, message: 'Servidor disponible', error: '', code: 200 })
})


router.get('/healt', healtController)

router.post('/api/clients', (req, res) => {

    console.log(req.body);
    
    const { nombre, email, phone } = req.body;

    res.json({
        ok: true,
        data: {nombre, email, phone}
    })
})

export default router;