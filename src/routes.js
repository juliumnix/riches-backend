const { Router } = require("express");
const UserController = require("./app/controllers/UserController");
const BalanceController = require("./app/controllers/BalanceController");
const GoalController = require("./app/controllers/GoalController");

const router = Router();

router.get("/usuarios", UserController.index);
router.get("/usuarios/:id", UserController.show);
router.delete("/usuarios/:id", UserController.delete);
router.post("/usuarios", UserController.store);
router.put("/usuarios/:id", UserController.update);
router.put("/usuarios/saldo/:id", UserController.updateSaldo);
router.post("/login", UserController.login);

router.post("/saldo/entrada", BalanceController.insereEntrada);
router.post("/saldo/saida", BalanceController.insereSaida);
router.get("/saldo/:id", BalanceController.index);

router.post("/meta", GoalController.insereMeta);
router.get("/meta/:id_usuario", GoalController.index);
router.get("/meta/valor/:id", GoalController.show);
router.put("/meta", GoalController.update);

module.exports = router;
