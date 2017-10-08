document.body.style.marginTop="30px";

p=document.createElement("span");
p.id="p";
p2=document.createElement("span");
div=document.createElement("div");
div.style.position="fixed";
p.innerHTML="this isp";
document.body.appendChild(div);
div.style.display="inline-block";
div.appendChild(p);
div.innerHTML+="<button onclick=document.location.reload()>RLD</button>";
div.appendChild(p2);
div.style.top="2px";
div.style.right="2px";
cooknum=0;
p2.innerHTML=4;
p2.id="p2";

cBack=document.createElement("button");
div.appendChild(cBack);
cBack.innerHTML="fbAdd";
cBack.id="fbAdd";
cBack.setAttribute("onclick",'document.getElementById("p2").innerHTML=4');





self.port.on("cnum0",function(){document.getElementById("p2").innerHTML=0;});
self.port.on("result",function(payload){
	document.getElementById("p").innerHTML=payload;
	self.port.emit("cookieNum",document.getElementById("p2").innerHTML);
	//console.log(document.getElementById("p2").innerHTML);
});




