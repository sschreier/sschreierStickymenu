(window.webpackJsonp=window.webpackJsonp||[]).push([["sschreier-sticky-menu"],{FUb4:function(i,e,t){"use strict";t.r(e);var n=t("FGIj"),o=t("gHbT"),r=t("nnsc");function a(i){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(i)}function s(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function u(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function c(i,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(i){if(void 0===i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(i):e}function l(i){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(i)}function v(i,e){return(v=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i})(i,e)}var f,p,y,h=function(i){function e(){return s(this,e),c(this,l(e).apply(this,arguments))}var t,n,a;return function(i,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),e&&v(i,e)}(e,i),t=e,(n=[{key:"init",value:function(){this.PluginManager=window.PluginManager,this.subscribeViewportEvent(),this.pluginShouldBeActive()&&this.initializePlugin()}},{key:"createElement",value:function(){this._mainNavigationClone=this.el.cloneNode(!0),this._mainNavigationClone.classList.add(this.options.cloneMainNavigationStickyClass),o.a.querySelector(this._mainNavigationClone,".main-navigation").removeAttribute("id"),document.body.appendChild(this._mainNavigationClone)}},{key:"addEventListener",value:function(){document.addEventListener("scroll",this.onScroll.bind(this))}},{key:"removeEventListener",value:function(){document.removeEventListener("scroll",this.onScroll.bind(this))}},{key:"onScroll",value:function(){document.documentElement.scrollTop>this.options.positionStickyMenuIsActive?this._mainNavigationClone.classList.contains("is--active")||this._mainNavigationClone.classList.add("is--active"):this._mainNavigationClone.classList.remove("is--active")}},{key:"reinitializePlugin",value:function(){this.PluginManager.initializePlugin("FlyoutMenu",'[data-flyout-menu="true"]',{})}},{key:"subscribeViewportEvent",value:function(){document.$emitter.subscribe("Viewport/hasChanged",this.update,{scope:this})}},{key:"update",value:function(){if(this.pluginShouldBeActive()){if(this.initialized)return;this.initializePlugin()}else{if(!this.initialized)return;this.destroy()}}},{key:"pluginShouldBeActive",value:function(){return!this.options.notActiveViewportsStickyMenu.includes(r.a.getCurrentViewport())}},{key:"initializePlugin",value:function(){this.createElement(),this.addEventListener(),this.reinitializePlugin(),this.initialized=!0}},{key:"destroy",value:function(){this._mainNavigationClone.remove(),this.removeEventListener(),this.initialized=!1}}])&&u(t.prototype,n),a&&u(t,a),e}(n.a);y={cloneMainNavigationStickyClass:"main-navigation-sticky",positionStickyMenuIsActive:120,notActiveViewportsStickyMenu:"'XS', 'SM', 'MD'"},(p="options")in(f=h)?Object.defineProperty(f,p,{value:y,enumerable:!0,configurable:!0,writable:!0}):f[p]=y,window.PluginManager.register("StickyMenuPlugin",h,"[data-sticky-menu]",{positionStickyMenuIsActive:120,notActiveViewportsStickyMenu:"'XS', 'SM', 'MD'"})}},[["FUb4","runtime","vendor-node","vendor-shared"]]]);