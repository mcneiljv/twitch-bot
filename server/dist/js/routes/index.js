"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commands_1 = require("../controllers/commands");
const router = express_1.Router();
router.get("/commands", commands_1.getCommands);
router.post("/add-command", commands_1.addCommand);
router.put("/edit-command/:id", commands_1.updateCommand);
router.delete("/delete-command/:id", commands_1.deleteCommand);
exports.default = router;
