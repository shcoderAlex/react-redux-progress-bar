'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./ProgressBar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar(props) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProgressBar).call(this, props));

    _this.state = {
      className: 'pre-start'
    };
    return _this;
  }

  _createClass(ProgressBar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.progressBar !== this.props.progressBar) {
        this.loading(newProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'loading',
    value: function loading(props) {
      var _this2 = this;

      console.log(11111);
      var progressBar = props.progressBar;

      var className = progressBar ? 'start' : 'finish';

      this.setState({ className: className });

      if (className === 'finish') {
        this.timer = setTimeout(function () {
          _this2.setState({ className: 'pre-start' });
        }, 500);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.state.className;


      return _react2.default.createElement(
        'div',
        { id: 'loadingbar', className: className },
        _react2.default.createElement('dt', null),
        _react2.default.createElement('dd', null)
      );
    }
  }]);

  return ProgressBar;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  var progressBar = state.progressBar;

  return { progressBar: progressBar };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProgressBar);