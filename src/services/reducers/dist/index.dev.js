"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = void 0;

var _redux = require("redux");

var _seminarsFiltration = require("./seminarsFiltration");

var rootReducer = (0, _redux.combineReducers)({
  seminarsFiltration: _seminarsFiltration.seminarsFiltrationReducer
});
exports.rootReducer = rootReducer;