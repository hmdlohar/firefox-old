function send_req(url,append){
	var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {    
   var data=xmlhttp.responseText;

create_d(data,append);

    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
function create_d(inner,append){
	d=document.createElement("div");
	c=document.createElement("button");
	d.style.border="1px solid blue";
	append.appendChild(d);
	append.appendChild(c);
	c.innerHTML="click";
	d.style.width="250px";
	d.style.height="70px";
	d.style.overflow="scroll";
	d.innerText=inner;
	if(inner.indexOf("Security")>3){d.innerText="security";}
}

javascript: var hmd = document.getElementsByTagName('a');for(var i=0; i<hmd.length; i++) { html = hmd[i].innerHTML;if (html == "Add Friend"){hmd[i].target = "new"+i+"wind";hmd[i].className = "clicknow"; hmd[i].innerHTML="ADDDDDsssssssssssssDDDDDDDDDsDDDDDsDDDDD";send_req(hmd[i].href,hmd[i]);}  }
var inputs = document.getElementsByClassName('clicknow'); for(var i=0; i<inputs.length; i++) {send_req(inputs[i].href,inputs[i]); }