(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{164:function(t,n,e){"use strict";var r=e(43);e.n(r).a},21:function(t,n,e){"use strict";e.d(n,"d",function(){return r}),e.d(n,"f",function(){return c}),e.d(n,"g",function(){return a}),e.d(n,"h",function(){return l}),e.d(n,"b",function(){return f}),e.d(n,"e",function(){return h}),e.d(n,"j",function(){return p}),e.d(n,"k",function(){return d}),e.d(n,"c",function(){return g}),e.d(n,"i",function(){return m}),e.d(n,"a",function(){return b});const r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,s=/^(https?:|mailto:|tel:)/;function u(t){return decodeURI(t).replace(r,"").replace(i,"")}function c(t){return s.test(t)}function a(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(c(t))return t;const n=t.match(r),e=n?n[0]:"",i=u(t);return o.test(i)?t:i+".html"+e}function h(t,n){const e=t.hash,i=function(t){const n=t.match(r);if(n)return n[0]}(n);return(!i||e===i)&&u(t.path)===u(n)}function p(t,n,e){e&&(n=function(t,n,e){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;const i=n.split("/");e&&i[i.length-1]||i.pop();const o=t.replace(/^\//,"").split("/");for(let t=0;t<o.length;t++){const n=o[t];".."===n?i.pop():"."!==n&&i.push(n)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));const r=u(n);for(let n=0;n<t.length;n++)if(u(t[n].regularPath)===r)return Object.assign({},t[n],{type:"page",path:f(t[n].path)});return console.error(`[vuepress] No matching page found for sidebar item "${n}"`),{}}function d(t,n,e,r){const{pages:i,themeConfig:o}=e,s=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||s.sidebar||o.sidebar))return function(t){const n=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:n.map(n=>({type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}))}]}(t);const u=s.sidebar||o.sidebar;if(u){const{base:t,config:e}=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(const r in n)if(0===(e=t,/(\.html|\/)$/.test(e)?e:e+"/").indexOf(r))return{base:r,config:n[r]};var e;return{}}(n,u);return e?e.map(n=>(function t(n,e,r,i){if("string"==typeof n)return p(e,n,r);if(Array.isArray(n))return Object.assign(p(e,n[0],r),{title:n[1]});{i&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const o=n.children||[];return{type:"group",title:n.title,children:o.map(n=>t(n,e,r,!0)),collapsable:!1!==n.collapsable}}})(n,i,t)):[]}return[]}function g(t){let n;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)}),t.filter(t=>2===t.level)}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}const b=function(t,n,e){var r,i,o,s,u;function c(){var a=Date.now()-s;a<n&&a>=0?r=setTimeout(c,n-a):(r=null,e||(u=t.apply(o,i),o=i=null))}null==n&&(n=100);var a=function(){o=this,i=arguments,s=Date.now();var a=e&&!r;return r||(r=setTimeout(c,n)),a&&(u=t.apply(o,i),o=i=null),u};return a.clear=function(){r&&(clearTimeout(r),r=null)},a.flush=function(){r&&(u=t.apply(o,i),o=i=null,clearTimeout(r),r=null)},a}},215:function(t,n,e){"use strict";e.r(n);var r=e(21),i={props:["logo"],computed:{imgLogo(){const t=this.logo?this.logo:this.$site.themeConfig.logo;return Object(r.f)(t)?t:this.$withBase(t)}}},o=(e(164),e(1)),s=Object(o.a)(i,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"theme-track--brand"},[n("router-link",{staticClass:"theme-track--logo",attrs:{to:this.$localePath}},[this.imgLogo?n("img",{attrs:{src:this.imgLogo}}):n("h1",[this._v(this._s(this.$site.title))])])],1)},[],!1,null,null,null);s.options.__file="Brand.vue";n.default=s.exports},43:function(t,n,e){}}]);