(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8579],{4498:(e,t,o)=>{"use strict";o.d(t,{jS:()=>p,jU:()=>s,UG:()=>c});var n=o(22592),r=o(63417);var a=o(83149),i=o(27061);const c=i.release&&/node|io\.js/.test(i.release.name),s="undefined"!=typeof window&&!c;let l;"undefined"!=typeof navigator&&/Mac/.test(navigator.platform);const u=[],d=()=>{if(void 0===l)if(c){l=n.Ue();const e=i.argv;let t=null;for(let o=0;o<e.length;o++){const n=e[o];"-"===n[0]?(null!==t&&l.set(t,""),t=n):null!==t?(l.set(t,n),t=null):u.push(n)}null!==t&&l.set(t,"")}else"object"==typeof location?(l=n.Ue(),(location.search||"?").slice(1).split("&").forEach((e=>{if(0!==e.length){const[t,o]=e.split("=");l.set(`--${r.NF(t,"-")}`,o),l.set(`-${r.NF(t,"-")}`,o)}}))):l=n.Ue();return l},p=(e,t)=>d().get(e)||t;(e=>d().has(e))("--"+"production")||(e=>{return void 0===(t=c?{}[e.toUpperCase()]:a.X.getItem(e))?null:t;var t})("production")},22592:(e,t,o)=>{"use strict";o.d(t,{JG:()=>r,UI:()=>i,Ue:()=>n,Yj:()=>c,Yu:()=>a});const n=()=>new Map,r=e=>{const t=n();return e.forEach(((e,o)=>{t.set(o,e)})),t},a=(e,t,o)=>{let n=e.get(t);return void 0===n&&e.set(t,n=o()),n},i=(e,t)=>{const o=[];for(const[n,r]of e)o.push(t(r,n));return o},c=(e,t)=>{for(const[o,n]of e)if(t(n,o))return!0;return!1}},83149:(e,t,o)=>{"use strict";o.d(t,{X:()=>a,z:()=>i});let n=new class{constructor(){this.map=new Map}setItem(e,t){this.map.set(e,t)}getItem(e){return this.map.get(e)}},r=!0;try{"undefined"!=typeof localStorage&&(n=localStorage,r=!1)}catch(e){}const a=n,i=e=>r||addEventListener("storage",e)},63417:(e,t,o)=>{"use strict";o.d(t,{CO:()=>l,IK:()=>n,NF:()=>i,YZ:()=>c,lz:()=>s});const n=String.fromCharCode,r=(String.fromCodePoint,/^\s*/g),a=/([A-Z])/g,i=(e,t)=>(e=>e.replace(r,""))(e.replace(a,(e=>`${t}${(e=>e.toLowerCase())(e)}`))),c="undefined"!=typeof TextEncoder?new TextEncoder:null,s=c?e=>c.encode(e):e=>{const t=unescape(encodeURIComponent(e)),o=t.length,n=new Uint8Array(o);for(let e=0;e<o;e++)n[e]=t.codePointAt(e);return n};let l="undefined"==typeof TextDecoder?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});l&&1===l.decode(new Uint8Array).length&&(l=null)},27061:e=>{var t,o,n=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(o){try{return t.call(null,e,0)}catch(o){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var c,s=[],l=!1,u=-1;function d(){l&&c&&(l=!1,c.length?s=c.concat(s):u=-1,s.length&&p())}function p(){if(!l){var e=i(d);l=!0;for(var t=s.length;t;){for(c=s,s=[];++u<t;)c&&c[u].run();u=-1,t=s.length}c=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)t[o-1]=arguments[o];s.push(new m(e,t)),1!==s.length||l||i(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},88579:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>_});var n=o(85798),r=o(67666),a=o(12439),i=o(78880),c=o(78784),s=o(91034),l=o(22888),u=o(82002),d=o(49140),p=o(82555),m=o(81734),f=o(15004),h=o(4498),g=o(62471),b=o.n(g);const y=new RegExp("/(lab|notebooks|edit|consoles)\\/?");var w;!function(e){e.about="application:about",e.docmanagerDownload="docmanager:download",e.filebrowserDownload="filebrowser:download",e.copyShareableLink="filebrowser:share-main"}(w||(w={}));const v="jupyterlite",_=[{id:"@jupyterlite/application-extension:about",autoStart:!0,requires:[u.ITranslator],optional:[r.ICommandPalette,l.IMainMenu],activate:(e,t,o,n)=>{const{commands:a}=e,i=t.load(v),c=i.__("Help");a.addCommand(w.about,{label:i.__("About %1",e.name),execute:()=>{const t=i.__("Version %1",e.version),o=b().createElement("span",{className:"jp-About-version-info"},b().createElement("span",{className:"jp-About-version"},t)),n=b().createElement("span",{className:"jp-About-header"},b().createElement("div",{className:"jp-About-header-info"},b().createElement(p.liteWordmark.react,{height:"auto",width:"196px"}),o)),a=b().createElement("span",{className:"jp-About-externalLinks"},b().createElement("a",{href:"https://github.com/jupyterlite/jupyterlite/graphs/contributors",target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat"},i.__("CONTRIBUTOR LIST")),b().createElement("a",{href:"https://github.com/jupyterlite/jupyterlite",target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat"},i.__("JUPYTERLITE ON GITHUB"))),c=b().createElement("span",{className:"jp-About-copyright"},i.__("© 2021-2022 JupyterLite Contributors")),s=b().createElement("div",{className:"jp-About-body"},a,c);return(0,r.showDialog)({title:n,body:s,buttons:[r.Dialog.createButton({label:i.__("Dismiss"),className:"jp-About-button jp-mod-reject jp-mod-styled"})]})}}),o&&o.addItem({command:w.about,category:c}),n&&n.helpMenu.addGroup([{command:w.about}],0)}},{id:"@jupyterlite/application-extension:docprovider",provides:c.IDocumentProviderFactory,requires:[u.ITranslator],activate:(e,t)=>{const o="true"===a.PageConfig.getOption("collaborative");return e=>{if(o){const e=t.load(v);console.warn(e.__("The `collaborative` feature was enabled, but no docprovider is available.")),console.info(e.__("Install `jupyterlab-webrtc-docprovider` to enable WebRTC-based collaboration."))}return new c.ProviderMock}}},{id:"@jupyterlite/application-extension:download",autoStart:!0,requires:[u.ITranslator,i.IDocumentManager],optional:[r.ICommandPalette,s.IFileBrowserFactory],activate:(e,t,o,n,a)=>{const i=t.load(v),{commands:c,serviceManager:s,shell:l}=e,{contents:u}=s,p=()=>{const{currentWidget:e}=l;return!(!e||!o.contextForWidget(e))},f=(e,t)=>{const o=document.createElement("a");o.href=`data:text/json;charset=utf-8,${encodeURIComponent(e)}`,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)},h=async e=>{const t=await u.get(e,{content:!0});return"notebook"===t.type||-1!==t.mimetype.indexOf("json")?JSON.stringify(t.content,null,2):t.content};c.addCommand(w.docmanagerDownload,{label:i.__("Download"),caption:i.__("Download the file to your computer"),isEnabled:p,execute:async()=>{const e=l.currentWidget;if(!p()||!e)return;const t=o.contextForWidget(e);if(!t)return(0,r.showDialog)({title:i.__("Cannot Download"),body:i.__("No context found for current widget!"),buttons:[r.Dialog.okButton({label:i.__("OK")})]});await t.save();const n=await h(t.path);f(n,t.path)}});const g=i.__("File Operations");if(n&&n.addItem({command:w.docmanagerDownload,category:g}),a){const{tracker:e}=a;c.addCommand(w.filebrowserDownload,{execute:async()=>{const t=e.currentWidget;t&&(0,m.toArray)(t.selectedItems()).forEach((async e=>{if("directory"===e.type)return;const t=await h(e.path);f(t,e.name)}))},icon:d.downloadIcon.bindprops({stylesheet:"menuItem"}),label:i.__("Download")})}}},{id:"@jupyterlite/application-extension:logo",optional:[n.ILabShell],autoStart:!0,activate:(e,t)=>{if(!t)return;const o=new f.Widget;p.liteIcon.element({container:o.node,elementPosition:"center",margin:"2px 2px 2px 8px",height:"auto",width:"16px"}),o.id="jp-MainLogo",t.add(o,"top",{rank:0})}},{id:"@jupyterlite/application-extension:notify-commands",autoStart:!0,optional:[n.ILabShell],activate:(e,t)=>{t&&t.layoutModified.connect((()=>{e.commands.notifyCommandChanged()}))}},{id:"@jupyterlite/application-extension:opener",autoStart:!0,requires:[n.IRouter,i.IDocumentManager],optional:[n.ILabShell],activate:(e,t,o,n)=>{const{commands:r}=e,i="router:tree";r.addCommand(i,{execute:i=>{var c;const s=i,{request:l,search:u}=s;if(null!==(c=l.match(y))&&void 0!==c&&!c)return;const d=new URLSearchParams(u).getAll("path");if(!d)return;const p=d.map((e=>decodeURIComponent(e)));e.restored.then((()=>{const e=a.PageConfig.getOption("retroPage"),[i]=p;switch(e){case"consoles":return void r.execute("console:create",{path:i});case"notebooks":return void o.open(i,"Notebook",void 0,{ref:"_noref"});case"edit":return void o.open(i,"Editor",void 0,{ref:"_noref"});default:{p.forEach((e=>o.open(e)));const e=new URL(a.URLExt.join(a.PageConfig.getBaseUrl(),l));e.searchParams.delete("path");const{pathname:i,search:c}=e;if(t.navigate(`${i}${c}`,{skipRouting:!0}),n){const e=()=>{r.execute("docmanager:show-in-file-browser"),n.currentChanged.disconnect(e)};n.currentChanged.connect(e)}break}}}))}}),t.register({command:i,pattern:y})}},{id:"@jupyterlite/application-extension:share-file",requires:[s.IFileBrowserFactory,u.ITranslator],autoStart:!0,activate:(e,t,o)=>{const n=o.load(v),{commands:i}=e,{tracker:c}=t,s=(0,h.jS)("--room","").trim(),l="true"===a.PageConfig.getOption("collaborative")&&s;i.addCommand(w.copyShareableLink,{execute:()=>{const e=c.currentWidget;if(!e)return;const t=new URL(a.URLExt.join(a.PageConfig.getBaseUrl(),"lab"));(0,m.toArray)((0,m.filter)(e.selectedItems(),(e=>"directory"!==e.type))).forEach((e=>{t.searchParams.append("path",e.path)})),l&&t.searchParams.append("room",s),r.Clipboard.copyToSystem(t.href)},isVisible:()=>!!c.currentWidget&&(0,m.toArray)(c.currentWidget.selectedItems()).length>=1,icon:d.linkIcon.bindprops({stylesheet:"menuItem"}),label:n.__("Copy Shareable Link")})}}]}}]);
//# sourceMappingURL=8579.0057259.js.map