let prf=require('sdk/simple-prefs');
let config=require("sdk/preferences/service");
let tabs=require("sdk/tabs");
let ss=require("sdk/simple-storage");
var { Hotkey } = require("sdk/hotkeys");
var pageMod = require("sdk/page-mod");
var { setInterval, clearInterval,setTimeout,clearTimeout } = require("sdk/timers");
var Request = require("sdk/request").Request;

if(ss.storage.cookie==undefined){
ss.storage.cookie=Array();
}
if(ss.storage.cookieMeta==undefined){
ss.storage.cookieMeta=Array();
}
sendMsgState=false;






var { ToggleButton } = require('sdk/ui/button/toggle');
var sdkPanels = require("sdk/panel");
var self = require("sdk/self");
var button = ToggleButton({
  id: "panelButton",
  label: "Cookie Manager",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange

});

var myPanel = sdkPanels.Panel({
  contentURL: self.data.url("panel.html"),
  contentScriptFile: self.data.url("panel.js"),
  onHide: handleHide
});



myPanel.port.on("test",function(value){
	console.log("who "+value);
	if(value.indexOf("add:")>=0){
		val=value.split(":")[1];
		console.log("adding "+val);
		addCookieStorage(val,getfullCookie());
	}
	else if(value.indexOf("get:")>=0){
		val=value.split(":")[1];
		console.log("getting "+val+"is= "+getCookieStorage(val));
	}
	//ss.storage.int1=setInterval(function(){myPanel.port.emit("giveme","giveMe");},500);
	if(sendMsgState){
		myPanel.port.emit("giveme","giveMe");
	}
	
});
		
myPanel.port.on("giveme",function(value){
	//console.log("Give Me value"+value);
	
});
		
		

function handleChange(state) {
  if (state.checked) {
	  //console.log("idk");
	  sendMsgState=true;
	  myPanel.port.emit("giveme","giveMe");
    myPanel.show({
      position: button
    });
  }
  else{
	  
	   
	  }
}

function handleHide() {
  button.state('window', {checked: false});
   //console.log("i know this");
     sendMsgState=false;
}



function addCookieStorage(name,value){
	var o=new Object();
	o.name=name;
	o.value=value;
	for(i=0;i<ss.storage.cookie.length;i++){
		if(ss.storage.cookie[i].name==name){
			console.log("choose Another Name");
			break;
		}
	}
	ss.storage.cookie[ss.storage.cookie.length]=o;
}
function setCookieStorage(name,value){
	var o=new Object();
	o.name=name;
	o.value=value;
	for(i=0;i<ss.storage.cookie.length;i++){
		if(ss.storage.cookie[i].name==name){
			ss.storage.cookie[i].value=value;
			break;
		}
	}
}
function getCookieStorage(name){
	var o=new Object();
	f=0;
	for(i=0;i<ss.storage.cookie.length;i++){
		if(ss.storage.cookie[i].name==name){
			f=1;
			break;
		}
	}
	if(f==1){
		return ss.storage.cookie[i].value;
	}
	else{
		return "";
	}
}


cc=ss.storage.cc;
ss.storage.import_cookie=0;
ss.storage.export_cookie=0;
ss.storage.imgLink=0;
ss.storage.pmpepe=1;

//var fulc="";
//setInterval(function(){	full_cookie=getfullCookie(); if(full_cookie==fulc){}else{console.log(full_cookie+"--cookie_changed"); fulc=full_cookie;}},100);


const {Cu,Cc,Ci} = require("chrome");
const httpproto = Cc["@mozilla.org/network/protocol;1?name=http"].getService(Ci.nsIHttpProtocolHandler);
var cook = Cc["@mozilla.org/cookiemanager;1"].getService(Ci.nsICookieManager);
var cm = Cc["@mozilla.org/cookiemanager;1"].getService(Ci.nsICookieManager2);
function removeAll(){
	cook.removeAll();
}
function getfullCookie(){
e=cook.enumerator;
var fullCookie="[";
while(e.hasMoreElements()){
				var cc = e.getNext().QueryInterface(Ci.nsICookie);
				var cookieInfo = cc.host
													domain=new String(cc.isDomain).toUpperCase();
													path= cc.path;
													secure =new String(cc.isSecure).toUpperCase();
													expire= cc.expires;
													name= cc.name;
													value= cc.value;
					fullCookie+="{\"host\":\""+cookieInfo+"\",\"domain\":\""+domain+"\",\"path\":\""+path+"\",\"secure\":\""+secure+"\",\"expire\":\""+expire+"\",\"name\":\""+name+"\",\"value\":\""+value+"\"}";
													
				
			}
fullCookie+="]";
//console.log(fullCookie);
return fullCookie;
}
function add_cookie(fullCookie2){
	fullCookie2=JSON.parse(fullCookie2);
for(x=0;x<fullCookie2.length;x++){
cSession = (fullCookie2[x].expire == 0);
cm.add(fullCookie2[x].host, fullCookie2[x].path, fullCookie2[x].name, fullCookie2[x].value, fullCookie2[x].secure, false, cSession, fullCookie2[x].expire);
//console.log("cookie restored--"+fullCookie2[x].name);
	}
}












function cookieNext1(){
	console.log("cookieNext");
	cnum=prf.prefs['cookieNum'];
	num=parseInt(cnum)+1;
	prf.prefs['cookieNum']=num.toString();
}
function cookieBack1(){
	console.log("cookieBack");
	cnum=prf.prefs['cookieNum'];
	num=parseInt(cnum)-1;
	prf.prefs['cookieNum']=num.toString();
}
function importLocal(){
	num=prf.prefs['cookieNum'];
	num=parseInt(num);
	removeAll();
	if(ss.storage.cookie[num]==undefined||ss.storage.cookie[num]==null){
		ss.storage.cookie[num]="empty";
		console.log("cookie Is Empty");
	}else{
		add_cookie(decodeURI(ss.storage.cookie[num]));
	}
}
function exportLocal(){
	cnum=prf.prefs['cookieNum'];
	cnum=parseInt(cnum);
	hmd=getfullCookie();
	while(hmd.indexOf("}{")>0){hmd=hmd.replace("}{","},{");}
	ss.storage.cookie[cnum]=encodeURI(hmd);
}




prf.on("setCookie",function(){
	var cnum=prf.prefs["cookieNum"];
	console.log(cnum);
});
prf.on("removeAll",function(){
	removeAll();
	console.log("cookie removed");
});



