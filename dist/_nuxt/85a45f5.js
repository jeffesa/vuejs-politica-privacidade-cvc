(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{273:function(t,o,e){t.exports={}},294:function(t,o,e){"use strict";e(273)},320:function(t,o,e){"use strict";e.r(o);var n={props:{content:{type:Object,required:!0}},data:function(){return{resizeTimeout:null,useSmallBox:!1}},methods:{goToComponent:function(t){this.$emit("goToSummary",t)},onScrollToUp:function(t){var o=this.moveToUp?this.offsetTop-60:0;window.scroll({top:o,left:0,behavior:"smooth"}),this.moveToDown=!this.moveToUp}}},r=(e(294),e(43)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"summary"},[e("div",{staticClass:"summary__container container mx-auto mb-0 lg:mb-10 relative"},[e("div",{staticClass:"summary__arrow-up",on:{click:t.onScrollToUp}},[e("svg",{attrs:{width:"24",height:"36",viewBox:"0 0 24 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10.5 34C10.5 34.8284 11.1716 35.5 12 35.5C12.8284 35.5 13.5 34.8284 13.5 34L10.5 34ZM13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807613 11.0711 0.807613 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM13.5 34L13.5 2L10.5 2L10.5 34L13.5 34Z",fill:"#645AD7"}})])]),t._v(" "),e("h1",{staticClass:"hidden lg:block summary__title",domProps:{textContent:t._s(t.content.summary.title)}}),t._v(" "),e("ul",{staticClass:"summary__list m-auto hidden lg:grid grid-cols-2"},t._l(t.content.summary.menu,(function(o,i){return e("li",{key:i,staticClass:"summary__list__item flex items-center relative",on:{click:function(e){return t.goToComponent(o.name)}}},[e("p",{staticClass:"summary__list__item__text",domProps:{innerHTML:t._s(""+o.title)}}),t._v(" "),e("svg",{staticClass:"summary__list__icon",attrs:{width:"22",height:"11",viewBox:"0 0 22 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"22",height:"11",fill:"white"}}),t._v(" "),e("path",{attrs:{d:"M2.75 1.83301L10.8889 9.16634L19.0279 1.83301",stroke:"#050091","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])})),0)]),t._v(" "),e("ul",{staticClass:"summary__content container mx-auto mx-4"},[t._t("default")],2)])}),[],!1,null,"72050986",null);o.default=component.exports}}]);