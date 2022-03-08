"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = require("@chakra-ui/react");

var _headerIcons = require("./header-icons");

var _reactRouterDom = require("react-router-dom");

var Header = function Header() {
  return /*#__PURE__*/React.createElement(_react.Flex, {
    grow: "true",
    padding: "2"
  }, /*#__PURE__*/React.createElement(_react.Box, {
    p: "2",
    paddingRight: "0"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement(_react.Heading, {
    size: "lg"
  }, "Shizuka Sakuya"))), /*#__PURE__*/React.createElement(_react.Spacer, null), /*#__PURE__*/React.createElement(_react.Box, null, /*#__PURE__*/React.createElement(_headerIcons.TwitchIcon, {
    marginLeft: "0",
    justifySelf: "flex-end"
  }), /*#__PURE__*/React.createElement(_headerIcons.DiscordIcon, {
    justifySelf: "flex-end"
  }), /*#__PURE__*/React.createElement(_headerIcons.ColorModeSwitcher, {
    justifySelf: "flex-end"
  })));
};

exports.Header = Header;