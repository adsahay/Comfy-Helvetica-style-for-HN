// ==UserScript==
// @name           Comfy Helvetica
// @namespace      news.ycombinator.com/*
// @description    Better CSS for Hacker News
// ==/UserScript==

(function() {

	function hn_style() {
	
		var style = "html {"+
		"  zoom:1.32;"+
		"}"+
		"body * {"+
		"  font-family:'Helvetica Neue', Helvetica, 'Liberation Sans', sans-serif !important;"+
		"}"+
		"code {"+
		"  font-size:10px;"+
		"}"+
		"img {"+
		"  zoom:.76;"+
		"}"+
		"td[style='width:18px;padding-right:4px'] a[href='http://ycombinator.com']:after{"+
		"  content:\"Y\";"+
		"  font-family:Tahoma;"+
		"  position:absolute;"+
		"  top:3.5em;"+
		"  left:0;"+
		"  color:#fff;"+
		"  background:#f60;"+
		"  padding:1px 6px;"+
		"}"+
		"img[src='http://ycombinator.com/images/y18.gif'] {"+
		"  display:none;"+
		"  position:relative;"+
		"  top:4.2em;"+
		"  right:3em;"+
		"  height:36px !important;"+
		"  width:36px !important;"+
		"}"+
		"center a img {"+
		"  position:relative;"+
		"  top:-.2em;"+
		"}"+
		"a[href=news] {"+
		"  margin-right:2em;"+
		"  margin-left:-2.25em;"+
		"  zoom:.76;"+
		"  font-size:2.87em;"+
		"  font-weight:200;"+
		"  letter-spacing:-1px;"+
		"  line-height:9px;"+
		"  color:#333 !important;"+
		"  text-shadow:rgba(255,255,255,.5) -1px -1px 25px, #f6f6ef -1px 0, #f6f6ef -2px -1px, #f6f6ef -3px -2px, #f6f6ef -4px -3px, #f6f6ef -5px -4px, #f6f6ef -6px -5px, #f6f6ef -7px -6px, #f6f6ef -8px -7px, #f6f6ef -9px -8px, #f6f6ef -10px -9px, #f6f6ef -11px -10px, #f6f6ef -12px -11px, #f6f6ef -13px -12px, #f6f6ef -14px -13px, #f6f6ef -15px -14px, #f6f6ef -16px -15px, #f6f6ef -17px -16px, #f6f6ef -18px -17px, #f6f6ef -19px -18px, #f6f6ef -20px -19px, #f6f6ef -21px -20px, #f6f6ef -22px -21px, #f6f6ef -23px -22px, #f6f6ef -24px -23px, #f6f6ef -25px -24px, #f6f6ef -26px -25px, #f6f6ef -27px -26px, #f6f6ef -28px -27px, #f6f6ef -29px -28px, #f6f6ef -30px -29px, #f6f6ef -31px -30px, #f6f6ef -32px -31px, #f6f6ef -33px -32px, #f6f6ef -34px -33px, #f6f6ef -35px -34px, #f6f6ef -36px -35px;"+
		"}"+
		"td[bgcolor] {"+
		"  padding-top:.5em;"+
		"  padding-bottom:1em;"+
		"}"+
		"a:link, span.comment > font {"+
		"  color:#222 !important;"+
		"}"+
		"td.title[align=right] {"+
		"  padding:.2em;"+
		"  font-weight:200;"+
		"}"+
		"td.default div {"+
		"  word-spacing: -2px;"+
		"}"+
		"span.comhead, a[href=news], code {"+
		"  font-family:Menlo, monospace !important;"+
		"}"+
		"span.pagetop {"+
		"  color:#bbb !important;"+
		"  font-size:.8em !important;"+
		"}"+
		"input[type=submit] {"+
		"  color:#fff !important;"+
		"  background-color:#f60;"+
		"  border:none;"+
		"}"+
		"td[bgcolor='#ff6600'] {"+
		"  background:white!important;"+
		"}";
		
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