(function(t){function e(e){for(var i,n,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&h.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},r=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0185":function(t,e,a){t.exports=a.p+"img/font.9763be58.svg"},"034f":function(t,e,a){"use strict";a("85ec")},"0ea9":function(t,e,a){},"16b2":function(t,e,a){"use strict";a("515a")},"3a8f":function(t,e,a){t.exports=a.p+"img/remove-bookmark.26554516.svg"},"3ca8":function(t,e,a){t.exports=a.p+"img/trendingicon.ea3d4602.svg"},"3edb":function(t,e,a){t.exports=a.p+"img/add-bookmark.5c367b3e.svg"},4653:function(t,e,a){"use strict";a("9213")},"49a4":function(t,e,a){},"515a":function(t,e,a){},"51f2":function(t,e,a){t.exports=a.p+"img/search.85381b4f.svg"},"54e6":function(t,e,a){t.exports=a.p+"img/instagram.6e01c9d7.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.contentView||"home"!==t.page?t.contentView?i("div",[i("Content",{attrs:{article:t.selectedArticle,articles:t.articles}})],1):"discover"===t.page?i("div",[i("Discover",{attrs:{articles:t.articles}})],1):"bookmarked"===t.page?i("div",[i("Bookmarked",{attrs:{articles:t.articles}})],1):"trending"===t.page?i("div",[i("Trending",{attrs:{articles:t.articles}})],1):t._e():i("div",[i("Feed",{attrs:{articles:t.articles}})],1),t.contentView?t._e():i("footer",{staticClass:"bottom"},[i("div",{staticClass:"bottom-container"},[i("div",{staticClass:"nav-container",style:"home"===t.page?"filter: invert(0%)":"filter: invert(60%)",on:{click:function(e){return t.navigate("home")}}},[i("img",{staticClass:"icon",attrs:{src:a("e97f"),alt:"home"}})]),i("div",{staticClass:"nav-container",style:"discover"===t.page?"filter: invert(0%)":"filter: invert(60%)",on:{click:function(e){return t.navigate("discover")}}},[i("img",{staticClass:"icon",attrs:{src:a("57ca"),alt:"discovery"}})]),i("div",{staticClass:"nav-container",style:"trending"===t.page?"filter: invert(0%)":"filter: invert(60%)",on:{click:function(e){return t.navigate("trending")}}},[i("img",{staticClass:"icon",attrs:{src:a("3ca8"),alt:"trending"}})]),i("div",{staticClass:"nav-container",style:"bookmarked"===t.page?"filter: invert(0%)":"filter: invert(60%)",on:{click:function(e){return t.navigate("bookmarked")}}},["bookmarked"!=t.page?i("img",{staticClass:"icon",attrs:{src:a("65b5"),alt:"saved"}}):t._e(),i("img",{staticClass:"icon",style:t.styleSelected,attrs:{src:a("70c2"),alt:"saved-selected"}})])])])])},r=[],n=a("1da1"),o=(a("96cf"),a("4e82"),a("99af"),a("ac1f"),a("1276"),a("2909")),c=a("d4ec"),l=a("bee2"),u=(a("c740"),a("caad"),a("2532"),a("a15b"),function(){function t(e,a,i,s,r,n,o,l){Object(c["a"])(this,t),this.title="="+e,this.image=this.verifyImage(a),this.category="_"+i,this.author="$"+s,this.date=r,this.content="^"+this.parsedContent(n),this.score=o,this.id=l,this.saved=!1,this.dateScore=this.dateScore(r)}return Object(l["a"])(t,[{key:"dateScore",value:function(t){var e=["placeholder","January","February","March","April","May","June","July","August","September","October","November","December"],a=t.split(" "),i=String(e.findIndex((function(t){return t===a[0]})));1===i.length&&(i="0"+i);var s=a[1].substring(0,a[1].length-1);1===s.length&&(s="0"+s);var r=a[2]+i+s;return parseInt(r)}},{key:"parsedContent",value:function(t){t=Object(o["a"])(t);while(t.includes("~")){var e=t.findIndex((function(t){return"~"===t}));t[e]="\n\n"}return t.join("")}},{key:"verifyImage",value:function(t){return t||(t="https://penmenpress.com/wp-content/uploads/2018/09/press-default-e1536863665146-1071x642.png"),t}}]),t}()),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",[i("div",{staticClass:"utility-parent"},[i("img",{staticClass:"utility-icon",attrs:{src:a("6f2b"),alt:"share"}}),i("img",{staticClass:"utility-icon",style:t.buttonColoration,attrs:{src:a("0185"),alt:"fontSize"},on:{click:function(e){return t.resizeFont()}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.resizeInput,expression:"resizeInput"}],style:t.expandFontSlider,attrs:{id:"font-size",type:"range",min:"6",max:"30"},domProps:{value:t.resizeInput},on:{__r:function(e){t.resizeInput=e.target.value}}}),i("p",{staticClass:"font-label",style:t.fontLabel},[t._v(t._s(t.resizeInput))])]),i("div",[i("p",{staticClass:"cat"},[t._v(" "+t._s(t.article.category.substring(1))+" ")]),i("h1",{staticClass:"headline"},[t._v(" "+t._s(t.article.title.substring(1))+" ")]),i("p",{staticClass:"author-credit"},[t._v(" "+t._s(t.authorDisplay)+" ")]),i("p",{staticClass:"author-credit"},[t._v(" "+t._s(t.article.date)+" ")]),i("img",{attrs:{src:t.article.image,alt:t.article.imageCaption}}),i("center",[i("p",{staticClass:"caption"},[t._v(" "+t._s(t.article.imageCaption)+" ")])]),i("pre",{staticClass:"article",style:t.articleSize},[t._v("        "+t._s(t.article.content.substring(1)))])],1),i("div",{staticStyle:{margin:"8px"}},[i("h2",{staticStyle:{"margin-top":"0px","margin-bottom":"8px"}},[t._v(" About The Author"+t._s(t.authors.length>1?"s":"")+" ")]),t._l(t.authors,(function(e){return i("div",{key:e.id,staticStyle:{display:"flex","flex-direction":"row",padding:"10px",border:"1px solid black","border-radius":"10px","margin-bottom":"10px"}},[e.photo?i("img",{staticClass:"author-photo",attrs:{src:e.photo,alt:e.firstName}}):t._e(),i("div",{staticStyle:{"margin-left":"10px"}},[e.title?i("p",{staticStyle:{margin:"0px"}},[t._v(" "+t._s(e.title)+" ")]):t._e(),i("h3",{staticStyle:{margin:"0px"}},[t._v(" "+t._s(e.firstName)+" "+t._s(e.middleName)+" "+t._s(e.lastName)+" ")]),e.bio?i("p",{staticStyle:{margin:"0px"}},[t._v(" "+t._s(e.bio)+" ")]):t._e(),e.joinDay&&e.joinMonth&&e.joinYear?i("p",{staticStyle:{"margin-bottom":"0px","font-size":"9pt"}},[i("i",[t._v(" "+t._s(e.firstName)+" "+t._s(e.lastName)+" has been with the press since "+t._s(e.joinDay)+"/"+t._s(e.joinMonth)+"/"+t._s(e.joinYear)+" ")])]):t._e()])])}))],2)]),i("button",{staticClass:"back",style:t.returnButtonStyle,on:{click:function(e){return t.updateScore()}}},[i("b",[t._v(" Return to Feed ")])]),i("br"),i("br"),i("br"),i("p",{staticStyle:{"font-size":"4pt"}},[t._v(" ----\x3e Trending Score: "+t._s(t.article.score)+" ")])])},h=[],p=(a("d3b7"),a("159b"),a("7338")),f=a.n(p),g={props:["article","articles"],data:function(){return{articleSize:"font-size: 12pt;",resizeInput:"12",returnButtonStyle:"padding: 1.5vh; font-size: 12pt; bottom: 2vh;",takeScrollFeedback:!0,yDifferential:0,lastPos:0,expandFontSlider:"width: 0vw; opacity: 0; display: none",sliderExpanded:!1,fontLabel:"opacity: 0;",buttonColoration:"background-color: white;",fontSliderCooldown:!1,timeSpent:0,pageSnapshots:[],authors:[]}},created:function(){var t=this;document.addEventListener("scroll",this.scroll),this.timeKeeper=setInterval((function(){t.timeSpent++,t.pageSnapshots.push(window.scrollY)}),1e3)},destroyed:function(){document.removeEventListener("scroll",this.scroll),clearInterval(this.timeKeeper)},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return localStorage.articleSize&&(t.articleSize=localStorage.articleSize,t.resizeInput=localStorage.resizeInput),a=[],e.next=4,f.a.get("/api/articleAuthor/".concat(t.article.id)).then((function(t){a=t.data})).catch((function(t){console.log(t)}));case 4:a.forEach(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/authors/".concat(a)).then((function(e){t.authors.push(e.data)})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)})))()},watch:{resizeInput:function(){this.articleSize="font-size: ".concat(this.resizeInput,"pt;"),localStorage.articleSize=this.articleSize,localStorage.resizeInput=this.resizeInput}},computed:{authorDisplay:function(){var t="";return this.authors.forEach((function(e){null!==e&&void 0!==e&&e.title&&(t+=e.title+" "),t+=e.firstName+" ",null!==e&&void 0!==e&&e.middleName&&(t+=e.middleName[0]+". "),t+=e.lastName+", "})),t.substring(0,t.length-2)}},methods:{scroll:function(){var t=this;this.yDifferential>10&&window.scrollY>100?(this.returnButtonStyle="height: 0vh; bottom: 0vh;",setTimeout((function(){return t.returnButtonStyle+="opacity: 0;"}),5),this.animationCooldown=!0):this.yDifferential<-20&&(this.returnButtonStyle="padding: 1.5vh; font-size: 12pt; bottom: 2vh;",this.animationCooldown=!0),this.takeScrollFeedback&&(this.yDifferential=window.scrollY-this.lastPos,this.lastPos=window.scrollY,this.takeScrollFeedback=!1,setTimeout((function(){return t.takeScrollFeedback=!0}),50))},resizeFont:function(){var t=this,e=400,a=200;if(!this.fontSliderCooldown){var i=new Promise((function(t){return setTimeout(t,2*e)}));this.fontSliderCooldown=!0,this.sliderExpanded?(this.fontLabel="opacity: 0;",this.buttonColoration="background-color: white;"):this.buttonColoration="background-color: rgb(255, 200, 200);",this.sliderExpanded?(setTimeout((function(){return t.expandFontSlider="width: 2vw;"}),a),setTimeout((function(){return t.expandFontSlider+="opacity: 0;"}),e+a)):(this.expandFontSlider="width: 2vw; opacity: 1;",setTimeout((function(){return t.expandFontSlider+="width: 72.5vw;"}),e)),i.then((function(){t.sliderExpanded?t.expandFontSlider="display: none;":t.fontLabel="opacity: 1;",t.sliderExpanded=!t.sliderExpanded,t.fontSliderCooldown=!1}))}},scoreAlgo:function(){var t=0,e=5;if(this.timeSpent>=e){var a=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),i=Math.max.apply(Math,Object(o["a"])(this.pageSnapshots))/a;t=this.timeSpent*i}return Math.round(t)},updateScore:function(){this.$parent.toggleContentView()}}},v=g,m=(a("643b"),a("2877")),b=Object(m["a"])(v,d,h,!1,null,"bb1530bc",null),y=b.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"search",style:t.searchStyleMain},[t.searching?t._e():i("img",{staticClass:"search-icon",attrs:{src:a("51f2"),alt:"search"},on:{click:function(e){return t.engageSearch()}}}),i("img",{staticClass:"esc-icon",style:t.showEsc,attrs:{src:a("fee4"),alt:"esc."},on:{click:function(e){return t.disengageSearch()}}}),t.searching?i("input",{directives:[{name:"model",rawName:"v-model",value:t.rawQuery,expression:"rawQuery"}],ref:"searchbar",staticClass:"searchbar",attrs:{type:"text",placeholder:"Try searching 'Yona Voss-Andreae'"},domProps:{value:t.rawQuery},on:{click:function(e){return t.engageSearch(t.rawQuery)},input:function(e){e.target.composing||(t.rawQuery=e.target.value)}}}):t._e()]),0===t.rawQuery.length&&t.searching?i("div",[i("center",[i("p",{staticStyle:{"margin-top":"12.5vh","font-size":"7pt"}},[t._v(" Filters: '^' for Content, '=' for Headline, '$' for Author, '_' for Category ")]),i("img",{staticClass:"magnifying-glass",attrs:{src:a("51f2"),alt:"magnifying glass"}})])],1):t.rawQuery.length>0&&t.searching?i("div",[t.displayedArticles.length>0?i("p",{staticClass:"search-text"},[t._v(" Here's What We Found: ")]):i("div",{staticStyle:{"margin-top":"20vh"}},[i("center",[i("p",{staticStyle:{"font-size":"12pt"}},[t._v(" Bad News! ")]),i("p",{staticStyle:{"font-size":"12pt"}},[t._v(" We Can't Find What You're Searching For ")]),i("p",{staticStyle:{"font-size":"40pt"}},[t._v(" 😢 ")])])],1),t._l(t.displayedArticles,(function(e){return i("div",{key:e.id,staticClass:"parent"},[i("div",{staticClass:"box-1",on:{click:function(a){return t.$parent.articleRequested(e)}}},[i("img",{staticClass:"photo",attrs:{src:e.image,alt:e.imageCaption}}),i("div",{staticClass:"box-2"},[i("p",{staticClass:"author"},[t._v(" "+t._s(e.date)+" - "+t._s(e.author.substring(1))+" ")]),i("p",{staticClass:"cat"},[t._v(" "+t._s(e.category.substring(1))+" ")]),i("h2",{staticClass:"title"},[t._v(" "+t._s(e.title.substring(1))+" ")])]),i("div",{staticClass:"box-3"},[e.saved?i("img",{staticClass:"book",attrs:{src:a("3a8f"),alt:"unsave"},on:{click:function(a){return t.$parent.bookmark(e,!1)}}}):i("img",{staticClass:"book",attrs:{src:a("3edb"),alt:"save"},on:{click:function(a){return t.$parent.bookmark(e,!0)}}})])])])})),i("br"),i("br"),i("br")],2):t._e(),t.searching?t._e():i("div",[i("center",[i("h1",{staticClass:"article-of-the-day-title"},[t._v(" Article of the Day ")])]),t.articleOfTheDay?i("div",{staticClass:"parent"},[i("div",{staticClass:"box-1",on:{click:function(e){return t.$parent.articleRequested(t.articleOfTheDay)}}},[i("img",{staticClass:"photo",attrs:{src:t.articleOfTheDay.image,alt:t.articleOfTheDay.imageCaption}}),i("div",{staticClass:"box-2"},[i("p",{staticClass:"author"},[t._v(" "+t._s(t.articleOfTheDay.date)+" - "+t._s(t.articleOfTheDay.author.substring(1))+" ")]),i("p",{staticClass:"cat"},[t._v(" "+t._s(t.articleOfTheDay.category.substring(1))+" ")]),i("h2",{staticClass:"title"},[t._v(" "+t._s(t.articleOfTheDay.title.substring(1))+" ")])]),i("div",{staticClass:"box-3"},[t.articleOfTheDay.saved?i("img",{staticClass:"book",attrs:{src:a("3a8f"),alt:"unsave"},on:{click:function(e){return t.$parent.bookmark(t.articleOfTheDay,!1)}}}):i("img",{staticClass:"book",attrs:{src:a("3edb"),alt:"save"},on:{click:function(e){return t.$parent.bookmark(t.articleOfTheDay,!0)}}})])])]):i("div",{staticClass:"center"},[t._v(" We Couldn't Find an Article of the Day ")])],1),i("center",[t.searching?t._e():i("div",[i("h3",{staticClass:"cat-title"},[t._v(" Quick Filters ")]),t._l(t.categories,(function(e){return i("div",{key:e},[i("h2",{staticClass:"quick-search",on:{click:function(a){return t.engageSearch("_"+e)}}},[t._v(" "+t._s(e)+" ")])])}))],2)]),t.searching?t._e():i("div",[i("h3",{staticClass:"social-title"},[t._v("Connect With Us")]),t._m(0)]),i("br"),i("br"),i("br"),i("br")],1)},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"socials"},[i("div",{staticClass:"social-icons"},[i("a",{attrs:{href:"https://www.instagram.com/penmenpress/",target:"_blank"}},[i("img",{attrs:{src:a("54e6"),alt:"instagram"}})])]),i("div",{staticClass:"social-icons"},[i("a",{attrs:{href:"https://www.facebook.com/penmenpress/",target:"_blank"}},[i("img",{attrs:{src:a("aaa3"),alt:"facebook"}})])]),i("div",{staticClass:"social-icons"},[i("a",{attrs:{href:"https://penmenpress.com/",target:"_blank"}},[i("img",{attrs:{src:a("9365"),alt:"website"}})])])])}],C=(a("841c"),a("4de4"),{data:function(){return{articleOfTheDay:null,searching:!1,displayedArticles:[],rawQuery:"",searchStyleMain:"padding-top: 1vh;",showEsc:"display: none;",categories:["News","Arts & Entertainment","Lifestyle","Opinion","Sports","April Fools"]}},props:["articles"],watch:{rawQuery:function(){this.search()}},methods:{sanitizeQuery:function(t){return t=t.toLowerCase(),t},search:function(){for(var t=this.rawQuery,e=["$","_","=","^"],a=["Author: ","Category: ","Headline: ","Content: "],i=0;i<e.length;i++)if(this.rawQuery[0]===e[i]){this.rawQuery=a[i]+this.rawQuery.substring(1);break}for(var s=0;s<a.length;s++)if(a[s]===this.rawQuery.substring(0,a[s].length))return void this.executeSearch(this.sanitizeQuery(e[s]+t.substring(a[s].length)),e[s]);this.executeSearch(this.sanitizeQuery(t,!1))},executeSearch:function(t,e){if(this.displayedArticles=[],t)if(e){var a=t[0];switch(t=t.substring(1),a){case"_":this.displayedArticles=this.articles.filter((function(e){return e.category.toLowerCase().includes(t)}));break;case"$":this.displayedArticles=this.articles.filter((function(e){return e.author.toLowerCase().includes(t)}));break;case"=":this.displayedArticles=this.articles.filter((function(e){return e.title.toLowerCase().includes(t)}));break;case"^":this.displayedArticles=this.articles.filter((function(e){return e.content.toLowerCase().includes(t)}));break}}else for(var i=0;i<this.articles.length;i++)switch(!0){case this.articles[i].title.toLowerCase().includes(t):this.displayedArticles.push(this.articles[i]);break;case this.articles[i].author.toLowerCase().includes(t):this.displayedArticles.push(this.articles[i]);break;case this.articles[i].category.toLowerCase().includes(t):this.displayedArticles.push(this.articles[i]);break;case this.articles[i].content.toLowerCase().includes(t):this.displayedArticles.push(this.articles[i]);break}},engageSearch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";setTimeout((function(){return t.$refs.searchbar.focus()}),500),window.scrollTo(0,0),this.showEsc="",this.searching=!0,this.rawQuery=e,this.searchStyleMain="padding-top: 3vh; border-bottom: 1px solid black; background: #c9c9c9f5; box-shadow: rgb(25, 25, 25) 0px 0px 10px;"},disengageSearch:function(){this.showEsc="display: none;",this.searching=!1,this.rawQuery="",this.searchStyleMain="padding-top: 1vh;"}},mounted:function(){this.articles.length&&(this.articleOfTheDay=this.articles[Math.floor(Math.random()*this.articles.length)])}}),w=C,S=(a("16b2"),Object(m["a"])(w,k,_,!1,null,"6829265d",null)),x=S.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t.saved?t._e():i("center",[i("p",{staticClass:"non-saved"},[t._v("Saved/Bookmarked Articles Show Up Here")]),i("img",{staticClass:"icon-display",attrs:{src:a("3edb"),alt:"save"}})]),t._l(t.articles,(function(e){return i("div",{key:e.id,staticStyle:{"margin-top":"2vh"}},[e.saved?i("div",[i("div",{staticClass:"parent"},[i("div",{staticClass:"box-1",on:{click:function(a){return t.$parent.articleRequested(e)}}},[i("img",{staticClass:"photo",attrs:{src:e.image,alt:e.imageCaption}}),i("div",{staticClass:"box-2"},[i("p",{staticClass:"author"},[t._v(" "+t._s(e.date)+" - "+t._s(e.author.substring(1))+" ")]),i("p",{staticClass:"cat"},[t._v(t._s(e.category.substring(1)))]),i("h2",{staticClass:"title"},[t._v(t._s(e.title.substring(1)))])]),i("div",{staticClass:"box-3"},[i("img",{staticClass:"book",attrs:{src:a("3a8f"),alt:"unsave"},on:{click:function(a){t.$parent.bookmark(e,!1),t.update()}}})])])])]):t._e()])})),i("br"),i("br"),i("br"),i("br")],2)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"feed-header"},[a("h1",{staticStyle:{"margin-left":"3%",opacity:"1","margin-top":"0px","margin-bottom":"0px"}},[t._v(" SAVED ARTICLES ")])])}],T={data:function(){return{saved:!0}},props:["articles"],methods:{update:function(){for(var t=0;t<this.articles.length;t++)if(this.articles[t].saved)return;this.saved=!1},copyText:function(t){return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},mounted:function(){this.update()}},O=T,E=(a("4653"),Object(m["a"])(O,D,A,!1,null,"d46de9bc",null)),z=E.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("img",{staticClass:"top-button",style:t.topStyle,attrs:{src:a("89c3"),alt:"scroll-up"},on:{click:function(e){return t.top()}}}),t._l(t.articles,(function(e){return i("div",{key:e.id,staticClass:"parent",staticStyle:{"margin-top":"2vh"}},[i("div",{staticClass:"box-1",on:{click:function(a){return t.$parent.articleRequested(e)}}},[i("img",{staticClass:"photo",attrs:{src:e.image,alt:e.imageCaption}}),i("div",{staticClass:"box-2"},[i("p",{staticClass:"author"},[t._v(" "+t._s(e.date)+" - "+t._s(e.author.substring(1))+" ")]),i("p",{staticClass:"cat"},[t._v(t._s(e.category.substring(1)))]),i("h2",{staticClass:"title"},[t._v(t._s(e.title.substring(1)))])]),i("div",{staticClass:"box-3"},[e.saved?i("img",{staticClass:"book",attrs:{src:a("3a8f"),alt:"unsave"},on:{click:function(a){return t.$parent.bookmark(e,!1)}}}):t.articles.saved?t._e():i("img",{staticClass:"book",attrs:{src:a("3edb"),alt:"save"},on:{click:function(a){return t.$parent.bookmark(e,!0)}}})])])])})),i("center",{staticStyle:{"font-size":"8pt"}},[i("p",{staticStyle:{"margin-bottom":"0vh"}},[t._v(" visit "),i("a",{attrs:{href:"https://penmenpress.com/"}},[t._v("https://penmenpress.com/")]),t._v(" for more snhu reporting ")]),i("p",{staticStyle:{"margin-bottom":"14vh","margin-top":"0.5vh"}},[t._v(" © penmenpress 2021, all rights reserved ")])])],2)},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"feed-header"},[a("h1",{staticStyle:{"margin-left":"3%",opacity:"1","margin-top":"0vh","margin-bottom":"0px"}},[t._v(" NEWS FEED ")])])}],F={props:["articles"],data:function(){return{topStyle:"display: none;"}},mounted:function(){window.scrollTo(0,localStorage.pagePosFeed)},created:function(){addEventListener("scroll",this.captureY)},destroyed:function(){removeEventListener("scroll",this.captureY)},methods:{captureY:function(){localStorage.pagePosFeed=window.scrollY,window.scrollY>500?this.topStyle="":this.topStyle="display: none;"},top:function(){window.scrollTo({top:0,behavior:"smooth"})}}},L=F,R=(a("9905"),Object(m["a"])(L,$,j,!1,null,"61deaa58",null)),I=R.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("center",[i("img",{staticClass:"refresh-icon",style:t.refresh,attrs:{src:a("b7d8"),alt:"refresh"}})]),t._m(0),i("img",{staticClass:"top-button",style:t.topStyle,attrs:{src:a("89c3"),alt:"scroll-up"},on:{click:function(e){return t.top()}}}),t._l(t.trendingArticles,(function(e){return i("div",{key:e.id,staticClass:"parent",staticStyle:{"margin-top":"2vh"}},[i("div",{staticClass:"box-1",on:{click:function(a){return t.$parent.articleRequested(e)}}},[i("p",{staticClass:"ranking"},[t._v(t._s(t.rank(e)))]),i("img",{staticClass:"photo",attrs:{src:e.image,alt:e.imageCaption}}),i("div",{staticClass:"box-2"},[i("p",{staticClass:"author"},[t._v(t._s(e.date)+" - "+t._s(e.author.substring(1)))]),i("p",{staticClass:"cat"},[t._v(t._s(e.category.substring(1)))]),i("h2",{staticClass:"title"},[t._v(t._s(e.title.substring(1)))])]),i("div",{staticClass:"box-3"},[e.saved?i("img",{staticClass:"book",attrs:{src:a("3a8f"),alt:"unsave"},on:{click:function(a){return t.$parent.bookmark(e,!1)}}}):t.articles.saved?t._e():i("img",{staticClass:"book",attrs:{src:a("3edb"),alt:"save"},on:{click:function(a){return t.$parent.bookmark(e,!0)}}})])])])})),i("br"),i("br"),i("br"),i("br"),i("br")],2)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"feed-header"},[a("h1",{staticStyle:{"margin-left":"3%",opacity:"1","margin-top":"0px","margin-bottom":"0px"}},[t._v("TRENDING")])])}],Q={props:["articles"],data:function(){return{trendingArticles:[],refresh:"display: none;",blocked:!1,topStyle:"display: none;"}},mounted:function(){this.sortTrending()},created:function(){addEventListener("scroll",this.captureY),addEventListener("touchend",this.checkReload)},destroyed:function(){removeEventListener("scroll",this.captureY),removeEventListener("touchend",this.checkReload)},methods:{checkReload:function(){var t=this;window.scrollY<-100&&!this.blocked&&(this.blocked=!0,this.refresh="transform: rotate(1350deg)",this.$parent.loadAssets(),setTimeout((function(){t.blocked=!1,t.refresh="display: none",t.sortTrending()}),3e3))},captureY:function(){window.scrollY>500?this.topStyle="":this.topStyle="display: none;",console.log(this.topStyle),window.scrollY<-100&&!this.blocked?this.refresh="":this.blocked||(this.refresh="display: none")},sortTrending:function(){this.trendingArticles=this.articles,this.trendingArticles.sort((function(t,e){return e.score-t.score}))},rank:function(t){var e=this.trendingArticles.indexOf(t)+1;return e<10&&(e="0"+e),e},top:function(){window.scrollTo({top:0,behavior:"smooth"})}}},Y=Q,P=(a("d585"),Object(m["a"])(Y,M,N,!1,null,"23c53a63",null)),q=P.exports,H={name:"App",components:{Content:y,Discover:x,Bookmarked:z,Feed:I,Trending:q},data:function(){return{bookmarked:[],articleData:[],styleSelected:"display: none",contentView:!1,selectedArticle:{},page:"home",requestHandler:!0,articles:[]}},mounted:function(){this.loadAssets()},methods:{bookmark:function(t,e){this.confirmRequest(!1),t.saved=e,this.bookmarked=[];for(var a=0;a<this.articles.length;a++)this.articles[a].saved&&this.bookmarked.push(this.articles[a].title);localStorage.bookmarked=this.bookmarked},articleRequested:function(t){this.selectedArticle=t,setTimeout(this.confirmRequest(!0),3)},confirmRequest:function(t){t||(this.requestHandler=!1),this.requestHandler&&this.toggleContentView(),this.requestHandler=!!t},toggleContentView:function(){window.scrollTo(0,0),this.contentView=!this.contentView},navigate:function(t){"trending"!=t&&(this.articles.sort((function(t,e){return e.dateScore-t.dateScore})),window.scrollTo(0,0)),this.styleSelected="bookmarked"===t?"":"display: none",this.page=t},pressFormatDate:function(t,e,a){var i=["January","February","March","April","May","June","July","August","September","October","November","December"];return"".concat(i[e-1]," ").concat(t,", ").concat(a)},loadAssets:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i,s,r,n,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/articles").then((function(e){t.articleData=e.data})).catch((function(t){return console.log(t)}));case 2:t.articles=[],a=0;case 4:if(!(a<t.articleData.length)){e.next=16;break}return i=void 0,s=void 0,e.next=9,f.a.get("/api/articleAuthor/".concat(t.articleData[a].id)).then((function(t){i=t.data})).catch((function(t){return console.log(t)}));case 9:return e.next=11,f.a.get("/api/authors/".concat(i[0])).then((function(t){s="".concat(t.data.firstName," ").concat(t.data.lastName)})).catch((function(t){return console.log(t)}));case 11:r=new u(t.articleData[a].title,t.articleData[a].photo,t.articleData[a].category,s,t.pressFormatDate(t.articleData[a].releaseDay,t.articleData[a].releaseMonth,t.articleData[a].releaseYear),t.articleData[a].content,t.articleData[a].score,t.articleData[a].id),t.articles.push(r);case 13:a++,e.next=4;break;case 16:if(t.articles.sort((function(t,e){return e.dateScore-t.dateScore})),localStorage.bookmarked)for(n=localStorage.bookmarked.split(","),t.bookmarked=["Saved Articles Detected"],o=0;o<n.length;o++)for(c=0;c<t.articles.length;c++)t.articles[c].title===n[o]&&(t.articles[c].saved=!0);case 18:case"end":return e.stop()}}),e)})))()}}},V=H,B=(a("034f"),Object(m["a"])(V,s,r,!1,null,null,null)),J=B.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(J)}}).$mount("#app")},"57ca":function(t,e,a){t.exports=a.p+"img/discovericon.2e5b6d26.svg"},"643b":function(t,e,a){"use strict";a("bc8f")},"65b5":function(t,e,a){t.exports=a.p+"img/savedicon.b83b1fc0.svg"},"6f2b":function(t,e,a){t.exports=a.p+"img/share.9d02641e.svg"},"70c2":function(t,e,a){t.exports=a.p+"img/savedicon-filled.b8ff736b.svg"},"85ec":function(t,e,a){},"89c3":function(t,e,a){t.exports=a.p+"img/top-button.b107fca2.svg"},9213:function(t,e,a){},9365:function(t,e,a){t.exports=a.p+"img/website.490d041f.svg"},9905:function(t,e,a){"use strict";a("0ea9")},aaa3:function(t,e,a){t.exports=a.p+"img/facebook.78d6179d.svg"},b7d8:function(t,e,a){t.exports=a.p+"img/refresh.04f00413.svg"},bc8f:function(t,e,a){},d585:function(t,e,a){"use strict";a("49a4")},e97f:function(t,e,a){t.exports=a.p+"img/feedicon.f27ffd8a.svg"},fee4:function(t,e,a){t.exports=a.p+"img/backsearch.fb860877.svg"}});
//# sourceMappingURL=app.6b59f91d.js.map