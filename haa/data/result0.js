//~ p=document.createElement("p");
//~ p.id="autoAdd";
//~ document.body.appendChild(p);
//~ self.port.on("aa",function(pl){document.getElementById("autoAdd").innerHTML=pl;});
document.body.style.marginTop="30px";
div=document.createElement("div");
document.body.appendChild(div);
div.style.border="1px solid green";
div.innerHTML="<span id=cookieNum>...</span>-<span id=action>0</span><button id=cNext>>></button><button id=cBack><<</button><button id=cImport>IM</button><button id=cExport>EX</button><button id=autoAdd>AA</button><button id='startAutoLike'>SAlike</button><button id='cNextNow'>cNext</button>";
div.style.display="inline-block";
div.style.position="fixed";
div.style.top="2px";
div.style.left="20px";
self.port.on("result",function(payload){self.port.emit("actionValue",document.getElementById('action').innerHTML);document.getElementById('action').innerHTML=0;});
document.getElementById("cBack").setAttribute("onclick",'document.getElementById("action").innerHTML=2');
document.getElementById("cNext").setAttribute("onclick",'document.getElementById("action").innerHTML=1');
document.getElementById("cImport").setAttribute("onclick",'document.getElementById("action").innerHTML=3');
document.getElementById("cExport").setAttribute("onclick",'document.getElementById("action").innerHTML=4');
document.getElementById("startAutoLike").setAttribute("onclick",'document.getElementById("action").innerHTML=5');
document.getElementById("cNextNow").setAttribute("onclick",'document.getElementById("action").innerHTML=6');

self.port.on("notify",function(pl){alert(pl);});