(this.webpackJsonpnetflix_clone=this.webpackJsonpnetflix_clone||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},27:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s(13),a=s.n(i),n=(s(24),s(25),s(2));var o=function(){const[e,t]=Object(c.useState)(!0),[s,i]=Object(c.useState)(0),a=()=>{window.scrollY>s?t(!1):t(!0),i(window.scrollY)};return Object(c.useEffect)((()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)})),[s]),Object(n.jsx)("div",{className:"nav ".concat(e&&"nav_black"),children:Object(n.jsxs)("div",{className:"nav_contents",children:[Object(n.jsx)("img",{className:"nav_logo",src:"./netflix_logo.png",alt:""}),Object(n.jsxs)("div",{className:"nav_list",children:[Object(n.jsx)("a",{href:"",className:"nav_list_objects",children:"Home"}),Object(n.jsx)("a",{href:"",className:"nav_list_objects",children:"TV Shows"}),Object(n.jsx)("a",{href:"",className:"nav_list_objects",children:"Movies"}),Object(n.jsx)("a",{href:"",className:"nav_list_objects",children:"New Popular"}),Object(n.jsx)("a",{href:"",className:"nav_list_objects",children:"My List"}),Object(n.jsx)("a",{href:"",className:"nav_list_objects",children:Object(n.jsx)("img",{className:"nav_avator",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:""})})]})]})})},l=(s(27),s(6));const r="a3c1a584d8679e42019c3e8b71d1d539";var j={fetchTrending:"https://api.themoviedb.org/3/trending/all/week?api_key=".concat(r,"&language=en-US"),fetchNetflixOriginals:"https://api.themoviedb.org/3/discover/tv?api_key=".concat(r,"&with_networks=213"),fetchComedyMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(r,"&with_genres=35"),fetchHorrorMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(r,"&with_genres=27"),fetchRomanceMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(r,"&with_genres=10749"),fetchDocumentaries:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(r,"&with_genres=99")},h=s(11),d=s(7),b=s(5),m=s(19);s(35);var v=function(e){const t=e.movie,s=[{width:1,itemsToShow:1},{width:400,itemsToShow:3},{width:600,itemsToShow:4},{width:900,itemsToShow:5},{width:1200,itemsToShow:6},{width:1400,itemsToShow:8}];return e.iswatchlist?Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("h1",{className:"popular_h1",children:e.name}),Object(n.jsx)(h.a,{itemPosition:"START",renderPagination:e=>{let{pages:t,activePage:s,onClick:c}=e;return Object(n.jsx)("div",{})},itemPadding:[10,5],breakPoints:s,children:t.length>0&&t.map((function(t){var s=!1;console.log(t.id,"hello");const c=t.id,i=!1===s?Object(n.jsx)(d.b,{className:"play_icon_like"}):Object(n.jsx)(b.b,{className:"play_icon_like"}),a="false"===t.adult?"16+":"18+",o=t.media_type?t.media_type:"movie";return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("img",{className:"image",src:"https://image.tmdb.org/t/p/original"+t.poster_path,alt:""}),Object(n.jsxs)("div",{className:"overlay",children:[Object(n.jsxs)("div",{className:"text",children:[t.name,t.title,Object(n.jsxs)("div",{children:[Object(n.jsx)(l.a,{className:"play_icon"}),Object(n.jsx)(m.a,{onClick:()=>{console.log(t.id,"mov.id"),console.log(e.watchlist,"props.watchlist");const s=[];void 0!==e.movie?e.movie.filter((e=>{e.id!==c&&s.push(e)}),e.addToWatchlist(s)):e.movie},className:"play_icon_1"}),Object(n.jsx)("span",{onClick:()=>{s=!s},children:i}),Object(n.jsx)(d.a,{className:"play_icon_like"})]}),Object(n.jsxs)("div",{children:[a," ",o," HD"]})]}),Object(n.jsx)("div",{})]})]})}))})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("h1",{className:"popular_h1",children:e.name}),Object(n.jsx)(h.a,{itemPosition:"START",renderPagination:e=>{let{pages:t,activePage:s,onClick:c}=e;return Object(n.jsx)("div",{})},itemPadding:[10,5],breakPoints:s,children:t.length>0&&t.map((function(t){console.log(t);var s=!1;console.log(t.id,"hello");const c=t.id,i=!1===s?Object(n.jsx)(d.b,{className:"play_icon_like"}):Object(n.jsx)(b.b,{className:"play_icon_like"}),a="false"===t.adult?"16+":"18+",o=t.media_type?t.media_type:"movie";return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("img",{className:"image",src:"https://image.tmdb.org/t/p/original"+t.poster_path,alt:""}),Object(n.jsxs)("div",{className:"overlay",children:[Object(n.jsxs)("div",{className:"text",children:[t.name,t.title,Object(n.jsxs)("div",{children:[Object(n.jsx)(l.a,{className:"play_icon"}),Object(n.jsx)(b.a,{onClick:()=>{console.log(t.id);let s=0;if(e.watchlist.filter((e=>{e.id===c&&(s=1)})),0===s){const s=[...e.watchlist,t];e.addToWatchlist(s)}},className:"play_icon circle"}),Object(n.jsx)("span",{onClick:()=>{s=!s},children:i}),Object(n.jsx)(d.a,{className:"play_icon_like"})]}),Object(n.jsxs)("div",{children:[a," ",o," HD"]})]}),Object(n.jsx)("div",{})]})]})}))})]})};const O=Math.floor(10*Math.random());var x=function(){const[e,t]=Object(c.useState)([]),[s,i]=Object(c.useState)([]),[a,o]=Object(c.useState)([]),[r,h]=Object(c.useState)([]),[d,b]=Object(c.useState)([]),[m,x]=Object(c.useState)(""),[_,p]=Object(c.useState)(""),[u,g]=Object(c.useState)(""),[f,w]=Object(c.useState)([]);Object(c.useEffect)((()=>{fetch(j.fetchNetflixOriginals).then((e=>e.json())).then((e=>{x("https://image.tmdb.org/t/p/original"+e.results[O].backdrop_path),p(e.results[O].name),g(e.results[O].overview)}),fetch(j.fetchTrending).then((e=>e.json())).then((e=>{t(e.results)})),fetch(j.fetchHorrorMovies).then((e=>e.json())).then((e=>{h(e.results)}),fetch(j.fetchDocumentaries).then((e=>e.json())).then((e=>{o(e.results)}),fetch(j.fetchComedyMovies).then((e=>e.json())).then((e=>{i(e.results)}),fetch(j.fetchRomanceMovies).then((e=>e.json())).then((e=>{b(e.results)}))))))}),[]);const N=f.length>0?Object(n.jsx)(v,{movie:f,name:"Watchlist",iswatchlist:!0,addToWatchlist:w}):Object(n.jsx)("div",{});return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"img",children:[Object(n.jsx)("img",{className:"img1",src:m,alt:""}),Object(n.jsxs)("div",{className:"banner__contents",children:[Object(n.jsx)("h1",{className:"banner__name",children:""!==_&&_}),Object(n.jsxs)("div",{className:"banner__buttons",children:[Object(n.jsxs)("button",{className:"banner__but",children:[Object(n.jsx)("div",{className:"banner__button__icon",children:Object(n.jsx)(l.b,{})}),"Play"]}),Object(n.jsx)("button",{className:"banner__but",children:"More info"})]}),Object(n.jsx)("div",{className:"banner__des",children:Object(n.jsx)("div",{className:"banner_des12",children:u.length>0&&u.substring(0,100)+" ..."})})]})]}),Object(n.jsxs)("div",{className:"rows",children:[N,Object(n.jsx)(v,{movie:e,name:"Trending Movies",watchlist:f,addToWatchlist:w,iswatchlist:!1}),Object(n.jsx)(v,{movie:r,name:"Horror Movies",watchlist:f,addToWatchlist:w,iswatchlist:!1}),Object(n.jsx)(v,{movie:d,name:"Romance Movies",watchlist:f,addToWatchlist:w,iswatchlist:!1}),Object(n.jsx)(v,{movie:s,name:"Comedy Movies",watchlist:f,addToWatchlist:w,iswatchlist:!1}),Object(n.jsx)(v,{movie:a,name:" Documentary Movies",watchlist:f,addToWatchlist:w,iswatchlist:!1})]})]})};var _=function(){return Object(n.jsxs)("div",{className:"home_box",children:[Object(n.jsx)(o,{}),Object(n.jsx)(x,{})]})};s(36);s(37);a.a.render(Object(n.jsx)(_,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.18d3edb5.chunk.js.map