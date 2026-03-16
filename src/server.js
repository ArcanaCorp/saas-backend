import app from "./app.js";
import { PORT } from "./config/env.js";

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`);
    console.log(`GET http://localhost:${PORT}/api/health`);
});