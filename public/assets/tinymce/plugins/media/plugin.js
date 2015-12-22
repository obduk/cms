tinymce.PluginManager.add("media",function(e,t){function n(e){return e=e.toLowerCase(),-1!=e.indexOf(".mp3")?"audio/mpeg":-1!=e.indexOf(".wav")?"audio/wav":-1!=e.indexOf(".mp4")?"video/mp4":-1!=e.indexOf(".webm")?"video/webm":-1!=e.indexOf(".ogg")?"video/ogg":-1!=e.indexOf(".swf")?"application/x-shockwave-flash":""}function r(t){var n=e.settings.media_scripts;if(n)for(var r=0;r<n.length;r++)if(-1!==t.indexOf(n[r].filter))return n[r]}function i(){function t(e){var t,n,o,a;t=r.find("#width")[0],n=r.find("#height")[0],o=t.value(),a=n.value(),r.find("#constrain")[0].checked()&&i&&c&&o&&a&&(e.control==t?(a=Math.round(o/i*a),isNaN(a)||n.value(a)):(o=Math.round(a/c*o),isNaN(o)||t.value(o))),i=o,c=a}function n(){u=s(this.value()),this.parent().parent().fromJSON(u)}var r,i,c,u,d=[{name:"source1",type:"filepicker",filetype:"media",size:40,autofocus:!0,label:"Source",onchange:function(e){tinymce.each(e.meta,function(e,t){r.find("#"+t).value(e)})}}];e.settings.media_alt_source!==!1&&d.push({name:"source2",type:"filepicker",filetype:"media",size:40,label:"Alternative source"}),e.settings.media_poster!==!1&&d.push({name:"poster",type:"filepicker",filetype:"image",size:40,label:"Poster"}),e.settings.media_dimensions!==!1&&d.push({type:"container",label:"Dimensions",layout:"flex",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:3,onchange:t,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:3,onchange:t,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),u=l(e.selection.getNode()),i=u.width,c=u.height;var f={id:"mcemediasource",type:"textbox",flex:1,name:"embed",value:o(),multiline:!0,label:"Source"};f[h]=n,r=e.windowManager.open({title:"Insert/edit video",data:u,bodyType:"tabpanel",body:[{title:"General",type:"form",onShowTab:function(){u=s(this.next().find("#embed").value()),this.fromJSON(u)},items:d},{title:"Embed",type:"container",layout:"flex",direction:"column",align:"stretch",padding:10,spacing:10,onShowTab:function(){this.find("#embed").value(a(this.parent().toJSON()))},items:[{type:"label",text:"Paste your embed code below:",forId:"mcemediasource"},f]}],onSubmit:function(){var t,n,r,i;for(t=e.dom.select("img[data-mce-object]"),e.insertContent(a(this.toJSON())),n=e.dom.select("img[data-mce-object]"),r=0;r<t.length;r++)for(i=n.length-1;i>=0;i--)t[r]==n[i]&&n.splice(i,1);e.selection.select(n[0]),e.nodeChanged()}})}function o(){var t=e.selection.getNode();return t.getAttribute("data-mce-object")?e.selection.getContent():void 0}function a(i){var o="";if(!i.source1&&(tinymce.extend(i,s(i.embed)),!i.source1))return"";if(i.source2||(i.source2=""),i.poster||(i.poster=""),i.source1=e.convertURL(i.source1,"source"),i.source2=e.convertURL(i.source2,"source"),i.source1mime=n(i.source1),i.source2mime=n(i.source2),i.poster=e.convertURL(i.poster,"poster"),i.flashPlayerUrl=e.convertURL(t+"/moxieplayer.swf","movie"),tinymce.each(m,function(e){var t,n,r;if(t=e.regex.exec(i.source1)){for(r=e.url,n=0;t[n];n++)r=r.replace("$"+n,function(){return t[n]});i.source1=r,i.type=e.type,i.allowFullscreen=e.allowFullscreen,i.width=i.width||e.w,i.height=i.height||e.h}}),i.embed)o=u(i.embed,i,!0);else{var a=r(i.source1);if(a&&(i.type="script",i.width=a.width,i.height=a.height),i.width=i.width||300,i.height=i.height||150,tinymce.each(i,function(t,n){i[n]=e.dom.encode(t)}),"iframe"==i.type){var l=i.allowFullscreen?' allowFullscreen="1"':"";o+='<iframe src="'+i.source1+'" width="'+i.width+'" height="'+i.height+'"'+l+"></iframe>"}else"application/x-shockwave-flash"==i.source1mime?(o+='<object data="'+i.source1+'" width="'+i.width+'" height="'+i.height+'" type="application/x-shockwave-flash">',i.poster&&(o+='<img src="'+i.poster+'" width="'+i.width+'" height="'+i.height+'" />'),o+="</object>"):-1!=i.source1mime.indexOf("audio")?e.settings.audio_template_callback?o=e.settings.audio_template_callback(i):o+='<audio controls="controls" src="'+i.source1+'">'+(i.source2?'\n<source src="'+i.source2+'"'+(i.source2mime?' type="'+i.source2mime+'"':"")+" />\n":"")+"</audio>":"script"==i.type?o+='<script src="'+i.source1+'"></script>':o=e.settings.video_template_callback?e.settings.video_template_callback(i):'<video width="'+i.width+'" height="'+i.height+'"'+(i.poster?' poster="'+i.poster+'"':"")+' controls="controls">\n<source src="'+i.source1+'"'+(i.source1mime?' type="'+i.source1mime+'"':"")+" />\n"+(i.source2?'<source src="'+i.source2+'"'+(i.source2mime?' type="'+i.source2mime+'"':"")+" />\n":"")+"</video>"}return o}function s(e){var t={};return new tinymce.html.SaxParser({validate:!1,allow_conditional_comments:!0,special:"script,noscript",start:function(e,n){if(t.source1||"param"!=e||(t.source1=n.map.movie),("iframe"==e||"object"==e||"embed"==e||"video"==e||"audio"==e)&&(t.type||(t.type=e),t=tinymce.extend(n.map,t)),"script"==e){var i=r(n.map.src);if(!i)return;t={type:"script",source1:n.map.src,width:i.width,height:i.height}}"source"==e&&(t.source1?t.source2||(t.source2=n.map.src):t.source1=n.map.src),"img"!=e||t.poster||(t.poster=n.map.src)}}).parse(e),t.source1=t.source1||t.src||t.data,t.source2=t.source2||"",t.poster=t.poster||"",t}function l(t){return t.getAttribute("data-mce-object")?s(e.serializer.serialize(t,{selection:!0})):{}}function c(t){if(e.settings.media_filter_html===!1)return t;var n,r=new tinymce.html.Writer;return new tinymce.html.SaxParser({validate:!1,allow_conditional_comments:!1,special:"script,noscript",comment:function(e){r.comment(e)},cdata:function(e){r.cdata(e)},text:function(e,t){r.text(e,t)},start:function(t,i,o){if(n=!0,"script"!=t&&"noscript"!=t){for(var a=0;a<i.length;a++){if(0===i[a].name.indexOf("on"))return;"style"==i[a].name&&(i[a].value=e.dom.serializeStyle(e.dom.parseStyle(i[a].value),t))}r.start(t,i,o),n=!1}},end:function(e){n||r.end(e)}},new tinymce.html.Schema({})).parse(t),r.getContent()}function u(e,t,n){function r(e,t){var n,r,i,o;for(n in t)if(i=""+t[n],e.map[n])for(r=e.length;r--;)o=e[r],o.name==n&&(i?(e.map[n]=i,o.value=i):(delete e.map[n],e.splice(r,1)));else i&&(e.push({name:n,value:i}),e.map[n]=i)}var i,o=new tinymce.html.Writer,a=0;return new tinymce.html.SaxParser({validate:!1,allow_conditional_comments:!0,special:"script,noscript",comment:function(e){o.comment(e)},cdata:function(e){o.cdata(e)},text:function(e,t){o.text(e,t)},start:function(e,s,l){switch(e){case"video":case"object":case"embed":case"img":case"iframe":r(s,{width:t.width,height:t.height})}if(n)switch(e){case"video":r(s,{poster:t.poster,src:""}),t.source2&&r(s,{src:""});break;case"iframe":r(s,{src:t.source1});break;case"source":if(a++,2>=a&&(r(s,{src:t["source"+a],type:t["source"+a+"mime"]}),!t["source"+a]))return;break;case"img":if(!t.poster)return;i=!0}o.start(e,s,l)},end:function(e){if("video"==e&&n)for(var s=1;2>=s;s++)if(t["source"+s]){var l=[];l.map={},s>a&&(r(l,{src:t["source"+s],type:t["source"+s+"mime"]}),o.start("source",l,!0))}if(t.poster&&"object"==e&&n&&!i){var c=[];c.map={},r(c,{src:t.poster,width:t.width,height:t.height}),o.start("img",c,!0)}o.end(e)}},new tinymce.html.Schema({})).parse(e),o.getContent()}function d(t,n){var r,i,o,a,s;for(o=t.attributes,a=o.length;a--;)r=o[a].name,i=o[a].value,"width"!==r&&"height"!==r&&"style"!==r&&(("data"==r||"src"==r)&&(i=e.convertURL(i,r)),n.attr("data-mce-p-"+r,i));s=t.firstChild&&t.firstChild.value,s&&(n.attr("data-mce-html",escape(s)),n.firstChild=null)}function f(e){var t,n=e.name;return t=new tinymce.html.Node("img",1),t.shortEnded=!0,d(e,t),t.attr({width:e.attr("width")||"300",height:e.attr("height")||("audio"==n?"30":"150"),style:e.attr("style"),src:tinymce.Env.transparentSrc,"data-mce-object":n,"class":"mce-object mce-object-"+n}),t}function p(e){var t,n,r,i=e.name;return t=new tinymce.html.Node("span",1),t.attr({contentEditable:"false",style:e.attr("style"),"data-mce-object":i,"class":"mce-preview-object mce-object-"+i}),d(e,t),n=new tinymce.html.Node(i,1),n.attr({src:e.attr("src"),allowfullscreen:e.attr("allowfullscreen"),width:e.attr("width")||"300",height:e.attr("height")||("audio"==i?"30":"150"),frameborder:"0"}),r=new tinymce.html.Node("span",1),r.attr("class","mce-shim"),t.append(n),t.append(r),t}var m=[{regex:/youtu\.be\/([\w\-.]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/youtube\.com(.+)v=([^&]+)/,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$2",allowFullscreen:!0},{regex:/youtube.com\/embed\/([a-z0-9\-]+)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:!0},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowfullscreen:!0},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$2?title=0&amp;byline=0",allowfullscreen:!0},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'//maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:!1}],h=tinymce.Env.ie&&tinymce.Env.ie<=8?"onChange":"onInput";e.on("ResolveName",function(e){var t;1==e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)}),e.on("preInit",function(){var t=e.schema.getSpecialElements();tinymce.each("video audio iframe object".split(" "),function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")});var n=e.schema.getBoolAttrs();tinymce.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(e){n[e]={}}),e.parser.addNodeFilter("iframe,video,audio,object,embed,script",function(t){for(var n,i,o,a=t.length;a--;)n=t[a],n.parent&&(n.parent.attr("data-mce-object")||("script"!=n.name||(o=r(n.attr("src"))))&&(o&&(o.width&&n.attr("width",o.width.toString()),o.height&&n.attr("height",o.height.toString())),i="iframe"==n.name&&e.settings.media_live_embeds!==!1&&tinymce.Env.ceFalse?p(n):f(n),n.replace(i)))}),e.serializer.addAttributeFilter("data-mce-object",function(e,t){for(var n,r,i,o,a,s,l,u,d=e.length;d--;)if(n=e[d],n.parent){for(l=n.attr(t),r=new tinymce.html.Node(l,1),"audio"!=l&&"script"!=l&&(u=n.attr("class"),u&&-1!==u.indexOf("mce-preview-object")?r.attr({width:n.firstChild.attr("width"),height:n.firstChild.attr("height")}):r.attr({width:n.attr("width"),height:n.attr("height")})),r.attr({style:n.attr("style")}),o=n.attributes,i=o.length;i--;){var f=o[i].name;0===f.indexOf("data-mce-p-")&&r.attr(f.substr(11),o[i].value)}"script"==l&&r.attr("type","text/javascript"),a=n.attr("data-mce-html"),a&&(s=new tinymce.html.Node("#text",3),s.raw=!0,s.value=c(unescape(a)),r.append(s)),n.replace(r)}})}),e.on("ObjectSelected",function(e){var t=e.target.getAttribute("data-mce-object");("audio"==t||"script"==t)&&e.preventDefault()}),e.on("objectResized",function(e){var t,n=e.target;n.getAttribute("data-mce-object")&&(t=n.getAttribute("data-mce-html"),t&&(t=unescape(t),n.setAttribute("data-mce-html",escape(u(t,{width:e.width,height:e.height})))))}),e.addButton("media",{tooltip:"Insert/edit video",onclick:i,stateSelector:["img[data-mce-object]","span[data-mce-object]"]}),e.addMenuItem("media",{icon:"media",text:"Insert/edit video",onclick:i,context:"insert",prependToContext:!0}),e.addCommand("mceMedia",i),this.showDialog=i});