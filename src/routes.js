const { Router } = require("express");
const ContactController = require("./app/controllers/ContactController");
const CategoryController = require("./app/controllers/CategoryController");
const UserController = require("./app/controllers/UserController");

const router = Router();

// router.get("/contacts", ContactController.index);
// router.get("/contacts/:id", ContactController.show);
// router.delete("/contacts/:id", ContactController.delete);
// router.post("/contacts", ContactController.store);
// router.put("/contacts/:id", ContactController.update);

// router.get("/categories", CategoryController.index);
// router.post("/categories", CategoryController.store);

router.get("/usuarios", UserController.index);
router.get("/usuarios/:id", UserController.show);
router.delete("/usuarios/:id", UserController.delete);
router.post("/usuarios", UserController.store);
router.put("/usuarios/:id", UserController.update);
router.post("/login", UserController.login);

module.exports = router;
