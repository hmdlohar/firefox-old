document.body.style.marginTop="50px";
div=document.createElement("div");
document.body.appendChild(div);
div.style.border="1px solid green";
div.innerHTML="<input id=cookieNum size=4>-<span id=action>0</span><button id=cNext>>></button><button id=cBack><<</button><button id=cImport>IM</button><button id=cExport>EX</button><button id='showMain'>Main</button><button id='closeTab'>CloseTab</button>\
<div id='main' style='background-color:blue;position:fixed;border:2px solid green;width:550px;top:40px;left:10px;display:none;'><table>\
<tr><td>imgShow</td><td><button id=imgOn>On</button><button id=imgOff>Off</button></td></tr>\
<tr><td>AutoImgLike</td><td><button id=autoLikeOn>On</button><button id=autoLikeOff>Off</button></td></tr>\
<tr><td><button id=like4likeLogin>Login</button></td></tr>\
<tr><td><button id=loginScript>Login Script</button></td></tr>\
<tr><td><button id=reloadPage>ReloadPage</button></td></tr>\
<tr><td><button id=removeCookie>Remove All Cookie</button></td></tr>\
<button id=closeMain>Close</button>\
<tr><td>CookieNum</td><td><input id=cookieNum2></td></tr>\
<tr><td><button id=submitCookieNum>CookieNum</button></td></tr>\
</table></div>";
div.style.display="inline-block";
div.style.position="fixed";
div.style.top="2px";
div.style.left="20px";



self.port.on("result",function(payload){pl=payload;cookieNum=document.getElementById('cookieNum');cookieNum.value=pl;self.port.emit("actionValue",document.getElementById('action').innerHTML);document.getElementById('action').innerHTML=0;});
document.getElementById("cBack").setAttribute("onclick",'document.getElementById("action").innerHTML=2');
document.getElementById("cNext").setAttribute("onclick",'document.getElementById("action").innerHTML=1');
document.getElementById("cImport").setAttribute("onclick",'document.getElementById("action").innerHTML=3');
document.getElementById("cExport").setAttribute("onclick",'document.getElementById("action").innerHTML=4');
document.getElementById("imgOn").setAttribute("onclick",'document.getElementById("action").innerHTML=9');
document.getElementById("imgOff").setAttribute("onclick",'document.getElementById("action").innerHTML=10');
document.getElementById("autoLikeOn").setAttribute("onclick",'document.getElementById("action").innerHTML=5');
document.getElementById("autoLikeOff").setAttribute("onclick",'document.getElementById("action").innerHTML=6');
document.getElementById("removeCookie").setAttribute("onclick",'document.getElementById("action").innerHTML=11');
document.getElementById("showMain").setAttribute("onclick",'document.getElementById("main").style.display="block"');
document.getElementById("closeMain").setAttribute("onclick",'document.getElementById("main").style.display="none"');
document.getElementById("like4likeLogin").setAttribute("onclick",'document.location.assign("http://www.like4like.org/user/login.php");');
document.getElementById("reloadPage").setAttribute("onclick",'document.location.reload();');
document.getElementById("reloadPage").setAttribute("onclick",'window.close();');
document.getElementById("loginScript").setAttribute("onclick",'javascript:hmd=document.getElementsByTagName("input");num=prompt("enter Num:");hmd.username.value="hmd"+num+"flikes";if(num>=470){hmd.password.value="Munir123";}else{hmd.password.value="asdf";}hmd.submit.click();');
document.getElementById("submitCookieNum").setAttribute("onclick",'document.getElementById("action").innerHTML="8-hmd-"+document.getElementById("cookieNum2").value');
self.port.on("notify",function(pl){alert(pl);});

