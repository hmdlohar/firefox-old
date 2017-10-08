
function popOne(){
	send_req2("http://localhost/js/like4like/likeStatus.php?set=1");
if(window.bot==undefined){window.bot=prompt();}
earnfb=document.getElementsByClassName('earn_pages_button');
window.bot2=14-window.bot;if(earnfb.length<=window.bot2){window.click1=1;}else{window.click1=0;}earnfb[window.click1].click();
}


scr=document.createElement("script");
scr.innerHTML="window.addEventListener('message', function(event) {window.alert(event.data);        }, false);function wLiking(sts){window.liking=sts;}";
document.body.appendChild(scr);
window.int01=setInterval(function(){
	send_req2("http://localhost/js/like4like/likeStatus.php");
	
},1000);
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
   if(data==0){
	   console.log("its pop time");
	   
	  }

    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}
document.body.appendChild(document.createElement('script')).src='http://localhost/js/like4like/popOne.js';