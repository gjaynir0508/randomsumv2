(this["webpackJsonprandom-sum-generator"]=this["webpackJsonprandom-sum-generator"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(6),i=n.n(r),s=n(3),c=n(2),l=n(4),o=n(0);function u(e){var t=e.children,n=e.handleSubmit;return Object(o.jsx)("form",{className:"form-container",onSubmit:n,noValidate:!0,children:t})}function m(e){var t=e.label,n=e.idName,a=e.handleChange,r=e.value;return Object(o.jsxs)("div",{className:"form-field input",children:[Object(o.jsx)("input",{type:"text",id:n,name:n,value:0!==r?r:"",onChange:a,placeholder:" ",required:!0,autoComplete:"off"}),Object(o.jsx)("label",{htmlFor:n,children:t})]})}function b(e){var t=e.label,n=e.handleChange,a=e.idName,r=e.value;return Object(o.jsxs)("div",{className:"form-field check-box",children:[Object(o.jsx)("input",{type:"checkbox",id:a,name:a,value:r,onChange:n}),Object(o.jsx)("label",{htmlFor:a,children:t})]})}function d(e){var t=e.handleChange;return Object(o.jsxs)("div",{className:"form-select",children:[Object(o.jsx)("label",{htmlFor:"operation",children:"Choose the Operation to perform"}),Object(o.jsx)("br",{}),Object(o.jsxs)("select",{name:"operation",id:"operation",onChange:t,children:[Object(o.jsx)("option",{value:"add",children:"Addition"}),Object(o.jsx)("option",{value:"sub",children:"Subtraction"}),Object(o.jsx)("option",{value:"mul",children:"Multiplication"}),Object(o.jsx)("option",{value:"div",children:"Division (Decimal Output)"}),Object(o.jsx)("option",{value:"divQR",children:"Division (Quotient Remainder Output)"})]})]})}function j(e){var t=e.text;return Object(o.jsx)("div",{className:"form-field submit",children:Object(o.jsx)("button",{className:"btn submit",type:"submit",children:t})})}function h(e){var t=e.values,n=e.handleSubmit,a=e.handleChangeNum,r=e.handleChangeStr,i=e.handleChangeBool;return Object(o.jsxs)(u,{handleSubmit:n,children:[Object(o.jsx)(m,{idName:"min",label:"Minimum Number",value:t.min,handleChange:a}),Object(o.jsx)(m,{idName:"max",label:"Maximum Number",value:t.max,handleChange:a}),Object(o.jsx)(m,{idName:"total",label:"Total Number of Sums",value:t.total,handleChange:a}),Object(o.jsx)(d,{handleChange:r}),["sub","div","divQR"].includes(t.operation)&&Object(o.jsx)(b,{idName:"secondIsSmaller",label:"Should the second operand be smaller than the first operand?",value:t.secondIsSmaller,handleChange:i}),Object(o.jsx)(j,{text:"Generate Sums"})]})}function v(e){var t=e.children,n=e.operation,a=e.visibilility;return Object(o.jsx)("ul",{className:n?"sums ".concat(n,a?" visible":" hidden"):"sums",children:t})}function O(e){var t=e.num1,n=e.num2,a=e.answer,r=String(a).match(/-?\d+\.{0,1}\d{0,2}/)[0];return String(a).match(/Q: \d+\nR: \d/)&&(r=String(a)),Object(o.jsxs)("li",{className:"sum",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("p",{className:"symbol",children:n}),Object(o.jsx)("p",{className:"answer",children:r})]})}function p(e){var t=e.setVisibility,n=e.visibility;return Object(o.jsx)("button",{onClick:function(){t((function(e){return!e}))},className:"btn toggle",children:n?"Hide Answers":"Show Answers"})}function f(e){var t=e.sums,n=e.visibility,a=e.setVisibility;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(v,{operation:t.operation,visibilility:n,children:t&&"object"===typeof t&&t.map((function(e,t){return Object(o.jsx)(O,{num1:e[0],num2:e[1],answer:e[2],visibility:n},t)}))}),t&&t.length>0&&Object(o.jsx)(p,{visibility:n,setVisibility:a})]})}function x(e){var t=e.children;return Object(o.jsx)("div",{className:"container",children:t})}function N(e){var t=e.error;return Object(o.jsxs)("li",{className:"error",children:[Object.keys(t)[0],Object(o.jsx)("span",{className:"error-tip",children:Object.values(t)[0]})]})}function g(e){var t=e.errors;return Object(o.jsx)("div",{className:"error-container",children:Object(o.jsx)("ul",{className:"errors",children:t&&"object"===typeof t&&t.map((function(e,t){return Object(o.jsx)(N,{error:e},t)}))})})}function S(e,t){return Math.floor(Math.random()*(t-e+1))+e}function y(e,t,n){switch(n){case"add":return e+t;case"sub":return e-t;case"mul":return e*t;case"div":return e/t;case"divQR":return"Q: ".concat(Math.floor(e/t),"\nR: ").concat(e%t);default:return{Error:'Operation: "'.concat(n,'" is not defined')}}}function C(e,t,n){var a=[S(e,t),S(e,t)],r=a[0],i=a[1];return[r,i,y(r,i,n)]}function I(e,t,n){var a=S(e,t),r=S(e,a-1);return[a,r,y(a,r,n)]}function w(e){if(!e)return[!1,{"Input(s) missing":"No input Values were provided!"}];var t=e.min,n=e.max,a=e.total,r=e.operation,i=e.secondIsSmaller,s=void 0!==i&&i,c=function(e){var t=e.min,n=e.max,a=e.total,r=e.secondIsSmaller,i=e.operation,s=[];return Number(t)&&Number(t)>0||s.push({"Invalid Input (min)":"Minimum Number must be a Number"}),Number(n)&&Number(n)>0||s.push({"Invalid Input (max)":"Maximum Number must be a Number"}),Number(a)&&Number(a)>0||s.push({"Invalid Input (total)":"Total Number of Sums must be a Number"}),["add","sub","mul","div","divQR"].includes(i)||s.push({"Invalid Operation":'Operation "'.concat(i,'" is not defined')}),"boolean"!==typeof r&&s.push({"Invalid value for Checkbox":""}),t>=n&&s.push({"Range Error":"Minimum Number must be strictly less than Maximum Number"}),s}(e);if(c.length>0)return[!1,c];for(var l=[],o=s?I:C,u=0;u<a;u++)l.push(o(t,n,r));return[!0,l]}n(12);var M={min:0,max:0,total:0,secondIsSmaller:!1,operation:"add"};function R(){var e=Object(a.useState)(M),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),u=Object(l.a)(i,2),m=u[0],b=u[1],d=Object(a.useState)([]),j=Object(l.a)(d,2),v=j[0],O=j[1],p=Object(a.useState)(!1),N=Object(l.a)(p,2),S=N[0],y=N[1];return Object(o.jsxs)(x,{children:[Object(o.jsx)("h1",{children:"Random Sum Generator"}),Object(o.jsx)("p",{children:"Enter the values and click on Generate to create sums"}),Object(o.jsx)(h,{handleSubmit:function(e){e.preventDefault();var t=n.secondIsSmaller,a=!1,r=w({min:Number(n.min),max:Number(n.max),total:Number(n.total),secondIsSmaller:["sub","div","divQR"].includes(n.operation)?"string"===typeof t?"true"===t||a:"boolean"===typeof t?t:a:a,operation:n.operation}),i=Object(l.a)(r,2),s=i[0],c=i[1];if(s){var o=c;o.operation=n.operation,b(o),O([])}else O(c)},values:n,handleChangeNum:function(e){var t=e.target,n=t.name,a=t.value,i=/\d{0,8}/;a.match(i)?r((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(s.a)({},n,a.match(i)[0]))})):""===a&&r((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(s.a)({},n,0))}))},handleChangeStr:function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(s.a)({},n,a))}))},handleChangeBool:function(e){r((function(e){return Object(c.a)(Object(c.a)({},e),{},{secondIsSmaller:!n.secondIsSmaller})}))}}),v.length>0&&Object(o.jsx)(g,{errors:v}),Object(o.jsx)(f,{sums:m,visibility:S,setVisibility:y})]})}var k=document.getElementById("root");i.a.render(Object(o.jsx)(R,{}),k)}},[[13,1,2]]]);
//# sourceMappingURL=main.22a6596d.chunk.js.map