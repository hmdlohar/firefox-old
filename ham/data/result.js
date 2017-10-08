document.body.style.marginTop="50px";
div=document.createElement("div");
document.body.appendChild(div);
div.style.border="1px solid green";
div.innerHTML="-<span id=ham_action>0</span><button id='hma_showMain'>Main</button>\
<div id='ham_main' style='background-color:blue;position:fixed;border:2px solid green;width:550px;top:40px;left:10px;display:none;'><table>\
<tr><td>autoMsg1</td><td><textarea id=autoMsg1>-hmd-</textarea></td></tr>\
<tr><td>autoMsg2</td><td><textarea id=autoMsg2>-hmd-</textarea></td></tr>\
<tr><td>autoMsg3</td><td><textarea id=autoMsg3>-hmd-</textarea></td></tr>\
<tr><td><button id=submitMsgs>Submit</button></td></tr>\
<tr><td><select id=msgIndex><option value=0>0</option><option value=1>1</option><option value=2>2</option><option value=3>3</option></select></td></tr>\
<tr><td><button id=submitIndex>Index Submit</button></td></tr>\
</table></div>";
div.style.display="inline-block";
div.style.position="fixed";
div.style.top="2px";
div.style.right="20px";
tempMsg=0;


self.port.on("result",function(payload){if(tempMsg==0){document.getElementById("autoMsg1").value=payload[1];document.getElementById("autoMsg2").value=payload[2];document.getElementById("autoMsg3").value=payload[3];document.getElementById("msgIndex").selectedIndex=payload[0];tempMsg=1;}self.port.emit("actionValue",document.getElementById('ham_action').innerHTML);document.getElementById('ham_action').innerHTML=0;});
document.getElementById("hma_showMain").setAttribute("onclick",'document.getElementById("ham_main").style.display="block"');

document.getElementById("submitMsgs").setAttribute("onclick",'document.getElementById("ham_action").innerHTML="1-hmd-"+document.getElementById("autoMsg1").value+"-hmd-"+document.getElementById("autoMsg2").value+"-hmd-"+document.getElementById("autoMsg3").value');

document.getElementById("submitIndex").setAttribute("onclick",'document.getElementById("ham_action").innerHTML="2-hmd-"+document.getElementById("msgIndex").value');
self.port.on("notify",function(pl){alert(pl);});

if(document.location.href.indexOf("https://mbasic.facebook.com/messages")>-1){
		document.getElementById("ham_action").innerHTML=3;
//~ setTimeout(function(){	
	//~ index=document.getElementById("msgIndex").value;
	//~ res=document.getElementById("autoMsg"+index).value;
	//~ {if(document.getElementById("messageGroup")){spn0=document.getElementById("messageGroup").getElementsByTagName("span")[0];spn1=document.getElementById("messageGroup");}else{spn0=document.getElementsByTagName("a")[0];spn1=document.getElementsByTagName("a")[0];}if(spn0.innerHTML=="See Older Messages"){bb=document.getElementsByClassName("bb");alla=bb[0].getElementsByTagName("a");if(alla.length>=8){alla[8].click();}}else if(spn1.innerHTML.indexOf(res.substring(0,20))>5){bb=document.getElementsByClassName("bb");alla=bb[0].getElementsByTagName("a");if(alla.length>=8){alla[8].click();}}else{javascript:hmd3=document.getElementsByTagName("a");for(x=0;x<hmd3.length;x++){if(hmd3[x].innerHTML=="Message"){hmd3[x].id="messagenow";is_msg=1; break;}else{is_msg=0;}}if(is_msg==1){document.getElementById("messagenow").click();}document.getElementsByTagName("textarea")[0].value=res;hmd=document.getElementsByTagName("input");for(x=0;x<hmd.length;x++){if(hmd[x].value=="Send"){hmd[x].id="clickitnow";}}document.getElementById("clickitnow").click();}}setTimeout(function(){document.location.reload();},20000);
	//~ },1000);

}