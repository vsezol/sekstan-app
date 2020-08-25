"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mutationTypes = require("../mutations/mutationTypes");

var _searchByTypeAndName = _interopRequireDefault(require("../utils/searchByTypeAndName"));

var _averageOCAndT = _interopRequireDefault(require("../utils/averageOCAndT"));

var _axios = _interopRequireDefault(require("@/plugins/axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createBeginStar = function createBeginStar(number) {
  return {
    name: '' + number,
    results: [],
    avOC: null,
    avT: null,
    link: "/location/checked-list/".concat(number, "?type=star")
  };
};

var _default = {
  checkPlanet: function checkPlanet(context, payload) {
    context.commit(_mutationTypes.CHECK_PLANET, payload);
  },
  addStar: function addStar(context, number) {
    var newStar = createBeginStar(number);
    context.commit(_mutationTypes.ADD_STAR, newStar);
  },
  delStar: function delStar(context) {
    context.commit(_mutationTypes.DEL_STAR);
  },
  sendAllCheckedToServer: function sendAllCheckedToServer(context) {
    var response;
    return regeneratorRuntime.async(function sendAllCheckedToServer$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].put('/checked-planets-stars', context.getters.onlyChecked));

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  setLamp: function setLamp(_ref, payload) {
    var state = _ref.state;
    console.log(state);
    var socket = state.socket;
    socket.send(JSON.stringify(_objectSpread({
      request: 'SET_CURRENT_LAMP'
    }, payload)));
  },
  // listenServer({ dispatch }) {
  //   console.log(state)
  //   // socket.onmessage = evt => {
  //   //   console.log(JSON.parse(evt.data))
  //   // }
  // },
  removeResult: function removeResult(_ref2, payload) {
    var commit, dispatch;
    return regeneratorRuntime.async(function removeResult$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commit = _ref2.commit, dispatch = _ref2.dispatch;
            commit(_mutationTypes.REMOVE_RESULT, payload); // dev

            _context2.next = 4;
            return regeneratorRuntime.awrap(dispatch('calcAvOCAndT', payload));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  addResult: function addResult(_ref3, payload) {
    var commit, dispatch;
    return regeneratorRuntime.async(function addResult$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commit = _ref3.commit, dispatch = _ref3.dispatch;
            commit(_mutationTypes.ADD_RESULT, payload);
            _context3.next = 4;
            return regeneratorRuntime.awrap(dispatch('calcAvOCAndT', {
              type: payload.type,
              name: payload.name
            }));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  calcAvOCAndT: function calcAvOCAndT(_ref4, _ref5) {
    var state = _ref4.state,
        commit = _ref4.commit;
    var type = _ref5.type,
        name = _ref5.name;
    var element = (0, _searchByTypeAndName["default"])(state, type, name);
    var avs = (0, _averageOCAndT["default"])(element.results);
    commit(_mutationTypes.CALC_AV_OC_AND_T, _objectSpread({
      type: type,
      name: name
    }, avs));
  }
};
exports["default"] = _default;