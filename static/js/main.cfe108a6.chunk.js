(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(5),c=n.n(s),o=(n(17),n(6)),l=n(1),u=n.n(l),i=n(7),p=n(8),d=n(10),m=n(9),f=n(2),h=n(11),b=n(3);var v=function(e){var t=e.list.posts;return console.log(t),e.list.isLoaded&&null===e.list.posts?a.a.createElement("p",null,"...loading"):e.list.isLoaded||null!==e.list.posts?e.list.isLoaded&&null!==e.list.posts?t.map(function(e){var t=e.user,n=e.comments;return a.a.createElement("div",{className:"content",key:e.id},a.a.createElement("div",null,a.a.createElement("p",null,"Name: ",t.name),a.a.createElement("p",null,"email: ",t.email),a.a.createElement("p",null,"address: ",t.address.city," ",t.address.street)),a.a.createElement("div",null,a.a.createElement("p",null,e.title),a.a.createElement("p",null,e.body)),a.a.createElement("div",null,a.a.createElement("ul",null,n.map(function(e){return a.a.createElement("li",null,e.body)}))))}):void 0:a.a.createElement("p",null,"not load")};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function j(e){return E.apply(this,arguments)}function E(){return(E=Object(b.a)(u.a.mark(function e(t){var n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(e,t,n){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(u.a.mark(function e(t,n,r){var a,s,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return a=e.sent,e.next=5,j(n);case 5:return s=e.sent,e.next=8,j(r);case 8:return c=e.sent,e.abrupt("return",s.map(function(e){return O({},e,{user:c.find(function(t){return t.id===e.userId}),comments:a.filter(function(t){return e.id===t.postId})})}));case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}var k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={posts:null,isLoaded:!1},n.loads=n.loads.bind(Object(f.a)(n)),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"loads",value:function(){var e=Object(b.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoaded:!0}),e.next=3,w("https://jsonplaceholder.typicode.com/comments","https://jsonplaceholder.typicode.com/posts","https://jsonplaceholder.typicode.com/users");case 3:t=e.sent,this.setState({posts:t});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{hidden:this.state.isLoaded,onClick:function(){return e.loads()}},"Load"),a.a.createElement(v,{list:this.state}))}}]),t}(a.a.Component);var x=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Dynamic list of posts"),a.a.createElement(k,null))};c.a.render(a.a.createElement(x,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.cfe108a6.chunk.js.map