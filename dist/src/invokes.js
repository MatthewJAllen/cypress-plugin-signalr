"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvokes = getInvokes;
exports.addInvoke = addInvoke;
exports.clearInvokes = clearInvokes;
var invokes = [];
function getInvokes() {
    return invokes;
}
function addInvoke(invoke) {
    invokes.push(invoke);
}
function clearInvokes() {
    invokes = [];
}
