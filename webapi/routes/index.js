const express = require('express');
const tutorRoute = require('./tutorRouter');
const userRoute = require('./userRouter');
const userTypeRoute = require('./userTypeRouter');
const loginRoute = require('./loginRouter');
const subjectRoute = require('./subjectsRouter');

const router = express.Router();

module.exports = () => {


    router.use("/", loginRoute)
    router.use("/", tutorRoute)
    router.use("/", userTypeRoute)
    router.use("/", userRoute)
    router.use("/", subjectRoute)

    return router;
};