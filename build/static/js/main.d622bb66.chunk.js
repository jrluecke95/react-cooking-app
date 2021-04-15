(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{65:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(20),a=n.n(i),s=(n(65),n(29)),j=n(7),o=n(8),l=n(79),b=n(80),u=n(81),d=n(57),h=n(88),O=n(19),p=n(1),x=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){fetch("/api/v1/recipes/".concat(e.id,"/getrating")).then((function(e){return e.json()})).then((function(e){i(e)}))}),[]),Object(p.jsx)(d.a,{xs:12,sm:6,md:4,lg:3,xl:3,children:Object(p.jsx)(h.a,{children:Object(p.jsxs)(h.a.Body,{children:[Object(p.jsx)(h.a.Title,{children:e.title}),Object(p.jsxs)(h.a.Subtitle,{className:"mb-2 text-muted",children:["written by ",e.username]}),Object(p.jsx)(h.a.Subtitle,{className:"mb-2 text-muted",children:isNaN(r)?"no reviews yet":"".concat(r," out of 5 rating")}),Object(p.jsx)(h.a.Text,{children:e.snippet}),Object(p.jsx)(O.LinkContainer,{to:e.link,children:Object(p.jsx)(h.a.Link,{children:"link to recipe"})})]})})},e.id)},f=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("/api/v1/recipes").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),Object(p.jsxs)(l.a,{children:[Object(p.jsx)(b.a,{fluid:!0,children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)("h1",{children:"Recipes"}),Object(p.jsx)("p",{children:"This page is a collection of the recipes that our users have posted - please explore and enjoy!"})]})}),Object(p.jsx)(u.a,{children:n.map((function(e){var t=e.recipe.split("").slice(0,40);return t[40]="...",t.join(""),Object(p.jsx)(x,{title:e.title,username:e.User.username,snippet:t,link:"/recipes/".concat(e.id),id:e.id})}))})]})},m=(n(72),n(73),n(87)),g=n(86),v=n(82),S=n(85),y=n(22),C="SET_USER";function w(e){return{type:C,data:e}}var k=function(){var e=Object(y.c)((function(e){return e.user})),t=Object(j.k)(),n=Object(y.b)(),r=Object(c.useState)("LOADING"),i=Object(o.a)(r,2),a=(i[0],i[1]);return Object(c.useEffect)((function(){fetch("/api/v1/users/current").then((function(e){return e.json()})).then((function(e){e.error||n(w(e)),a("CHECKED")}))}),[]),Object(p.jsx)(l.a,{children:Object(p.jsxs)(m.a,{bg:"light",expand:"lg",children:[Object(p.jsx)(m.a.Brand,{children:"Reactive Recipes"}),Object(p.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsxs)(m.a.Collapse,{id:"basic-navbar-nav",children:[Object(p.jsx)(g.a,{className:"mr-auto",children:e?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.LinkContainer,{to:"/",children:Object(p.jsx)(g.a.Link,{children:"Home"})}),Object(p.jsx)(O.LinkContainer,{to:"/userrecipes",children:Object(p.jsx)(g.a.Link,{children:"Your Recipes"})}),Object(p.jsx)(O.LinkContainer,{to:"/addrecipe",children:Object(p.jsx)(g.a.Link,{children:"Add Recipe"})}),Object(p.jsx)(v.a,{onClick:function(){fetch("/api/v1/users/logout").then((function(e){return e.json()})).then((function(e){e.success&&(alert(e.success),n(w(null)),t.push("/login"))}))},children:"Logout"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.LinkContainer,{to:"/login",children:Object(p.jsx)(g.a.Link,{children:"Login"})}),Object(p.jsx)(O.LinkContainer,{to:"/register",children:Object(p.jsx)(g.a.Link,{children:"Register"})})]})}),Object(p.jsxs)(S.a,{inline:!0,children:[Object(p.jsx)(O.LinkContainer,{to:"/fuzzysearch",children:Object(p.jsx)(g.a.Link,{children:"Search Our Database"})}),Object(p.jsx)(O.LinkContainer,{to:"/spoonsearch",children:Object(p.jsx)(g.a.Link,{children:"Search Spoonacular Database"})})]})]})]})})},L=n(18),E=n(12),T=function(){var e=Object(c.useState)({username:"",password:""}),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(j.k)(),a=Object(y.b)(),s=function(e){r(Object(E.a)(Object(E.a)({},n),{},Object(L.a)({},e.target.name,e.target.value)))};return Object(p.jsx)(l.a,{children:Object(p.jsxs)(S.a,{onSubmit:function(e){e.preventDefault(),fetch("/api/v1/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.username,password:n.password})}).then((function(e){return e.json()})).then((function(e){e.error?alert(e.error):(alert("user logged in!"),a(w(e)),i.push("/"))}))},children:[Object(p.jsxs)(S.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(S.a.Label,{children:"Username"}),Object(p.jsx)(S.a.Control,{type:"text",placeholder:"Enter username",name:"username",onChange:s})]}),Object(p.jsxs)(S.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(S.a.Label,{children:"Password"}),Object(p.jsx)(S.a.Control,{type:"password",placeholder:"Password",name:"password",onChange:s})]}),Object(p.jsx)(v.a,{variant:"primary",type:"submit",children:"Submit"})]})})},N=function(){var e=Object(c.useState)({username:"",password:""}),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(j.k)(),a=function(e){r(Object(E.a)(Object(E.a)({},n),{},Object(L.a)({},e.target.name,e.target.value)))};return Object(p.jsx)(l.a,{children:Object(p.jsxs)(S.a,{onSubmit:function(e){e.preventDefault(),fetch("/api/v1/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.username,password:n.password})}).then((function(e){return e.json()})).then((function(e){e.error?alert(e.error):(alert("user registered!"),i.push("/login"))}))},children:[Object(p.jsxs)(S.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(S.a.Label,{children:"Username"}),Object(p.jsx)(S.a.Control,{type:"text",placeholder:"Enter email",name:"username",onChange:a})]}),Object(p.jsxs)(S.a.Group,{controlId:"formBasicPassword",children:[Object(p.jsx)(S.a.Label,{children:"Password"}),Object(p.jsx)(S.a.Control,{type:"password",placeholder:"Password",onChange:a,name:"password"})]}),Object(p.jsx)(v.a,{variant:"primary",type:"submit",children:"Submit"})]})})},R=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(y.c)((function(e){return e.user}));return Object(c.useEffect)((function(){fetch("/api/v1/recipes/userrecipes").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),Object(p.jsxs)(l.a,{children:[Object(p.jsx)(b.a,{fluid:!0,children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)("h1",{children:"Your Recipes"}),Object(p.jsx)("p",{children:"This page is a collection of your recipes that you've submitted - thanks for contributing!"})]})}),Object(p.jsx)(u.a,{children:n.map((function(e){var t=e.recipe.split("").slice(0,40);return t[40]="...",t.join(""),Object(p.jsx)(x,{title:e.title,snippet:t,username:i.username,id:e.id,link:"/recipes/".concat(e.id)})}))})]})},D=n(83),B=n(84),P=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(j.m)().id,a=Object(c.useState)(""),s=Object(o.a)(a,2),b=s[0],u=s[1],d=function(){return r(!1)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v.a,{variant:"primary",onClick:function(){return r(!0)},children:"Add Comment"}),Object(p.jsxs)(B.a,{show:n,onHide:d,size:"lg",children:[Object(p.jsx)(B.a.Header,{closeButton:!0,children:Object(p.jsx)(B.a.Title,{children:"Comment"})}),Object(p.jsx)(l.a,{children:Object(p.jsxs)(S.a,{onSubmit:function(e){e.preventDefault(),fetch("/api/v1/recipes/".concat(i,"/addcomment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:b})}).then((function(e){return e.json()})).then((function(e){e.error?alert(e.error):(alert("comment posted"),u(""))}))},children:[Object(p.jsxs)(S.a.Group,{children:[Object(p.jsx)(S.a.Label,{children:"Add Comment"}),Object(p.jsx)(S.a.Control,{as:"textarea",rows:3,name:"text",onChange:function(e){u(e.target.value)}})]}),Object(p.jsx)(v.a,{type:"submit",children:"Submit Comment"})]})}),Object(p.jsx)(B.a.Footer,{children:Object(p.jsx)(v.a,{variant:"secondary",onClick:d,children:"Close"})})]})]})},_=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(j.m)().id,a=Object(c.useState)(""),s=Object(o.a)(a,2),b=s[0],u=s[1],d=function(){return r(!1)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v.a,{variant:"primary",onClick:function(){return r(!0)},children:"Add Review"}),Object(p.jsxs)(B.a,{show:n,onHide:d,size:"lg",children:[Object(p.jsx)(B.a.Header,{closeButton:!0,children:Object(p.jsx)(B.a.Title,{children:"What'd you think?"})}),Object(p.jsx)(l.a,{children:Object(p.jsxs)(S.a,{onSubmit:function(e){e.preventDefault(),fetch("/api/v1/recipes/".concat(i,"/addrating"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({score:b})}).then((function(e){return e.json()})).then((function(e){e.error?alert(e.error):alert("rating posted")}))},children:[Object(p.jsxs)(S.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(p.jsx)(S.a.Label,{children:"Select your score 1-5"}),Object(p.jsxs)(S.a.Control,{as:"select",name:"rating",onChange:function(e){u(e.target.value)},children:[Object(p.jsx)("option",{children:"1"}),Object(p.jsx)("option",{children:"2"}),Object(p.jsx)("option",{children:"3"}),Object(p.jsx)("option",{children:"4"}),Object(p.jsx)("option",{children:"5"})]})]}),Object(p.jsx)(v.a,{type:"submit",children:"Submit Review"})]})}),Object(p.jsx)(B.a.Footer,{children:Object(p.jsx)(v.a,{variant:"secondary",onClick:d,children:"Close"})})]})]})},I=(n(76),function(){var e=Object(j.m)().id,t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)([]),s=Object(o.a)(a,2),u=s[0],d=s[1],h=Object(c.useState)([]),O=Object(o.a)(h,2),x=O[0],f=O[1],m=Object(c.useState)(""),g=Object(o.a)(m,2),v=g[0],S=g[1];return Object(c.useEffect)((function(){fetch("/api/v1/recipes/getrecipe/".concat(e)).then((function(e){return e.json()})).then((function(e){i(e)}))}),[]),Object(c.useEffect)((function(){fetch("/api/v1/users/".concat(r.UserId)).then((function(e){return e.json()})).then((function(e){d(e)}))}),[r]),Object(c.useEffect)((function(){fetch("/api/v1/recipes/".concat(e,"/getcomments")).then((function(e){return e.json()})).then((function(e){f(e)}))}),[r]),Object(c.useEffect)((function(){fetch("/api/v1/recipes/".concat(e,"/getrating")).then((function(e){return e.json()})).then((function(e){S(e)}))}),[r]),Object(p.jsxs)(l.a,{children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)("h1",{children:r.title}),Object(p.jsxs)("p",{children:["written by ",u.username]}),Object(p.jsx)("p",{children:isNaN(v)?"no reviews yet":"".concat(v," out of 5 stars")}),Object(p.jsxs)("p",{children:[Object(p.jsx)(_,{})," "," ",Object(p.jsx)(P,{})]})]}),r.recipe,x.map((function(e){return Object(p.jsx)(D.a,{variant:"info",children:e.text},e.id)}))]})}),F=function(){var e=Object(c.useState)({title:"",recipe:""}),t=Object(o.a)(e,2),n=t[0],r=t[1],i=function(e){r(Object(E.a)(Object(E.a)({},n),{},Object(L.a)({},e.target.name,e.target.value)))};return Object(p.jsxs)(l.a,{children:[Object(p.jsx)(b.a,{fluid:!0,children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)("h1",{children:"Add Recipe"}),Object(p.jsx)("p",{children:"This page is for adding a recipe to our collection so that other users can find it and use it!"})]})}),Object(p.jsxs)(S.a,{onSubmit:function(e){console.log(n),e.preventDefault(),fetch("/api/v1/recipes/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n.title,recipe:n.recipe})}).then((function(e){return e.json()})).then((function(e){e.error?alert(e.error):alert("recipe posted")}))},children:[Object(p.jsxs)(S.a.Group,{controlId:"formBasicEmail",children:[Object(p.jsx)(S.a.Label,{children:"Recipe Title"}),Object(p.jsx)(S.a.Control,{type:"text",name:"title",placeholder:"Enter title",onChange:i}),Object(p.jsx)(S.a.Text,{className:"text-muted",children:"Make it original!"})]}),Object(p.jsxs)(S.a.Group,{children:[Object(p.jsx)(S.a.Label,{children:"Recipe"}),Object(p.jsx)(S.a.Control,{as:"textarea",name:"recipe",rows:3,onChange:i})]}),Object(p.jsx)(v.a,{type:"submit",children:"Submit Recipe"})]})]})},G=n(60),U=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),a=Object(o.a)(i,2),s=a[0],j=a[1];Object(c.useEffect)((function(){fetch("/api/v1/recipes").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var d=new G.a(n,{includeScore:!0,keys:["title"]}).search(s);return Object(p.jsxs)(l.a,{children:[Object(p.jsx)(b.a,{fluid:!0,children:Object(p.jsx)(l.a,{children:Object(p.jsx)(S.a,{children:Object(p.jsxs)(S.a.Group,{children:[Object(p.jsx)(S.a.Label,{children:Object(p.jsx)("h2",{children:"What are you in the mood for?"})}),Object(p.jsx)(S.a.Control,{onChange:function(e){j(e.target.value)},type:"text",placeholder:"name@example.com",name:"search"})]})})})}),Object(p.jsx)(u.a,{children:d.map((function(e){var t=e.item.recipe.split("").slice(0,40);return t[40]="...",t.join(""),Object(p.jsx)(x,{title:e.item.title,username:e.item.User.username,snippet:t,id:e.item.id,link:"/recipes/".concat(e.item.id)})}))})]})},J=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),a=Object(o.a)(i,2),s=(a[0],a[1]),j=Object(c.useState)([]),b=Object(o.a)(j,2);b[0],b[1];return Object(p.jsx)(l.a,{children:Object(p.jsxs)(S.a,{onSubmit:function(e){e.preventDefault(),s(n)},children:[Object(p.jsxs)(S.a.Group,{children:[Object(p.jsx)(S.a.Label,{children:"What are you in the mood for?"}),Object(p.jsx)(S.a.Control,{onChange:function(e){r(e.target.value)},type:"text",placeholder:"name@example.com",name:"search"})]}),Object(p.jsx)(v.a,{type:"submit",children:"Search"})]})})};var z=function(){return Object(p.jsxs)(s.BrowserRouter,{children:[Object(p.jsx)(k,{}),Object(p.jsxs)(j.g,{children:[Object(p.jsx)(j.d,{path:"/",exact:!0,children:Object(p.jsx)(f,{})}),Object(p.jsx)(j.d,{path:"/login",children:Object(p.jsx)(T,{})}),Object(p.jsx)(j.d,{path:"/register",children:Object(p.jsx)(N,{})}),Object(p.jsx)(j.d,{path:"/userrecipes",exact:!0,children:Object(p.jsx)(R,{})}),Object(p.jsx)(j.d,{path:"/recipes/:id",children:Object(p.jsx)(I,{})}),Object(p.jsx)(j.d,{path:"/addrecipe",children:Object(p.jsx)(F,{})}),Object(p.jsx)(j.d,{path:"/fuzzysearch",children:Object(p.jsx)(U,{})}),Object(p.jsx)(j.d,{path:"/spoonsearch",children:Object(p.jsx)(J,{})})]})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},H=n(36);var X=Object(H.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.data;default:return e}}}),W=Object(H.c)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(y.a,{store:W,children:Object(p.jsx)(s.BrowserRouter,{children:Object(p.jsx)(z,{})})})}),document.getElementById("root")),A()}},[[77,1,2]]]);
//# sourceMappingURL=main.d622bb66.chunk.js.map