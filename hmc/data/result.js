document.body.style.marginTop="30px";
p=document.createElement("p");
p.id="p";
p2=document.createElement("p");
div=document.createElement("div");
div.style.display="inline-block";
div.style.position="fixed";
p.innerHTML="this isp";
document.body.appendChild(div);
div.appendChild(p);
div.innerHTML+="<button onclick=document.location.reload()>RLD</button>";
div.appendChild(p2);
div.style.top="2px";
div.style.right="2px";
cooknum=0;
p2.innerHTML=000;
p2.id="p2";

cBack=document.createElement("button");
div.appendChild(cBack);
cBack.innerHTML="<<<";
cBack.id="cBack";
cBack.setAttribute("onclick",'document.getElementById("p2").innerHTML=1');

cNext=document.createElement("button");
div.appendChild(cNext);
cNext.innerHTML=">>>";
cNext.id="cNext";
cNext.setAttribute("onclick",'document.getElementById("p2").innerHTML=2');

div.innerHTML+="<br>";
pLike=document.createElement("button");
div.appendChild(pLike);
pLike.innerHTML="Plike";
pLike.id="pLike";
pLike.setAttribute("onclick",'document.getElementById("p2").innerHTML=3');



self.port.on("cnum0",function(){document.getElementById("p2").innerHTML=0;});
self.port.on("result",function(payload){
	document.getElementById("p").innerHTML=payload;
	self.port.emit("cookieNum",document.getElementById("p2").innerHTML);
	//console.log(document.getElementById("p2").innerHTML);
});

prime=prompt(); tbox=document.getElementsByClassName("textbox");tbox[1].value=prime;tbox[0].value="prim "+prime.substring(5);tbox[2].value="xpart77"+prime[prime.length-1];tbox[3].value="xpart77"+prime[prime.length-1];tbox[4].value=prime+"@gmail.com";tbox[5].value="xpart77"+prime[prime.length-1];document.getElementsByTagName("select")[0].selectedIndex=1;

