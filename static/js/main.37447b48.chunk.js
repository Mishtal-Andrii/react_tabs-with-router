(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{13:function(e,t,a){},17:function(e,t,a){e.exports=a(27)},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),i=a(6),m=a(1),s=function(){return l.a.createElement("h2",null,"Home")},o=(a(13),function(e){var t=e.tab;return l.a.createElement("div",null,l.a.createElement(i.b,{className:"tabs_click",to:"/tabs/".concat(t.id)},t.title))}),u=function(e){var t,a=e.tabId,n=e.tabs;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Tabs"),l.a.createElement("div",{className:"tabs"},n.map((function(e){return l.a.createElement("button",{type:"submit",key:e.id,className:a===e.id?"tabs__click tabs__click-active":"tabs__click"},l.a.createElement(o,{tab:e}))}))),l.a.createElement("section",{className:"tabs__container"},l.a.createElement("h3",null,null===(t=n.find((function(e){return e.id===a})))||void 0===t?void 0:t.content)))},b=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",null,l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement(i.b,{to:"/",exact:!0,className:"nav_link"},"Home")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/tabs",className:"nav_link"},"Tabs")))),l.a.createElement(m.a,{path:"/",exact:!0,component:s}),l.a.createElement(m.a,{path:"/tabs/:tabId?",render:function(e){var t=e.match;return l.a.createElement(u,{tabs:b,tabId:t.params.tabId})}}))};r.a.render(l.a.createElement(i.a,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.37447b48.chunk.js.map