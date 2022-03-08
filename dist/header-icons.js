"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwitchIcon = exports.DiscordIcon = exports.ColorModeSwitcher = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@chakra-ui/react");

var _fa = require("react-icons/fa");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ColorModeSwitcher = function ColorModeSwitcher(props) {
  var _useColorMode = (0, _react2.useColorMode)(),
      toggleColorMode = _useColorMode.toggleColorMode;

  var text = (0, _react2.useColorModeValue)('dark', 'light');
  var SwitchIcon = (0, _react2.useColorModeValue)(_fa.FaMoon, _fa.FaSun);
  return /*#__PURE__*/_react["default"].createElement(_react2.IconButton, _extends({
    size: "md",
    fontSize: "lg",
    "aria-label": "Switch to ".concat(text, " mode"),
    variant: "ghost",
    color: "current",
    marginLeft: "2",
    onClick: toggleColorMode,
    icon: /*#__PURE__*/_react["default"].createElement(SwitchIcon, null)
  }, props));
};

exports.ColorModeSwitcher = ColorModeSwitcher;

var TwitchIcon = function TwitchIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "https://www.twitch.tv/shizukasakuya",
    isExternal: "true"
  }, /*#__PURE__*/_react["default"].createElement(_react2.IconButton, _extends({
    size: "md",
    fontSize: "lg",
    variant: "ghost",
    color: "current",
    marginLeft: "2",
    icon: /*#__PURE__*/_react["default"].createElement(_fa.FaTwitch, null)
  }, props)));
};

exports.TwitchIcon = TwitchIcon;

var DiscordIcon = function DiscordIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_react2.Link, {
    href: "https://discord.gg/kYrv3kcYMP",
    isExternal: "true"
  }, /*#__PURE__*/_react["default"].createElement(_react2.IconButton, _extends({
    size: "md",
    fontSize: "lg",
    variant: "ghost",
    color: "current",
    marginLeft: "2",
    icon: /*#__PURE__*/_react["default"].createElement(_fa.FaDiscord, null)
  }, props)));
};

exports.DiscordIcon = DiscordIcon;