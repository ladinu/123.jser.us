!function(e){function t(){$("a.tag").mouseenter(o).mouseleave(a),i(),e._hmt=e._hmt||[]}function o(){n($("a[data-toggle=feedback]"),"007"),s=!0;var e=$(this),t=e.data("des"),o=e.data("index");e.height();var a=e.position().top;clearTimeout(c),r&&r.get(0)!=e.get(0)&&n(r,o),r=e;var i=a-$(document.body).scrollTop()-p>0?"top":"bottom";console.log(i),e.popover({placement:i,title:"详情",html:!0,container:document.body,content:'<p style="width:400px">'+t+'</p><div id="temp'+o+'" style="width:400px;height:400px;">loading...</div>',trigger:"manual"});var l=e.data("popover").tip();l.one("mouseenter",function(){clearTimeout(c)}).one("mouseleave",function(){n(e,o)}),e.popover("show"),$("#temp"+o).replaceWith(d(o))}function a(){var e=$(this);clearTimeout(c),c=setTimeout(function(){var t=e.data("index");n(e,t)},250)}function n(e){clearTimeout(c);try{var t=e.data("popover").tip(),o=$("iframe",t);$(document.body).append(o),o.hide(),e.popover("hide")}catch(a){}}function i(){var e=$("a[data-toggle=feedback]");e.popover({placement:"bottom",title:"反馈",html:!0,content:'<div id="temp007">loading...</div>',trigger:"click"}),e.on("click",function(){s?$("#temp007").replaceWith(d("007")):n(e,"007"),s=!s})}function d(e){var t=$("#iframe"+e);if(0!=t.length)return t.show(),t.get(0);t=document.createElement("IFRAME");var o=["<head></head>","<body>","<style>body{overflow:auto}</style>",'<div class="ds-thread" data-url="http://123.jser.us" data-thread-key="{id}"></div>','<script type="text/javascript">','    var duoshuoQuery = {short_name:"123jser"};',"    (function() {",'        var ds = document.createElement("script");','        ds.type = "text/javascript";ds.async = true;','        ds.src = "http://static.duoshuo.com/embed.js";','        ds.charset = "UTF-8";','        (document.getElementsByTagName("head")[0] ','        || document.getElementsByTagName("body")[0]).appendChild(ds);',"    })();","</script>","</body>"].join("");return t.id="iframe"+e,t.style.display="none",t.frameborder=0,t.marginwidth=0,t.allowTransparency=!0,t.marginheight=0,t.style.border=0,t.style.width="400px",t.style.height="400px",document.body.appendChild(t),$(t).on("load",function(){var a=t.contentDocument||t.contentWindow.document;a.write(o.replace(/\{id\}/g,e)),$(this).show()}),t}var r,c,s=!0,p=450;$(function(){t()})}(window);