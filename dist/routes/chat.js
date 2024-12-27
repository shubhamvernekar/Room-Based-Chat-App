"use strict";
const chatRoutes = require('express').Router();
const chatController = require('../controller/chat_controller');
const chatControllerObj = new chatController();
chatRoutes.post('/channel/create', chatControllerObj.createChannel);
chatRoutes.post('/channel/:channelId', chatControllerObj.joinChannel);
module.exports = chatRoutes;
