const express = require('express');
const tutorRoute = require('./tutorSubjectsRouter');
const userRoute = require('./userRouter');
const userTypeRoute = require('./userTypeRouter');
const loginRoute = require('./loginRouter');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

module.exports = () => {


    router.use("/", loginRoute)
    router.use("/", userTypeRoute)
    // router.use(verifyToken);
    router.use("/", tutorRoute)
    router.use("/", userRoute)


    return router;
};