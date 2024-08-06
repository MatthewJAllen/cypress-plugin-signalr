"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubscribers = getSubscribers;
exports.addSubscriber = addSubscriber;
exports.clearSubscribers = clearSubscribers;
exports.removeSubscriber = removeSubscriber;
var subscribers = [];
function getSubscribers() {
    return subscribers;
}
function addSubscriber(subscriber) {
    subscribers.push(subscriber);
}
function clearSubscribers() {
    subscribers = [];
}
function removeSubscriber(action, callback) {
    var filterByActionAndCallback = function (subscriber) { return (subscriber.action !== action && subscriber.callback !== callback); };
    subscribers = subscribers.filter(filterByActionAndCallback);
}
