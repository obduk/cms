!function(){"use strict";function t(t,e){return n(document.createElement("canvas"),t,e)}function e(t){return t.getContext("2d")}function n(t,e,n){return t.width=e,t.height=n,t}function o(){return new(N.getOrDie("FileReader"))}function r(t){return new z(function(e,n){function o(){u(),e(a)}function r(){u(),n("Unable to load data of type "+t.type+": "+i)}var i=URL.createObjectURL(t),a=new Image,u=function(){a.removeEventListener("load",o),a.removeEventListener("error",r)};a.addEventListener("load",o),a.addEventListener("error",r),a.src=i,a.complete&&o()})}function i(t){return new z(function(e,n){var o=new XMLHttpRequest;o.open("GET",t,!0),o.responseType="blob",o.onload=function(){200==this.status&&e(this.response)},o.onerror=function(){var t,e=this;n(0===this.status?((t=new Error("No access to download image")).code=18,t.name="SecurityError",t):new Error("Error "+e.status+" downloading image"))},o.send()})}function a(t){var e=t.split(","),n=/data:([^;]+)/.exec(e[0]);if(!n)return P.none();for(var o,r,i,a=n[1],u=e[1],c=$.atob(u),l=c.length,s=Math.ceil(l/1024),f=new Array(s),d=0;d<s;++d){for(var h=1024*d,p=Math.min(h+1024,l),m=new Array(p-h),g=h,v=0;g<p;++v,++g)m[v]=c[g].charCodeAt(0);f[d]=(o=m,new(N.getOrDie("Uint8Array"))(o))}return P.some((r=f,i={type:a},new(N.getOrDie("Blob"))(r,i)))}function u(t){return new z(function(e,n){a(t).fold(function(){n("uri is not base64: "+t)},e)})}function c(t){return new z(function(e){var n=new o;n.onloadend=function(){e(n.result)},n.readAsDataURL(t)})}function l(t,e,n){function o(e,n){return t.then(function(t){return X.canvasToDataURL(t,e,n)})}var r=e.type;return{getType:D.constant(r),toBlob:function(){return z.resolve(e)},toDataURL:function(){return n},toBase64:function(){return n.split(",")[1]},toAdjustedBlob:function(e,n){return t.then(function(t){return X.canvasToBlob(t,e,n)})},toAdjustedDataURL:o,toAdjustedBase64:function(t,e){return o(t,e).then(function(t){return t.split(",")[1]})},toCanvas:function(){return t.then(j.clone)}}}function s(t){return X.blobToDataUri(t).then(function(e){return l(X.blobToCanvas(t),t,e)})}function f(t,e,n){return(t=parseFloat(t))>n?t=n:t<e&&(t=e),t}function d(t,e){var n,o,r,i,a=[],u=new Array(10);for(n=0;n<5;n++){for(o=0;o<5;o++)a[o]=e[o+5*n];for(o=0;o<5;o++){for(i=0,r=0;r<5;r++)i+=t[o+5*r]*a[r];u[o+5*n]=i}}return u}function h(t,e){return e=f(e,0,1),t.map(function(t,n){return n%6==0?t=1-(1-t)*e:t*=e,f(t,0,1)})}function p(t,e){return t.toCanvas().then(function(n){return o=n,r=t.getType(),i=e,a=function(t,e){var n,o,r,i,a,u=t.data,c=e[0],l=e[1],s=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],g=e[8],v=e[9],y=e[10],b=e[11],w=e[12],x=e[13],R=e[14],I=e[15],T=e[16],k=e[17],C=e[18],B=e[19];for(a=0;a<u.length;a+=4)n=u[a],o=u[a+1],r=u[a+2],i=u[a+3],u[a]=n*c+o*l+r*s+i*f+d,u[a+1]=n*h+o*p+r*m+i*g+v,u[a+2]=n*y+o*b+r*w+i*x+R,u[a+3]=n*I+o*T+r*k+i*C+B;return t}((u=j.get2dContext(o)).getImageData(0,0,o.width,o.height),i),u.putImageData(a,0,0),J.fromCanvas(o,r);var o,r,i,a,u})}function m(t,e){return t.toCanvas().then(function(n){return o=n,r=t.getType(),i=e,a=function(t,e,n){function o(t,e,n){return t>n?t=n:t<e&&(t=e),t}var r,i,a,u,c,l,s,f,d,h,p,m,g,v,y,b;for(a=Math.round(Math.sqrt(n.length)),u=Math.floor(a/2),r=t.data,i=e.data,y=t.width,b=t.height,l=0;l<b;l++)for(c=0;c<y;c++){for(s=f=d=0,p=0;p<a;p++)for(h=0;h<a;h++)m=o(c+h-u,0,y-1),g=4*(o(l+p-u,0,b-1)*y+m),v=n[p*a+h],s+=r[g]*v,f+=r[g+1]*v,d+=r[g+2]*v;i[g=4*(l*y+c)]=o(s,0,255),i[g+1]=o(f,0,255),i[g+2]=o(d,0,255)}return e}((u=j.get2dContext(o)).getImageData(0,0,o.width,o.height),a=u.getImageData(0,0,o.width,o.height),i),u.putImageData(a,0,0),J.fromCanvas(o,r);var o,r,i,a,u})}function g(t){return function(e,n){return e.toCanvas().then(function(o){return function(e,n,o){var r,i,a=j.get2dContext(e),u=new Array(256);for(i=0;i<u.length;i++)u[i]=t(i,o);return r=function(t,e){var n,o=t.data;for(n=0;n<o.length;n+=4)o[n]=e[o[n]],o[n+1]=e[o[n+1]],o[n+2]=e[o[n+2]];return t}(a.getImageData(0,0,e.width,e.height),u),a.putImageData(r,0,0),J.fromCanvas(e,n)}(o,e.getType(),n)})}}function v(t){return function(e,n){return p(e,t(Z.identity(),n))}}function y(t){return function(e){return m(e,t)}}function b(t){return{blob:t,url:at.createObjectURL(t)}}function w(t){t&&at.revokeObjectURL(t.url)}function x(t){A.each(t,w)}function R(t,e,n,o){function r(t){var e,n,o,r;e=y.find("#w")[0],n=y.find("#h")[0],o=parseInt(e.value(),10),r=parseInt(n.value(),10),y.find("#constrain")[0].checked()&&N&&$&&o&&r&&("w"===t.control.settings.name?(r=Math.round(o*X),n.value(r)):(o=Math.round(r*G),e.value(o))),N=o,$=r}function i(t){return Math.round(100*t)+"%"}function a(){y.find("#undo").disabled(!Y.canUndo()),y.find("#redo").disabled(!Y.canRedo()),y.statusbar.find("#save").disabled(!Y.canUndo())}function u(){y.find("#undo").disabled(!0),y.find("#redo").disabled(!0)}function c(t){t&&U.imageSrc(t.url)}function l(t){return function(){var e=A.grep(V,function(e){return e.settings.name!==t});A.each(e,function(t){t.hide()}),t.show(),t.focus()}}function s(t){c(T=b(t))}function f(t){c(e=b(t)),x(Y.add(e).removed),a()}function d(){var t=U.selection();rt.blobToImageResult(e.blob).then(function(e){nt.crop(e,t.x,t.y,t.w,t.h).then(Z).then(function(t){f(t),h()})})}function h(){c(e),w(T),l(R)(),a()}function p(){T?(f(T.blob),h()):function e(n,o){T?o():setTimeout(function(){n-- >0?e(n,o):t.windowManager.alert("Error: failed to apply image operation.")},10)}(100,p)}function m(t){return ht.create("Form",{layout:"flex",direction:"row",labelGap:5,border:"0 0 1 0",align:"center",pack:"center",padding:"0 10 0 10",spacing:5,flex:0,minHeight:60,defaults:{classes:"imagetool",type:"button"},items:t})}function g(t,n){return m(J([{text:"Back",onclick:h},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:p}])).hide().on("show",function(){u(),rt.blobToImageResult(e.blob).then(function(t){return n(t)}).then(Z).then(function(t){var e=b(t);c(e),w(T),T=e})})}function v(n,o,r,a,l){return m(J([{text:"Back",onclick:h},{type:"spacer",flex:1},{type:"slider",flex:1,ondragend:function(t){var n;n=t.value,rt.blobToImageResult(e.blob).then(function(t){return o(t,n)}).then(Z).then(function(t){var e=b(t);c(e),w(T),T=e})},minValue:t.rtl?l:a,maxValue:t.rtl?a:l,value:r,previewFilter:i},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:p}])).hide().on("show",function(){this.find("slider").value(r),u()})}var y,R,I,T,k,C,B,U,M,j,E,z,O,D,S,L,H,_,F,P,W,q,V,N,$,X,G,Y=function(){function t(){return o>0}function e(){return-1!==o&&o<n.length-1}var n=[],o=-1;return{data:n,add:function(t){var e;return e=n.splice(++o),n.push(t),{state:t,removed:e}},undo:function(){if(t())return n[--o]},redo:function(){if(e())return n[++o]},canUndo:t,canRedo:e}}(),J=function(e){return t.rtl?e.reverse():e},K=function(t){var n=[].slice.call(arguments,1);return function(){var o=T||e;rt.blobToImageResult(o.blob).then(function(e){t.apply(this,[e].concat(n)).then(Z).then(s)})}},Z=function(t){return t.toBlob()};k=m(J([{text:"Back",onclick:h},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:d}])).hide().on("show hide",function(t){U.toggleCropRect("show"===t.type)}).on("show",u),C=m(J([{text:"Back",onclick:h},{type:"spacer",flex:1},{type:"textbox",name:"w",label:"Width",size:4,onkeyup:r},{type:"textbox",name:"h",label:"Height",size:4,onkeyup:r},{type:"checkbox",name:"constrain",text:"Constrain proportions",checked:!0,onchange:function(t){!0===t.control.value()&&(X=$/N,G=N/$)}},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:"submit"}])).hide().on("submit",function(t){var n=parseInt(y.find("#w").value(),10),o=parseInt(y.find("#h").value(),10);t.preventDefault(),function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r=[].slice.call(arguments,1);return function(){rt.blobToImageResult(e.blob).then(function(e){t.apply(this,[e].concat(r)).then(Z).then(f)})}}(nt.resize,n,o)(),h()}).on("show",u),B=m(J([{text:"Back",onclick:h},{type:"spacer",flex:1},{icon:"fliph",tooltip:"Flip horizontally",onclick:K(nt.flip,"h")},{icon:"flipv",tooltip:"Flip vertically",onclick:K(nt.flip,"v")},{icon:"rotateleft",tooltip:"Rotate counterclockwise",onclick:K(nt.rotate,-90)},{icon:"rotateright",tooltip:"Rotate clockwise",onclick:K(nt.rotate,90)},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:p}])).hide().on("show",u),E=g(0,nt.invert),F=g(0,nt.sharpen),P=g(0,nt.emboss),z=v(0,nt.brightness,0,-1,1),O=v(0,nt.hue,180,0,360),D=v(0,nt.saturate,0,-1,1),S=v(0,nt.contrast,0,-1,1),L=v(0,nt.grayscale,0,0,1),H=v(0,nt.sepia,0,0,1),_=function(n,o){function r(){var t,n,r;t=y.find("#r")[0].value(),n=y.find("#g")[0].value(),r=y.find("#b")[0].value(),rt.blobToImageResult(e.blob).then(function(e){return o(e,t,n,r)}).then(Z).then(function(t){var e=b(t);c(e),w(T),T=e})}var a=t.rtl?2:0,l=t.rtl?0:2;return m(J([{text:"Back",onclick:h},{type:"spacer",flex:1},{type:"slider",label:"R",name:"r",minValue:a,value:1,maxValue:l,ondragend:r,previewFilter:i},{type:"slider",label:"G",name:"g",minValue:a,value:1,maxValue:l,ondragend:r,previewFilter:i},{type:"slider",label:"B",name:"b",minValue:a,value:1,maxValue:l,ondragend:r,previewFilter:i},{type:"spacer",flex:1},{text:"Apply",subtype:"primary",onclick:p}])).hide().on("show",function(){y.find("#r,#g,#b").value(1),u()})}(0,nt.colorize),W=v(0,nt.gamma,0,-1,1),q=v(0,nt.exposure,1,0,2),I=m(J([{text:"Back",onclick:h},{type:"spacer",flex:1},{text:"hue",icon:"hue",onclick:l(O)},{text:"saturate",icon:"saturate",onclick:l(D)},{text:"sepia",icon:"sepia",onclick:l(H)},{text:"emboss",icon:"emboss",onclick:l(P)},{text:"exposure",icon:"exposure",onclick:l(q)},{type:"spacer",flex:1}])).hide(),R=m(J([{tooltip:"Crop",icon:"crop",onclick:l(k)},{tooltip:"Resize",icon:"resize2",onclick:l(C)},{tooltip:"Orientation",icon:"orientation",onclick:l(B)},{tooltip:"Brightness",icon:"sun",onclick:l(z)},{tooltip:"Sharpen",icon:"sharpen",onclick:l(F)},{tooltip:"Contrast",icon:"contrast",onclick:l(S)},{tooltip:"Color levels",icon:"drop",onclick:l(_)},{tooltip:"Gamma",icon:"gamma",onclick:l(W)},{tooltip:"Invert",icon:"invert",onclick:l(E)}])),U=wt.create({flex:1,imageSrc:e.url}),M=ht.create("Container",{layout:"flex",direction:"column",pack:"start",border:"0 1 0 0",padding:5,spacing:5,items:[{type:"button",icon:"undo",tooltip:"Undo",name:"undo",onclick:function(){c(e=Y.undo()),a()}},{type:"button",icon:"redo",tooltip:"Redo",name:"redo",onclick:function(){c(e=Y.redo()),a()}},{type:"button",icon:"zoomin",tooltip:"Zoom in",onclick:function(){var t=U.zoom();t<2&&(t+=.1),U.zoom(t)}},{type:"button",icon:"zoomout",tooltip:"Zoom out",onclick:function(){var t=U.zoom();t>.1&&(t-=.1),U.zoom(t)}}]}),j=ht.create("Container",{type:"container",layout:"flex",direction:"row",align:"stretch",flex:1,items:J([M,U])}),V=[R,k,C,B,I,E,z,O,D,S,L,H,_,F,P,W,q],(y=t.windowManager.open({layout:"flex",direction:"column",align:"stretch",minWidth:Math.min(dt.DOM.getViewPort().w,800),minHeight:Math.min(dt.DOM.getViewPort().h,650),title:"Edit image",items:V.concat([j]),buttons:J([{text:"Save",name:"save",subtype:"primary",onclick:function(){n(e.blob),y.close()}},{text:"Cancel",onclick:"close"}])})).on("close",function(){o(),x(Y.data),Y=null,T=null}),Y.add(e),a(),U.on("load",function(){N=U.imageSize().w,$=U.imageSize().h,X=$/N,G=N/$,y.find("#w").value(N),y.find("#h").value($)}),U.on("crop",d)}var I,T,k,C,B,U=function(t){var e=t,n=function(){return e};return{get:n,set:function(t){e=t},clone:function(){return U(n())}}},M=tinymce.util.Tools.resolve("tinymce.PluginManager"),A=tinymce.util.Tools.resolve("tinymce.util.Tools"),j={create:t,clone:function(n){var o;return e(o=t(n.width,n.height)).drawImage(n,0,0),o},resize:n,get2dContext:e,get3dContext:function(t){var e=null;try{e=t.getContext("webgl")||t.getContext("experimental-webgl")}catch(A){}return e||(e=null),e}},E={getWidth:function(t){return t.naturalWidth||t.width},getHeight:function(t){return t.naturalHeight||t.height}},z=window.Promise?window.Promise:function(){function t(t,e){return function(){t.apply(e,arguments)}}function e(t){var n=this;null!==this._state?u(function(){var o=n._state?t.onFulfilled:t.onRejected;if(null!==o){var r;try{r=o(n._value)}catch(e){return void t.reject(e)}t.resolve(r)}else(n._state?t.resolve:t.reject)(n._value)}):this._deferreds.push(t)}function n(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var a=e.then;if("function"==typeof a)return void i(t(a,e),t(n,this),t(o,this))}this._state=!0,this._value=e,r.call(this)}catch(c){o.call(this,c)}}function o(t){this._state=!1,this._value=t,r.call(this)}function r(){for(var t=0,n=this._deferreds.length;t<n;t++)e.call(this,this._deferreds[t]);this._deferreds=null}function i(t,n,o){var r=!1;try{t(function(t){r||(r=!0,n(t))},function(t){r||(r=!0,o(t))})}catch(e){if(r)return;r=!0,o(e)}}var a=function(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],i(e,t(n,this),t(o,this))},u=a.immediateFn||"function"==typeof setImmediate&&setImmediate||function(t){setTimeout(t,1)},c=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};return a.prototype["catch"]=function(t){return this.then(null,t)},a.prototype.then=function(t,n){var o=this;return new a(function(r,i){e.call(o,new function(t,e,n,o){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.resolve=n,this.reject=o}(t,n,r,i))})},a.all=function(){var t=Array.prototype.slice.call(1===arguments.length&&c(arguments[0])?arguments[0]:arguments);return new a(function(e,n){function o(a,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var c=u.then;if("function"==typeof c)return void c.call(u,function(t){o(a,t)},n)}t[a]=u,0==--r&&e(t)}catch(i){n(i)}}if(0===t.length)return e([]);for(var r=t.length,a=0;a<t.length;a++)o(a,t[a])})},a.resolve=function(t){return t&&"object"==typeof t&&t.constructor===a?t:new a(function(e){e(t)})},a.reject=function(t){return new a(function(e,n){n(t)})},a.race=function(t){return new a(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},a}(),O=function(t){return function(){return t}},D={noop:function(){},noarg:function(t){return function(){return t()}},compose:function(t,e){return function(){return t(e.apply(null,arguments))}},constant:O,identity:function(t){return t},tripleEquals:function(t,e){return t===e},curry:function(t){for(var e=new Array(arguments.length-1),n=1;n<arguments.length;n++)e[n-1]=arguments[n];return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];var r=e.concat(n);return t.apply(null,r)}},not:function(t){return function(){return!t.apply(null,arguments)}},die:function(t){return function(){throw new Error(t)}},apply:function(t){return t()},call:function(t){t()},never:O(!1),always:O(!0)},S=D.never,L=D.always,H=function(){return _},_=(C={fold:function(t){return t()},is:S,isSome:S,isNone:L,getOr:k=function(t){return t},getOrThunk:T=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},or:k,orThunk:T,map:H,ap:H,each:function(){},bind:H,flatten:H,exists:S,forall:L,filter:H,equals:I=function(t){return t.isNone()},equals_:I,toArray:function(){return[]},toString:D.constant("none()")},Object.freeze&&Object.freeze(C),C),F=function(t){var e=function(){return t},n=function(){return r},o=function(e){return e(t)},r={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:L,isNone:S,getOr:e,getOrThunk:e,getOrDie:e,or:n,orThunk:n,map:function(e){return F(e(t))},ap:function(e){return e.fold(H,function(e){return F(e(t))})},each:function(e){e(t)},bind:o,flatten:e,exists:o,forall:o,filter:function(e){return e(t)?r:_},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(S,function(e){return n(t,e)})},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return r},P={some:F,none:H,from:function(t){return null===t||t===undefined?_:F(t)}},W="undefined"!=typeof window?window:Function("return this;")(),q=function(t,e){for(var n=e!==undefined&&null!==e?e:W,o=0;o<t.length&&n!==undefined&&null!==n;++o)n=n[t[o]];return n},V=function(t,e){var n=t.split(".");return q(n,e)},N={getOrDie:function(t,e){var n=V(t,e);if(n===undefined||null===n)throw t+" not available on this browser";return n}},$={atob:function(t){return N.getOrDie("atob")(t)},requestAnimationFrame:function(t){N.getOrDie("requestAnimationFrame")(t)}},X={blobToImage:r,imageToBlob:function(t){return(e=t,new z(function(t){e.complete?t(e):e.addEventListener("load",function n(){e.removeEventListener("load",n),t(e)})})).then(function(t){var e=t.src;return 0===e.indexOf("blob:")?i(e):0===e.indexOf("data:")?u(e):i(e)});var e},blobToArrayBuffer:function(t){return new z(function(e){var n=new o;n.onloadend=function(){e(n.result)},n.readAsArrayBuffer(t)})},blobToDataUri:c,blobToBase64:function(t){return c(t).then(function(t){return t.split(",")[1]})},dataUriToBlobSync:a,canvasToBlob:function(t,e,n){return e=e||"image/png",HTMLCanvasElement.prototype.toBlob?new z(function(o){t.toBlob(function(t){o(t)},e,n)}):u(t.toDataURL(e,n))},canvasToDataURL:function(t,e,n){return e=e||"image/png",t.then(function(t){return t.toDataURL(e,n)})},blobToCanvas:function(t){return r(t).then(function(t){var e,n;return e=t,URL.revokeObjectURL(e.src),n=j.create(E.getWidth(t),E.getHeight(t)),j.get2dContext(n).drawImage(t,0,0),n})},uriToBlob:function(t){return 0===t.indexOf("blob:")?i(t):0===t.indexOf("data:")?u(t):null}},G=function(t){return X.blobToImage(t)},Y=function(t){return X.imageToBlob(t)},J={fromBlob:s,fromCanvas:function(t,e){return X.canvasToBlob(t,e).then(function(e){return l(z.resolve(t),e,t.toDataURL())})},fromImage:function(t){return X.imageToBlob(t).then(function(t){return s(t)})},fromBlobAndUrlSync:function(t,e){return l(X.blobToCanvas(t),t,e)}},K=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10],Z={identity:function(){return[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1]},adjust:h,multiply:d,adjustContrast:function(t,e){var n;return e=f(e,-1,1),d(t,[(n=(e*=100)<0?127+e/100*127:127*(n=0==(n=e%1)?K[e]:K[Math.floor(e)]*(1-n)+K[Math.floor(e)+1]*n)+127)/127,0,0,0,.5*(127-n),0,n/127,0,0,.5*(127-n),0,0,n/127,0,.5*(127-n),0,0,0,1,0,0,0,0,0,1])},adjustBrightness:function(t,e){return d(t,[1,0,0,0,e=f(255*e,-255,255),0,1,0,0,e,0,0,1,0,e,0,0,0,1,0,0,0,0,0,1])},adjustSaturation:function(t,e){var n;return d(t,[.3086*(1-(n=1+((e=f(e,-1,1))>0?3*e:e)))+n,.6094*(1-n),.082*(1-n),0,0,.3086*(1-n),.6094*(1-n)+n,.082*(1-n),0,0,.3086*(1-n),.6094*(1-n),.082*(1-n)+n,0,0,0,0,0,1,0,0,0,0,0,1])},adjustHue:function(t,e){var n,o,r,i,a;return e=f(e,-180,180)/180*Math.PI,d(t,[(r=.213)+.787*(n=Math.cos(e))+(o=Math.sin(e))*-r,(i=.715)+n*-i+o*-i,(a=.072)+n*-a+.928*o,0,0,r+n*-r+.143*o,i+n*(1-i)+.14*o,a+n*-a+-.283*o,0,0,r+n*-r+-.787*o,i+n*-i+o*i,a+.928*n+o*a,0,0,0,0,0,1,0,0,0,0,0,1])},adjustColors:function(t,e,n,o){return d(t,[e=f(e,0,2),0,0,0,0,0,n=f(n,0,2),0,0,0,0,0,o=f(o,0,2),0,0,0,0,0,1,0,0,0,0,0,1])},adjustSepia:function(t,e){return d(t,h([.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0,0,0,0,0,1],e=f(e,0,1)))},adjustGrayscale:function(t,e){return d(t,h([.33,.34,.33,0,0,.33,.34,.33,0,0,.33,.34,.33,0,0,0,0,0,1,0,0,0,0,0,1],e=f(e,0,1)))}},Q={invert:(B=[-1,0,0,0,255,0,-1,0,0,255,0,0,-1,0,255,0,0,0,1,0],function(t){return p(t,B)}),brightness:v(Z.adjustBrightness),hue:v(Z.adjustHue),saturate:v(Z.adjustSaturation),contrast:v(Z.adjustContrast),grayscale:v(Z.adjustGrayscale),sepia:v(Z.adjustSepia),colorize:function(t,e,n,o){return p(t,Z.adjustColors(Z.identity(),e,n,o))},sharpen:y([0,-1,0,-1,5,-1,0,-1,0]),emboss:y([-2,-1,0,-1,1,1,0,1,2]),gamma:g(function(t,e){return 255*Math.pow(t/255,1-e)}),exposure:g(function(t,e){return 255*(1-Math.exp(-t/255*e))}),colorFilter:p,convoluteFilter:m},tt={scale:function Jt(t,e,n){var o=E.getWidth(t),r=E.getHeight(t),i=e/o,a=n/r,u=!1;(i<.5||i>2)&&(i=i<.5?.5:2,u=!0),(a<.5||a>2)&&(a=a<.5?.5:2,u=!0);var c,l,s,f=(c=t,l=i,s=a,new z(function(t){var e=E.getWidth(c),n=E.getHeight(c),o=Math.floor(e*l),r=Math.floor(n*s),i=j.create(o,r);j.get2dContext(i).drawImage(c,0,0,e,n,0,0,o,r),t(i)}));return u?f.then(function(t){return Jt(t,e,n)}):f}},et={rotate:function(t,e){return t.toCanvas().then(function(n){return o=n,r=t.getType(),i=e,a=j.create(o.width,o.height),u=j.get2dContext(a),c=0,l=0,90!=(i=i<0?360+i:i)&&270!=i||j.resize(a,a.height,a.width),90!=i&&180!=i||(c=a.width),270!=i&&180!=i||(l=a.height),u.translate(c,l),u.rotate(i*Math.PI/180),u.drawImage(o,0,0),J.fromCanvas(a,r);var o,r,i,a,u,c,l})},flip:function(t,e){return t.toCanvas().then(function(n){return o=n,r=t.getType(),i=e,a=j.create(o.width,o.height),u=j.get2dContext(a),"v"==i?(u.scale(1,-1),u.drawImage(o,0,-a.height)):(u.scale(-1,1),u.drawImage(o,-a.width,0)),J.fromCanvas(a,r);var o,r,i,a,u})},crop:function(t,e,n,o,r){return t.toCanvas().then(function(i){return a=i,u=t.getType(),c=e,l=n,s=o,f=r,d=j.create(s,f),j.get2dContext(d).drawImage(a,-c,-l),J.fromCanvas(d,u);var a,u,c,l,s,f,d})},resize:function(t,e,n){return t.toCanvas().then(function(o){return tt.scale(o,e,n).then(function(e){return J.fromCanvas(e,t.getType())})})}},nt={invert:function(t){return Q.invert(t)},sharpen:function(t){return Q.sharpen(t)},emboss:function(t){return Q.emboss(t)},brightness:function(t,e){return Q.brightness(t,e)},hue:function(t,e){return Q.hue(t,e)},saturate:function(t,e){return Q.saturate(t,e)},contrast:function(t,e){return Q.contrast(t,e)},grayscale:function(t,e){return Q.grayscale(t,e)},sepia:function(t,e){return Q.sepia(t,e)},colorize:function(t,e,n,o){return Q.colorize(t,e,n,o)},gamma:function(t,e){return Q.gamma(t,e)},exposure:function(t,e){return Q.exposure(t,e)},flip:function(t,e){return et.flip(t,e)},crop:function(t,e,n,o,r){return et.crop(t,e,n,o,r)},resize:function(t,e,n){return et.resize(t,e,n)},rotate:function(t,e){return et.rotate(t,e)}},ot=function(t){return t.toBlob()},rt={blobToImageResult:function(t){return J.fromBlob(t)},fromBlobAndUrlSync:function(t,e){return J.fromBlobAndUrlSync(t,e)},imageToImageResult:function(t){return J.fromImage(t)},imageResultToBlob:function(t,e,n){return e===undefined&&n===undefined?ot(t):t.toAdjustedBlob(e,n)},imageResultToOriginalBlob:ot,imageResultToDataURL:function(t){return t.toDataURL()}},it=function(){return N.getOrDie("URL")},at={createObjectURL:function(t){return it().createObjectURL(t)},revokeObjectURL:function(t){it().revokeObjectURL(t)}},ut=tinymce.util.Tools.resolve("tinymce.util.Delay"),ct=tinymce.util.Tools.resolve("tinymce.util.Promise"),lt=tinymce.util.Tools.resolve("tinymce.util.URI"),st=function(t){return t.getParam("imagetools_toolbar","rotateleft rotateright | flipv fliph | crop editimage imageoptions")},ft=function(t){return t.getParam("imagetools_proxy")},dt=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),ht=tinymce.util.Tools.resolve("tinymce.ui.Factory"),pt=tinymce.util.Tools.resolve("tinymce.geom.Rect"),mt=function(t){return new ct(function(e){var n=function(){t.removeEventListener("load",n),e(t)};t.complete?e(t):t.addEventListener("load",n)})},gt=tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),vt=tinymce.util.Tools.resolve("tinymce.util.Observable"),yt=tinymce.util.Tools.resolve("tinymce.util.VK"),bt=0,wt={create:function(t){return new(ht.get("Control").extend({Defaults:{classes:"imagepanel"},selection:function(t){return arguments.length?(this.state.set("rect",t),this):this.state.get("rect")},imageSize:function(){var t=this.state.get("viewRect");return{w:t.w,h:t.h}},toggleCropRect:function(t){this.state.set("cropEnabled",t)},imageSrc:function(t){var e=this,n=new Image;n.src=t,mt(n).then(function(){var t,o,r=e.state.get("viewRect");if((o=e.$el.find("img"))[0])o.replaceWith(n);else{var i=document.createElement("div");i.className="mce-imagepanel-bg",e.getEl().appendChild(i),e.getEl().appendChild(n)}t={x:0,y:0,w:n.naturalWidth,h:n.naturalHeight},e.state.set("viewRect",t),e.state.set("rect",pt.inflate(t,-20,-20)),r&&r.w===t.w&&r.h===t.h||e.zoomFit(),e.repaintImage(),e.fire("load")})},zoom:function(t){return arguments.length?(this.state.set("zoom",t),this):this.state.get("zoom")},postRender:function(){return this.imageSrc(this.settings.imageSrc),this._super()},zoomFit:function(){var t,e,n,o,r,i;t=this.$el.find("img"),e=this.getEl().clientWidth,n=this.getEl().clientHeight,o=t[0].naturalWidth,r=t[0].naturalHeight,(i=Math.min((e-10)/o,(n-10)/r))>=1&&(i=1),this.zoom(i)},repaintImage:function(){var t,e,n,o,r,i,a,u,c,l,s;s=this.getEl(),c=this.zoom(),l=this.state.get("rect"),a=this.$el.find("img"),u=this.$el.find(".mce-imagepanel-bg"),r=s.offsetWidth,i=s.offsetHeight,n=a[0].naturalWidth*c,o=a[0].naturalHeight*c,t=Math.max(0,r/2-n/2),e=Math.max(0,i/2-o/2),a.css({left:t,top:e,width:n,height:o}),u.css({left:t,top:e,width:n,height:o}),this.cropRect&&(this.cropRect.setRect({x:l.x*c+t,y:l.y*c+e,w:l.w*c,h:l.h*c}),this.cropRect.setClampRect({x:t,y:e,w:n,h:o}),this.cropRect.setViewPortRect({x:0,y:0,w:r,h:i}))},bindStates:function(){function t(t){e.cropRect=function(t,e,n,o,r){function i(t,e){return{x:e.x-t.x,y:e.y-t.y,w:e.w,h:e.h}}function a(e,o,r,a){var u,c,f,d,h;u=o.x,c=o.y,f=o.w,d=o.h,u+=r*e.deltaX,c+=a*e.deltaY,(f+=r*e.deltaW)<20&&(f=20),(d+=a*e.deltaH)<20&&(d=20),h=t=pt.clamp({x:u,y:c,w:f,h:d},n,"move"===e.name),h=i(n,h),s.fire("updateRect",{rect:h}),l(h)}function u(t){function n(t,e){e.h<0&&(e.h=0),e.w<0&&(e.w=0),gt("#"+m+"-"+t,o).css({left:e.x,top:e.y,width:e.w,height:e.h})}A.each(f,function(e){gt("#"+m+"-"+e.name,o).css({left:t.w*e.xMul+t.x,top:t.h*e.yMul+t.y})}),n("top",{x:e.x,y:e.y,w:e.w,h:t.y-e.y}),n("right",{x:t.x+t.w,y:t.y,w:e.w-t.x-t.w+e.x,h:t.h}),n("bottom",{x:e.x,y:t.y+t.h,w:e.w,h:e.h-t.y-t.h+e.y}),n("left",{x:e.x,y:t.y,w:t.x-e.x,h:t.h}),n("move",t)}function c(e){u(t=e)}function l(t){var e,o;c((e=n,{x:(o=t).x+e.x,y:o.y+e.y,w:o.w,h:o.h}))}var s,f,d,h,p="mce-",m=p+"crid-"+bt++;return f=[{name:"move",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:0,deltaH:0,label:"Crop Mask"},{name:"nw",xMul:0,yMul:0,deltaX:1,deltaY:1,deltaW:-1,deltaH:-1,label:"Top Left Crop Handle"},{name:"ne",xMul:1,yMul:0,deltaX:0,deltaY:1,deltaW:1,deltaH:-1,label:"Top Right Crop Handle"},{name:"sw",xMul:0,yMul:1,deltaX:1,deltaY:0,deltaW:-1,deltaH:1,label:"Bottom Left Crop Handle"},{name:"se",xMul:1,yMul:1,deltaX:0,deltaY:0,deltaW:1,deltaH:1,label:"Bottom Right Crop Handle"}],h=["top","right","bottom","left"],gt('<div id="'+m+'" class="'+p+'croprect-container" role="grid" aria-dropeffect="execute">').appendTo(o),A.each(h,function(t){gt("#"+m,o).append('<div id="'+m+"-"+t+'"class="'+p+'croprect-block" style="display: none" data-mce-bogus="all">')}),A.each(f,function(t){gt("#"+m,o).append('<div id="'+m+"-"+t.name+'" class="'+p+"croprect-handle "+p+"croprect-handle-"+t.name+'"style="display: none" data-mce-bogus="all" role="gridcell" tabindex="-1" aria-label="'+t.label+'" aria-grabbed="false">')}),d=A.map(f,function(e){var n;return new(ht.get("DragHelper"))(m,{document:o.ownerDocument,handle:m+"-"+e.name,start:function(){n=t},drag:function(t){a(e,n,t.deltaX,t.deltaY)}})}),u(t),gt(o).on("focusin focusout",function(t){gt(t.target).attr("aria-grabbed","focus"===t.type)}),gt(o).on("keydown",function(e){function n(t,e,n,r,i){t.stopPropagation(),t.preventDefault(),a(o,n,r,i)}var o;switch(A.each(f,function(t){if(e.target.id===m+"-"+t.name)return o=t,!1}),e.keyCode){case yt.LEFT:n(e,0,t,-10,0);break;case yt.RIGHT:n(e,0,t,10,0);break;case yt.UP:n(e,0,t,0,-10);break;case yt.DOWN:n(e,0,t,0,10);break;case yt.ENTER:case yt.SPACEBAR:e.preventDefault(),r()}}),s=A.extend({toggleVisibility:function(t){var e;e=A.map(f,function(t){return"#"+m+"-"+t.name}).concat(A.map(h,function(t){return"#"+m+"-"+t})).join(","),t?gt(e,o).show():gt(e,o).hide()},setClampRect:function(e){n=e,u(t)},setRect:c,getInnerRect:function(){return i(n,t)},setInnerRect:l,setViewPortRect:function(n){e=n,u(t)},destroy:function(){A.each(d,function(t){t.destroy()}),d=[]}},vt)}(t,e.state.get("viewRect"),e.state.get("viewRect"),e.getEl(),function(){e.fire("crop")}),e.cropRect.on("updateRect",function(t){var n=t.rect,o=e.zoom();n={x:Math.round(n.x/o),y:Math.round(n.y/o),w:Math.round(n.w/o),h:Math.round(n.h/o)},e.state.set("rect",n)}),e.on("remove",e.cropRect.destroy)}var e=this;e.state.on("change:cropEnabled",function(t){e.cropRect.toggleVisibility(t.value),e.repaintImage()}),e.state.on("change:zoom",function(){e.repaintImage()}),e.state.on("change:rect",function(n){var o=n.value;e.cropRect||t(o),e.cropRect.setRect(o)})}}))(t)}},xt={edit:function(t,e){return new ct(function(n,o){return e.toBlob().then(function(e){R(t,b(e),n,o)})})}},Rt={getImageSize:function(t){function e(t){return/^[0-9\.]+px$/.test(t)}var n,o;return n=t.style.width,o=t.style.height,n||o?e(n)&&e(o)?{w:parseInt(n,10),h:parseInt(o,10)}:null:(n=t.width,o=t.height,n&&o?{w:parseInt(n,10),h:parseInt(o,10)}:null)},setImageSize:function(t,e){var n,o;e&&(n=t.style.width,o=t.style.height,(n||o)&&(t.style.width=e.w+"px",t.style.height=e.h+"px",t.removeAttribute("data-mce-style")),n=t.width,o=t.height,(n||o)&&(t.setAttribute("width",e.w),t.setAttribute("height",e.h)))},getNaturalImageSize:function(t){return{w:t.naturalWidth,h:t.naturalHeight}}},It=(Array.prototype.indexOf,undefined,Array.prototype.push,Array.prototype.slice,function(t,e){for(var n=0,o=t.length;n<o;n++){var r=t[n];if(e(r,n,t))return P.some(r)}return P.none()}),Tt=function(t){return null!==t&&t!==undefined},kt={traverse:function(t,e){var n;return n=e.reduce(function(t,e){return Tt(t)?t[e]:undefined},t),Tt(n)?n:null},readBlob:function(t){return new ct(function(e){var n=new o;n.onload=function(t){var n=t.target;e(n.result)},n.readAsText(t)})},requestUrlAsBlob:function(t,e){return new ct(function(n){var o;(o=new function(){return new(N.getOrDie("XMLHttpRequest"))}).onreadystatechange=function(){4===o.readyState&&n({status:o.status,blob:this.response})},o.open("GET",t,!0),A.each(e,function(t,e){o.setRequestHeader(e,t)}),o.responseType="blob",o.send()})},parseJson:function(t){var e;try{e=JSON.parse(t)}catch(A){}return e}},Ct=[{code:404,message:"Could not find Image Proxy"},{code:403,message:"Rejected request"},{code:0,message:"Incorrect Image Proxy URL"}],Bt=[{type:"key_missing",message:"The request did not include an api key."},{type:"key_not_found",message:"The provided api key could not be found."},{type:"domain_not_trusted",message:"The api key is not valid for the request origins."}],Ut=function(t){return"ImageProxy HTTP error: "+It(Ct,function(e){return t===e.code}).fold(D.constant("Unknown ImageProxy error"),function(t){return t.message})},Mt=function(t){var e=Ut(t);return ct.reject(e)},At=function(t){return It(Bt,function(e){return e.type===t}).fold(D.constant("Unknown service error"),function(t){return t.message})},jt=function(t,e){return kt.readBlob(e).then(function(t){var e,n,o,r=(e=t,n=kt.parseJson(e),"ImageProxy Service error: "+((o=kt.traverse(n,["error","type"]))?At(o):"Invalid JSON in service error message"));return ct.reject(r)})},Et={handleServiceErrorResponse:function(t,e){return 400===(n=t)||403===n||500===n?jt(0,e):Mt(t);var n},handleHttpError:Mt,getHttpErrorMsg:Ut,getServiceErrorMsg:At},zt=function(t,e){return kt.requestUrlAsBlob((n=t,o=e,r=-1===n.indexOf("?")?"?":"&",/[?&]apiKey=/.test(n)||!o?n:n+r+"apiKey="+encodeURIComponent(o)),{"Content-Type":"application/json;charset=UTF-8","tiny-api-key":e}).then(function(t){return t.status<200||t.status>=300?Et.handleServiceErrorResponse(t.status,t.blob):ct.resolve(t.blob)});var n,o,r},Ot=function(t,e){return e?zt(t,e):(n=t,kt.requestUrlAsBlob(n,{}).then(function(t){return t.status<200||t.status>=300?Et.handleHttpError(t.status):ct.resolve(t.blob)}));var n},Dt=0,St=function(t,e){t.notificationManager.open({text:e,type:"error"})},Lt=function(t){return t.selection.getNode()},Ht=function(t,e){var n=e.src;return 0===n.indexOf("data:")||0===n.indexOf("blob:")||new lt(n).host===t.documentBaseURI.host},_t=function(t,e){return-1!==A.inArray(t.settings.imagetools_cors_hosts,new lt(e.src).host)},Ft=function(t){var e,n,o,r,i,a;return(e=t.editorUpload.blobCache.getByUri(Lt(t).src))?ct.resolve(e.blob()):(n=t,a=(o=Lt(t)).src,_t(n,o)?Ot(o.src,null):Ht(n,o)?Y(o):(a=ft(n),a+=(-1===a.indexOf("?")?"?":"&")+"url="+encodeURIComponent(o.src),r=(i=n).settings.api_key||i.settings.imagetools_api_key,Ot(a,r)))},Pt=function(t,e){var n=ut.setEditorTimeout(t,function(){t.editorUpload.uploadImagesAuto()
},t.settings.images_upload_timeout||3e4);e.set(n)},Wt=function(t){clearTimeout(t.get())},qt=function(t,e,n,o,r){return e.toBlob().then(function(i){var a,u,c,l,s,f,d;return c=t.editorUpload.blobCache,a=(s=Lt(t)).src,t.settings.images_reuse_filename&&((l=c.getByUri(a))?(a=l.uri(),u=l.name()):(f=t,u=(d=a.match(/\/([^\/\?]+)?\.(?:jpeg|jpg|png|gif)(?:\?|$)/i))?f.dom.encode(d[1]):null)),l=c.create({id:"imagetools"+Dt++,blob:i,base64:e.toBase64(),uri:a,name:u}),c.add(l),t.undoManager.transact(function(){t.$(s).on("load",function e(){t.$(s).off("load",e),t.nodeChanged(),n?t.editorUpload.uploadImagesAuto():(Wt(o),Pt(t,o))}),r&&t.$(s).attr({width:r.w,height:r.h}),t.$(s).attr({src:l.blobUri()}).removeAttr("data-mce-src")}),l})},Vt=function(t,e,n,o){return function(){return t._scanForImages().then(D.curry(Ft,t)).then(rt.blobToImageResult).then(n).then(function(n){return qt(t,n,!1,e,o)},function(e){St(t,e)})}},Nt={rotate:function(t,e,n){return function(){var o=Rt.getImageSize(Lt(t)),r=o?{w:o.h,h:o.w}:null;return Vt(t,e,function(t){return nt.rotate(t,n)},r)()}},flip:function(t,e,n){return function(){return Vt(t,e,function(t){return nt.flip(t,n)})()}},editImageDialog:function(t,e){return function(){var n=Lt(t),o=Rt.getNaturalImageSize(n),r=function(t){return new ct(function(e){G(t).then(function(r){var i=Rt.getNaturalImageSize(r);o.w===i.w&&o.h===i.h||Rt.getImageSize(n)&&Rt.setImageSize(n,i),at.revokeObjectURL(r.src),e(t)})})};Ft(t).then(rt.blobToImageResult).then(D.curry(function(t,n){return xt.edit(t,n).then(r).then(rt.blobToImageResult).then(function(n){return qt(t,n,!0,e)},function(){})},t),function(e){St(t,e)})}},isEditableImage:function(t,e){return t.dom.is(e,"img:not([data-mce-object],[data-mce-placeholder])")&&(Ht(t,e)||_t(t,e)||t.settings.imagetools_proxy)},cancelTimedUpload:Wt},$t=function(t,e){A.each({mceImageRotateLeft:Nt.rotate(t,e,-90),mceImageRotateRight:Nt.rotate(t,e,90),mceImageFlipVertical:Nt.flip(t,e,"v"),mceImageFlipHorizontal:Nt.flip(t,e,"h"),mceEditImage:Nt.editImageDialog(t,e)},function(e,n){t.addCommand(n,e)})},Xt=function(t,e,n){t.on("NodeChange",function(o){var r=n.get();r&&r.src!==o.element.src&&(Nt.cancelTimedUpload(e),t.editorUpload.uploadImagesAuto(),n.set(null)),Nt.isEditableImage(t,o.element)&&n.set(o.element)})},Gt=function(t){t.addButton("rotateleft",{title:"Rotate counterclockwise",cmd:"mceImageRotateLeft"}),t.addButton("rotateright",{title:"Rotate clockwise",cmd:"mceImageRotateRight"}),t.addButton("flipv",{title:"Flip vertically",cmd:"mceImageFlipVertical"}),t.addButton("fliph",{title:"Flip horizontally",cmd:"mceImageFlipHorizontal"}),t.addButton("editimage",{title:"Edit image",cmd:"mceEditImage"}),t.addButton("imageoptions",{title:"Image options",icon:"options",cmd:"mceImage"})},Yt=function(t){t.addContextToolbar(D.curry(Nt.isEditableImage,t),st(t))};M.add("imagetools",function(t){var e=U(0),n=U(null);$t(t,e),Gt(t),Yt(t),Xt(t,e,n)})}();