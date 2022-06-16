"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5349],{5349:(O,_,f)=>{f.r(_),f.d(_,{ion_nav:()=>I,ion_nav_link:()=>D});var m=f(5861),g=f(7205),b=f(5729),T=f(8685),u=f(3756),v=f(9753),V=f(1878);class E{constructor(t,n){this.component=t,this.params=n,this.state=1}init(t){var n=this;return(0,m.Z)(function*(){if(n.state=2,!n.element){const i=n.component;n.element=yield(0,V.a)(n.delegate,t,i,["ion-page","ion-page-invisible"],n.params)}})()}_destroy(){(0,u.n)(3!==this.state,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}const B=(e,t,n)=>!(!e||e.component!==t)&&(0,u.s)(e.params,n),k=(e,t)=>e?e instanceof E?e:new E(e,t):null,I=class{constructor(e){(0,g.r)(this,e),this.ionNavWillLoad=(0,g.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,g.e)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,g.e)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=null!==document.querySelector("ion-router")&&null===this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=(0,b.b)(this);this.swipeGesture=b.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}componentDidLoad(){var e=this;return(0,m.Z)(function*(){e.rootChanged(),e.gesture=(yield f.e(8592).then(f.bind(f,6546))).createSwipeBackGesture(e.el,e.canStart.bind(e),e.onStart.bind(e),e.onMove.bind(e),e.onEnd.bind(e)),e.swipeGestureChanged()})()}disconnectedCallback(){for(const e of this.views)(0,v.l)(e.element,v.d),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=0,this.views.length=0,this.destroyed=!0}push(e,t,n,i){return this.insert(-1,e,t,n,i)}insert(e,t,n,i,s){return this.insertPages(e,[{component:t,componentProps:n}],i,s)}insertPages(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)}pop(e,t){return this.removeIndex(-1,1,e,t)}popTo(e,t,n){const i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)}popToRoot(e,t){return this.removeIndex(1,-1,e,t)}removeIndex(e,t=1,n,i){return this.queueTrns({removeStart:e,removeCount:t,opts:n},i)}setRoot(e,t,n,i){return this.setPages([{component:e,componentProps:t}],n,i)}setPages(e,t,n){return t??(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}setRouteId(e,t,n,i){const s=this.getActiveSync();if(B(s,e,t))return Promise.resolve({changed:!1,element:s.element});let r;const a=new Promise(c=>r=c);let o;const d={updateURL:!1,viewIsReady:c=>{let h;const p=new Promise(l=>h=l);return r({changed:!0,element:c,markVisible:(l=(0,m.Z)(function*(){h(),yield o}),function(){return l.apply(this,arguments)})}),p;var l}};if("root"===n)o=this.setRoot(e,t,d);else{const c=this.views.find(h=>B(h,e,t));c?o=this.popTo(c,Object.assign(Object.assign({},d),{direction:"back",animationBuilder:i})):"forward"===n?o=this.push(e,t,Object.assign(Object.assign({},d),{animationBuilder:i})):"back"===n&&(o=this.setRoot(e,t,Object.assign(Object.assign({},d),{direction:"back",animated:!0,animationBuilder:i})))}return a}getRouteId(){var e=this;return(0,m.Z)(function*(){const t=e.getActiveSync();if(t)return{id:t.element.tagName,params:t.params,element:t.element}})()}getActive(){var e=this;return(0,m.Z)(function*(){return e.getActiveSync()})()}getByIndex(e){var t=this;return(0,m.Z)(function*(){return t.views[e]})()}canGoBack(e){var t=this;return(0,m.Z)(function*(){return t.canGoBackSync(e)})()}getPrevious(e){var t=this;return(0,m.Z)(function*(){return t.getPreviousSync(e)})()}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}queueTrns(e,t){var n=this;return(0,m.Z)(function*(){var i,s;if(n.isTransitioning&&(null===(i=e.opts)||void 0===i?void 0:i.skipIfBusy))return!1;const r=new Promise((a,o)=>{e.resolve=a,e.reject=o});if(e.done=t,e.opts&&!1!==e.opts.updateURL&&n.useRouter){const a=document.querySelector("ion-router");if(a){const o=yield a.canTransition();if(!1===o)return!1;if("string"==typeof o)return a.push(o,e.opts.direction||"back"),!1}}return 0===(null===(s=e.insertViews)||void 0===s?void 0:s.length)&&(e.insertViews=void 0),n.transInstr.push(e),n.nextTrns(),r})()}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const n=document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}runTransition(e){var t=this;return(0,m.Z)(function*(){try{t.ionNavWillChange.emit(),t.isTransitioning=!0,t.prepareTI(e);const n=t.getActiveSync(),i=t.getEnteringView(e,n);if(!n&&!i)throw new Error("no views in the stack to be removed");i&&1===i.state&&(yield i.init(t.el)),t.postViewInit(i,n,e);const s=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&i!==n;let r;s&&e.opts&&n&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||i?.animationBuilder),n.animationBuilder=e.opts.animationBuilder),r=s?yield t.transition(i,n,e):{hasCompleted:!0,requiresTransition:!1},t.success(r,e),t.ionNavDidChange.emit()}catch(n){t.failed(n,e)}t.isTransitioning=!1,t.nextTrns()})()}prepareTI(e){var t,n,i;const s=this.views.length;if(null!==(t=e.opts)&&void 0!==t||(e.opts={}),null!==(n=(i=e.opts).delegate)&&void 0!==n||(i.delegate=this.delegate),void 0!==e.removeView){(0,u.n)(void 0!==e.removeStart,"removeView needs removeStart"),(0,u.n)(void 0!==e.removeCount,"removeView needs removeCount");const o=this.views.indexOf(e.removeView);if(o<0)throw new Error("removeView was not found");e.removeStart+=o}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=s-1),e.removeCount<0&&(e.removeCount=s-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===s),e.insertViews&&((e.insertStart<0||e.insertStart>s)&&(e.insertStart=s),e.enteringRequiresTransition=e.insertStart===s);const r=e.insertViews;if(!r)return;(0,u.n)(r.length>0,"length can not be zero");const a=(e=>e.map(t=>t instanceof E?t:"component"in t?k(t.component,null===t.componentProps?void 0:t.componentProps):k(t,void 0)).filter(t=>null!==t))(r);if(0===a.length)throw new Error("invalid views to insert");for(const o of a){o.delegate=e.opts.delegate;const d=o.nav;if(d&&d!==this)throw new Error("inserted view was already inserted");if(3===o.state)throw new Error("inserted view was already destroyed")}e.insertViews=a}getEnteringView(e,t){const n=e.insertViews;if(void 0!==n)return n[n.length-1];const i=e.removeStart;if(void 0!==i){const s=this.views,r=i+e.removeCount;for(let a=s.length-1;a>=0;a--){const o=s[a];if((a<i||a>=r)&&o!==t)return o}}}postViewInit(e,t,n){var i,s,r;(0,u.n)(t||e,"Both leavingView and enteringView are null"),(0,u.n)(n.resolve,"resolve must be valid"),(0,u.n)(n.reject,"reject must be valid");const a=n.opts,{insertViews:o,removeStart:d,removeCount:c}=n;let h;if(void 0!==d&&void 0!==c){(0,u.n)(d>=0,"removeStart can not be negative"),(0,u.n)(c>=0,"removeCount can not be negative"),h=[];for(let l=d;l<d+c;l++){const w=this.views[l];w&&w!==e&&w!==t&&h.push(w)}null!==(i=a.direction)&&void 0!==i||(a.direction="back")}const p=this.views.length+(null!==(s=o?.length)&&void 0!==s?s:0)-(c??0);if((0,u.n)(p>=0,"final balance can not be negative"),0===p)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){let l=n.insertStart;for(const w of o)this.insertViewAt(w,l),l++;n.enteringRequiresTransition&&(null!==(r=a.direction)&&void 0!==r||(a.direction="forward"))}if(h&&h.length>0){for(const l of h)(0,v.l)(l.element,v.b),(0,v.l)(l.element,v.c),(0,v.l)(l.element,v.d);for(const l of h)this.destroyView(l)}}transition(e,t,n){var i=this;return(0,m.Z)(function*(){const s=n.opts,r=s.progressAnimation?p=>i.sbAni=p:void 0,a=(0,b.b)(i),o=e.element,d=t&&t.element,c=Object.assign(Object.assign({mode:a,showGoBack:i.canGoBackSync(e),baseEl:i.el,progressCallback:r,animated:i.animated&&b.c.getBoolean("animated",!0),enteringEl:o,leavingEl:d},s),{animationBuilder:s.animationBuilder||i.animation||b.c.get("navAnimation")}),{hasCompleted:h}=yield(0,v.t)(c);return i.transitionFinish(h,e,t,s)})()}transitionFinish(e,t,n,i){const s=e?t:n;return s&&this.cleanup(s),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}}insertViewAt(e,t){const n=this.views,i=n.indexOf(e);i>-1?((0,u.n)(e.nav===this,"view is not part of the nav"),n.splice(i,1),n.splice(t,0,e)):((0,u.n)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}removeView(e){(0,u.n)(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,n=t.indexOf(e);(0,u.n)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}destroyView(e){e._destroy(),this.removeView(e)}cleanup(e){if(this.destroyed)return;const t=this.views,n=t.indexOf(e);for(let i=t.length-1;i>=0;i--){const s=t[i],r=s.element;r&&(i>n?((0,v.l)(r,v.d),this.destroyView(s)):i<n&&(0,v.s)(r,!0))}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.pop({direction:"back",progressAnimation:!0})}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,n){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let i=e?-.001:.001;e?i+=(0,T.g)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=(0,T.g)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,i,n)}}render(){return(0,g.h)("slot",null)}get el(){return(0,g.i)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};I.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";const D=class{constructor(e){(0,g.r)(this,e),this.routerDirection="forward",this.onClick=()=>((e,t,n,i,s)=>{const r=this.el.closest("ion-nav");if(r)if("forward"===t){if(void 0!==n)return r.push(n,i,{skipIfBusy:!0,animationBuilder:s})}else if("root"===t){if(void 0!==n)return r.setRoot(n,i,{skipIfBusy:!0,animationBuilder:s})}else if("back"===t)return r.pop({skipIfBusy:!0,animationBuilder:s});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps,this.routerAnimation)}render(){return(0,g.h)(g.H,{onClick:this.onClick})}get el(){return(0,g.i)(this)}}}}]);