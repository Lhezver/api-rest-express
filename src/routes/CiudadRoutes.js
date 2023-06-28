import { Router } from "express";
import {
  getCiudades,
  getCiudad,
  createCiudad,
  updateCiudad,
  deleteCiudad,
} from "../controllers/CiudadController.js";

const router = Router();

// Routes
router.get("/", getCiudades);
router.get("/:id", getCiudad);
router.post("/", createCiudad);
router.put("/:id", updateCiudad);
router.delete("/:id", deleteCiudad);

export default router;
