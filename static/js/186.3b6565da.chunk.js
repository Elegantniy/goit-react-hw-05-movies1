"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{681:function(e,t){var n="https://api.themoviedb.org/3",c="200d87b35a3f8b03a5922cc72885edd9";t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return fetch("".concat(n,"/").concat(e,"?api_key=").concat(c,"&").concat(t)).then((function(e){if(!e.ok)throw new Error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0442\u0440\u043e\u0448\u043a\u0438 \u043f\u0456\u0437\u043d\u0456\u0448\u0435");return e.json()}))}},186:function(e,t,n){n.r(t);var c=n(439),r=n(681),o=n(791),i=n(689),a=n(184);t.default=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],u=t[1],h=(0,i.UO)().movieId,s="/movie/".concat(h,"/reviews");return(0,o.useEffect)((function(){(0,r.Z)(s).then((function(e){u(e.results)})).catch((function(e){return console.log(e)}))}),[s]),(0,a.jsx)("div",{children:0===n.length?"We don`t have any reviews for this movie":(0,a.jsx)("ul",{children:n.map((function(e){var t=e.author,n=e.content,c=e.id;return(0,a.jsxs)("li",{children:[(0,a.jsxs)("h4",{children:["Author: ",t]}),(0,a.jsx)("p",{children:n})]},c)}))})})}}}]);
//# sourceMappingURL=186.3b6565da.chunk.js.map