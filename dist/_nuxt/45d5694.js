(window.webpackJsonp=window.webpackJsonp||[]).push([[8,16,18,24,25],{244:function(t,e,o){"use strict";o.r(e);var l={props:{sources:{type:Array,required:!0},alt:{type:String,required:!0},title:{type:String,requered:!0},imgClass:{type:String,required:!1},lazyload:{type:Boolean,required:!1,default:!0},role:{type:String,required:!1}},methods:{loaded:function(t){var e=t.currentTarget.src;this.$emit("img-load",e)}}},r=o(43),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("picture",{staticClass:"responsive-image",class:t.lazyload?"lazyload":""},[t._l(t.sources,(function(source,e){return o("source",{key:e,attrs:{"data-srcset":t.lazyload?source.src:null,srcset:t.lazyload?null:source.src,media:source.query,type:source.type}})})),t._v(" "),t.lazyload?o("img",{staticClass:"lazyload",class:t.imgClass,attrs:{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-srcset":"data:image/gif;base64, R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",typeof:"foaf:Image",loading:"lazy",alt:t.alt,title:t.title,role:t.role},on:{lazyloaded:t.loaded}}):o("img",{staticClass:"hide-on-noscript",class:t.imgClass,attrs:{src:t.sources[0].src.split(",")[0],srcset:t.sources[0].src,alt:t.alt,title:t.title,role:t.role},on:{load:t.loaded}}),t._v(" "),t.lazyload?o("no-script-span",[o("img",{staticClass:"is-hidden-desktop",class:t.imgClass,attrs:{loading:"lazy",src:t.sources[0].src.split(",")[0],srcset:t.sources[0].src,alt:t.alt,role:t.role}}),t._v(" "),o("img",{staticClass:"is-hidden-touch",class:t.imgClass,attrs:{loading:"lazy",src:t.sources[1]?t.sources[1].src.split(",")[0]:t.sources[0].src.split(",")[0],srcset:t.sources[1]?t.sources[1].src:t.sources[0].src,alt:t.alt,role:t.role}})]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},245:function(t,e,o){t.exports={}},246:function(t,e,o){"use strict";o.r(e);var l={components:{},props:{content:{type:String,required:!0}}},r=(o(247),o(43)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card"},[o("div",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),t._t("default")],2)}),[],!1,null,"5e5f59de",null);e.default=component.exports},247:function(t,e,o){"use strict";o(245)},261:function(t,e,o){t.exports={}},286:function(t,e,o){"use strict";o(261)},302:function(t,e,o){"use strict";o.r(e);var l=o(246),r={components:{ResponsiveImage:o(244).default,Card:l.default},props:{content:{type:Object,required:!0}}},c=(o(286),o(43)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"cookies-technologies"},[o("div",{staticClass:"flex flex-col w-full"},[o("div",{staticClass:"cookies-technologies__title"},[o("h1",{domProps:{innerHTML:t._s(t.content.title)}})]),t._v(" "),o("div",{staticClass:"cookies-technologies__container"},[o("div",{staticClass:"cookies-technologies__container__content"},[o("div",{staticClass:"cookies-technologies__grid grid grid-cols-1 lg:grid-cols-2"},[o("div",[o("p",{staticClass:"cookies-technologies__text",domProps:{innerHTML:t._s(t.content.text)}}),t._v(" "),o("Card",{staticClass:"cookies-technologies__card",attrs:{content:t.content.card}})],1),t._v(" "),o("div",{staticClass:"cookies-technologies__todo"},[o("p",{staticClass:"cookies-technologies__todo__title",domProps:{innerHTML:t._s(t.content.todo.title)}}),t._v(" "),o("div",{staticClass:"grid grid-cols-1 lg:grid-cols-2"},[o("div",{staticClass:"cookies-technologies__todo__image order-2 lg:order-1"},[o("ResponsiveImage",{staticClass:"benefits-program__image order-1 lg:order-2 flex justify-start lg:justify-end",attrs:{lazyload:!1,sources:t.content.todo.image.src,alt:t.content.todo.image.alt}})],1),t._v(" "),o("ul",{staticClass:"cookies-technologies__todo__list order-1 lg:order-2"},t._l(t.content.todo.list,(function(e,i){return o("li",{key:i,staticClass:"cookies-technologies__todo__item text-center",domProps:{innerHTML:t._s(e)}})})),0)]),t._v(" "),o("p",{staticClass:"cookies-technologies__todo__description",domProps:{innerHTML:t._s(t.content.todo.description)}})])])])])])])}),[],!1,null,"5dd397e9",null);e.default=component.exports;installComponents(component,{ResponsiveImage:o(244).default})}}]);