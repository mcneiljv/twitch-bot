import { Router } from "express";
import {
  getCommands,
  addCommand,
  updateCommand,
  deleteCommand,
} from "../controllers/commands";

const router: Router = Router();

router.get("/commands", getCommands);

router.post("/add-command", addCommand);

router.put("/edit-command/:id", updateCommand);

router.delete("/delete-command/:id", deleteCommand);

export default router;
