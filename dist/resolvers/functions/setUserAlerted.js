"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setUserAlerted = function (users) {
    users.forEach(function (user) {
        user.setIsAlerted(true);
    });
    return users;
};
exports.default = setUserAlerted;
