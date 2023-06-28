import { Ciudad } from "../models/Ciudad.js";

export async function getCiudades(req, res) {
  try {
    const Ciudads = await Ciudad.findAll({
      attributes: ["id", "nombre", "habitantes", "paisId"],
      order: [["id", "DESC"]],
    });
    res.json(Ciudads);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getCiudad(req, res) {
  const { id } = req.params;
  try {
    const Ciudad = await Ciudad.findOne({
      where: { id },
      attributes: ["id", "nombre", "habitantes", "paisId"],
    });
    res.json(Ciudad);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function createCiudad(req, res) {
  try {
    const { nombre, habitantes, paisId } = req.body;
    const newCiudad = await Ciudad.create({
      paisId,
      nombre,
      habitantes
    });
    res.json(newCiudad);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}



export async function updateCiudad(req, res) {
  const { id } = req.params;
  // const { paisid, name, done } = req.body;
  try {
    // const updatedCiudad = await Ciudad.update(
    //   { name, done, paisid },
    //   { where: { id } }
    // );

    const Ciudad = await Ciudad.findOne({
      attributes: ["id", "nombre", "habitantes", "paisId"],
      where: { id },
    });

    Ciudad.set(req.body);

    await Ciudad.save();

    res.json(Ciudad);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteCiudad(req, res) {
  const { id } = req.params;
  try {
    await Ciudad.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}