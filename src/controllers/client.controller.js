import * as clientService from '../services/client.service.js';

export const createClientController = (req, res) => {
    try {
        const { name, email, phone } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({
                ok: false,
                message: 'Faltan campos obligatorios',
                error: 'Campos incompletos',
                code: 400
            });
        }

        const newClient = clientService.createClient({ name, email, phone });

        res.status(201).json({
            ok: true,
            data: newClient,
            message: 'Cliente creado exitosamente',
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error interno del servidor',
            error: error.message,
            code: 500
        });
    }
}

export const getClientsController = (req, res) => {
    try {
        const clients = clientService.getClients();
        res.status(200).json({
            ok: true,
            data: clients
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error interno del servidor',
            error: error.message,
            code: 500
        });
    }
}