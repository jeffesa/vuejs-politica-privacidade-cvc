(window.webpackJsonp=window.webpackJsonp||[]).push([[2,17],{255:function(t,e,o){t.exports={}},256:function(t,e,o){t.exports={}},281:function(t,e,o){"use strict";o(255)},282:function(t,e,o){"use strict";o(256)},309:function(t,e,o){t.exports={}},313:function(t,e,o){"use strict";o.r(e);var r=o(314),n=o(315),l={components:{StorePlatform:r.default,DataProvided:n.default},props:{content:{type:Object,required:!0}}},d=(o(325),o(43)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"personal-data"},[o("div",{staticClass:"flex flex-col w-full"},[o("div",{staticClass:"personal-data__title"},[o("h1",{domProps:{innerHTML:t._s(t.content.title)}})]),t._v(" "),o("div",{staticClass:"personal-data__container"},[o("div",{staticClass:"personal-data__container__content"},[o("StorePlatform",{attrs:{content:t.content.storePlatform}}),t._v(" "),o("DataProvided",{staticClass:"personal-data__store-platform",attrs:{content:t.content.dataProvided}},t._l(t.content.dataProvided.list,(function(e,i){return o("li",{key:i},[o("span",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),o("p",{domProps:{innerHTML:t._s(e.description)}})])})),0),t._v(" "),o("DataProvided",{staticClass:"personal-data__data-provided",attrs:{content:t.content.dataPlatform}},t._l(t.content.dataPlatform.list,(function(e,i){return o("li",{key:i,staticClass:"personal-data__data-provided__item"},[o("span",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),o("p",{domProps:{innerHTML:t._s(e.description)}}),t._v(" "),t.content.dataPlatform.dataRelated?o("div",{staticClass:"personal-data__data-related flex flex-col justify-center m-auto"},[o("div",{staticClass:"personal-data__data-related__item",domProps:{innerHTML:t._s(t.content.dataPlatform.dataRelated.title)}}),t._v(" "),t._l(t.content.dataPlatform.dataRelated.list,(function(e,i){return o("div",{key:i,staticClass:"personal-data__data-related__item",domProps:{innerHTML:t._s(e.example)}})}))],2):t._e(),t._v(" "),o("p",{staticClass:"personal-data__data-provided__moreinformation",domProps:{innerHTML:t._s(t.content.dataPlatform.moreInformation)}})])})),0),t._v(" "),o("DataProvided",{staticClass:"personal-data__data-shared",attrs:{content:t.content.dataShared}},t._l(t.content.dataShared.list,(function(e,i){return o("li",{key:i,staticClass:"personal-data__data-shared__item"},[o("span",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),o("p",{domProps:{innerHTML:t._s(e.description)}})])})),0),t._v(" "),o("div",{staticClass:"personal-data__text-LGPD"},[o("p",{domProps:{innerHTML:t._s(t.content.lgpd)}})])],1)])])])}),[],!1,null,"77c93a50",null);e.default=component.exports},314:function(t,e,o){"use strict";o.r(e);var r={props:{content:{type:Object,required:!0}}},n=(o(281),o(43)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"store-platform grid grid-cols-1 lg:grid-cols-2"},[o("ResponsiveImage",{staticClass:"store-platform__image",attrs:{lazyload:!1,sources:t.content.image.src,alt:t.content.image.alt}}),t._v(" "),o("div",{staticClass:"flex flex-col items-end"},[o("div",{staticClass:"store-platform__grid relative"},[o("div",{staticClass:"store-platform__rounded__content grid grid-cols-1 lg:grid-cols-3"},[o("div",{staticClass:"store-platform__grid flex order-2 lg:order-1"},[o("div",{staticClass:"store-platform__grid__place flex flex-col-reverse items-center lg:flex-col"},[o("ResponsiveImage",{staticClass:"store-platform__place__icon",attrs:{lazyload:!1,sources:t.content.grid.data.places[0].icon.src,alt:t.content.grid.data.places[0].icon.alt}}),t._v(" "),o("p",{staticClass:"store-platform__place__label",domProps:{innerHTML:t._s(t.content.grid.data.places[0].label)}})],1),t._v(" "),o("ResponsiveImage",{staticClass:"store-platform__place__arrow hidden lg:block",attrs:{lazyload:!1,sources:t.content.grid.arrow.src,alt:t.content.grid.arrow.alt}})],1),t._v(" "),o("p",{staticClass:"store-platform__circle order-1 lg:order-2 m-auto relative",domProps:{innerHTML:t._s(t.content.grid.data.text)}}),t._v(" "),o("div",{staticClass:"store-platform__grid flex order-3"},[o("ResponsiveImage",{staticClass:"store-platform__place__arrow hidden lg:block",attrs:{lazyload:!1,sources:t.content.grid.arrow.src,alt:t.content.grid.arrow.alt}}),t._v(" "),o("div",{staticClass:"store-platform__grid__place flex flex-col-reverse items-center lg:flex-col"},[o("ResponsiveImage",{staticClass:"store-platform__place__icon",attrs:{lazyload:!1,sources:t.content.grid.data.places[1].icon.src,alt:t.content.grid.data.places[1].icon.alt}}),t._v(" "),o("p",{staticClass:"store-platform__place__label",domProps:{innerHTML:t._s(t.content.grid.data.places[1].label)}})],1)],1)]),t._v(" "),o("div",{staticClass:"store-platform__information"},[o("ResponsiveImage",{staticClass:"store-platform__information__icon hidden lg:block",attrs:{lazyload:!1,sources:t.content.grid.arrow.src,alt:t.content.grid.arrow.alt}}),t._v(" "),o("ResponsiveImage",{staticClass:"store-platform__information__icon hidden lg:block",attrs:{lazyload:!1,sources:t.content.grid.arrow.src,alt:t.content.grid.arrow.alt}}),t._v(" "),o("p",{staticClass:"store-platform__information__text",domProps:{innerHTML:t._s(t.content.grid.information)}})],1)]),t._v(" "),o("p",{staticClass:"store-platform__details",domProps:{innerHTML:t._s(t.content.details)}})])],1)}),[],!1,null,"0a3f4c7a",null);e.default=component.exports;installComponents(component,{ResponsiveImage:o(244).default})},315:function(t,e,o){"use strict";o.r(e);var r={props:{content:{type:Object,required:!0}}},n=(o(282),o(43)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"data-provided"},[o("div",{staticClass:"data-provided__grid grid grid-cols-1 lg:grid-cols-2"},[o("div",{staticClass:"data-provided__informations"},[t.content.title?o("p",{staticClass:"data-provided__title text-center",domProps:{innerHTML:t._s(t.content.title)}}):t._e(),t._v(" "),t.content.description?o("p",{staticClass:"data-provided__description m-auto",domProps:{innerHTML:t._s(t.content.description)}}):t._e()]),t._v(" "),o("ul",{staticClass:"data-provided__list"},[t._t("default")],2)])])}),[],!1,null,"c776b8ee",null);e.default=component.exports},325:function(t,e,o){"use strict";o(309)}}]);