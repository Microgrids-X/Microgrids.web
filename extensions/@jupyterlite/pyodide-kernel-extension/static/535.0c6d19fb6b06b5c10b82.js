/*! For license information please see 535.0c6d19fb6b06b5c10b82.js.LICENSE.txt */
"use strict";(self.webpackChunk_jupyterlite_pyodide_kernel_extension=self.webpackChunk_jupyterlite_pyodide_kernel_extension||[]).push([[535],{316:(e,t,n)=>{n.r(t),n.d(t,{PIPLITE_INDEX_SCHEMA:()=>D,PyodideKernel:()=>H,PyodideRemoteKernel:()=>N.O,allJSONUrl:()=>a,ipykernelWheelUrl:()=>i,pipliteWheelUrl:()=>l,pyodide_kernelWheelUrl:()=>p,widgetsnbextensionWheelUrl:()=>d,widgetsnbextensionWheelUrl1:()=>h});const r=n.p+"pypi/all.json";var a=n.t(r);const s=n.p+"pypi/ipykernel-6.9.2-py3-none-any.whl";var i=n.t(s);const o=n.p+"pypi/piplite-0.0.10-py3-none-any.whl";var l=n.t(o);const c=n.p+"pypi/pyodide_kernel-0.0.10-py3-none-any.whl";var p=n.t(c);const u=n.p+"pypi/widgetsnbextension-3.6.4-py3-none-any.whl";var d=n.t(u);const m=n.p+"pypi/widgetsnbextension-4.0.7-py3-none-any.whl";var h=n.t(m),y=n(526),g=n(671),b=n(289);const f=Symbol("Comlink.proxy"),w=Symbol("Comlink.endpoint"),_=Symbol("Comlink.releaseProxy"),v=Symbol("Comlink.finalizer"),k=Symbol("Comlink.thrown"),E=e=>"object"==typeof e&&null!==e||"function"==typeof e,x=new Map([["proxy",{canHandle:e=>E(e)&&e[f],serialize(e){const{port1:t,port2:n}=new MessageChannel;return R(e,t),[n,[n]]},deserialize:e=>(e.start(),C(e))}],["throw",{canHandle:e=>E(e)&&k in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function R(e,t=globalThis,n=["*"]){t.addEventListener("message",(function r(a){if(!a||!a.data)return;if(!function(e,t){for(const n of e){if(t===n||"*"===n)return!0;if(n instanceof RegExp&&n.test(t))return!0}return!1}(n,a.origin))return void console.warn(`Invalid origin '${a.origin}' for comlink proxy`);const{id:s,type:i,path:o}=Object.assign({path:[]},a.data),l=(a.data.argumentList||[]).map(T);let c;try{const t=o.slice(0,-1).reduce(((e,t)=>e[t]),e),n=o.reduce(((e,t)=>e[t]),e);switch(i){case"GET":c=n;break;case"SET":t[o.slice(-1)[0]]=T(a.data.value),c=!0;break;case"APPLY":c=n.apply(t,l);break;case"CONSTRUCT":c=function(e){return Object.assign(e,{[f]:!0})}(new n(...l));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;R(e,n),c=function(e,t){return L.set(e,t),e}(t,[t])}break;case"RELEASE":c=void 0;break;default:return}}catch(e){c={value:e,[k]:0}}Promise.resolve(c).catch((e=>({value:e,[k]:0}))).then((n=>{const[a,o]=K(n);t.postMessage(Object.assign(Object.assign({},a),{id:s}),o),"RELEASE"===i&&(t.removeEventListener("message",r),P(t),v in e&&"function"==typeof e[v]&&e[v]())})).catch((e=>{const[n,r]=K({value:new TypeError("Unserializable return value"),[k]:0});t.postMessage(Object.assign(Object.assign({},n),{id:s}),r)}))})),t.start&&t.start()}function P(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function C(e,t){return W(e,[],t)}function S(e){if(e)throw new Error("Proxy has been released and is not useable")}function O(e){return j(e,{type:"RELEASE"}).then((()=>{P(e)}))}const U=new WeakMap,M="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(U.get(e)||0)-1;U.set(e,t),0===t&&O(e)}));function W(e,t=[],n=function(){}){let r=!1;const a=new Proxy(n,{get(n,s){if(S(r),s===_)return()=>{!function(e){M&&M.unregister(e)}(a),O(e),r=!0};if("then"===s){if(0===t.length)return{then:()=>a};const n=j(e,{type:"GET",path:t.map((e=>e.toString()))}).then(T);return n.then.bind(n)}return W(e,[...t,s])},set(n,a,s){S(r);const[i,o]=K(s);return j(e,{type:"SET",path:[...t,a].map((e=>e.toString())),value:i},o).then(T)},apply(n,a,s){S(r);const i=t[t.length-1];if(i===w)return j(e,{type:"ENDPOINT"}).then(T);if("bind"===i)return W(e,t.slice(0,-1));const[o,l]=A(s);return j(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:o},l).then(T)},construct(n,a){S(r);const[s,i]=A(a);return j(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:s},i).then(T)}});return function(e,t){const n=(U.get(t)||0)+1;U.set(t,n),M&&M.register(e,t,e)}(a,e),a}function A(e){const t=e.map(K);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const L=new WeakMap;function K(e){for(const[t,n]of x)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},L.get(e)||[]]}function T(e){switch(e.type){case"HANDLER":return x.get(e.name).deserialize(e.value);case"RAW":return e.value}}function j(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}class H extends b.BaseKernel{constructor(e){super(e),this._ready=new y.PromiseDelegate,this._worker=this.initWorker(e),this._worker.onmessage=e=>this._processWorkerMessage(e.data),this._remoteKernel=C(this._worker),this.initRemote(e)}initWorker(e){return new Worker(new URL(n.p+n.u(568),n.b),{type:void 0})}async initRemote(e){const t=this.initRemoteOptions(e);await this._remoteKernel.initialize(t),this._ready.resolve()}initRemoteOptions(e){const{pyodideUrl:t}=e,n=t.slice(0,t.lastIndexOf("/")+1),a=g.PageConfig.getBaseUrl(),s=[...e.pipliteUrls||[],r],i=!!e.disablePyPIFallback;return{baseUrl:a,pyodideUrl:t,indexUrl:n,pipliteWheelUrl:e.pipliteWheelUrl||o,pipliteUrls:s,disablePyPIFallback:i,location:this.location,mountDrive:e.mountDrive}}dispose(){this.isDisposed||(this._worker.terminate(),this._worker=null,super.dispose())}get ready(){return this._ready.promise}_processWorkerMessage(e){var t,n,r,a,s,i,o;if(e.type)switch(e.type){case"stream":{const n=null!==(t=e.bundle)&&void 0!==t?t:{name:"stdout",text:""};this.stream(n,e.parentHeader);break}case"input_request":{const t=null!==(n=e.content)&&void 0!==n?n:{prompt:"",password:!1};this.inputRequest(t,e.parentHeader);break}case"display_data":{const t=null!==(r=e.bundle)&&void 0!==r?r:{data:{},metadata:{},transient:{}};this.displayData(t,e.parentHeader);break}case"update_display_data":{const t=null!==(a=e.bundle)&&void 0!==a?a:{data:{},metadata:{},transient:{}};this.updateDisplayData(t,e.parentHeader);break}case"clear_output":{const t=null!==(s=e.bundle)&&void 0!==s?s:{wait:!1};this.clearOutput(t,e.parentHeader);break}case"execute_result":{const t=null!==(i=e.bundle)&&void 0!==i?i:{execution_count:0,data:{},metadata:{}};this.publishExecuteResult(t,e.parentHeader);break}case"execute_error":{const t=null!==(o=e.bundle)&&void 0!==o?o:{ename:"",evalue:"",traceback:[]};this.publishExecuteError(t,e.parentHeader);break}case"comm_msg":case"comm_open":case"comm_close":this.handleComm(e.type,e.content,e.metadata,e.buffers,e.parentHeader)}}async kernelInfoRequest(){return{implementation:"pyodide",implementation_version:"0.1.0",language_info:{codemirror_mode:{name:"python",version:3},file_extension:".py",mimetype:"text/x-python",name:"python",nbconvert_exporter:"python",pygments_lexer:"ipython3",version:"3.8"},protocol_version:"5.3",status:"ok",banner:"A WebAssembly-powered Python kernel backed by Pyodide",help_links:[{text:"Python (WASM) Kernel",url:"https://pyodide.org"}]}}async executeRequest(e){await this.ready;const t=await this._remoteKernel.execute(e,this.parent);return t.execution_count=this.executionCount,t}async completeRequest(e){return await this._remoteKernel.complete(e,this.parent)}async inspectRequest(e){return await this._remoteKernel.inspect(e,this.parent)}async isCompleteRequest(e){return await this._remoteKernel.isComplete(e,this.parent)}async commInfoRequest(e){return await this._remoteKernel.commInfo(e,this.parent)}async commOpen(e){return await this._remoteKernel.commOpen(e,this.parent)}async commMsg(e){return await this._remoteKernel.commMsg(e,this.parent)}async commClose(e){return await this._remoteKernel.commClose(e,this.parent)}async inputReply(e){return await this._remoteKernel.inputReply(e,this.parent)}}const I=n.p+"schema/piplite.v0.schema.json";var D=n.t(I),N=n(951)}}]);
//# sourceMappingURL=535.0c6d19fb6b06b5c10b82.js.map?v=0c6d19fb6b06b5c10b82