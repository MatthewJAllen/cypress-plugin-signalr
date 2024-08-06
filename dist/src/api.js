"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publish = publish;
exports.verify = verify;
exports.clear = clear;
var invokes_1 = require("./invokes");
var subscribers_1 = require("./subscribers");
function publish(action) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    (0, subscribers_1.getSubscribers)()
        .filter(function (s) { return s.action === action; })
        .forEach(function (s) { return s.callback.apply(s, args); });
}
function verify(action, times, callback) {
    if (times === void 0) { times = 1; }
    var currentInvokes = (0, invokes_1.getInvokes)().filter(function (s) { return s.action === action; });
    expect(currentInvokes.length).to.equal(times, "".concat(action, " not invoked"));
    if (callback) {
        callback(currentInvokes);
    }
}
function clear(props) {
    if (props === void 0) { props = {}; }
    var _a = props.subscribers, subscribers = _a === void 0 ? true : _a, _b = props.invokes, invokes = _b === void 0 ? true : _b;
    if (subscribers) {
        (0, subscribers_1.clearSubscribers)();
    }
    if (invokes) {
        (0, invokes_1.clearInvokes)();
    }
}
