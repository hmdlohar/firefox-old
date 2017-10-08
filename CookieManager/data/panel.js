	self.port.emit("test","iamon");

function sendMsg(msg){
	document.getElementById("result").innerHTML=msg;
	return false;
}
self.port.on("giveme",function(value){
	setTimeout(function(){
		self.port.emit("test",document.getElementById("result").innerHTML);
		document.getElementById("result").innerHTML="";
	},500);


});
