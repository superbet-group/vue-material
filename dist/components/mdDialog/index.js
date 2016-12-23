!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}({0:function(t,e,n){t.exports=n(14)},1:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(t){return!(!t||!t.$el||0===t._uid)&&(t.mdTheme||t.mdName?t:this.getClosestThemedParent(t.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var t=this.closestThemedParent.mdTheme;return t||(t=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+t}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},t.exports=e.default},3:function(t,e){"use strict";function n(){var t=document.createElement("span"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n(),t.exports=e.default},14:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-dialog",t.extend(s.default)),t.component("md-dialog-title",t.extend(a.default)),t.component("md-dialog-content",t.extend(c.default)),t.component("md-dialog-actions",t.extend(f.default)),t.component("md-dialog-alert",t.extend(p.default)),t.component("md-dialog-confirm",t.extend(g.default)),t.component("md-dialog-prompt",t.extend(C.default)),t.material.styles.push(T.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var d=n(156),s=o(d),r=n(159),a=o(r),l=n(158),c=o(l),u=n(157),f=o(u),m=n(160),p=o(m),h=n(161),g=o(h),v=n(162),C=o(v),_=n(123),T=o(_);t.exports=e.default},52:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),d=o(i),s=n(3),r=o(s);e.default={props:{mdClickOutsideToClose:{type:Boolean,default:!0},mdEscToClose:{type:Boolean,default:!0},mdBackdrop:{type:Boolean,default:!0},mdOpenFrom:String,mdCloseTo:String,mdFullscreen:{type:Boolean,default:!1}},mixins:[d.default],data:function(){return{active:!1,transitionOff:!1,dialogTransform:""}},computed:{classes:function(){return{"md-active":this.active}},dialogClasses:function(){return{"md-fullscreen":this.mdFullscreen,"md-transition-off":this.transitionOff,"md-reference":this.mdOpenFrom||this.mdCloseTo}},styles:function(){return{transform:this.dialogTransform}}},methods:{removeDialog:function(){this.rootElement.contains(this.dialogElement)&&this.$el.parentNode.removeChild(this.$el)},calculateDialogPos:function(t){var e=document.querySelector(t);if(e){var n=e.getBoundingClientRect(),o=this.dialogInnerElement.getBoundingClientRect(),i=n.width/o.width,d=n.height/o.height,s={top:-(o.top-n.top),left:-(o.left-n.left+n.width)};n.top>o.top+o.height&&(s.top=n.top-o.top),n.left>o.left+o.width&&(s.left=n.left-o.left-n.width),this.dialogTransform="translate3D("+s.left+"px, "+s.top+"px, 0) scale("+i+", "+d+")"}},open:function(){var t=this;this.rootElement.appendChild(this.dialogElement),this.transitionOff=!0,this.calculateDialogPos(this.mdOpenFrom),window.setTimeout(function(){t.dialogElement.focus(),t.transitionOff=!1,t.active=!0}),this.$emit("open")},closeOnEsc:function(){this.mdEscToClose&&this.close()},close:function(){var t=this;this.rootElement.contains(this.dialogElement)&&this.$nextTick(function(){var e=function e(){var n=t.dialogElement.querySelector(".md-ripple.md-active");n&&n.classList.remove("md-active"),t.dialogInnerElement.removeEventListener(r.default,e),t.rootElement.removeChild(t.dialogElement),t.dialogTransform=""};t.transitionOff=!0,t.dialogTransform="",t.calculateDialogPos(t.mdCloseTo),window.setTimeout(function(){t.transitionOff=!1,t.active=!1,t.dialogInnerElement.addEventListener(r.default,e)}),t.$emit("close")})}},mounted:function(){var t=this;this.$nextTick(function(){t.rootElement=t.$root.$el,t.dialogElement=t.$el,t.dialogInnerElement=t.$refs.dialog,t.removeDialog()})},beforeDestroy:function(){this.removeDialog()}},t.exports=e.default},53:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTitle:String,mdContent:String,mdContentHtml:String,mdOkText:{type:String,default:"Ok"}},data:function(){return{debounce:!1}},methods:{fireCloseEvent:function(){this.debounce||this.$emit("close")},open:function(){this.$emit("open"),this.debounce=!1,this.$refs.dialog.open()},close:function(){this.fireCloseEvent(),this.debounce=!0,this.$refs.dialog.close()}},mounted:function(){if(!this.mdContent&&!this.mdContentHtml)throw new Error("Missing md-content or md-content-html attributes")}},t.exports=e.default},54:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTitle:String,mdContent:String,mdContentHtml:String,mdOkText:{type:String,default:"Ok"},mdCancelText:{type:String,default:"Cancel"}},data:function(){return{debounce:!1}},methods:{fireCloseEvent:function(t){this.debounce||this.$emit("close",t)},open:function(){this.$emit("open"),this.debounce=!1,this.$refs.dialog.open()},close:function(t){this.fireCloseEvent(t),this.debounce=!0,this.$refs.dialog.close()}},mounted:function(){if(!this.mdContent&&!this.mdContentHtml)throw new Error("Missing md-content or md-content-html attributes")}},t.exports=e.default},55:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:[String,Number],required:!0},mdTitle:String,mdContent:String,mdContentHtml:String,mdOkText:{type:String,default:"Ok"},mdCancelText:{type:String,default:"Cancel"},mdInputId:String,mdInputName:String,mdInputMaxlength:[String,Number],mdInputPlaceholder:String},data:function(){return{debounce:!1}},methods:{fireCloseEvent:function(t){this.debounce||this.$emit("close",t)},open:function(){var t=this;this.$emit("open"),this.debounce=!1,this.$refs.dialog.open(),window.setTimeout(function(){t.$refs.input.$el.focus()})},close:function(t){this.fireCloseEvent(t),this.debounce=!0,this.$refs.dialog.close()},confirmValue:function(){this.$emit("input",this.$refs.input.$el.value),this.close("ok")}}},t.exports=e.default},106:function(t,e){},123:function(t,e){t.exports=".THEME_NAME.md-dialog-container .md-dialog{background-color:BACKGROUND-COLOR-A100;color:BACKGROUND-CONTRAST}\n"},156:function(t,e,n){var o,i;n(106),o=n(52);var d=n(231);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=d.render,i.staticRenderFns=d.staticRenderFns,t.exports=o},157:function(t,e,n){var o,i,d=n(228);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=d.render,i.staticRenderFns=d.staticRenderFns,t.exports=o},158:function(t,e,n){var o,i,d=n(203);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=d.render,i.staticRenderFns=d.staticRenderFns,t.exports=o},159:function(t,e,n){var o,i,d=n(198);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=d.render,i.staticRenderFns=d.staticRenderFns,t.exports=o},160:function(t,e,n){var o,i;o=n(53);var d=n(246);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=d.render,i.staticRenderFns=d.staticRenderFns,t.exports=o},161:function(t,e,n){var o,i;o=n(54);var d=n(229);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=d.render,i.staticRenderFns=d.staticRenderFns,t.exports=o},162:function(t,e,n){var o,i;o=n(55);var d=n(201);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=d.render,i.staticRenderFns=d.staticRenderFns,t.exports=o},198:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-dialog-title md-title"},[t._t("default")],!0)},staticRenderFns:[]}},201:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("md-dialog",{ref:"dialog",staticClass:"md-dialog-prompt",on:{close:function(e){t.fireCloseEvent("cancel")}}},[t.mdTitle?e("md-dialog-title",[t._v(t._s(t.mdTitle))]):t._e(),t._v(" "),t.mdContentHtml?e("md-dialog-content",{domProps:{innerHTML:t._s(t.mdContentHtml)}}):t._e(),t._v(" "),t.mdContent?e("md-dialog-content",[t._v(t._s(t.mdContent))]):t._e(),t._v(" "),e("md-dialog-content",[e("md-input-container",[e("md-input",{ref:"input",attrs:{id:t.mdInputId,name:t.mdInputName,maxlength:t.mdInputMaxlength,placeholder:t.mdInputPlaceholder,value:t.value},nativeOn:{keydown:function(e){t._k(e.keyCode,"enter",13)||t.confirmValue(e)}}})])]),t._v(" "),e("md-dialog-actions",[e("md-button",{staticClass:"md-primary",on:{click:function(e){t.close("cancel")}}},[t._v(t._s(t.mdCancelText))]),t._v(" "),e("md-button",{staticClass:"md-primary",on:{click:t.confirmValue}},[t._v(t._s(t.mdOkText))])])])},staticRenderFns:[]}},203:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-dialog-content"},[t._t("default")],!0)},staticRenderFns:[]}},228:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-dialog-actions"},[t._t("default")],!0)},staticRenderFns:[]}},229:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("md-dialog",{ref:"dialog",staticClass:"md-dialog-confirm",on:{close:function(e){t.fireCloseEvent("cancel")}}},[t.mdTitle?e("md-dialog-title",[t._v(t._s(t.mdTitle))]):t._e(),t._v(" "),t.mdContentHtml?e("md-dialog-content",{domProps:{innerHTML:t._s(t.mdContentHtml)}}):e("md-dialog-content",[t._v(t._s(t.mdContent))]),t._v(" "),t._v(" "),e("md-dialog-actions",[e("md-button",{staticClass:"md-primary",on:{click:function(e){t.close("cancel")}}},[t._v(t._s(t.mdCancelText))]),t._v(" "),e("md-button",{staticClass:"md-primary",on:{click:function(e){t.close("ok")}}},[t._v(t._s(t.mdOkText))])])])},staticRenderFns:[]}},231:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"md-dialog-container",class:[t.themeClass,t.classes],attrs:{tabindex:"0"},on:{keyup:function(e){t._k(e.keyCode,"esc",27)||(e.stopPropagation(),t.closeOnEsc(e))}}},[e("div",{ref:"dialog",staticClass:"md-dialog",class:t.dialogClasses,style:t.styles},[t._t("default")],!0),t._v(" "),t.mdBackdrop?e("md-backdrop",{ref:"backdrop",staticClass:"md-dialog-backdrop",class:t.classes,on:{close:function(e){t.mdClickOutsideToClose&&t.close()}}}):t._e()])},staticRenderFns:[]}},246:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("md-dialog",{ref:"dialog",staticClass:"md-dialog-alert",on:{close:function(e){t.fireCloseEvent()}}},[t.mdTitle?e("md-dialog-title",[t._v(t._s(t.mdTitle))]):t._e(),t._v(" "),t.mdContentHtml?e("md-dialog-content",{domProps:{innerHTML:t._s(t.mdContentHtml)}}):e("md-dialog-content",[t._v(t._s(t.mdContent))]),t._v(" "),t._v(" "),e("md-dialog-actions",[e("md-button",{staticClass:"md-primary",on:{click:function(e){t.close()}}},[t._v(t._s(t.mdOkText))])])])},staticRenderFns:[]}}})});