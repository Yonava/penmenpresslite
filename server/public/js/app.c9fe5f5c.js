(function(t){function e(e){for(var i,n,c=e[0],o=e[1],l=e[2],d=0,h=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&h.push(s[n][0]),s[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],i=!0,c=1;c<r.length;c++){var o=r[c];0!==s[o]&&(i=!1)}i&&(a.splice(e--,1),t=n(n.s=r[0]))}return t}var i={},s={app:0},a=[];function n(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=i,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"014c":function(t,e,r){},"0185":function(t,e,r){t.exports=r.p+"img/font.4cb54242.svg"},"034f":function(t,e,r){"use strict";r("85ec")},2663:function(t,e,r){},"29bd":function(t,e,r){"use strict";r("014c")},3353:function(t,e,r){"use strict";r("8c04")},"355b":function(t,e,r){"use strict";r("cceb")},"3a8f":function(t,e,r){t.exports=r.p+"img/remove-bookmark.26554516.svg"},"3ca8":function(t,e,r){t.exports=r.p+"img/trendingicon.ea3d4602.svg"},"3edb":function(t,e,r){t.exports=r.p+"img/add-bookmark.5c367b3e.svg"},"51f2":function(t,e,r){t.exports=r.p+"img/search.acf08b29.svg"},"54e6":function(t,e,r){t.exports=r.p+"img/instagram.6e01c9d7.svg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.contentView||"home"!==t.page?t.contentView?i("div",[i("Content",{attrs:{article:t.selectedArticle,articles:t.articles}})],1):"discover"===t.page?i("div",[i("Discover",{attrs:{articles:t.articles}})],1):"bookmarked"===t.page?i("div",[i("Bookmarked",{attrs:{articles:t.articles}})],1):"trending"===t.page?i("div",[i("Trending",{attrs:{articles:t.articles}})],1):t._e():i("div",[i("Feed",{attrs:{articles:t.articles}})],1),t.contentView?t._e():i("footer",{staticClass:"bottom"},[i("div",{staticClass:"bottom-container"},[i("div",{staticClass:"nav-container",style:t.selected[0],on:{click:function(e){return t.navigate("home")}}},[i("img",{staticClass:"icon",attrs:{src:r("e97f"),alt:"home"}})]),i("div",{staticClass:"nav-container",style:t.selected[1],on:{click:function(e){return t.navigate("discover")}}},[i("img",{staticClass:"icon",attrs:{src:r("57ca"),alt:"discovery"}})]),i("div",{staticClass:"nav-container",style:t.selected[2],on:{click:function(e){return t.navigate("trending")}}},[i("img",{staticClass:"icon",attrs:{src:r("3ca8"),alt:"trending"}})]),i("div",{staticClass:"nav-container",style:t.selected[3],on:{click:function(e){return t.navigate("bookmarked")}}},["bookmarked"!=t.page?i("img",{staticClass:"icon",attrs:{src:r("65b5"),alt:"saved"}}):t._e(),i("img",{staticClass:"icon",style:t.styleSelected,attrs:{src:r("70c2"),alt:"saved-selected"}})])])])])},a=[],n=r("1da1"),c=(r("4e82"),r("ac1f"),r("1276"),r("96cf"),r("d4ec")),o=r("bee2"),l=r("7338"),u=r.n(l),d="api/articles/",h=function(){function t(){Object(c["a"])(this,t)}return Object(o["a"])(t,null,[{key:"retrieve",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get(d);case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"retrieveOne",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("".concat(d).concat(e));case 3:return r=t.sent,i=r.data,t.abrupt("return",i);case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"insertArticle",value:function(t){return u.a.post(d,{article:t})}},{key:"updateScore",value:function(t,e){return u.a.put("".concat(d).concat(t),{score:e})}},{key:"deleteArticle",value:function(t){return u.a.delete("".concat(d).concat(t))}}]),t}(),p=h,f=r("2909"),v=(r("c740"),r("caad"),r("2532"),r("a15b"),function(){function t(e,r,i,s,a,n,o,l,u){Object(c["a"])(this,t),this.title="="+e,this.image=this.verifyImage(r),this.imageCaption=i,this.category="_"+s,this.author="$"+a,this.date=n,this.content="^"+this.parsedContent(o),this.score=l,this.id=u,this.saved=!1,this.dateScore=this.dateScore(n)}return Object(o["a"])(t,[{key:"dateScore",value:function(t){var e=["placeholder","January","February","March","April","May","June","July","August","September","October","November","December"],r=t.split(" "),i=String(e.findIndex((function(t){return t===r[0]})));1===i.length&&(i="0"+i);var s=r[1].substring(0,r[1].length-1);1===s.length&&(s="0"+s);var a=r[2]+i+s;return parseInt(a)}},{key:"parsedContent",value:function(t){t=Object(f["a"])(t);while(t.includes("~")){var e=t.findIndex((function(t){return"~"===t}));t[e]="\n\n"}return t.join("")}},{key:"verifyImage",value:function(t){return t||(t="https://penmenpress.com/wp-content/uploads/2018/09/press-default-e1536863665146-1071x642.png"),t}}]),t}()),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",[i("div",{staticClass:"utility-parent"},[i("img",{staticClass:"utility-icon",style:t.buttonColoration,attrs:{src:r("0185"),alt:"fontSize"},on:{click:function(e){return t.resizeFont()}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.resizeInput,expression:"resizeInput"}],style:t.expandFontSlider,attrs:{id:"font-size",type:"range",min:"6",max:"30"},domProps:{value:t.resizeInput},on:{__r:function(e){t.resizeInput=e.target.value}}}),i("p",{staticClass:"font-label",style:t.fontLabel},[t._v(t._s(t.resizeInput))])]),i("div",[i("p",{staticClass:"cat"},[t._v(t._s(t.article.category.substring(1)))]),i("h1",{staticClass:"headline"},[t._v(t._s(t.article.title.substring(1)))]),i("p",{staticClass:"author-credit"},[t._v(t._s(t.article.author.substring(1))+" - "+t._s(t.article.date))]),i("img",{attrs:{src:t.article.image,alt:t.article.imageCaption}}),i("center",[i("p",{staticClass:"caption"},[t._v(t._s(t.article.imageCaption))])]),i("pre",{staticClass:"article",style:t.articleSize},[t._v(t._s(t.article.content.substring(1)))])],1)]),i("button",{staticClass:"back",style:t.returnButtonStyle,on:{click:function(e){return t.updateScore()}}},[i("b",[t._v("Return to Feed")])]),i("br"),i("br"),i("p",{staticStyle:{"font-size":"4pt"}},[t._v("----\x3e Trending Score: "+t._s(t.article.score))])])},m=[],b=(r("d3b7"),{props:["article","articles"],data:function(){return{articleSize:"font-size: 12pt;",resizeInput:"12",returnButtonStyle:"padding: 1.5vh; font-size: 12pt; bottom: 2vh;",takeScrollFeedback:!0,yDifferential:0,lastPos:0,expandFontSlider:"width: 0vw; opacity: 0; display: none",sliderExpanded:!1,fontLabel:"opacity: 0;",buttonColoration:"background-color: white;",fontSliderCooldown:!1,timeSpent:0,pageSnapshots:[]}},created:function(){var t=this;document.addEventListener("scroll",this.scroll),this.timeKeeper=setInterval((function(){t.timeSpent++,t.pageSnapshots.push(window.scrollY)}),1e3)},destroyed:function(){document.removeEventListener("scroll",this.scroll),clearInterval(this.timeKeeper)},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:localStorage.articleSize&&(t.articleSize=localStorage.articleSize,t.resizeInput=localStorage.resizeInput),window.navigator.vibrate([200,100,200]);case 2:case"end":return e.stop()}}),e)})))()},watch:{resizeInput:function(){this.articleSize="font-size: ".concat(this.resizeInput,"pt;"),localStorage.articleSize=this.articleSize,localStorage.resizeInput=this.resizeInput}},methods:{scroll:function(){var t=this;this.yDifferential>10&&window.scrollY>100?(this.returnButtonStyle="height: 0vh; bottom: 0vh;",setTimeout((function(){return t.returnButtonStyle+="opacity: 0;"}),5),this.animationCooldown=!0):this.yDifferential<-20&&(this.returnButtonStyle="padding: 1.5vh; font-size: 12pt; bottom: 2vh;",this.animationCooldown=!0),this.takeScrollFeedback&&(this.yDifferential=window.scrollY-this.lastPos,this.lastPos=window.scrollY,this.takeScrollFeedback=!1,setTimeout((function(){return t.takeScrollFeedback=!0}),50))},resizeFont:function(){var t=this,e=400,r=200;if(!this.fontSliderCooldown){var i=new Promise((function(t){return setTimeout(t,2*e)}));this.fontSliderCooldown=!0,this.sliderExpanded?(this.fontLabel="opacity: 0;",this.buttonColoration="background-color: white;"):this.buttonColoration="background-color: rgb(255, 200, 200);",this.sliderExpanded?(setTimeout((function(){return t.expandFontSlider="width: 2vw;"}),r),setTimeout((function(){return t.expandFontSlider+="opacity: 0;"}),e+r)):(this.expandFontSlider="width: 2vw; opacity: 1;",setTimeout((function(){return t.expandFontSlider+="width: 72.5vw;"}),e)),i.then((function(){t.sliderExpanded?t.expandFontSlider="display: none;":t.fontLabel="opacity: 1;",t.sliderExpanded=!t.sliderExpanded,t.fontSliderCooldown=!1}))}},scoreAlgo:function(){var t=0,e=5;if(this.timeSpent>=e){var r=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),i=Math.max.apply(Math,Object(f["a"])(this.pageSnapshots))/r;t=this.timeSpent*i}return Math.round(t)},updateScore:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.scoreAlgo(),t.$parent.toggleContentView(),!(r>0)){e.next=7;break}return e.next=5,p.retrieveOne(t.article.id);case 5:i=e.sent,t.$parent.scoreTracker(t.article.id,i.score,r);case 7:case"end":return e.stop()}}),e)})))()}}}),y=b,k=(r("e101"),r("2877")),C=Object(k["a"])(y,g,m,!1,null,"c24fe858",null),w=C.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"search",style:t.searchStyleMain},[t.searching?t._e():i("img",{staticClass:"search-icon",attrs:{src:r("51f2"),alt:"search"},on:{click:function(e){return t.engageSearch("")}}}),i("img",{staticClass:"esc-icon",style:t.showEsc,attrs:{src:r("fee4"),alt:"esc."},on:{click:function(e){return t.disengageSearch()}}}),t.searching?i("input",{directives:[{name:"model",rawName:"v-model",value:t.rawQuery,expression:"rawQuery"}],staticClass:"searchbar",attrs:{type:"text",placeholder:"Articles, Authors, or Categories"},domProps:{value:t.rawQuery},on:{click:function(e){return t.engageSearch(t.rawQuery)},input:function(e){e.target.composing||(t.rawQuery=e.target.value)}}}):t._e()]),0===t.rawQuery.length&&t.searching?i("div",[i("center",[i("p",{staticStyle:{"margin-top":"12.5vh","font-size":"7pt"}},[t._v("Filters: '^' for Content, '=' for Headline, '$' for Author, '_' for Category")]),i("img",{staticClass:"magnifying-glass",attrs:{src:r("51f2"),alt:"magnifying glass"}})])],1):t.rawQuery.length>0&&t.searching?i("div",[t.displayedArticles.length>0?i("p",{staticClass:"search-text"},[t._v("Here's What We Found:")]):i("div",{staticStyle:{"margin-top":"20vh"}},[i("center",[i("p",{staticStyle:{"font-size":"12pt"}},[t._v("Bad News!")]),i("p",{staticStyle:{"font-size":"12pt"}},[t._v("We Can't Find What You're Searching For")]),i("p",{staticStyle:{"font-size":"40pt"}},[t._v("😢")])])],1),t._l(t.displayedArticles,(function(e){return i("div",{key:e.id,staticClass:"parent"},[i("div",{staticClass:"box-1",on:{click:function(r){return t.$parent.articleRequested(e)}}},[i("img",{staticClass:"photo",attrs:{src:e.image,alt:e.imageCaption}}),i("div",{staticClass:"box-2"},[i("p",{staticClass:"author"},[t._v(t._s(e.date)+" - "+t._s(e.author.substring(1)))]),i("p",{staticClass:"cat"},[t._v(t._s(e.category.substring(1)))]),i("h2",{staticClass:"title"},[t._v(t._s(e.title.substring(1)))])]),i("div",{staticClass:"box-3"},[e.saved?i("img",{staticClass:"book",attrs:{src:r("3a8f"),alt:"unsave"},on:{click:function(r){return t.$parent.bookmark(e,!1)}}}):i("img",{staticClass:"book",attrs:{src:r("3edb"),alt:"save"},on:{click:function(r){return t.$parent.bookmark(e,!0)}}})])])])})),i("br"),i("br"),i("br")],2):t._e(),t.searching?t._e():i("div",[i("center",[i("h1",{staticClass:"article-of-the-day-title"},[t._v("Article of the Day")])]),i("div",{staticClass:"parent"},[i("div",{staticClass:"box-1",on:{click:function(e){return t.$parent.articleRequested(t.articles[t.articleOfTheDay])}}},[i("img",{staticClass:"photo",attrs:{src:t.articles[t.articleOfTheDay].image,alt:t.articles[t.articleOfTheDay].imageCaption}}),i("div",{staticClass:"box-2"},[i("p",{staticClass:"author"},[t._v(t._s(t.articles[t.articleOfTheDay].date)+" - "+t._s(t.articles[t.articleOfTheDay].author.substring(1)))]),i("p",{staticClass:"cat"},[t._v(t._s(t.articles[t.articleOfTheDay].category.substring(1)))]),i("h2",{staticClass:"title"},[t._v(t._s(t.articles[t.articleOfTheDay].title.substring(1)))])]),i("div",{staticClass:"box-3"},[t.articles[t.articleOfTheDay].saved?i("img",{staticClass:"book",attrs:{src:r("3a8f"),alt:"unsave"},on:{click:function(e){return t.$parent.bookmark(t.articles[t.articleOfTheDay],!1)}}}):i("img",{staticClass:"book",attrs:{src:r("3edb"),alt:"save"},on:{click:function(e){return t.$parent.bookmark(t.articles[t.articleOfTheDay],!0)}}})])])])],1),i("center",[t.searching?t._e():i("div",[i("h3",{staticClass:"cat-title"},[t._v("Quick Filters")]),i("h2",{staticClass:"quick-search",on:{click:function(e){return t.engageSearch("_News")}}},[t._v("News")]),i("h2",{staticClass:"quick-search",on:{click:function(e){return t.engageSearch("_Arts & Entertainment")}}},[t._v("Arts & Entertainment")]),i("h2",{staticClass:"quick-search",on:{click:function(e){return t.engageSearch("_Lifestyle")}}},[t._v("Lifestyle")]),i("h2",{staticClass:"quick-search",on:{click:function(e){return t.engageSearch("_Opinion")}}},[t._v("Opinion")]),i("h2",{staticClass:"quick-search",on:{click:function(e){return t.engageSearch("_Sports")}}},[t._v("Sports")])])]),t.searching?t._e():i("div",[i("h3",{staticClass:"social-title"},[t._v("Connect With Us")]),t._m(0)]),i("br"),i("br"),i("br"),i("br")],1)},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"socials"},[i("div",{staticClass:"social-icons"},[i("a",{attrs:{href:"https://www.instagram.com/penmenpress/",target:"_blank"}},[i("img",{attrs:{src:r("54e6"),alt:"instagram"}})])]),i("div",{staticClass:"social-icons"},[i("a",{attrs:{href:"https://www.facebook.com/penmenpress/",target:"_blank"}},[i("img",{attrs:{src:r("aaa3"),alt:"facebook"}})])]),i("div",{staticClass:"social-icons"},[i("a",{attrs:{href:"https://penmenpress.com/",target:"_blank"}},[i("img",{attrs:{src:r("9365"),alt:"website"}})])])])}],x=(r("841c"),r("4de4"),{data:function(){return{articleOfTheDay:0,searching:!1,displayedArticles:[],rawQuery:"",searchStyleMain:"padding-top: 1vh;",showEsc:"display: none;"}},props:["articles"],watch:{rawQuery:function(){this.search()}},methods:{sanitizeQuery:function(t){return t=t.toLowerCase(),t},search:function(){for(var t=this.rawQuery,e=["$","_","=","^"],r=["Author: ","Category: ","Headline: ","Content: "],i=0;i<e.length;i++)if(this.rawQuery[0]===e[i]){this.rawQuery=r[i]+this.rawQuery.substring(1);break}for(var s=0;s<r.length;s++)if(r[s]===this.rawQuery.substring(0,r[s].length))return void this.executeSearch(this.sanitizeQuery(e[s]+t.substring(r[s].length)),e[s]);this.executeSearch(this.sanitizeQuery(t,!1))},executeSearch:function(t,e){if(this.displayedArticles=[],t)if(e){var r=t[0];switch(t=t.substring(1),r){case"_":this.displayedArticles=this.articles.filter((function(e){return e.category.toLowerCase().includes(t)}));break;case"$":this.displayedArticles=this.articles.filter((function(e){return e.author.toLowerCase().includes(t)}));break;case"=":this.displayedArticles=this.articles.filter((function(e){return e.title.toLowerCase().includes(t)}));break;case"^":this.displayedArticles=this.articles.filter((function(e){return e.content.toLowerCase().includes(t)}));break}}else for(var i=0;i<this.articles.length;i++)switch(!0){case this.articles[i].title.toLowerCase().includes(t):this.displayedArticles.push(this.articles[i]);break;case this.articles[i].author.toLowerCase().includes(t):this.displayedArticles.push(this.articles[i]);break;case this.articles[i].category.toLowerCase().includes(t):this.displayedArticles.push(this.articles[i]);break;case this.articles[i].content.toLowerCase().includes(t):this.displayedArticles.push(this.articles[i]);break}},engageSearch:function(t){window.scrollTo(0,0),this.showEsc="",this.searching=!0,this.rawQuery=t,this.searchStyleMain="padding-top: 3vh; border-bottom: 1px solid black; background: #c9c9c9f5; box-shadow: rgb(25, 25, 25) 0px 0px 10px;"},disengageSearch:function(){this.showEsc="display: none;",this.searching=!1,this.rawQuery="",this.searchStyleMain="padding-top: 1vh;"}},mounted:function(){this.articleOfTheDay=Math.floor(Math.random()*this.articles.length)}}),O=x,A=(r("3353"),Object(k["a"])(O,_,S,!1,null,"aa05aeea",null)),E=A.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t.saved?t._e():i("center",[i("p",{staticClass:"non-saved"},[t._v("Saved/Bookmarked Articles Show Up Here")]),i("img",{staticClass:"icon-display",attrs:{src:r("3edb"),alt:"save"}})]),t._l(t.articles,(function(e){return i("div",{key:e.id,staticStyle:{"margin-top":"2vh"}},[e.saved?i("div",[i("div",{staticClass:"parent"},[i("div",{staticClass:"box-1",on:{click:function(r){return t.$parent.articleRequested(e)}}},[i("img",{staticClass:"photo",attrs:{src:e.image,alt:e.imageCaption}}),i("div",{staticClass:"box-2"},[i("p",{staticClass:"author"},[t._v(t._s(e.date)+" - "+t._s(e.author.substring(1)))]),i("p",{staticClass:"cat"},[t._v(t._s(e.category.substring(1)))]),i("h2",{staticClass:"title"},[t._v(t._s(e.title.substring(1)))])]),i("div",{staticClass:"box-3"},[i("img",{staticClass:"book",attrs:{src:r("3a8f"),alt:"unsave"},on:{click:function(r){t.$parent.bookmark(e,!1),t.update()}}})])])])]):t._e()])})),i("br"),i("br"),i("br"),i("br")],2)},z=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"feed-header"},[r("h1",{staticStyle:{"margin-left":"3%",opacity:"1","margin-top":"0px","margin-bottom":"0px"}},[t._v("SAVED ARTICLES")])])}],D={data:function(){return{saved:!0}},props:["articles"],methods:{update:function(){for(var t=0;t<this.articles.length;t++)if(this.articles[t].saved)return;this.saved=!1}},mounted:function(){this.update()}},$=D,j=(r("355b"),Object(k["a"])($,T,z,!1,null,"8eecbc5e",null)),R=j.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("img",{staticClass:"top-button",style:t.topStyle,attrs:{src:r("89c3"),alt:"scroll-up"},on:{click:function(e){return t.top()}}}),t._l(t.articles,(function(e){return i("div",{key:e.id,staticClass:"parent",staticStyle:{"margin-top":"2vh"}},[i("div",{staticClass:"box-1",on:{click:function(r){return t.$parent.articleRequested(e)}}},[i("img",{staticClass:"photo",attrs:{src:e.image,alt:e.imageCaption}}),i("div",{staticClass:"box-2"},[i("p",{staticClass:"author"},[t._v(t._s(e.date)+" - "+t._s(e.author.substring(1)))]),i("p",{staticClass:"cat"},[t._v(t._s(e.category.substring(1)))]),i("h2",{staticClass:"title"},[t._v(t._s(e.title.substring(1)))])]),i("div",{staticClass:"box-3"},[e.saved?i("img",{staticClass:"book",attrs:{src:r("3a8f"),alt:"unsave"},on:{click:function(r){return t.$parent.bookmark(e,!1)}}}):t.articles.saved?t._e():i("img",{staticClass:"book",attrs:{src:r("3edb"),alt:"save"},on:{click:function(r){return t.$parent.bookmark(e,!0)}}})])])])})),i("center",{staticStyle:{"font-size":"8pt"}},[i("img",{staticClass:"refresh-icon",attrs:{src:r("b7d8"),alt:"refresh"},on:{click:function(e){return t.$parent.refresh()}}}),i("p",{staticStyle:{"margin-bottom":"0vh"}},[t._v("visit "),i("a",{attrs:{href:"https://penmenpress.com/"}},[t._v("https://penmenpress.com/")]),t._v(" for more snhu reporting")]),i("p",{staticStyle:{"margin-bottom":"14vh","margin-top":".5vh"}},[t._v("© penmenpress 2021, all rights reserved")])])],2)},L=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"feed-header"},[r("h1",{staticStyle:{"margin-left":"3%",opacity:"1","margin-top":"0vh","margin-bottom":"0px"}},[t._v("NEWS FEED")])])}],I={props:["articles"],data:function(){return{topStyle:"display: none;"}},mounted:function(){window.scrollTo(0,localStorage.pagePosFeed)},created:function(){addEventListener("scroll",this.captureY)},destroyed:function(){removeEventListener("scroll",this.captureY)},methods:{captureY:function(){localStorage.pagePosFeed=window.scrollY,window.scrollY>500?this.topStyle="":this.topStyle="display: none;"},top:function(){window.scrollTo(0,window.scrollY-100),window.scrollY<1||setTimeout(this.top,1)}}},Q=I,q=(r("b6a0"),Object(k["a"])(Q,F,L,!1,null,"0bd107f7",null)),Y=q.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("center",[i("img",{staticClass:"refresh-icon",style:t.refresh,attrs:{src:r("b7d8"),alt:"refresh"}})]),t._m(0),t._l(t.trendingArticles,(function(e){return i("div",{key:e.id,staticClass:"parent",staticStyle:{"margin-top":"2vh"}},[i("div",{staticClass:"box-1",on:{click:function(r){return t.$parent.articleRequested(e)}}},[i("p",{staticClass:"ranking"},[t._v(t._s(t.rank(e)))]),i("img",{staticClass:"photo",attrs:{src:e.image,alt:e.imageCaption}}),i("div",{staticClass:"box-2"},[i("p",{staticClass:"author"},[t._v(t._s(e.date)+" - "+t._s(e.author.substring(1)))]),i("p",{staticClass:"cat"},[t._v(t._s(e.category.substring(1)))]),i("h2",{staticClass:"title"},[t._v(t._s(e.title.substring(1)))])]),i("div",{staticClass:"box-3"},[e.saved?i("img",{staticClass:"book",attrs:{src:r("3a8f"),alt:"unsave"},on:{click:function(r){return t.$parent.bookmark(e,!1)}}}):t.articles.saved?t._e():i("img",{staticClass:"book",attrs:{src:r("3edb"),alt:"save"},on:{click:function(r){return t.$parent.bookmark(e,!0)}}})])])])})),i("br"),i("br")],2)},P=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"feed-header"},[r("h1",{staticStyle:{"margin-left":"3%",opacity:"1","margin-top":"0px","margin-bottom":"0px"}},[t._v("TRENDING")])])}],H={props:["articles"],data:function(){return{trendingArticles:[],refresh:"display: none;",blocked:!1}},mounted:function(){this.sortTrending()},created:function(){addEventListener("scroll",this.captureY),addEventListener("touchend",this.checkReload)},destroyed:function(){removeEventListener("scroll",this.captureY),removeEventListener("touchend",this.checkReload)},methods:{checkReload:function(){var t=this;window.scrollY<-100&&(this.blocked=!0,this.refresh="transform: rotate(360deg)",this.$parent.loadAssets(),setTimeout((function(){return t.blocked=!1}),2e3))},captureY:function(){window.scrollY<-100&&!this.blocked?this.refresh="":this.blocked||(this.refresh="display: none")},sortTrending:function(){this.trendingArticles=this.articles,this.trendingArticles.sort((function(t,e){return e.score-t.score}))},rank:function(t){var e=this.trendingArticles.indexOf(t)+1;return e<10&&(e="0"+e),e},reloadAnimation:function(){}}},V=H,B=(r("29bd"),Object(k["a"])(V,M,P,!1,null,"0dd2ee70",null)),N=B.exports,W={name:"App",components:{Content:w,Discover:E,Bookmarked:R,Feed:Y,Trending:N},data:function(){return{bookmarked:[],articleData:[],styleSelected:"display: none",contentView:!1,selectedArticle:{},page:"home",requestHandler:!0,articles:[],selected:["filter: invert(0%);","filter: invert(60%);","filter: invert(60%);","filter: invert(60%);"]}},methods:{hi:function(){console.log("k")},refresh:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loadAssets();case 1:case"end":return e.stop()}}),e)})))()},scoreTracker:function(t,e,r){var i=e+r;p.updateScore(t,i)},bookmark:function(t,e){this.confirmRequest(!1),t.saved=e,this.bookmarked=[];for(var r=0;r<this.articles.length;r++)this.articles[r].saved&&this.bookmarked.push(this.articles[r].title);localStorage.bookmarked=this.bookmarked},articleRequested:function(t){this.selectedArticle=t,setTimeout(this.confirmRequest(!0),3)},confirmRequest:function(t){t||(this.requestHandler=!1),this.requestHandler&&this.toggleContentView(),this.requestHandler=!!t},toggleContentView:function(){window.scrollTo(0,0),this.contentView=!this.contentView},navigate:function(t){switch(t){case"discover":this.selected=["filter: invert(60%);","filter: invert(0%);","filter: invert(60%);","filter: invert(60%);"];break;case"home":this.selected=["filter: invert(0%);","filter: invert(60%);","filter: invert(60%);","filter: invert(60%);"];break;case"bookmarked":this.selected=["filter: invert(60%);","filter: invert(60%);","filter: invert(60%);","filter: invert(0%);"];break;case"trending":this.selected=["filter: invert(60%);","filter: invert(60%);","filter: invert(0%);","filter: invert(60%);"];break}"trending"!=t&&(this.articles.sort((function(t,e){return e.dateScore-t.dateScore})),window.scrollTo(0,0)),this.styleSelected="bookmarked"===t?"":"display: none",this.page=t},loadAssets:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,i,s,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.retrieve();case 2:for(t.articleData=e.sent,t.articles=[],r=0;r<t.articleData.length;r++)i=new v(t.articleData[r].title,t.articleData[r].image,t.articleData[r].imageCaption,t.articleData[r].category,t.articleData[r].author,t.articleData[r].date,t.articleData[r].content,t.articleData[r].score,t.articleData[r]._id),t.articles.push(i);if(t.articles.sort((function(t,e){return e.dateScore-t.dateScore})),localStorage.bookmarked)for(s=localStorage.bookmarked.split(","),t.bookmarked=["Saved Articles Detected"],a=0;a<s.length;a++)for(n=0;n<t.articles.length;n++)t.articles[n].title===s[a]&&(t.articles[n].saved=!0);case 7:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.loadAssets()}},J=W,K=(r("034f"),Object(k["a"])(J,s,a,!1,null,null,null)),U=K.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(U)}}).$mount("#app")},"57ca":function(t,e,r){t.exports=r.p+"img/discovericon.2e5b6d26.svg"},"65b5":function(t,e,r){t.exports=r.p+"img/savedicon.b83b1fc0.svg"},"70c2":function(t,e,r){t.exports=r.p+"img/savedicon-filled.b8ff736b.svg"},8214:function(t,e,r){},"85ec":function(t,e,r){},"89c3":function(t,e,r){t.exports=r.p+"img/top-button.b107fca2.svg"},"8c04":function(t,e,r){},9365:function(t,e,r){t.exports=r.p+"img/website.490d041f.svg"},aaa3:function(t,e,r){t.exports=r.p+"img/facebook.78d6179d.svg"},b6a0:function(t,e,r){"use strict";r("8214")},b7d8:function(t,e,r){t.exports=r.p+"img/refresh.04f00413.svg"},cceb:function(t,e,r){},e101:function(t,e,r){"use strict";r("2663")},e97f:function(t,e,r){t.exports=r.p+"img/feedicon.f27ffd8a.svg"},fee4:function(t,e,r){t.exports=r.p+"img/backsearch.c48fd12e.svg"}});
//# sourceMappingURL=app.c9fe5f5c.js.map