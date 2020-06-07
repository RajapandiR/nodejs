import userController from "../controllers/user_controller";
import express from "express";
const router = express.Router();

router.route('/user')
    .get(userController.getUser)
    .post(userController.postUser)

export default  router;