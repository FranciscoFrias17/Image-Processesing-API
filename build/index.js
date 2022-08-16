"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageRouter_1 = __importDefault(require("./routes/imageRouter"));
var app = (0, express_1.default)();
/* Routes */
app.use('/api/images', imageRouter_1.default);
/* Listening */
var port = 3000;
// eslint-disable-next-line no-console, no-undef
app.listen(port, function () { return console.log("Server started on port ".concat(port)); });
exports.default = app;
