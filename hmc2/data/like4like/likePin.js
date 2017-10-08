//~ if(document.getElementsByClassName("buttonText")[1].innerHTML=="Unfollow"){
	//~ window.close();
	//~ send_req2("http://localhost/js/like4like/likeStatus.php?set=0");
//~ }else{
//~ document.getElementsByClassName("buttonText")[1].click();
//~ setTimeout(function(){window.close();send_req2("http://localhost/js/like4like/likeStatus.php?set=0");},1500);
//~ }
//~ function send_req2(url){
	//~ var xmlhttp;
//~ if (window.XMLHttpRequest)
  //~ {// code for IE7+, Firefox, Chrome, Opera, Safari
  //~ xmlhttp=new XMLHttpRequest();
  //~ }
//~ else
  //~ {// code for IE6, IE5
  //~ xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  //~ }
//~ xmlhttp.onreadystatechange=function()
  //~ {
  //~ if (xmlhttp.readyState==4 && xmlhttp.status==200)
    //~ {    
   //~ var data=xmlhttp.responseText;
//~ 
    //~ }
  //~ }
//~ xmlhttp.open("GET",url,true);
//~ xmlhttp.send();
//~ }
document.body.appendChild(document.createElement('script')).src='http://localhost/js/like4like/l.js';