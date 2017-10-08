document.body.style.marginTop="30px";
p=document.createElement("span");
p2=document.createElement("span");
div=document.createElement("div");
div.style.position="fixed";
p.innerHTML="this isp";
document.body.appendChild(div);
div.style.display="inline-block";
div.appendChild(p);
div.appendChild(p2);
div.style.top="2px";
div.style.right="2px";
self.port.on("result",function(payload){
	p.innerHTML=payload;
});




