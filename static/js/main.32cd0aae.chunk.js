(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","phone":"999-080-4456","email":"spongeBob@pineApple.sea","DOB":"01/17/1996"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","phone":"343-444-5677","email":"krabs@giantAnchor.com","DOB":"11/27/1990"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","phone":"343-667-8922","email":"squid@InEasterHead.ward","DOB":"05/23/1993"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","phone":"333-999-0001","email":"dexter@aLaboratorySecret.com","DOB":"01/24/2008"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","phone":"000-221-3423","email":"Courage@cowardly.dog","DOB":"09/29/1990"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","phone":"345-626-3467","email":"DougFunnie@Bluffington.com","DOB":"06/28/1989"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","phone":"909-899-0062","email":"BugginFudd@WhatsUpDoc.com","DOB":"01/17/1990"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","phone":"456-666-7888","email":"BravoJohnny@AronCity.com","DOB":"07/15/1990"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","phone":"666-889-0034","email":"TommyPicks@cali.com","DOB":"08/11/1990"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","phone":"455-655-3333","email":"rocko@OtownCal.com","DOB":"01/30/1996"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","phone":"333-333-3331","email":"cPlanet@earth.com","DOB":"12/10/1990"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","phone":"343-677-8008","email":"Ickis@cityDump.com","DOB":"10/06/2000"}]')},15:function(e,a,t){e.exports=t(20)},20:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(11),r=t.n(o),l=t(5),c=t(6),s=t(8),m=t(7),g=t(12),u=t(13),p=t(9),h=function(e){return i.a.createElement(g.a,null,i.a.createElement(u.a,null,i.a.createElement(p.a,null,i.a.createElement("form",null,i.a.createElement("label",null,"Search Employees:",i.a.createElement("input",{value:e.search,onChange:e.handleInputChange,type:"text",name:"name",placeholder:"Courage"})))),i.a.createElement(p.a,null)))};var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},v=t(14),k=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).searchEmployees=function(e){var a=e.target.value;n.setState({search:a})},n.state={search:null},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this,a=v.filter((function(a){return null===e.state.search||a.name.toLowerCase().includes(e.state.search.toLowerCase())||a.name.toLowerCase().includes(e.state.search.toLowerCase())?a:void 0})).map((function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Image:")," ",e.image),i.a.createElement("li",null,i.a.createElement("strong",null,"Name:")," ",e.name),i.a.createElement("li",null,i.a.createElement("strong",null,"Phone:")," ",e.phone),i.a.createElement("li",null,i.a.createElement("strong",null,"Email:")," ",e.email),i.a.createElement("li",null,i.a.createElement("strong",null,"DOB:")," ",e.DOB))))}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{key:this.state.search,value:this.state.search,handleInputChange:this.searchEmployees}),i.a.createElement(d,null,a))}}]),t}(n.Component),b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.32cd0aae.chunk.js.map