"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sidebarDataAction = exports.writeDatesAction = exports.writeNmoSmpAction = exports.writeNmoVmpAction = exports.writeCatsAction = exports.writeFullDataAction = exports.seminarsFiltrationReducer = void 0;

var _constants = require("../actions/constants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  startCats: [],
  startSmp: [],
  startVmp: [],
  startDates: [],
  gotDataResponse: false,
  sidebarDataIsReady: false,
  dataUrl: "../../data/seminars999.json",
  fullData: [],
  fullDataGotErrors: false,
  fullDataIsWritten: false
};

var seminarsFiltrationReducer = function seminarsFiltrationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.ADD_CATEGORIES_ARRAY:
      return _objectSpread({}, state, {
        startCats: [].concat(_toConsumableArray(state.startCats), _toConsumableArray(action.payload))
      });

    case _constants.ADD_NMO_VMP_ARRAY:
      return _objectSpread({}, state, {
        startVmp: [].concat(_toConsumableArray(state.startVmp), _toConsumableArray(action.payload))
      });

    case _constants.ADD_NMO_SMP_ARRAY:
      return _objectSpread({}, state, {
        startSmp: [].concat(_toConsumableArray(state.startSmp), _toConsumableArray(action.payload))
      });

    case _constants.ADD_MONTHS_ARRAY:
      return _objectSpread({}, state, {
        startDates: action.payload
      });

    case _constants.WRITE_FULL_DATA:
      return _objectSpread({}, state, {
        fullData: [].concat(_toConsumableArray(state.fullData), _toConsumableArray(action.payload)),
        fullDataIsWritten: true
      });

    case _constants.GOT_ERRORS_DATA_IS_NOT_LOADED:
      return _objectSpread({}, state, {
        fullDataGotErrors: true
      });

    case _constants.SIDEBAR_DATA_IS_READY:
      return _objectSpread({}, state, {
        sidebarDataIsReady: true
      });

    default:
      return state;
  }
};

exports.seminarsFiltrationReducer = seminarsFiltrationReducer;

var writeFullDataAction = function writeFullDataAction(payload) {
  return {
    type: _constants.WRITE_FULL_DATA,
    payload: payload
  };
};

exports.writeFullDataAction = writeFullDataAction;

var writeCatsAction = function writeCatsAction(payload) {
  return {
    type: _constants.ADD_CATEGORIES_ARRAY,
    payload: payload
  };
};

exports.writeCatsAction = writeCatsAction;

var writeNmoVmpAction = function writeNmoVmpAction(payload) {
  return {
    type: _constants.ADD_NMO_VMP_ARRAY,
    payload: payload
  };
};

exports.writeNmoVmpAction = writeNmoVmpAction;

var writeNmoSmpAction = function writeNmoSmpAction(payload) {
  return {
    type: _constants.ADD_NMO_SMP_ARRAY,
    payload: payload
  };
};

exports.writeNmoSmpAction = writeNmoSmpAction;

var writeDatesAction = function writeDatesAction(payload) {
  return {
    type: _constants.ADD_MONTHS_ARRAY,
    payload: payload
  };
};

exports.writeDatesAction = writeDatesAction;

var sidebarDataAction = function sidebarDataAction(payload) {
  return {
    type: _constants.SIDEBAR_DATA_IS_READY,
    payload: payload
  };
};

exports.sidebarDataAction = sidebarDataAction;