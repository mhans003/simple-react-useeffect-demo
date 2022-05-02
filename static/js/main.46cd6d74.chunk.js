(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,function(e,n,t){e.exports={login:"Login_login__2Px22",control:"Login_control__1O9dn",invalid:"Login_invalid__1Kvhn",actions:"Login_actions__1b5Oz"}},,,,function(e,n,t){e.exports={card:"Card_card__1te4P"}},function(e,n,t){e.exports={button:"Button_button__2lgkF"}},function(e,n,t){e.exports={home:"Home_home__3idT9"}},function(e,n,t){e.exports={nav:"Navigation_nav__JfAVK"}},function(e,n,t){e.exports={"main-header":"MainHeader_main-header__2OmAM"}},,,,,,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),a=t(5),o=t.n(a),l=(t(19),t(3)),s=t(6),r=t.n(s),u=t(0),d=function(e){return Object(u.jsx)("div",{className:"".concat(r.a.card," ").concat(e.className),children:e.children})},j=t(2),b=t.n(j),g=t(7),v=t.n(g),h=function(e){return Object(u.jsx)("button",{type:e.type||"button",className:"".concat(v.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},O=i.a.createContext({isLoggedIn:!1,onLogout:function(){},onLogin:function(e,n){}}),x=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),i=t[0],a=t[1];Object(c.useEffect)((function(){"1"===localStorage.getItem("isLoggedIn")&&a(!0)}),[]);return Object(u.jsx)(O.Provider,{value:{isLoggedIn:i,onLogout:function(){localStorage.removeItem("isLoggedIn"),a(!1)},onLogin:function(){localStorage.setItem("isLoggedIn","1"),a(!0)}},children:e.children})},m=O,f=function(e,n){return"USER_INPUT"===n.type?{value:n.val,isValid:n.val.includes("@")}:"INPUT_BLUR"===n.type?{value:e.value,isValid:e.value.includes("@")}:{value:"",isValid:!1}},_=function(e,n){return"USER_INPUT"===n.type?{value:n.val,isValid:n.val.trim().length>6}:"INPUT_BLUR"===n.type?{value:e.value,isValid:e.value.trim().length>6}:{value:"",isValid:!1}},p=function(){var e=Object(c.useState)(!1),n=Object(l.a)(e,2),t=n[0],i=n[1],a=Object(c.useReducer)(f,{value:"",isValid:!1}),o=Object(l.a)(a,2),s=o[0],r=o[1],j=Object(c.useReducer)(_,{value:"",isValid:!1}),g=Object(l.a)(j,2),v=g[0],O=g[1],x=Object(c.useContext)(m),p=s.isValid,L=v.isValid;Object(c.useEffect)((function(){var e=setTimeout((function(){i(s.isValid&&v.isValid)}),500);return function(){clearTimeout(e)}}),[p,L]);return Object(u.jsx)(d,{className:b.a.login,children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.onLogin(s.value,v.value)},children:[Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===s.isValid?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"email",children:"E-Mail"}),Object(u.jsx)("input",{type:"email",id:"email",value:s.value,onChange:function(e){r({type:"USER_INPUT",val:e.target.value})},onBlur:function(){r({type:"INPUT_BLUR"})}})]}),Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===v.isValid?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",id:"password",value:v.value,onChange:function(e){O({type:"USER_INPUT",val:e.target.value})},onBlur:function(){O({type:"INPUT_BLUR"})}})]}),Object(u.jsx)("div",{className:b.a.actions,children:Object(u.jsx)(h,{type:"submit",className:b.a.btn,disabled:!t,children:"Login"})})]})})},L=t(8),I=t.n(L),N=function(){var e=Object(c.useContext)(m);return Object(u.jsxs)(d,{className:I.a.home,children:[Object(u.jsx)("h1",{children:"Welcome back!"}),Object(u.jsx)(h,{onClick:e.onLogout,children:"Logout"})]})},U=t(9),y=t.n(U),V=function(){var e=Object(c.useContext)(m);return Object(u.jsx)("nav",{className:y.a.nav,children:Object(u.jsxs)("ul",{children:[e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Users"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Admin"})}),e.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},P=t(10),C=t.n(P),T=function(e){return Object(u.jsxs)("header",{className:C.a["main-header"],children:[Object(u.jsx)("h1",{children:"A Typical Page"}),Object(u.jsx)(V,{})]})};var R=function(){var e=Object(c.useContext)(m);return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)(T,{}),Object(u.jsxs)("main",{children:[!e.isLoggedIn&&Object(u.jsx)(p,{}),e.isLoggedIn&&Object(u.jsx)(N,{})]})]})};o.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(x,{children:Object(u.jsx)(R,{})}))}],[[21,1,2]]]);
//# sourceMappingURL=main.46cd6d74.chunk.js.map