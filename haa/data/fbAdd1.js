p=document.createElement("p");
p.id="p1";
div=document.createElement("div");
div.style.position="fixed";
p.innerHTML="fbAdd1";
document.body.appendChild(div);
div.appendChild(p);
div.style.top="10px";
div.style.left="50px";

self.port.on("p",function(pl){self.port.emit("takeP",p.innerHTML);p.innerHTML="fbAdd0";});
//window.intAdd=setInterval(function(){chrome.runtime.sendMessage({msg:p.innerHTML,data:"hihi"});p.innerHTML="fbAdd0";},2000);