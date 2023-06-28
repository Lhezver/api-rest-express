import express from "express";
const app = express();
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json" };

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Import routes
import paisRoutes from "./routes/PaisRoutes.js";
import ciudadRoutes from "./routes/CiudadRoutes.js";

// Middlewares
app.use(express.json());

// Routes
app.use("/api/paises", paisRoutes);
app.use("/api/ciudades", ciudadRoutes);

export default app;
