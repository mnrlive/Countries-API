(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(2),r=n.n(l),c=(n(13),n(3)),i=n(4),s=n(6),u=n(5),m=n(7),f=(n(14),function(e){var t=e.countriesAll.map(function(e,t){return o.a.createElement("div",{className:"country-container",key:t},o.a.createElement("img",{className:"flagImg",src:e.flag,alt:"".concat(e.name," flag")}),o.a.createElement("p",null,e.name),o.a.createElement("ul",null,o.a.createElement("li",null,"Population: ",e.population),o.a.createElement("li",null,"Region: ",e.region),o.a.createElement("li",null,"Capital: ",e.capital)))});return o.a.createElement("div",{className:"countries-container"},t)}),d=(n(15),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={countriesAll:[],isLoaded:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then(function(e){if(console.log(e.ok),e.ok)return console.log(e),e;throw Error(e.status)}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({countriesAll:t,isLoaded:!0})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("p",null,"Rest Countries"),this.state.isLoaded?o.a.createElement(f,{countriesAll:this.state.countriesAll}):"Loading")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.7f7151c0.chunk.js.map