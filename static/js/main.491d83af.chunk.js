(this.webpackJsonpreact_live_coding_cars_table_task=this.webpackJsonpreact_live_coding_cars_table_task||[]).push([[0],{11:function(e,r,t){},12:function(e,r,t){"use strict";t.r(r);var n=t(5),c=t.n(n),i=t(2),d=t(4),o=t(1),a=[{id:1,name:"white"},{id:2,name:"black"},{id:3,name:"red"}],l=[{id:1,brand:"Audi",rentPrice:100,colorId:1},{id:2,brand:"Audi",rentPrice:100,colorId:2},{id:3,brand:"Ferarri",rentPrice:500,colorId:3},{id:4,brand:"Ford",rentPrice:80,colorId:1},{id:5,brand:"Peugot",rentPrice:50,colorId:1},{id:6,brand:"Ford",rentPrice:150,colorId:1},{id:7,brand:"Ford",rentPrice:140,colorId:2},{id:8,brand:"Lada",rentPrice:20,colorId:3},{id:9,brand:"Opel",rentPrice:100,colorId:1},{id:10,brand:"Opel",rentPrice:100,colorId:2},{id:11,brand:"Mitsubishi",rentPrice:300,colorId:1}],b=t(0),s=function(){return l.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{color:(r=e.colorId,a.find((function(e){return e.id===r})))});var r}))},u=function(){var e=Object(o.useState)(s),r=Object(i.a)(e,1)[0],t=Object(o.useState)(""),n=Object(i.a)(t,2),c=n[0],d=n[1],a=Object(o.useState)(0),l=Object(i.a)(a,2),u=l[0],j=l[1],h=r;return c&&(h=r.filter((function(e){return e.brand.toLowerCase().includes(c.toLowerCase())}))),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"search",placeholder:"Find by car brand",value:c,onChange:function(e){return d(e.target.value)}}),Object(b.jsxs)("select",{onChange:function(e){return j(+e.target.value)},value:u,children:[Object(b.jsx)("option",{value:"",children:"Chose a color"}),Object(b.jsx)("option",{value:"white",children:"white"}),Object(b.jsx)("option",{value:"black",children:"black"}),Object(b.jsx)("option",{value:"red",children:"red"})]}),Object(b.jsx)("table",{children:Object(b.jsx)("thead",{children:h.map((function(e){var r,t;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:e.id}),Object(b.jsx)("th",{children:e.brand}),Object(b.jsx)("th",{style:{color:null===(r=e.color)||void 0===r?void 0:r.name},children:null===(t=e.color)||void 0===t?void 0:t.name}),Object(b.jsx)("th",{children:e.rentPrice})]})}))})})]})};t(11);c.a.render(Object(b.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.491d83af.chunk.js.map