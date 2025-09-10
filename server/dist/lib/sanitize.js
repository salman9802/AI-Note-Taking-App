"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeUser = sanitizeUser;
/** Takes an object and list of keys to remove and returns a clean object */
function sanitize(obj, keysToRemove) {
    const clone = Object.assign({}, obj);
    for (const key of keysToRemove) {
        delete clone[key];
    }
    return clone;
}
function sanitizeUser(user) {
    return sanitize(user, ["password"]);
}
