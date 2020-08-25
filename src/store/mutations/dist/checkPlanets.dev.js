"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mutationTypes = require("./mutationTypes");

var _searchByTypeAndName = _interopRequireDefault(require("../utils/searchByTypeAndName"));

var _CHECK_PLANET$ADD_STA;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_CHECK_PLANET$ADD_STA = {}, _defineProperty(_CHECK_PLANET$ADD_STA, _mutationTypes.CHECK_PLANET, function (state, _ref) {
  var i = _ref.i,
      checked = _ref.checked;
  state.planets[i].checked = checked;
}), _defineProperty(_CHECK_PLANET$ADD_STA, _mutationTypes.ADD_STAR, function (state, payload) {
  state.stars.push(payload);
}), _defineProperty(_CHECK_PLANET$ADD_STA, _mutationTypes.DEL_STAR, function (state) {
  state.stars.pop();
}), _defineProperty(_CHECK_PLANET$ADD_STA, _mutationTypes.ADD_RESULT, function (state, _ref2) {
  var type = _ref2.type,
      name = _ref2.name,
      OC = _ref2.OC,
      T = _ref2.T;
  (0, _searchByTypeAndName["default"])(state, type, name).results.push({
    OC: OC,
    T: T
  });
}), _defineProperty(_CHECK_PLANET$ADD_STA, _mutationTypes.CALC_AV_OC_AND_T, function (state, _ref3) {
  var type = _ref3.type,
      name = _ref3.name,
      avOC = _ref3.avOC,
      avT = _ref3.avT;
  var element = (0, _searchByTypeAndName["default"])(state, type, name);
  element.avOC = avOC;
  element.avT = avT;
}), _defineProperty(_CHECK_PLANET$ADD_STA, _mutationTypes.REMOVE_RESULT, function (state, _ref4) {
  var type = _ref4.type,
      name = _ref4.name,
      index = _ref4.index;
  (0, _searchByTypeAndName["default"])(state, type, name).results.splice(index, 1);
}), _CHECK_PLANET$ADD_STA);

exports["default"] = _default;