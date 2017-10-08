//javascript:window.scrol=setInterval(function (){window.scrollTo(0,document.body.scrollHeight);},1500);
count2=0;


//window.intAdd=setInterval(function(){p.innerHTML="fbAdd0";},2000);


 var hmd = document.getElementsByTagName('a');for(var i=0; i<hmd.length; i++) { html = hmd[i].innerHTML;if (html == "Add Friend"){hmd[i].target = "new"+i+"wind";hmd[i].className = "clicknow"; hmd[i].innerHTML="ADDDDDsssssssssssssDDDDDDDDDsDDDDDsDDDDD";}  }
 
 var hmd2 = document.getElementsByTagName('span');for(var i=0; i<hmd2.length; i++) {if(hmd2[i].innerHTML=="See More"){hmd2[i].className="NextPage";}}
 var inputs = document.getElementsByClassName('clicknow');
 countMax=inputs.length-1;
 if(countMax<=4){document.getElementsByClassName("NextPage")[0].click();}
 console.log(countMax);
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
 if(count2>=countMax){console.log("done");setTimeout(function(){document.location.reload();},2000);}else{count2++;}

create_d(data,append);

    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
function create_d(inner,append){
	d=document.createElement("div");
	//c=document.createElement("button");
	d.style.border="1px solid blue";
	append.appendChild(d);
	//append.appendChild(c);
	//c.innerHTML="click";
	d.style.width="250px";
	d.style.height="20px";
	d.style.overflow="hidden";
	d.innerText=inner;
	if(inner.indexOf("Security")>3){d.innerText="security";}
}


count=0;
function clicknowDone(){if(count>=countMax){clearInterval(window.int1);}else{count++;}
var inputs = document.getElementsByClassName('clicknow'); send_req(inputs[0].href,inputs[0]);inputs[0].className="clicknowDone";
}
window.int1=setInterval(function(){clicknowDone(); },500);