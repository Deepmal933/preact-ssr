"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _preact = require("preact");

var _preactRenderToString = _interopRequireDefault(require("preact-render-to-string"));

var _app = _interopRequireDefault(require("../preact/components/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var BUNDLE_FILE_URL = '/bundle.js';

var BUNDLE_FILE_PATH = _path["default"].join(__dirname, "../dist".concat(BUNDLE_FILE_URL));

app.get(BUNDLE_FILE_URL, function (req, res) {
  _fs["default"].readFile(BUNDLE_FILE_PATH, 'utf-8', function (err, data) {
    if (err) return res.sendStatus(500);
    res.send(data);
  });
});
app.get('/', function (req, res) {
  //render App component
  var data = (0, _preactRenderToString["default"])((0, _preact.h)(_app["default"], null));
  res.send("\n    <html>\n    <head>\n    <title>Preact App</title>\n    </head>\n    <body>\n    ".concat(data, "\n    <script>window.__backend_data__ = ").concat(JSON.stringify(data), ";</script>\n    <script src=\"").concat(BUNDLE_FILE_URL, "\"></script>\n    </body>\n    </html>\n    "));
});
app.get('/data', function (req, res) {
  res.send({
    name: "deep",
    email: "deepmal933@gmail.com"
  });
});
var PORT = process.env.PORT || 3004;
app.listen(PORT, function () {
  console.log("Server is listning on port " + PORT);
});