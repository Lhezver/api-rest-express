import express from "express";

const app = express();

// Import routes
import paisRoutes from "./routes/PaisRoutes.js";
import ciudadRoutes from "./routes/CiudadRoutes.js";

// Middlewares
app.use(express.json());

// Routes
app.use("/api/paises", paisRoutes);
app.use("/api/ciudades", ciudadRoutes);

export default app;
