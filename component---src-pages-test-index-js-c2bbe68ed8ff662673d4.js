(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{228:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(229);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"index"},r.a.createElement(o.FormattedMessage,{id:"title"})))}},229:function(e,t,n){"use strict";n(27),n(28),n(13),n(40);var a=n(14),r=n(230);t.__esModule=!0;var o={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextConsumer:!0};t.IntlContextConsumer=t.changeLocale=t.navigate=t.withIntl=t.Link=void 0;var i=n(153);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=i[e]))});var l=r(n(231));t.Link=l.default,t.navigate=l.navigate,t.changeLocale=l.changeLocale;var u=a(n(232));t.withIntl=u.default;var c=n(152);t.IntlContextConsumer=c.IntlContextConsumer},230:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}},231:function(e,t,n){"use strict";n(103),n(104),n(102);var a=n(14);t.__esModule=!0,t.changeLocale=t.navigate=t.default=void 0;var r=a(n(156)),o=a(n(155)),i=a(n(0)),l=a(n(12)),u=n(154),c=n(152),d=function(e){var t=e.to,n=e.language,a=e.children,l=e.onClick,d=(0,o.default)(e,["to","language","children","onClick"]);return i.default.createElement(c.IntlContextConsumer,null,function(e){var o=n||e.language,c=e.routed||n?"/"+o+t:""+t;return i.default.createElement(u.Link,(0,r.default)({},d,{to:c,onClick:function(e){n&&localStorage.setItem("gatsby-intl-language",n),l&&l(e)}}),a)})};d.propTypes={children:l.default.node.isRequired,to:l.default.string,language:l.default.string},d.defaultProps={to:""};var s=d;t.default=s;t.navigate=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl,a=n.language,r=n.routed?"/"+a+e:""+e;(0,u.navigate)(r,t)}};t.changeLocale=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl,a=n.routed,r=n.allSitePage,o="/"+e+(t||function(e){if(!a)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;localStorage.setItem("gatsby-intl-language",e),r.includes(o)?(0,u.navigate)(o):(0,u.navigate)("/"+e+"/")}}},232:function(e,t,n){"use strict";var a=n(14);t.__esModule=!0,t.default=void 0;var r=a(n(0)),o=n(153);t.default=function(e){return function(t){return console.warn("withIntl is deprecated. Please use injectIntl instead."),r.default.createElement((0,o.injectIntl)(e),t)}}}}]);
//# sourceMappingURL=component---src-pages-test-index-js-c2bbe68ed8ff662673d4.js.map