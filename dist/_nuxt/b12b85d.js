(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{249:function(t,e,r){t.exports={}},250:function(t,e,r){"use strict";var n=r(11),o=r(5),c=r(3),f=r(104),l=r(16),_=r(12),v=r(177),d=r(33),N=r(75),I=r(176),h=r(4),w=r(76).f,E=r(26).f,m=r(15).f,C=r(268),x=r(269).trim,y="Number",A=o.Number,L=A.prototype,S=o.TypeError,T=c("".slice),F=c("".charCodeAt),O=function(t){var e=I(t,"number");return"bigint"==typeof e?e:M(e)},M=function(t){var e,r,n,o,c,f,l,code,_=I(t,"number");if(N(_))throw S("Cannot convert a Symbol value to a number");if("string"==typeof _&&_.length>2)if(_=x(_),43===(e=F(_,0))||45===e){if(88===(r=F(_,2))||120===r)return NaN}else if(48===e){switch(F(_,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+_}for(f=(c=T(_,2)).length,l=0;l<f;l++)if((code=F(c,l))<48||code>o)return NaN;return parseInt(c,n)}return+_};if(f(y,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var j,k=function(t){var e=arguments.length<1?0:A(O(t)),r=this;return d(L,r)&&h((function(){C(r)}))?v(Object(e),r,k):e},P=n?w(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;P.length>R;R++)_(A,j=P[R])&&!_(k,j)&&m(k,j,E(A,j));k.prototype=L,L.constructor=k,l(o,y,k,{constructor:!0})}},268:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},269:function(t,e,r){var n=r(3),o=r(23),c=r(13),f=r(270),l=n("".replace),_="["+f+"]",v=RegExp("^"+_+_+"*"),d=RegExp(_+_+"*$"),N=function(t){return function(e){var r=c(o(e));return 1&t&&(r=l(r,v,"")),2&t&&(r=l(r,d,"")),r}};t.exports={start:N(1),end:N(2),trim:N(3)}},270:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},271:function(t,e,r){"use strict";r(249)},276:function(t,e,r){"use strict";r.r(e);r(250);var n={props:{content:{type:Object,required:!0},progress:{type:Number,required:!0}},data:function(){return{}},methods:{}},o=(r(271),r(43)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"progress"},[r("div",{staticClass:"progress__container"},[r("div",{staticClass:"progress__shadow flex relative"},[r("svg",{staticClass:"progress__icon",attrs:{width:"9",height:"18",viewBox:"0 0 9 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.72574 0.18573C9.05505 0.462998 9.09319 0.95 8.81092 1.27348L2.06872 9L8.81092 16.7265C9.09319 17.05 9.05505 17.537 8.72574 17.8143C8.39642 18.0915 7.90063 18.0541 7.61836 17.7306L-9.53674e-07 9L7.61836 0.269403C7.90063 -0.0540764 8.39642 -0.091538 8.72574 0.18573Z",fill:"#0A00B4"}})]),t._v(" "),r("p",{staticClass:"progress__title flex justify-center items-center w-full"},[t._v("Política de privacidade")])]),t._v(" "),r("div",{staticClass:"progress__percent"},[r("p",{staticClass:"progress__text"},[t._v("Progresso "+t._s(t.progress)+"%")]),t._v(" "),r("div",{staticClass:"progress__bar",class:"progress__bar__"+t.progress})])])])}),[],!1,null,"71b6c42e",null);e.default=component.exports}}]);