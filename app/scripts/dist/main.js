(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  console.log('Hello ES6!!');
};

var ChatMessage = function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === undefined ? 'batman' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: 'serialize',
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.timestamp
      };
    }
  }]);

  return ChatMessage;
}();

exports.default = ChatApp;

},{}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sTyxHQUNKLG1CQUFjO0FBQUE7O0FBQ1osVUFBUSxHQUFSLENBQVksYUFBWjtBQUNELEM7O0lBR0csVztBQUVKLDZCQUlHO0FBQUEsUUFIUSxDQUdSLFFBSEQsT0FHQztBQUFBLHlCQUZELElBRUM7QUFBQSxRQUZLLENBRUwsNkJBRk8sUUFFUDtBQUFBLDhCQURELFNBQ0M7QUFBQSxRQURVLENBQ1Ysa0NBRGEsSUFBSSxJQUFKLEVBQUQsQ0FBYSxPQUFiLEVBQ1o7O0FBQUE7O0FBQ0QsU0FBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUssSUFBTCxHQUFZLENBQVo7QUFDQSxTQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU87QUFDTCxjQUFNLEtBQUssSUFETjtBQUVMLGlCQUFTLEtBQUssT0FGVDtBQUdMLG1CQUFXLEtBQUs7QUFIWCxPQUFQO0FBS0Q7Ozs7OztrQkFJWSxPOzs7OztBQzVCZjs7Ozs7O0FBRUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQ2hhdEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBFUzYhIScpO1xuICB9XG59XG5cbmNsYXNzIENoYXRNZXNzYWdlIHtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgbWVzc2FnZTogbSxcbiAgICB1c2VyOiB1PSdiYXRtYW4nLFxuICAgIHRpbWVzdGFtcDogdD0obmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gIH0pIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtO1xuICAgIHRoaXMudXNlciA9IHU7XG4gICAgdGhpcy50aW1lc3RhbXAgPSB0O1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiB0aGlzLnVzZXIsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICB0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wXG4gICAgfTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRBcHA7XG4iLCJpbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XG5cbm5ldyBDaGF0QXBwKCk7XG4iXX0=
