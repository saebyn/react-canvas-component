!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,exports,t){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Component=void 0;var r=t(1),n=e(r);exports.Component=n["default"]}).call(this)}finally{}},function(e,exports,t){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();Object.defineProperty(exports,"__esModule",{value:!0});var u=t(2),s=e(u),l=s["default"].PropTypes,c=function(e){function t(e){r(this,t);var o=n(this,Object.getPrototypeOf(t).call(this,e));return o.requestAnimationFrameCallback=o.requestAnimationFrameCallback.bind(o),o}return o(t,e),i(t,[{key:"componentDidMount",value:function(){this.context2d=this.refs.canvas.getContext("2d"),requestAnimationFrame(this.requestAnimationFrameCallback)}},{key:"render",value:function(){var e=this.props;return requestAnimationFrame(this.requestAnimationFrameCallback),s["default"].createElement("canvas",a({ref:"canvas",key:"canvas"},e))}},{key:"requestAnimationFrameCallback",value:function(e){if(this.previousFrameTime!==e){var t=this.props,r=this.context2d,n=t.realtime,o=t.draw,a=0;o&&r&&(n&&(requestAnimationFrame(this.requestAnimationFrameCallback),this.previousFrameTime?a=e-this.previousFrameTime:this.previousFrameTime=e,this.previousFrameTime=e),o({time:e,delta:a,ctx:r}))}}}]),t}(s["default"].Component);c.defaultProps={draw:function(){},realtime:!1},c.propTypes={draw:l.func,realtime:l.bool},exports["default"]=c}).call(this)}finally{}},function(e,exports){e.exports=react}]);