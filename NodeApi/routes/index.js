const express = require('express');
const loginRoute = require('./loginRouter');
const userRoute = require('./UserRouter');
const shopRoute = require('./ShopRouter');
const itemRoute = require('./ItemRouter');
const OrderRoute = require('./OrderRouter');
const OrderPublicRoute = require('./PublicRouter');
const verifyToken = require('../middleware/verifyToken');
const OrderStatusRouter = require('./OrderStatusRouter');
const ItemCategoryRouter = require('./ItemCategoryRouter');

const router = express.Router();

module.exports = () => {

    router.use("/", loginRoute)
    router.use("/", OrderPublicRoute)
    router.use(verifyToken);
    router.use("/", shopRoute)
    router.use("/", userRoute)
    router.use("/", itemRoute)
    router.use("/", OrderRoute)
    router.use("/", OrderStatusRouter)
    router.use("/", ItemCategoryRouter)
    return router;
};