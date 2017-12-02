!function(){var o={},e=function(e){for(var n=o[e],i=n.deps,c=n.defn,r=i.length,u=new Array(r),l=0;l<r;++l)u[l]=t(i[l]);var s=c.apply(null,u);if(void 0===s)throw"module ["+e+"] returned undefined";n.instance=s},n=function(e,n,t){if("string"!=typeof e)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+e;if(void 0===t)throw"no definition function for "+e;o[e]={deps:n,defn:t,instance:void 0}},t=function(n){var t=o[n];if(void 0===t)throw"module ["+n+"] was undefined";return void 0===t.instance&&e(n),t.instance},i=function(o,e){for(var n=o.length,i=new Array(n),c=0;c<n;++c)i[c]=t(o[c]);e.apply(null,i)};({}).bolt={module:{api:{define:n,require:i,demand:t}}};var c=n;(function(o,e){c(o,[],function(){return e})})("3",tinymce.util.Tools.resolve),c("1",["3"],function(o){return o("tinymce.PluginManager")}),c("4",["3"],function(o){return o("tinymce.util.Tools")}),c("2",["4"],function(o){return{html2bbcode:function(e){e=o.trim(e);var n=function(o,n){e=e.replace(o,n)};return n(/<a.*?href=\"(.*?)\".*?>(.*?)<\/a>/gi,"[url=$1]$2[/url]"),n(/<font.*?color=\"(.*?)\".*?class=\"codeStyle\".*?>(.*?)<\/font>/gi,"[code][color=$1]$2[/color][/code]"),n(/<font.*?color=\"(.*?)\".*?class=\"quoteStyle\".*?>(.*?)<\/font>/gi,"[quote][color=$1]$2[/color][/quote]"),n(/<font.*?class=\"codeStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[code][color=$1]$2[/color][/code]"),n(/<font.*?class=\"quoteStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[quote][color=$1]$2[/color][/quote]"),n(/<span style=\"color: ?(.*?);\">(.*?)<\/span>/gi,"[color=$1]$2[/color]"),n(/<font.*?color=\"(.*?)\".*?>(.*?)<\/font>/gi,"[color=$1]$2[/color]"),n(/<span style=\"font-size:(.*?);\">(.*?)<\/span>/gi,"[size=$1]$2[/size]"),n(/<font>(.*?)<\/font>/gi,"$1"),n(/<img.*?src=\"(.*?)\".*?\/>/gi,"[img]$1[/img]"),n(/<span class=\"codeStyle\">(.*?)<\/span>/gi,"[code]$1[/code]"),n(/<span class=\"quoteStyle\">(.*?)<\/span>/gi,"[quote]$1[/quote]"),n(/<strong class=\"codeStyle\">(.*?)<\/strong>/gi,"[code][b]$1[/b][/code]"),n(/<strong class=\"quoteStyle\">(.*?)<\/strong>/gi,"[quote][b]$1[/b][/quote]"),n(/<em class=\"codeStyle\">(.*?)<\/em>/gi,"[code][i]$1[/i][/code]"),n(/<em class=\"quoteStyle\">(.*?)<\/em>/gi,"[quote][i]$1[/i][/quote]"),n(/<u class=\"codeStyle\">(.*?)<\/u>/gi,"[code][u]$1[/u][/code]"),n(/<u class=\"quoteStyle\">(.*?)<\/u>/gi,"[quote][u]$1[/u][/quote]"),n(/<\/(strong|b)>/gi,"[/b]"),n(/<(strong|b)>/gi,"[b]"),n(/<\/(em|i)>/gi,"[/i]"),n(/<(em|i)>/gi,"[i]"),n(/<\/u>/gi,"[/u]"),n(/<span style=\"text-decoration: ?underline;\">(.*?)<\/span>/gi,"[u]$1[/u]"),n(/<u>/gi,"[u]"),n(/<blockquote[^>]*>/gi,"[quote]"),n(/<\/blockquote>/gi,"[/quote]"),n(/<br \/>/gi,"\n"),n(/<br\/>/gi,"\n"),n(/<br>/gi,"\n"),n(/<p>/gi,""),n(/<\/p>/gi,"\n"),n(/&nbsp;|\u00a0/gi," "),n(/&quot;/gi,'"'),n(/&lt;/gi,"<"),n(/&gt;/gi,">"),n(/&amp;/gi,"&"),e},bbcode2html:function(e){e=o.trim(e);var n=function(o,n){e=e.replace(o,n)};return n(/\n/gi,"<br />"),n(/\[b\]/gi,"<strong>"),n(/\[\/b\]/gi,"</strong>"),n(/\[i\]/gi,"<em>"),n(/\[\/i\]/gi,"</em>"),n(/\[u\]/gi,"<u>"),n(/\[\/u\]/gi,"</u>"),n(/\[url=([^\]]+)\](.*?)\[\/url\]/gi,'<a href="$1">$2</a>'),n(/\[url\](.*?)\[\/url\]/gi,'<a href="$1">$1</a>'),n(/\[img\](.*?)\[\/img\]/gi,'<img src="$1" />'),n(/\[color=(.*?)\](.*?)\[\/color\]/gi,'<font color="$1">$2</font>'),n(/\[code\](.*?)\[\/code\]/gi,'<span class="codeStyle">$1</span>&nbsp;'),n(/\[quote.*?\](.*?)\[\/quote\]/gi,'<span class="quoteStyle">$1</span>&nbsp;'),e}}}),c("0",["1","2"],function(o,e){return o.add("bbcode",function(){return{init:function(o){o.on("beforeSetContent",function(o){o.content=e.bbcode2html(o.content)}),o.on("postProcess",function(o){o.set&&(o.content=e.bbcode2html(o.content)),o.get&&(o.content=e.html2bbcode(o.content))})}}}),function(){}}),t("0")()}();