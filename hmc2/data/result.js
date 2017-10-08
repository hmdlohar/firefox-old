document.body.style.marginTop="50px";
div=document.createElement("div");
document.body.appendChild(div);
div.style.border="1px solid green";
div.innerHTML="<input id=cookieNum size=4>-<span id=action>0</span><button id=cNext>>></button><button id=cBack><<</button><button id=cImport>IM</button><button id=cExport>EX</button><button id=autoAdd>AA</button><button id='startAutoLike'>SAlike</button><button id='cNextNow'>cNext</button><button id='showMain'>Main</button>\
<div id='main' style='background-color:blue;position:fixed;border:2px solid green;width:550px;top:40px;left:10px;display:none;'><table>\
<tr><td>imgLink</td><td><input id=imgLink size=40 value='-hmd-'></td></tr>\
<tr><td>imgShow</td><td><button id=imgOn>On</button><button id=imgOff>Off</button></td></tr>\
<tr><td>AutoImgLike</td><td><button id=autoImgOn>On</button><button id=AutoImgOff>Off</button></td></tr>\
<tr><td>AutoAdd</td><td><button id=autoAddOn>On</button><button id=autoAddOff>Off</button></td></tr>\
<tr><td><button id=submitImgLink>Submit</button></td></tr>\
<tr><td>CookieNum</td><td><input id=cookieNum2></td></tr>\
<tr><td><button id=submitCookieNum>CookieNum</button></td></tr>\
</table></div>";
div.style.display="inline-block";
div.style.position="fixed";
div.style.top="2px";
div.style.left="20px";

if(document.location.href.indexOf("https://mbasic.facebook.com/browse/likes/")>-1){
	document.getElementById("action").innerHTML=13;
}

self.port.on("result",function(payload){pl=payload.split("-hmd-");cookieNum=document.getElementById('cookieNum');cookieNum.value=pl[0];imgLink=document.getElementById("imgLink");if(imgLink.value=="-hmd-"){imgLink.value=pl[1];}self.port.emit("actionValue",document.getElementById('action').innerHTML);document.getElementById('action').innerHTML=0;});
document.getElementById("cBack").setAttribute("onclick",'document.getElementById("action").innerHTML=2');
document.getElementById("cNext").setAttribute("onclick",'document.getElementById("action").innerHTML=1');
document.getElementById("cImport").setAttribute("onclick",'document.getElementById("action").innerHTML=3');
document.getElementById("cExport").setAttribute("onclick",'document.getElementById("action").innerHTML=4');
document.getElementById("startAutoLike").setAttribute("onclick",'document.getElementById("action").innerHTML=5');
document.getElementById("cNextNow").setAttribute("onclick",'document.getElementById("action").innerHTML=6');
document.getElementById("imgOn").setAttribute("onclick",'document.getElementById("action").innerHTML=9');
document.getElementById("imgOff").setAttribute("onclick",'document.getElementById("action").innerHTML=10');
document.getElementById("autoImgOn").setAttribute("onclick",'document.getElementById("action").innerHTML=11');
document.getElementById("AutoImgOff").setAttribute("onclick",'document.getElementById("action").innerHTML=12');
document.getElementById("autoAdd").setAttribute("onclick",'document.getElementById("action").innerHTML=13');
document.getElementById("autoAddOn").setAttribute("onclick",'document.getElementById("action").innerHTML=14');
document.getElementById("autoAddOff").setAttribute("onclick",'document.getElementById("action").innerHTML=15');
document.getElementById("showMain").setAttribute("onclick",'document.getElementById("main").style.display="block"');
document.getElementById("submitImgLink").setAttribute("onclick",'document.getElementById("action").innerHTML="7-hmd-"+document.getElementById("imgLink").value');
document.getElementById("submitCookieNum").setAttribute("onclick",'document.getElementById("action").innerHTML="8-hmd-"+document.getElementById("cookieNum2").value');
self.port.on("notify",function(pl){alert(pl);});

