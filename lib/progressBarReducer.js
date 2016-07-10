'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = progressBarReducer;

var _constants = require('./constants');

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
  progressBar: 0
};

function progressBarReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case constants.PROGRESS_BAR_START:
      return 1;
    case constants.PROGRESS_BAR_FINISH:
      return 0;
    default:
      return state;
  }
}