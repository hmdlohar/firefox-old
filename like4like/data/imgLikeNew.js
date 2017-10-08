//console.log("imglike new attached");
likeing=0;

function finda(text,tag){var hmd = document.getElementsByTagName(tag);for(i=0;i<hmd.length;i++) { html = hmd[i].innerHTML;if(html == text){var ret=hmd[i];break;}  else {ret=0;}}return ret;	}

function findaValue(text,tag){var hmd = document.getElementsByTagName(tag);for(i=0;i<hmd.length;i++) { html = hmd[i].value;if(html == text){var ret=hmd[i];break;}  else {ret=0;}}return ret;	}

function send_req(url){
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
window.postMessage("imgLikeDone","*");
	console.log("like sucessful");
	likea.innerHTML="Liked";
	window.postMessage("status1","*");
	//self.port.emit("imgLikeDone","");
	//document.body.innerHTML=data;
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
function send_req2(url){
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

    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
function findaIndex(text,tag){var hmd = document.getElementsByTagName(tag);for(i=0;i<hmd.length;i++) { html = hmd[i].innerHTML; if(html.indexOf(text)>=0){var ret=hmd[i];break;}  else {ret=0;}}return ret;}
likea=finda("Like","span");
likeb=finda("Log In","a");
if(likeb==0){
imgLiked=findaIndex("You and","div");

if(imgLiked){window.likeDone=1;  
	window.postMessage("imgLikeDone","*");
	window.postMessage("status1","*");
	}else{
	//if(finda("About","div")){window.likeDone=1;}
	if(likea!=0){
		//likea.click();
		//a.innerHTML="asdfasdfasf";
		likeBtn=likea.parentElement.href;
		if(likeing==0){
		send_req(likeBtn);
		liking=1;}
			}
		}
}else{
	//console.log("do login");
	window.postMessage("imgLikeDone","*");window.postMessage("status0","*");
	
}

setTimeout(function(){window.postMessage("imgLikeDone","*");},3000);