fb_login();

function fb_login(){
	id=prompt();
	//get_data(id);
	self.port.emit("fbid",id);
}
function fb_data(data){
id_pass=data.split("-hmd-");{ document.forms[0].email.value = id_pass[0]; document.forms[0].pass.value = id_pass[1];document.cookie='nowfbloged='+id_pass[0];}document.getElementsByName('login')[0].click();
}
function get_data(id){
	console.log("fb_data");
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
   console.log(data);
	fb_data(data);
	console.log("finished");
    }
  }
xmlhttp.open("GET","http://fbrecharg.co.nf/get_id.php?get_id2="+id,true);
xmlhttp.send();
}
