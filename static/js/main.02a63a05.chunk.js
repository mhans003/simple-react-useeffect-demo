(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={login:"Login_login__2Px22",control:"Login_control__1O9dn",invalid:"Login_invalid__1Kvhn",actions:"Login_actions__1b5Oz"}},,,function(e,t,n){e.exports={card:"Card_card__1te4P"}},function(e,t,n){e.exports={button:"Button_button__2lgkF"}},function(e,t,n){e.exports={home:"Home_home__3idT9"}},function(e,t,n){e.exports={nav:"Navigation_nav__JfAVK"}},function(e,t,n){e.exports={"main-header":"MainHeader_main-header__2OmAM"}},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(5),i=n.n(o),s=(n(19),n(2)),r=n(6),l=n.n(r),j=n(0),d=function(e){return Object(j.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},u=n(3),b=n.n(u),h=n(7),O=n.n(h),g=function(e){return Object(j.jsx)("button",{type:e.type||"button",className:"".concat(O.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},m=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],o=n[1],i=Object(c.useState)(),r=Object(s.a)(i,2),l=r[0],u=r[1],h=Object(c.useState)(""),O=Object(s.a)(h,2),m=O[0],x=O[1],f=Object(c.useState)(),_=Object(s.a)(f,2),p=_[0],v=_[1],L=Object(c.useState)(!1),N=Object(s.a)(L,2),I=N[0],S=N[1];Object(c.useEffect)((function(){S(a.includes("@")&&m.trim().length>6)}),[a,m]);return Object(j.jsx)(d,{className:b.a.login,children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onLogin(a,m)},children:[Object(j.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===l?b.a.invalid:""),children:[Object(j.jsx)("label",{htmlFor:"email",children:"E-Mail"}),Object(j.jsx)("input",{type:"email",id:"email",value:a,onChange:function(e){o(e.target.value)},onBlur:function(){u(a.includes("@"))}})]}),Object(j.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===p?b.a.invalid:""),children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",value:m,onChange:function(e){x(e.target.value)},onBlur:function(){v(m.trim().length>6)}})]}),Object(j.jsx)("div",{className:b.a.actions,children:Object(j.jsx)(g,{type:"submit",className:b.a.btn,disabled:!I,children:"Login"})})]})})},x=n(8),f=n.n(x),_=function(e){return Object(j.jsx)(d,{className:f.a.home,children:Object(j.jsx)("h1",{children:"Welcome back!"})})},p=n(9),v=n.n(p),L=function(e){return Object(j.jsx)("nav",{className:v.a.nav,children:Object(j.jsxs)("ul",{children:[e.isLoggedIn&&Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Users"})}),e.isLoggedIn&&Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Admin"})}),e.isLoggedIn&&Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},N=n(10),I=n.n(N),S=function(e){return Object(j.jsxs)("header",{className:I.a["main-header"],children:[Object(j.jsx)("h1",{children:"A Typical Page"}),Object(j.jsx)(L,{isLoggedIn:e.isAuthenticated,onLogout:e.onLogout})]})};var k=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){"1"===localStorage.getItem("isLoggedIn")&&o(!0)}),[]);var i=function(){o(!1)};return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(S,{isAuthenticated:n,onLogout:i}),Object(j.jsxs)("main",{children:[!n&&Object(j.jsx)(m,{onLogin:function(e,t){localStorage.setItem("isLoggedIn","1"),o(!0)}}),n&&Object(j.jsx)(_,{onLogout:i})]})]})};i.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(k,{}))}],[[21,1,2]]]);
//# sourceMappingURL=main.02a63a05.chunk.js.map