"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[809],{3321:function(e,n,s){s(2791);var i=s(184);n.Z=function(){return(0,i.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(e,n,s){s.d(n,{Z:function(){return c}});s(2791);var i=s(6355),t=s(1087),r=s(3495),l=s(184),c=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("footer",{children:[(0,l.jsxs)("div",{className:"footer",children:[(0,l.jsxs)("div",{className:"footer-links",children:[(0,l.jsx)("h3",{children:"Links"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(t.OL,{to:"/",children:"Home"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.OL,{to:"/doctors",children:"Doctors"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.OL,{to:"/appointments",children:"Appointments"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.OL,{to:"/notifications",children:"Notifications"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.fO,{to:"/#contact",children:"Contact Us"})}),(0,l.jsx)("li",{children:(0,l.jsx)(t.OL,{to:"/profile",children:"Profile"})})]})]}),(0,l.jsxs)("div",{className:"social",children:[(0,l.jsx)("h3",{children:"Social links"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"facebook",children:(0,l.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(i.tBk,{})})}),(0,l.jsx)("li",{className:"youtube",children:(0,l.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(i.V2E,{})})}),(0,l.jsx)("li",{className:"instagram",children:(0,l.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(i.Zf_,{})})})]})]})]}),(0,l.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,l.jsx)("a",{href:"#s",target:"_blank",rel:"noreferrer",children:"Jabi"})," ","\xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,n,s){s.d(n,{Z:function(){return u}});var i=s(9439),t=s(456),r=s(2791),l=s(3853),c=s(1213),o=s(9434),a=s(7689),d=s(1087),h=s(3495),x=s(5318),j=s(184),u=function(){var e=(0,r.useState)(!1),n=(0,i.Z)(e,2),s=n[0],u=n[1],f=(0,o.I0)(),m=(0,a.s0)(),p=(0,r.useState)(localStorage.getItem("token")||""),v=(0,i.Z)(p,2),g=v[0],N=(v[1],(0,r.useState)(localStorage.getItem("token")?(0,t.Z)(localStorage.getItem("token")):"")),k=(0,i.Z)(N,2),b=k[0];k[1];return(0,j.jsxs)("header",{children:[(0,j.jsxs)("nav",{className:s?"nav-active":"",children:[(0,j.jsx)("h2",{className:"nav-logo",children:(0,j.jsx)(d.OL,{to:"/",children:"Pure Health"})}),(0,j.jsxs)("ul",{className:"nav-links",children:[(0,j.jsx)("li",{children:(0,j.jsx)(d.OL,{to:"/",children:"Home"})}),(0,j.jsx)("li",{children:(0,j.jsx)(d.OL,{to:"/doctors",children:"Doctors"})}),g&&b.isAdmin&&(0,j.jsx)("li",{children:(0,j.jsx)(d.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!b.isAdmin&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(d.OL,{to:"/appointments",children:"Appointments"})}),(0,j.jsx)("li",{children:(0,j.jsx)(d.OL,{to:"/notifications",children:"Notifications"})}),(0,j.jsx)("li",{children:(0,j.jsx)(d.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,j.jsx)("li",{children:(0,j.jsx)(h.fO,{to:"/#contact",children:"Contact Us"})}),(0,j.jsx)("li",{children:(0,j.jsx)(d.OL,{to:"/profile",children:"Profile"})})]}),g?(0,j.jsx)("li",{children:(0,j.jsx)("span",{className:"btn",onClick:function(){f((0,x.ps)({})),localStorage.removeItem("token"),m("/login")},children:"Logout"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(d.OL,{className:"btn",to:"/login",children:"Login"})}),(0,j.jsx)("li",{children:(0,j.jsx)(d.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,j.jsxs)("div",{className:"menu-icons",children:[!s&&(0,j.jsx)(l.cur,{className:"menu-open",onClick:function(){u(!0)}}),s&&(0,j.jsx)(c.ySC,{className:"menu-close",onClick:function(){u(!1)}})]})]})}},809:function(e,n,s){s.r(n),s.d(n,{default:function(){return f}});var i=s(4165),t=s(5861),r=s(9439),l=s(2791),c=s(9434),o=s(3321),a=s(6794),d=s(3841),h=s(4971),x=s(5318),j=s(3200),u=(s(5108),s(184)),f=function(){var e=(0,l.useState)([]),n=(0,r.Z)(e,2),s=n[0],f=n[1],m=(0,c.I0)(),p=(0,c.v9)((function(e){return e.root})).loading,v=function(){var e=(0,t.Z)((0,i.Z)().mark((function e(n){var s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m((0,x.K4)(!0)),e.next=4,(0,h.Z)("/notification/getallnotifs");case 4:s=e.sent,m((0,x.K4)(!1)),f(s),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){v()}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{}),p?(0,u.jsx)(j.Z,{}):(0,u.jsxs)("section",{className:"container notif-section",children:[(0,u.jsx)("h2",{className:"page-heading",children:"Your Notifications"}),s.length>0?(0,u.jsx)("div",{className:"notifications",children:(0,u.jsxs)("table",{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"S.No"}),(0,u.jsx)("th",{children:"Content"}),(0,u.jsx)("th",{children:"Date"}),(0,u.jsx)("th",{children:"Time"})]})}),(0,u.jsx)("tbody",{children:null===s||void 0===s?void 0:s.map((function(e,n){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:n+1}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.content}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[0]}),(0,u.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[1].split(".")[0]})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,u.jsx)(o.Z,{})]}),(0,u.jsx)(a.Z,{})]})}},5108:function(){}}]);
//# sourceMappingURL=809.665d3a62.chunk.js.map