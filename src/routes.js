const express = require("express");

const BootCampController = require("./controllers/BootCampController");

const routes = express.Router();

routes.post("/bootcamp", BootCampController.store);
routes.get("/bootcamp", BootCampController.show);

routes.get("/bootcamp/:id", BootCampController.index);
routes.put("/bootcamp/:id", BootCampController.update);
routes.delete("/bootcamp/:id", BootCampController.delete);

module.exports = routes;
