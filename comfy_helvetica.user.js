// ==UserScript==
// @name           Comfy Helvetica
// @namespace      https://github.com/adsahay/Comfy-Helvetica-style-for-HN
// @include        http://news.ycombinator.com/*
// @description    Better CSS for Hacker News
// ==/UserScript==

(function() {

	function hn_style() {
	
		var style = "html {zoom:1.32;}" + 
			"img, a[href=news] {zoom:.76;}" +
			"body * {font-family:'Helvetica Neue', Helvetica," +
			"	   'Liberation Sans', sans-serif !important;}" +
			"code {font:10px/1.5 Menlo, monospace !important;}" +
			"a:link {color:#222 !important;}" +
			"form {padding:0 1em;}" +
			"td[style='width:18px;padding-right:4px'] " +
			"a[href='http://ycombinator.com']:after {" +
			"  content:'Y';" +
			"  font-family:Tahoma;" +
			"  position:relative;" +
			"  top:3.2em;" +
			"  left:-1.55em;" +
			"  color:#fff;" +
			"  background:#f60 -moz-linear-gradient(right, #f60 80%, #c50 100%); " +			
			"  background:#f60 -webkit-gradient(linear, 0% 0%, 100% 0%," +
			"			 color-stop(.8, #f60), color-stop(1, #c50));" +
			"  border-right:#a40 solid 1px;" +
			"  padding:1px 6px;" +
			"} " +
			"img[src='http://ycombinator.com/images/y18.gif'] {" +
			"  display:none;" +
			"  position:relative;" +
			"  top:4.2em;" +
			"  right:3em;" +
			"  height:36px !important;" +
			"  width:36px !important;" +
			"} " +
			"a[href=news] {" +
			"  font-size:1.45em;" +
			"  line-height:9px;" +
			"  letter-spacing:-1px;" +
			"  margin-right:2em;" +
			"  margin-left:-.75em;" +
			"  color:#333 !important;" +
			"  text-shadow:#f6f6ef -1px 0 0;" +
			"  font-weight:200;" +
			"} " +
			"td[bgcolor] {" +
			"  padding-top:1em;" +
			"  padding-bottom:1em;" +
			"} " +
			"td[bgcolor='#ff6600'], td[bgcolor='#ffffff'] {" +
			"  background-image: -moz-linear-gradient(bottom, #f6f6ef 28%, #fff 72%); "+
			"  background-image: -webkit-gradient(linear, 0% 100%, 0% 0%, color-stop(0.28, #f6f6ef), color-stop(0.72, #fff));} " +
			"center>table>tbody>tr>td>center {" +
			"  background-image: -moz-linear-gradient(bottom, #fff, #f6f6ef); "+
			"  background-image: -webkit-gradient(linear, 0% 100%, 0% 0%, color-stop(0, #fff), color-stop(0.2, #f6f6ef));} " +
			".topsel a {" +
			"  color:#222 !important;" +
			"  font-weight:600;" +
			"} " +
			"span.pagetop {" +
			"  color:#bbb !important;" +
			"  font-size:.8em !important;" +
			"} " +
			"span.pagetop b {" +
			"  font-size:2em;" +
			"  font-weight:normal;" +
			"} " +
			"td.title a:visited {text-shadow:#fff 0px 1px 2px;} " +
			"td.title[align=right] {" +
			"  padding:.22em .1em 0 1em;" +
			"  font-weight:200;" +
			"  font-size:.62em !important;" +
			"} " +
			"center a img {" +
			"  position:relative;" +
			"  top:-.2em;" +
			"  padding:3px 4px;" +
			"  margin:0 2px;" +
			"} " +
			"center>a img:hover {background:#fff;} " +
			"center>font[color='#ff6600'] {" +
			"  padding:3px 4px;" +
			"  margin:0 2px;" +
			"  position:relative;" +
			"  top:.8em;" +
			"} " +
			"td.default div {margin-top:.7em !important;} " +
			".comhead {font-weight:300;}" +
			".comhead a {font-weight:normal;}" +
			".comhead span {color:#bbb;}" +
			"span.comment, span.comment font[color] {" +
			"  color:#222 !important;" +
			"  line-height:1.2em;" +
			"} " +
			"input[type=submit] {" +
			"  color:#fff !important;" +
			"  border:none;" +
			"  background:#f60 -moz-linear-gradient(bottom, #f60, #f72); " +			
			"  background:#f60 -webkit-gradient(linear, left bottom, left top,"+
			"			 from(#f60), to(#f72));" +
			"  border-top:#fb8 solid 1px;" +
			"  border-bottom:#d60 solid 1px;} ";
			
		this.append_stylesheet(style);
	};
 
    //create a stylesheet
    hn_style.prototype.append_stylesheet = function(css){
 
        var styletag = document.createElement("style");
        styletag.setAttribute('type', 'text/css');
        styletag.setAttribute('media', 'screen');
        styletag.appendChild(document.createTextNode(css));
 
        document.getElementsByTagName('head')[0].appendChild(styletag);
 
    };
 
    //instantiate and run 
    var hn_style = new hn_style();
 
 })();
