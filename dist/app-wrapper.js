"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppWrapper = AppWrapper;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@chakra-ui/react");

var _header = require("./header");

var _footer = require("./footer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_react2.theme.colors.white = '#F7F2EF';
_react2.theme.colors.black = '1E0E0E';

function AppWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react2.ChakraProvider, {
    theme: _react2.theme
  }, /*#__PURE__*/_react["default"].createElement(_react2.Center, null, /*#__PURE__*/_react["default"].createElement(_react2.VStack, {
    width: ["100%", 5 / 6, 6 / 7, 'container.md'],
    spacing: "0"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    h: ["7vh", "15vh"],
    w: "inherit"
  }, /*#__PURE__*/_react["default"].createElement(_header.Header, null)), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    h: ["90vh", "80vh"],
    w: "inherit",
    overflowY: "auto"
  }, children), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    h: ["3vh", "3vh"],
    w: "inherit"
  }, /*#__PURE__*/_react["default"].createElement(_footer.Footer, null)))));
}