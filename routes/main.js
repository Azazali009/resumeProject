import express from "express";
const router = express.Router();

import { homeController } from "../controller/homeController.js";
import { serviceController } from "../controller/servicesController.js";
import { contactController } from "../controller/contactController.js";
import { skillController } from "../controller/skillController.js";

router.get("/", homeController);
router.get("/service", serviceController);
router.get("/contact", contactController);
router.get("/skill", skillController);
export default router;
