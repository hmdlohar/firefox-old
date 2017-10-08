//~ p=document.createElement("p");
//~ p.id="likeLike";
//~ div=document.createElement("div");
//~ div.style.position="fixed";
//~ p.innerHTML="likeLikeStart";
//~ document.body.appendChild(div);
//~ div.appendChild(p);
//~ div.style.top="2px";
//~ div.style.right="2px";
//~ setInterval(function(){chrome.runtime.sendMessage({msg:p.innerHTML,data:"hihi"});p.innerHTML="likeLikeSent";},500);

//console.log("script inject");
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
window.postMessage("like4likeDone","*");
	console.log("like sucessful");
	setTimeout(function(){window.close();},1500);
	likea.innerHTML="Liked";
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
liked=finda("Unlike","span");
//if(liked!=0){likea=liked;}
likeb=finda("Log In","a");
likec=finda("Follow","a");
if(likeb==0){
imgLiked=findaIndex("You and","div");
if(likec!=0){
	console.log("likeb");
	send_req(likec.href);
}
if(imgLiked){window.likeDone=1;  
	
	
	window.close();
	}else{
//	if(finda("About","div")){window.likeDone=1;}
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
	
	
}

setTimeout(function(){window.postMessage("imgLikeDone","*");},3000);