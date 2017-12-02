!function(){var e={},t=function(t){for(var n=e[t],o=n.deps,i=n.defn,s=o.length,a=new Array(s),d=0;d<s;++d)a[d]=r(o[d]);var l=i.apply(null,a);if(void 0===l)throw"module ["+t+"] returned undefined";n.instance=l},n=function(t,n,r){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===r)throw"no definition function for "+t;e[t]={deps:n,defn:r,instance:void 0}},r=function(n){var r=e[n];if(void 0===r)throw"module ["+n+"] was undefined";return void 0===r.instance&&t(n),r.instance},o=function(e,t){for(var n=e.length,o=new Array(n),i=0;i<n;++i)o[i]=r(e[i]);t.apply(null,o)};({}).bolt={module:{api:{define:n,require:o,demand:r}}};var i=n;(function(e,t){i(e,[],function(){return t})})("6",tinymce.util.Tools.resolve),i("1",["6"],function(e){return e("tinymce.PluginManager")}),i("g",["6"],function(e){return e("tinymce.dom.RangeUtils")}),i("h",["6"],function(e){return e("tinymce.dom.TreeWalker")}),i("b",["6"],function(e){return e("tinymce.util.VK")}),i("i",["6"],function(e){return e("tinymce.dom.BookmarkManager")}),i("d",["6"],function(e){return e("tinymce.util.Tools")}),i("j",["6"],function(e){return e("tinymce.dom.DOMUtils")}),i("e",[],function(){var e=function(e){return e&&"BR"===e.nodeName};return{isTextNode:function(e){return e&&3===e.nodeType},isListNode:function(e){return e&&/^(OL|UL|DL)$/.test(e.nodeName)},isListItemNode:function(e){return e&&/^(LI|DT|DD)$/.test(e.nodeName)},isTableCellNode:function(e){return e&&/^(TH|TD)$/.test(e.nodeName)},isBr:e,isFirstChild:function(e){return e.parentNode.firstChild===e},isLastChild:function(e){return e.parentNode.lastChild===e},isTextBlock:function(e,t){return t&&!!e.schema.getTextBlockElements()[t.nodeName]},isBlock:function(e,t){return e&&e.nodeName in t},isBogusBr:function(t,n){return!!e(n)&&!(!t.isBlock(n.nextSibling)||e(n.previousSibling))},isEmpty:function(e,t,n){var r=e.isEmpty(t);return!(n&&e.select("span[data-mce-type=bookmark]",t).length>0)&&r},isChildOfBody:function(e,t){return e.isChildOf(t,e.getRoot())}}}),i("p",["g","e"],function(e,t){var n=function(n,r){var o=e.getNode(n,r);if(t.isListItemNode(n)&&t.isTextNode(o)){return{container:o,offset:r>=n.childNodes.length?o.data.length:0}}return{container:n,offset:r}};return{getNormalizedEndPoint:n,normalizeRange:function(e){var t=e.cloneRange(),r=n(e.startContainer,e.startOffset);t.setStart(r.container,r.offset);var o=n(e.endContainer,e.endOffset);return t.setEnd(o.container,o.offset),t}}}),i("k",["j","e","p"],function(e,t,n){var r=e.DOM;return{createBookmark:function(e){var t={},n=function(n){var o,i,s;i=e[n?"startContainer":"endContainer"],s=e[n?"startOffset":"endOffset"],1===i.nodeType&&(o=r.create("span",{"data-mce-type":"bookmark"}),i.hasChildNodes()?(s=Math.min(s,i.childNodes.length-1),n?i.insertBefore(o,i.childNodes[s]):r.insertAfter(o,i.childNodes[s])):i.appendChild(o),i=o,s=0),t[n?"startContainer":"endContainer"]=i,t[n?"startOffset":"endOffset"]=s};return n(!0),e.collapsed||n(),t},resolveBookmark:function(e){function t(t){var n,o,i,s=function(e){for(var t=e.parentNode.firstChild,n=0;t;){if(t===e)return n;1===t.nodeType&&"bookmark"===t.getAttribute("data-mce-type")||n++,t=t.nextSibling}return-1};n=i=e[t?"startContainer":"endContainer"],o=e[t?"startOffset":"endOffset"],n&&(1===n.nodeType&&(o=s(n),n=n.parentNode,r.remove(i)),e[t?"startContainer":"endContainer"]=n,e[t?"startOffset":"endOffset"]=o)}t(!0),t();var o=r.createRng();return o.setStart(e.startContainer,e.startOffset),e.endContainer&&o.setEnd(e.endContainer,e.endOffset),n.normalizeRange(o)}}}),i("l",["j","d","e"],function(e,t,n){var r=e.DOM,o=function(e,t){var o,i=t.parentNode;"LI"===i.nodeName&&i.firstChild===t&&((o=i.previousSibling)&&"LI"===o.nodeName?(o.appendChild(t),n.isEmpty(e,i)&&r.remove(i)):r.setStyle(i,"listStyleType","none")),n.isListNode(i)&&(o=i.previousSibling)&&"LI"===o.nodeName&&o.appendChild(t)};return{normalizeList:o,normalizeLists:function(e,n){t.each(t.grep(e.select("ol,ul",n)),function(t){o(e,t)})}}}),i("m",["6"],function(e){return e("tinymce.dom.DomQuery")}),i("f",["m","d","e"],function(e,t,n){var r=function(e){var t=e.selection.getStart(!0);return e.dom.getParent(t,"OL,UL,DL",a(e,t))},o=function(e,t){return e&&1===t.length&&t[0]===e},i=function(e){return t.grep(e.querySelectorAll("ol,ul,dl"),function(e){return n.isListNode(e)})},s=function(n,r){var o=t.map(r,function(e){var t=n.dom.getParent(e,"li,dd,dt",a(n,e));return t||e});return e.unique(o)},a=function(e,t){var n=e.dom.getParents(t,"TD,TH");return n.length>0?n[0]:e.getBody()};return{getParentList:r,getSelectedSubLists:function(e){var s=r(e),a=e.selection.getSelectedBlocks();return o(s,a)?i(s):t.grep(a,function(e){return n.isListNode(e)&&s!==e})},getSelectedListItems:function(e){var r=e.selection.getSelectedBlocks();return t.grep(s(e,r),function(e){return n.isListItemNode(e)})},getClosestListRootElm:a}}),i("q",["6"],function(e){return e("tinymce.Env")}),i("o",["j","q","e"],function(e,t,n){var r=e.DOM;return{createNewTextBlock:function(e,o,i){var s,a,d,l=r.createFragment(),c=e.schema.getBlockElements();if(e.settings.forced_root_block&&(i=i||e.settings.forced_root_block),i&&((a=r.create(i)).tagName===e.settings.forced_root_block&&r.setAttribs(a,e.settings.forced_root_block_attrs),n.isBlock(o.firstChild,c)||l.appendChild(a)),o)for(;s=o.firstChild;){var u=s.nodeName;d||"SPAN"===u&&"bookmark"===s.getAttribute("data-mce-type")||(d=!0),n.isBlock(s,c)?(l.appendChild(s),a=null):i?(a||(a=r.create(i),l.appendChild(a)),a.appendChild(s)):l.appendChild(s)}return e.settings.forced_root_block?d||t.ie&&!(t.ie>10)||a.appendChild(r.create("br",{"data-mce-bogus":"1"})):l.appendChild(r.create("br")),l}}}),i("n",["j","e","o","d"],function(e,t,n,r){var o=e.DOM;return{splitList:function(e,i,s,a){var d,l,c,u,f=function(e){r.each(c,function(t){e.parentNode.insertBefore(t,s.parentNode)}),o.remove(e)};for(c=o.select('span[data-mce-type="bookmark"]',i),a=a||n.createNewTextBlock(e,s),(d=o.createRng()).setStartAfter(s),d.setEndAfter(i),u=(l=d.extractContents()).firstChild;u;u=u.firstChild)if("LI"===u.nodeName&&e.dom.isEmpty(u)){o.remove(u);break}e.dom.isEmpty(l)||o.insertAfter(l,i),o.insertAfter(a,i),t.isEmpty(e.dom,s.parentNode)&&f(s.parentNode),o.remove(s),t.isEmpty(e.dom,i)&&o.remove(i)}}}),i("9",["j","k","e","l","f","n","o"],function(e,t,n,r,o,i,s){var a=e.DOM,d=function(e,t){n.isEmpty(e,t)&&a.remove(t)},l=function(e,t){var o,l=t.parentNode,c=l.parentNode;return!(l!==e.getBody()&&("DD"===t.nodeName?(a.rename(t,"DT"),0):n.isFirstChild(t)&&n.isLastChild(t)?("LI"===c.nodeName?(a.insertAfter(t,c),d(e.dom,c),a.remove(l)):n.isListNode(c)?a.remove(l,!0):(c.insertBefore(s.createNewTextBlock(e,t),l),a.remove(l)),0):n.isFirstChild(t)?("LI"===c.nodeName?(a.insertAfter(t,c),t.appendChild(l),d(e.dom,c)):n.isListNode(c)?c.insertBefore(t,l):(c.insertBefore(s.createNewTextBlock(e,t),l),a.remove(t)),0):n.isLastChild(t)?("LI"===c.nodeName?a.insertAfter(t,c):n.isListNode(c)?a.insertAfter(t,l):(a.insertAfter(s.createNewTextBlock(e,t),l),a.remove(t)),0):("LI"===c.nodeName?(l=c,o=s.createNewTextBlock(e,t,"LI")):o=n.isListNode(c)?s.createNewTextBlock(e,t,"LI"):s.createNewTextBlock(e,t),i.splitList(e,l,t,o),r.normalizeLists(e.dom,l.parentNode),0)))};return{outdent:l,outdentSelection:function(e){var n=o.getSelectedListItems(e);if(n.length){var r,i,s=t.createBookmark(e.selection.getRng(!0)),a=o.getClosestListRootElm(e,e.selection.getStart(!0));for(r=n.length;r--;)for(var d=n[r].parentNode;d&&d!==a;){for(i=n.length;i--;)if(n[i]===d){n.splice(r,1);break}d=d.parentNode}for(r=0;r<n.length&&(l(e,n[r])||0!==r);r++);return e.selection.setRng(t.resolveBookmark(s)),e.nodeChanged(),!0}}}}),i("a",["i","d","9","k","e","l","f","n"],function(e,t,n,r,o,i,s,a){var d=function(e,t,n){var r=n["list-style-type"]?n["list-style-type"]:null;e.setStyle(t,"list-style-type",r)},l=function(e,n){t.each(n,function(t,n){e.setAttribute(n,t)})},c=function(e,n,r){l(n,r["list-attributes"]),t.each(e.select("li",n),function(e){l(e,r["list-item-attributes"])})},u=function(e,t,n){d(e,t,n),c(e,t,n)},f=function(e,t,n,r){var i,s;for(i=t[n?"startContainer":"endContainer"],s=t[n?"startOffset":"endOffset"],1===i.nodeType&&(i=i.childNodes[Math.min(s,i.childNodes.length-1)]||i);i.parentNode!==r;){if(o.isTextBlock(e,i))return i;if(/^(TD|TH)$/.test(i.parentNode.nodeName))return i;i=i.parentNode}return i},m=function(n,r,i){for(var s,a=[],d=n.dom,l=f(n,r,!0,i),c=f(n,r,!1,i),u=[],m=l;m&&(u.push(m),m!==c);m=m.nextSibling);return t.each(u,function(t){if(o.isTextBlock(n,t))return a.push(t),void(s=null);if(d.isBlock(t)||o.isBr(t))return o.isBr(t)&&d.remove(t),void(s=null);var r=t.nextSibling;return e.isBookmarkNode(t)&&(o.isTextBlock(n,r)||!r&&t.parentNode===i)?void(s=null):(s||(s=d.create("p"),t.parentNode.insertBefore(s,t),a.push(s)),void s.appendChild(t))}),a},g=function(e,n,i){var a,d=e.selection.getRng(!0),l="LI",c=s.getClosestListRootElm(e,e.selection.getStart(!0)),f=e.dom;i=i||{},"false"!==f.getContentEditable(e.selection.getNode())&&("DL"===(n=n.toUpperCase())&&(l="DT"),a=r.createBookmark(d),t.each(m(e,d,c),function(t){var r,s,a=function(e){var t=f.getStyle(e,"list-style-type"),n=i?i["list-style-type"]:"";return n=null===n?"":n,t===n};(s=t.previousSibling)&&o.isListNode(s)&&s.nodeName===n&&a(s)?(r=s,t=f.rename(t,l),s.appendChild(t)):(r=f.create(n),t.parentNode.insertBefore(r,t),r.appendChild(t),t=f.rename(t,l)),u(f,r,i),L(e.dom,r)}),e.selection.setRng(r.resolveBookmark(a)))},p=function(e){var d=r.createBookmark(e.selection.getRng(!0)),l=s.getClosestListRootElm(e,e.selection.getStart(!0)),c=s.getSelectedListItems(e),u=t.grep(c,function(t){return e.dom.isEmpty(t)});c=t.grep(c,function(t){return!e.dom.isEmpty(t)}),t.each(u,function(t){o.isEmpty(e.dom,t)&&n.outdent(e,t)}),t.each(c,function(t){var n,r;if(t.parentNode!==e.getBody()){for(n=t;n&&n!==l;n=n.parentNode)o.isListNode(n)&&(r=n);a.splitList(e,r,t),i.normalizeLists(e.dom,r.parentNode)}}),e.selection.setRng(r.resolveBookmark(d))},v=function(e,t){return e&&t&&o.isListNode(e)&&e.nodeName===t.nodeName},h=function(e,t,n){return e.getStyle(t,"list-style-type",!0)===e.getStyle(n,"list-style-type",!0)},N=function(e,t){return e.className===t.className},C=function(e,t,n){return v(t,n)&&h(e,t,n)&&N(t,n)},L=function(e,t){var n,r;if(n=t.nextSibling,C(e,t,n)){for(;r=n.firstChild;)t.appendChild(r);e.remove(n)}if(n=t.previousSibling,C(e,t,n)){for(;r=n.lastChild;)t.insertBefore(r,t.firstChild);e.remove(n)}},y=function(e,t,n,r){if(t.nodeName!==n){var o=e.rename(t,n);u(e,o,r)}else u(e,t,r)},k=function(e,n,o,i,s){if(n.nodeName!==i||B(s)){var a=r.createBookmark(e.selection.getRng(!0));t.each([n].concat(o),function(t){y(e.dom,t,i,s)}),e.selection.setRng(r.resolveBookmark(a))}else p(e,i)},B=function(e){return"list-style-type"in e},S=function(e,t,n,o){if(t!==e.getBody())if(t)if(t.nodeName!==n||B(o)){var i=r.createBookmark(e.selection.getRng(!0));u(e.dom,t,o),L(e.dom,e.dom.rename(t,n)),e.selection.setRng(r.resolveBookmark(i))}else p(e,n);else g(e,n,o)};return{toggleList:function(e,t,n){var r=s.getParentList(e),o=s.getSelectedSubLists(e);n=n||{},r&&o.length>0?k(e,r,o,t,n):S(e,r,t,n)},removeList:p,mergeWithAdjacentLists:L}}),i("7",["g","h","b","a","k","e","l","p","f"],function(e,t,n,r,o,i,s,a,d){var l=function(n,r,o,s){var a,d,l=r.startContainer,c=r.startOffset;if(3===l.nodeType&&(o?c<l.data.length:c>0))return l;for(a=n.schema.getNonEmptyElements(),1===l.nodeType&&(l=e.getNode(l,c)),d=new t(l,s),o&&i.isBogusBr(n.dom,l)&&d.next();l=d[o?"next":"prev2"]();){if("LI"===l.nodeName&&!l.hasChildNodes())return l;if(a[l.nodeName])return l;if(3===l.nodeType&&l.data.length>0)return l}},c=function(e,t){var n=t.childNodes;return 1===n.length&&!i.isListNode(n[0])&&e.isBlock(n[0])},u=function(e,t){c(e,t)&&e.remove(t.firstChild,!0)},f=function(e,t,n){var r,o;if(o=c(e,n)?n.firstChild:n,u(e,t),!i.isEmpty(e,t,!0))for(;r=t.firstChild;)o.appendChild(r)},m=function(e,t,n){var r,o,s=t.parentNode;i.isChildOfBody(e,t)&&i.isChildOfBody(e,n)&&(i.isListNode(n.lastChild)&&(o=n.lastChild),s===n.lastChild&&i.isBr(s.previousSibling)&&e.remove(s.previousSibling),(r=n.lastChild)&&i.isBr(r)&&t.hasChildNodes()&&e.remove(r),i.isEmpty(e,n,!0)&&e.$(n).empty(),f(e,t,n),o&&n.appendChild(o),e.remove(t),i.isEmpty(e,s)&&s!==e.getRoot()&&e.remove(s))},g=function(e,t,n){e.dom.$(n).empty(),m(e.dom,t,n),e.selection.setCursorLocation(n)},p=function(e,t,n,r){var i=e.dom;if(i.isEmpty(r))g(e,n,r);else{var s=o.createBookmark(t);m(i,n,r),e.selection.setRng(o.resolveBookmark(s))}},v=function(e,t,n,r){var i=o.createBookmark(t);m(e.dom,n,r);var s=o.resolveBookmark(i);e.selection.setRng(s)},h=function(e,t){var n,o,s,c=e.dom,u=e.selection,f=u.getStart(),m=d.getClosestListRootElm(e,f),g=c.getParent(u.getStart(),"LI",m);if(g){if((n=g.parentNode)===e.getBody()&&i.isEmpty(c,n))return!0;if(o=a.normalizeRange(u.getRng(!0)),(s=c.getParent(l(e,o,t,m),"LI",m))&&s!==g)return t?p(e,o,s,g):v(e,o,g,s),!0;if(!s&&!t&&r.removeList(e,n.nodeName))return!0}return!1},N=function(e,t,n){var r=e.getParent(t.parentNode,e.isBlock,n);e.remove(t),r&&e.isEmpty(r)&&e.remove(r)},C=function(e,t){var n=e.dom,o=e.selection.getStart(),i=d.getClosestListRootElm(e,o),s=n.getParent(o,n.isBlock,i);if(s&&n.isEmpty(s)){var c=a.normalizeRange(e.selection.getRng(!0)),u=n.getParent(l(e,c,t,i),"LI",i);if(u)return e.undoManager.transact(function(){N(n,s,i),r.mergeWithAdjacentLists(n,u.parentNode),e.selection.select(u,!0),e.selection.collapse(t)}),!0}return!1},L=function(e,t){return h(e,t)||C(e,t)},y=function(e){var t=e.selection.getStart(),n=d.getClosestListRootElm(e,t);return!!(e.dom.getParent(t,"LI,DT,DD",n)||d.getSelectedListItems(e).length>0)&&(e.undoManager.transact(function(){e.execCommand("Delete"),s.normalizeLists(e.dom,e.getBody())}),!0)},k=function(e,t){return e.selection.isCollapsed()?L(e,t):y(e)};return{setup:function(e){e.on("keydown",function(t){t.keyCode===n.BACKSPACE?k(e,!1)&&t.preventDefault():t.keyCode===n.DELETE&&k(e,!0)&&t.preventDefault()})},backspaceDelete:k}}),i("2",["7"],function(e){return{get:function(t){return{backspaceDelete:function(n){e.backspaceDelete(t,n)}}}}}),i("8",["j","k","e","f"],function(e,t,n,r){var o=e.DOM,i=function(e,t){var r;if(n.isListNode(e)){for(;r=e.firstChild;)t.appendChild(r);o.remove(e)}},s=function(e){var t,r,s;return"DT"===e.nodeName?(o.rename(e,"DD"),!0):(t=e.previousSibling)&&n.isListNode(t)?(t.appendChild(e),!0):t&&"LI"===t.nodeName&&n.isListNode(t.lastChild)?(t.lastChild.appendChild(e),i(e.lastChild,t.lastChild),!0):(t=e.nextSibling)&&n.isListNode(t)?(t.insertBefore(e,t.firstChild),!0):!(!(t=e.previousSibling)||"LI"!==t.nodeName||(r=o.create(e.parentNode.nodeName),(s=o.getStyle(e.parentNode,"listStyleType"))&&o.setStyle(r,"listStyleType",s),t.appendChild(r),r.appendChild(e),i(e.lastChild,r),0))};return{indentSelection:function(e){var n=r.getSelectedListItems(e);if(n.length){for(var o=t.createBookmark(e.selection.getRng(!0)),i=0;i<n.length&&(s(n[i])||0!==i);i++);return e.selection.setRng(t.resolveBookmark(o)),e.nodeChanged(),!0}}}}),i("3",["8","9","a"],function(e,t,n){var r=function(e,t){return function(){var n=e.dom.getParent(e.selection.getStart(),"UL,OL,DL");return n&&n.nodeName===t}};return{register:function(o){o.on("BeforeExecCommand",function(n){var r,i=n.command.toLowerCase();if("indent"===i?e.indentSelection(o)&&(r=!0):"outdent"===i&&t.outdentSelection(o)&&(r=!0),r)return o.fire("ExecCommand",{command:n.command}),n.preventDefault(),!0}),o.addCommand("InsertUnorderedList",function(e,t){n.toggleList(o,"UL",t)}),o.addCommand("InsertOrderedList",function(e,t){n.toggleList(o,"OL",t)}),o.addCommand("InsertDefinitionList",function(e,t){n.toggleList(o,"DL",t)}),o.addQueryStateHandler("InsertUnorderedList",r(o,"UL")),o.addQueryStateHandler("InsertOrderedList",r(o,"OL")),o.addQueryStateHandler("InsertDefinitionList",r(o,"DL"))}}}),i("c",[],function(){return{shouldIndentOnTab:function(e){return e.getParam("lists_indent_on_tab",!0)}}}),i("4",["b","8","9","c","7"],function(e,t,n,r,o){var i=function(r){r.on("keydown",function(o){o.keyCode!==e.TAB||e.metaKeyPressed(o)||r.dom.getParent(r.selection.getStart(),"LI,DT,DD")&&(o.preventDefault(),o.shiftKey?n.outdentSelection(r):t.indentSelection(r))})};return{setup:function(e){r.shouldIndentOnTab(e)&&i(e),o.setup(e)}}}),i("5",["d","e","f"],function(e,t,n){var r=function(e,t){for(var n=0;n<e.length;n++){if(t(e[n]))return n}return-1},o=function(n,o){return function(i){var s=i.control;n.on("NodeChange",function(n){var i=r(n.parents,t.isTableCellNode),a=-1!==i?n.parents.slice(0,i):n.parents,d=e.grep(a,t.isListNode);s.active(d.length>0&&d[0].nodeName===o)})}},i=function(e){return function(r){var o=r.control;e.on("nodechange",function(){var r=n.getSelectedListItems(e),i=r.length>0&&t.isFirstChild(r[0]);o.disabled(i)})}};return{register:function(t){(function(t,n){var r=t.settings.plugins?t.settings.plugins:"";return-1!==e.inArray(r.split(/[ ,]/),n)})(t,"advlist")||(t.addButton("numlist",{title:"Numbered list",cmd:"InsertOrderedList",onPostRender:o(t,"OL")}),t.addButton("bullist",{title:"Bullet list",cmd:"InsertUnorderedList",onPostRender:o(t,"UL")})),t.addButton("indent",{icon:"indent",title:"Increase indent",cmd:"Indent",onPostRender:i(t)})}}}),i("0",["1","2","3","4","5"],function(e,t,n,r,o){return e.add("lists",function(e){return r.setup(e),o.register(e),n.register(e),t.get(e)}),function(){}}),r("0")()}();