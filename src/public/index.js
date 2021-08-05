"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var https_1 = __importDefault(require("https"));
var fs_1 = __importDefault(require("fs"));
var app = express_1.default();
app.get('/', function (req, res) {
    res.send("Server is working!");
});
app.post('/subcallback', function (req, res) {
    res.send("Subcallback");
    res.status(200).end();
});
https_1.default.createServer({
    key: fs_1.default.readFileSync('server.key'),
    cert: fs_1.default.readFileSync('server.cert')
}, app)
    .listen(443, function () {
    console.log("Example app listening on port 443! Go to https://localhost:443/");
});
