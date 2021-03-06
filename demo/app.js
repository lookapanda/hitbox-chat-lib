﻿/* 
 * This file is just for demonstration or test purposes
 * Please ignore this file when using this project in productive environment
 */
var HitboxClient = require("../index.js");
var config = require("./config.json");
var client = new HitboxClient({ username: config.username, password: config.password });
client.on("connect", function () {
    console.info("Connected.");
    var channel = client.joinChannel(config.channel);
    var moderation = channel.moderation();
    channel.on("login", function (name, role) {
        console.info("Logged in as " + name + " (" + role + ")");
    }).on("chat", function (name, text, role, params) { //params contains the full param-object including name, text, role, nameColor etc.
        console.log(name + ": " + text);
    }).on("whisper", function (text, name, nameColor, params) {
        console.log(name + " whispered: " + text);
    }).on("motd", function (text) {

    }).on("slow", function (slowTime) {

    }).on("info", function (text, action, params) {
        console.log(text + " ("+ action+")");
    }).on("other", function (method, params) {

    });
}).on("disconnect", function () {
    console.error("Disconnected.");
});