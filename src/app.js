import express from "express";
const app = express();
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json" };

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Import routes
import paisRoutes from "./routes/PaisRoutes.js";
import ciudadRoutes from "./routes/CiudadRoutes.js";

const corsOptions = {
    origin: ['localhost', '127.0.0.1'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// Middlewares
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use("/api/paises", paisRoutes);
app.use("/api/ciudades", ciudadRoutes);

export default app;
