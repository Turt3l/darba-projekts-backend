"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getUserByToken_1 = __importDefault(require("./functions/getUserByToken"));
var userTokenResolver = function (_parent, args) {
    var user = (0, getUserByToken_1.default)(args.token);
    return user;
};
exports.default = userTokenResolver;
