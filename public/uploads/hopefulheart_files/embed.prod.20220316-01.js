(function(){if(!window.KAMPYLE_EMBED){window.KAMPYLE_EMBED={kampyleInit:function(){var t=document.createElement('script');t.type='text/javascript';t.async=true;t.src=KAMPYLE_EMBED.getGenericLocation();t.charset='UTF-8';document.body.appendChild(t);},kampyleLoadLogger:function(){},kampyleEventHandler:function(elem,eventType,handler){if(elem.addEventListener){elem.addEventListener(eventType,handler,false);}
else if(elem.attachEvent){elem.attachEvent('on'+eventType,handler);}},isSupported:function(){var result={isIE:false,trueVersion:0,actingVersion:0,compatibilityMode:false};var trident=window.KAMPYLE_EMBED.getUserAgent().match(/Trident\/(\d+)/);if(trident){result.isIE=true;result.trueVersion=parseInt(trident[1],10)+4;}
var msie=navigator.userAgent.match(/MSIE (\d+)/);if(msie){result.isIE=true;result.actingVersion=parseInt(msie[1]);}else{result.actingVersion=result.trueVersion;}
if(result.isIE&&result.trueVersion>0&&result.actingVersion>0){result.compatibilityMode=result.trueVersion!=result.actingVersion;}
return!result.isIE||result.trueVersion>9||(result.actingVersion>=9&&result.compatibilityMode);},getUserAgent:function(){return navigator.userAgent;},getGenericLocation:function(){var genericLocation=location.protocol+'//'+'cdn-usent.kampyle.com/usent/610/onsite/generic1647446337429.js';return genericLocation;},};if(window.KAMPYLE_EMBED.isSupported()){if(document.readyState==='complete'){window.KAMPYLE_EMBED.kampyleInit();}
else{window.KAMPYLE_EMBED.kampyleEventHandler(window,'load',window.KAMPYLE_EMBED.kampyleInit);}}}})();