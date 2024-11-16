import express from "express"
import { getAllTask } from "../Controllers/TaskController.js";
import { createTask } from "../Controllers/TaskController.js";
import { fetchAllTasks } from "../Controllers/TaskController.js";
import { updateByid } from "../Controllers/TaskController.js";
import { deleteByid } from "../Controllers/TaskController.js";
const router=express.Router();

router.get('/task' , getAllTask);
router.post('/',createTask);
router.get('/', fetchAllTasks);
router.put('/:id', updateByid);
router.delete('/:id', deleteByid);
export default router;