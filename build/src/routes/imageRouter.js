"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var imageCtrl_1 = __importDefault(require("../controllers/imageCtrl"));
var router = (0, express_1.Router)();
router.get('/', imageCtrl_1.default.imageGetAll);
router.get('/:id', imageCtrl_1.default.imageGetOne);
router.get('/create/:id', imageCtrl_1.default.imageCreate);
exports.default = router;
