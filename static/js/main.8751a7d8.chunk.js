(this.webpackJsonpreact_movie_app=this.webpackJsonpreact_movie_app||[]).push([[0],{56:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(29),i=s.n(c),r=s(8),o=s(2),l=s(17),j=s.n(l),u=s(30),m=s(11),d=s(12),h=s(14),p=s(13),b=s(31),v=s.n(b),O=(s(56),s(1));var x=function(e){var t=e.id,s=e.year,n=e.title,a=e.summary,c=e.poster,i=e.genres;return Object(O.jsx)("div",{className:"movie",children:Object(O.jsxs)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:n,summary:a,poster:c,genres:i}},children:[Object(O.jsx)("img",{src:c,alt:n,title:n}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:n}),Object(O.jsx)("h5",{className:"movie__year",children:s}),Object(O.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})},f=(s(63),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(m.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(j.a.mark((function t(){var s,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:s.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));s(64);var g=function(e){return console.log("props : ",e),Object(O.jsxs)("div",{className:"about__container",children:[Object(O.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(O.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},y=(s(65),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(m.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;console.log("componentDidMount this.props : ",this.props),void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log("location : ",e),e.state?Object(O.jsxs)("div",{className:"detail",children:[Object(O.jsx)("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.state.title}),Object(O.jsx)("h5",{children:e.state.year}),Object(O.jsx)("ul",{children:e.state.genres.map((function(e,t){return Object(O.jsx)("li",{children:e},t)}))}),Object(O.jsx)("p",{children:e.state.summary})]})]}):null}}]),s}(a.a.Component));s(66);var _=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(r.b,{to:"/",children:"Home"}),Object(O.jsx)(r.b,{to:"/about",children:"About"})]})};s(67);var N=function(){return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(_,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(o.a,{path:"/about",component:g}),Object(O.jsx)(o.a,{path:"/movie/:id",component:y})]})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.8751a7d8.chunk.js.map