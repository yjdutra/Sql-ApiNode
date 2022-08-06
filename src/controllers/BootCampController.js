const Bootcamp = require("../models/Bootcamp");

module.exports = {
  async store(req, res) {
    const { dbInteger, dbString} = req.body;

    const dadosSalvos = await Bootcamp.create({
      dbInteger,
      dbString,
    }).catch((err) => {
      throw new Error(err);
    });

    return res.json(dadosSalvos);
  },

  async show(req, res) {
    const dadosNoBanco = await Bootcamp.findAll().catch((err) => {
      throw new Error(err);
    });

    return res.json(dadosNoBanco);
  },

  async index(req, res) {
    const { id } = req.params;

    const dadoEncontrado = await Bootcamp.findByPk(id).catch((err) => {
      throw new Error(err);
    });

    return res.json(dadoEncontrado);
  },

  async update(req, res) {
    const { id } = req.params;
    const { dbInteger, dbString} = req.body;

    const novoDado = await Bootcamp.update(
      {
        dbInteger: dbInteger,
        dbString: dbString,
      },
      {
        where: { id: id },
      }
    ).catch((err) => {
      throw new Error(err);
    });

    return res.json(novoDado);
  },

  async delete(req, res) {
    const { id } = req.params;

    const dbDelete = await Bootcamp.destroy({
      where: { id },
    }).catch((err) => {
      throw new Error(err);
    });

    return res.json(dbDelete);
  },
};
