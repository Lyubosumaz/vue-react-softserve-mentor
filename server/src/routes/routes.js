const express = require("express");
const userRouter = express.Router();
const pool = require("../db/db");
const signinController = require("../controllers/signin.controller");
const signupController = require("../controllers/signup.controller");

userRouter.get("/sign-in", signinController.getSignIn);
userRouter.post("/sign-in", signinController.postSignIn(pool));

userRouter.get("/sign-up", signupController.getSignUp);
userRouter.post("/sign-up", signupController.postSignUp(pool));

const routes = (app) => {
  app.use("/user", userRouter);
};

module.exports = routes;
