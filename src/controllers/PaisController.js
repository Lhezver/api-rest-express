import { Pais } from "../models/Pais.js";
import { Ciudad } from "../models/Ciudad.js";

export async function getPaises(req, res) {
  try {
    const pais = await Pais.findAll({
      atributes: ["id", "nombre", "habitantes"],
    });
    res.json(pais);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getPais(req, res) {
  const { id } = req.params;
  try {
    const pais = await Pais.findOne({
      where: {
        id,
      },
    });
    res.json(pais);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createPais(req, res) {
  const { nombre, habitantes } = req.body;
  try {
    let newPais = await Pais.create(
      {
        nombre,
        habitantes
      },
      {
        fields: ["nombre", "habitantes"],
      }
    );
    return res.json(newPais);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export const updatePais = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, habitantes } = req.body;

    const pais = await Pais.findByPk(id);
    pais.nombre = nombre;
    pais.habitantes = habitantes;
    await pais.save();

    res.json(pais);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deletePais(req, res) {
  const { id } = req.params;
  try {
    await Ciudad.destroy({
      where: {
        paisId: id,
      },
    });
    await Pais.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getPaisCiudades(req, res) {
  const { id } = req.params;
  try {
    const pais = await Pais.findOne({
      where: {
        id,
      },
      include: Ciudad
    });
    res.json(pais);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
