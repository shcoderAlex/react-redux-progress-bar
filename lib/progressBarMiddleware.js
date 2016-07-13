'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = progressBarMiddleware;

var _constants = require('./constants');

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function progressBarMiddleware(_ref) {
  var dispatch = _ref.dispatch;

  return function (next) {
    return function (action) {
      var type = action.type;

      if (type) next(action);

      if (type.includes(constants.REQUEST)) {
        dispatch({ type: constants.PROGRESS_BAR_START });
      } else if (type.includes(constants.SUCCESS) || type.includes(constants.FAILURE)) {
        dispatch({ type: constants.PROGRESS_BAR_FINISH });
      }
    };
  };
}