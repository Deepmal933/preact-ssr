"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("@babel/register")({
  "presets": ["@babel/preset-env"],
  "plugins": [["@babel/plugin-transform-react-jsx", {
    "pragma": "h"
  }]]
});

var app = (0, _express["default"])();

var ssr = require('../preact/ssr');

var BUNDLE_FILE_URL = '/bundle.js';

var BUNDLE_FILE_PATH = _path["default"].join(__dirname, "../dist".concat(BUNDLE_FILE_URL));

app.get(BUNDLE_FILE_URL, function (req, res) {
  _fs["default"].readFile(BUNDLE_FILE_PATH, 'utf-8', function (err, data) {
    if (err) return res.sendStatus(500);
    res.send(data);
  });
});
app.get('/', function (req, res) {
  var data = ssr();
  res.send("\n    <html>\n    <head>\n    <title>Preact App</title>\n    </head>\n    <body>\n    ".concat(data.html, "\n    <script>window.__backend_data__ = ").concat(JSON.stringify(data), ";</script>\n    <script src=\"").concat(BUNDLE_FILE_URL, "\"></script>\n    </body>\n    </html>\n    "));
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