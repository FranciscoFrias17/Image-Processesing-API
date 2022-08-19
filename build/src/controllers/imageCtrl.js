"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageService_1 = __importDefault(require("../services/imageService"));
var fs = __importStar(require("fs"));
var path_1 = __importDefault(require("path"));
var ImageCtrl = {
    imageGetAll: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var errors;
        return __generator(this, function (_a) {
            errors = [];
            fs.readdir("./images", function (error, files) {
                if (error) {
                    errors.push(error.message);
                }
                res.send(files);
                // eslint-disable-next-line no-console, no-undef
                console.log('ImageGetAll', files);
            });
            return [2 /*return*/];
        });
    }); },
    imageGetOne: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var error, id;
        return __generator(this, function (_a) {
            error = '';
            id = req.params.id;
            fs.existsSync("./images/".concat(id)) ? res.sendFile(path_1.default.resolve("./images/".concat(id))) : (error = 'Image not found');
            if (error) {
                res.status(404).send(error);
            }
            // eslint-disable-next-line no-console, no-undef
            console.log('ImageGetOne', id);
            return [2 /*return*/];
        });
    }); },
    imageCreate: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var error, imageName, width, height, editPath, editedImage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    error = '';
                    imageName = req.params.id;
                    width = req.query.width ? parseInt(req.query.width) : 0;
                    height = req.query.height ? parseInt(req.query.height) : 0;
                    if (!(!imageName || !width || !height)) return [3 /*break*/, 1];
                    error =
                        'Invalid parameters provided. Image name is required. Positive integers for width and height are required';
                    res.status(400).send(error);
                    return [3 /*break*/, 3];
                case 1:
                    editPath = path_1.default.resolve("./images/".concat(imageName, "-").concat(width, "x").concat(height, ".jpg"));
                    if (!!fs.existsSync(editPath)) return [3 /*break*/, 3];
                    // eslint-disable-next-line no-console, no-undef
                    console.log('ImageCreate', imageName);
                    return [4 /*yield*/, imageService_1.default.resizeImage(editPath, imageName, width, height)];
                case 2:
                    editedImage = _a.sent();
                    if (!editedImage) {
                        error =
                            'Invalid parameters provided. Image name is required. Positive integers for width and height are required';
                        res.status(404).send(error);
                    }
                    res.status(200).sendFile(editPath);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); },
};
exports.default = ImageCtrl;
