main=document.getElementById("main");
	cookie_num=document.getElementById("cookie_num");
window.addEventListener('message', function(event) {
	if(event.data=="get_cookie_num"){
		self.port.emit("get_cookie_num",event.data);
	}else
	if(event.data=="export_cookie"){
		self.port.emit("export_cookie",event.data);
	}else
	if(event.data=="import_cookie"){
		self.port.emit("import_cookie",event.data);
	}
	else
	if(event.data[0]=="change_cookie_num"){
		self.port.emit("change_cookie_num",event.data[1]);
	}
	else
	if(event.data[0]=="remove_all_cookie"){
		self.port.emit("remove_all_cookie",event.data[1]);
	}
	else{
		self.port.emit("taburl",event.data);
	}

}, false);
self.port.on("got_cookie_num",function(payload){
	cookie_num.value=payload;
	//console.log(parseInt(cookie_num.value)+11);

});