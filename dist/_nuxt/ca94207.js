(window.webpackJsonp=window.webpackJsonp||[]).push([[24,16,18],{244:function(e,l,t){"use strict";t.r(l);var r={props:{sources:{type:Array,required:!0},alt:{type:String,required:!0},title:{type:String,requered:!0},imgClass:{type:String,required:!1},lazyload:{type:Boolean,required:!1,default:!0},role:{type:String,required:!1}},methods:{loaded:function(e){var l=e.currentTarget.src;this.$emit("img-load",l)}}},o=t(43),component=Object(o.a)(r,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("picture",{staticClass:"responsive-image",class:e.lazyload?"lazyload":""},[e._l(e.sources,(function(source,l){return t("source",{key:l,attrs:{"data-srcset":e.lazyload?source.src:null,srcset:e.lazyload?null:source.src,media:source.query,type:source.type}})})),e._v(" "),e.lazyload?t("img",{staticClass:"lazyload",class:e.imgClass,attrs:{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-srcset":"data:image/gif;base64, R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",typeof:"foaf:Image",loading:"lazy",alt:e.alt,title:e.title,role:e.role},on:{lazyloaded:e.loaded}}):t("img",{staticClass:"hide-on-noscript",class:e.imgClass,attrs:{src:e.sources[0].src.split(",")[0],srcset:e.sources[0].src,alt:e.alt,title:e.title,role:e.role},on:{load:e.loaded}}),e._v(" "),e.lazyload?t("no-script-span",[t("img",{staticClass:"is-hidden-desktop",class:e.imgClass,attrs:{loading:"lazy",src:e.sources[0].src.split(",")[0],srcset:e.sources[0].src,alt:e.alt,role:e.role}}),e._v(" "),t("img",{staticClass:"is-hidden-touch",class:e.imgClass,attrs:{loading:"lazy",src:e.sources[1]?e.sources[1].src.split(",")[0]:e.sources[0].src.split(",")[0],srcset:e.sources[1]?e.sources[1].src:e.sources[0].src,alt:e.alt,role:e.role}})]):e._e()],2)}),[],!1,null,null,null);l.default=component.exports}}]);