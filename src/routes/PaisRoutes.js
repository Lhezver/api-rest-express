import { Router } from "express";
import {
  getPaises,
  getPais,
  createPais,
  updatePais,
  deletePais,
  getPaisCiudades,
} from "../controllers/PaisController.js";

const router = Router();

// Routes
router.get("/", getPaises);
router.get("/:id", getPais);
router.post("/", createPais);
router.put("/:id", updatePais);
router.delete("/:id", deletePais);

router.get("/:id/ciudades", getPaisCiudades);

export default router;
