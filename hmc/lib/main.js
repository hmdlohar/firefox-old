let prf=require('sdk/simple-prefs');
let config=require("sdk/preferences/service");
let tabs=require("sdk/tabs");
let ss=require("sdk/simple-storage");
var { Hotkey } = require("sdk/hotkeys");
var pageMod = require("sdk/page-mod");
var { setInterval, clearInterval,setTimeout,clearTimeout } = require("sdk/timers");
var Request = require("sdk/request").Request;


var currentNextId;




var { ToggleButton } = require('sdk/ui/button/toggle');
var sdkPanels = require("sdk/panel");
var self = require("sdk/self");
var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});

var myPanel = sdkPanels.Panel({
  contentURL: self.data.url("panel.html"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    myPanel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}





if(prf.prefs['handling']=="on1"){script="./result.js";}
else if(prf.prefs['handling']=="on2"){script="./result3.js";}
else{script="./result2.js";}

pm=pageMod.PageMod({
	include: "*",
	contentScriptFile: script,
	onAttach:function(worker){
		ss.storage.int3=setInterval(function(){worker.port.emit("result",prf.prefs['cookieNum']);},500);
		worker.port.on("cookieNum",function(pl){
			if(pl=="2"){cNext(); worker.port.emit("cnum0","0");}
			else if(pl=="1"){cBack(); worker.port.emit("cnum0","0");}
			else if(pl=="3"){imgLike(); worker.port.emit("cnum0","0");}
			else if(pl=="4"){fbAdd(); worker.port.emit("cnum0","0");}
			});
		
		}
});
addEm=pageMod.PageMod({
	include: "https://mbasic.facebook.com/settings/account/*",
	contentScriptFile: "./addEm.js",
	onAttach:function(worker){
		worker.port.on("cookieNum",function(pl){
			
			var cookieNum=prf.prefs['cookieNum'];
			console.log("msg: "+pl+" cookienum="+cookieNum);
			postThing(pl,cookieNum);
			});
		

		}

});

function PMpepe(){
pmpepe=pageMod.PageMod({
	include: "http://peperonity.com/*",
	contentScriptFile: "./pepe.js",
	onAttach:function(worker){
		
		}
	
});
}
function postThing(pl,cookieNum){
		var req=Request({
  url: "http://hmdlohar.uk.nf/fblohar/getInsertEmail.php?inEmail="+pl+"&cookieNum="+cookieNum,
  onComplete: function (response) {
	  console.log("res: "+response.text);
  }
});
//req.get();
}
cc=ss.storage.cc;
ss.storage.import_cookie=0;
ss.storage.export_cookie=0;
ss.storage.imgLink=0;
ss.storage.pmpepe=1;
if(ss.storage.cookie==undefined){
ss.storage.cookie=Array();
}
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
function taburl(fid){
	console.log("taburl started");
var req=Request({
  url: "http://localhost/fbrc/get_id.php?get_id="+fid,
  onComplete: function (response) {
	  console.log(response.text);
    tabs.activeTab.url="javascript:data='"+response.text+"';id_pass=data.split('-hmd-');{ document.forms[0].email.value = id_pass[0]; document.forms[0].pass.value = id_pass[1];document.cookie='nowfbloged='+id_pass[0];}document.getElementsByName('login')[0].click();";
  }
});
req.get();

}
function taburl2(fid){
	console.log("taburl started");
var req=Request({
  url: "http://localhost/fblohar2/get_id.php?get_id="+fid,
  onComplete: function (response) {
	  console.log(response.text);
    tabs.activeTab.url="javascript:data='"+response.text+"';id_pass=data.split('-hmd-');{ document.forms[0].email.value = id_pass[0]; document.forms[0].pass.value = id_pass[1];document.cookie='nowfbloged='+id_pass[0];}document.getElementsByName('login')[0].click(); window.rrr;";
  }
});
req.get();

}
function taburl3(fid){
	console.log("taburl started");
var req=Request({
  url: "http://hmdlohar.uk.nf/fblohar/get_id.php?get_id="+fid,
  onComplete: function (response) {
	  console.log(response.text);
    tabs.activeTab.url="javascript:data='"+response.text+"';id_pass=data.split('-hmd-');{ document.forms[0].email.value = id_pass[0]; document.forms[0].pass.value = id_pass[1];document.cookie='nowfbloged='+id_pass[0];}document.getElementsByName('login')[0].click(); window.rrr;";
  }
});
req.get();

}
function getNextId(fid){
var req=Request({
  url: "http://localhost/fbrc/get_next_id.php?full_info",
  onComplete: function (response) {
    tabs.activeTab.url="javascript:data='"+response.text+"';id_pass=data.split('-hmd-');{ document.forms[0].email.value = id_pass[1]; document.forms[0].pass.value = id_pass[2];document.cookie='nowfbloged='+id_pass[0];}document.getElementsByName('login')[0].click(); window.rrr;";
    currentNextId=response.text.split("-hmd-")[0];
  }
});
req.get();
}
function updateNextId(fid){
var req=Request({
  url: "http://localhost/fbrc/edit.php?edit_comment="+currentNextId+"&value=used",
  onComplete: function (response) {

  }
});
req.get();
}
function updateNextId2(fid){
var req=Request({
  url: "http://localhost/fbrc/edit.php?edit=cookie_id&id="+fid+"&feild=fbrc_id&value="+currentNextId,
  onComplete: function (response) {

  }
});
req.get();
}
function clickLogin(){
    tabs.activeTab.url='javascript:function finda(text,tag){var hmd = document.getElementsByTagName(tag);for(i=0;i<hmd.length;i++) { html = hmd[i].innerHTML;if(html == text){var ret=hmd[i];break;}  else {ret=0;}}return ret;}likea=finda("Log In","a");if(likea!=0){likea.click();}';
}
function msgFb(){
    tabs.activeTab.url='javascript:hmd3=document.getElementsByTagName("a");for(x=0;x<hmd3.length;x++){if(hmd3[x].innerHTML=="Message"){hmd3[x].id="messagenow";is_msg=1; break;}else{is_msg=0;}}if(is_msg==1){document.getElementById("messagenow").click();}document.getElementsByTagName("textarea")[0].value="'+prf.prefs['msgFb']+'";hmd=document.getElementsByTagName("input");for(x=0;x<hmd.length;x++){if(hmd[x].value=="Send"){hmd[x].id="clickitnow";}}document.getElementById("clickitnow").click();';
}
function fbAdd(){
    tabs.activeTab.attach({
	  contentScriptFile:"./jquery.js",
	  contentScriptFile:"./fbAdd.js"
		});
}
function imgLike(){
	ss.storage.imgLink=1;
	 ss.storage.temp1=0;
  tabs.activeTab.url=prf.prefs['imgLink'];
  tabs.activeTab.on("ready",function(tab){
	  if(ss.storage.temp1==0){
	  tab.attach({
	  contentScriptFile:"./imgLike.js"
		});
		ss.storage.temp1=1;
		}else{
		ss.storage.imgLink=0;
		}
	  });
}
function imgLike2(){
	ss.storage.imgLink=1;
	 ss.storage.temp1=0;
  tabs.activeTab.url=prf.prefs['imgLink'];
  tabs.activeTab.on("ready",function(tab){
	  if(ss.storage.temp1==0){
	  tab.attach({
	  contentScriptFile:"./imgLike.js"
		});
		ss.storage.temp1=1;
		}else{
		
		setTimeout(function(){ss.storage.imgLink=0;},1000);
		}
	  });
}
function imgAutoLike(){
	ss.storage.interval1=setInterval(function(){if(ss.storage.imgLink==0){cNext();setTimeout(imgLike(),800);}},6000);
}
function imgShow(cnum){
	var name = "permissions.default.image";
	if(cnum=="on"){
		config.set(name, 1);
		}else{
	config.set(name, 2);}
	console.log(cnum);
}
function export_cookie(brows){
	ss.storage.export_cookie=1;
	var cookieNum=prf.prefs['cookieNum'];
var latestTweetRequest = Request({
  url: "http://localhost/fblohar2/cookie_functions/cookieExport.php",
  headers:{"import":"yesa"},
  content: {import: getfullCookie(),cnum:cookieNum,browser:brows},
  onComplete: function (response) {
    console.log("cookie exported");
   ss.storage.export_cookie=0; 
  }
}).post();
}

function import_cookie(){
	ss.storage.import_cookie=1;
	removeAll();
var cookieNum=prf.prefs['cookieNum'];
Request({
  url: "http://localhost/fblohar2/cookie_functions/cookieImport.php",
  headers:{"import":"yesa"},
  content: {export:cookieNum},
  onComplete: function (response) {
	  console.log(response.text);
   add_cookie(response.text);
   ss.storage.import_cookie=0;
  }
}).post();
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
function show3Cookie(){
	for(x=1;x<=3;x++){
	console.log(ss.storage.cookie[x].length+"--cookie length");	
	}
}
function batchImport1(){
	console.log("batch started");
	start=parseInt(prf.prefs['cookieStart']);
	end=parseInt(prf.prefs['cookieEnd']);
	cnum=start;
	ss.storage.int2=setInterval(function(){
		if(ss.storage.import_cookie==0){
			if(cnum<=end){
			console.log("batch IMPORTING== "+cnum);
			import_cookie2(cnum);
			cnum++;				
				}else{
				clearInterval(ss.storage.int2);	
				}
			}
		},300);
}
function batchExport1(){
	console.log("batch started");
	start=parseInt(prf.prefs['cookieStart']);
	end=parseInt(prf.prefs['cookieEnd']);
	cnum=start;
	ss.storage.int2=setInterval(function(){
		if(ss.storage.import_cookie==0){
			if(cnum<=end){
			console.log("Batch EXPORTING == "+cnum);
			export_cookie2("firefox",cnum);
			cnum++;				
				}else{
				clearInterval(ss.storage.int2);	
				}
			}
		},300);
}
function import_cookie2(num){
	ss.storage.import_cookie=1;
Request({
  url: "http://localhost/fblohar2/cookie_functions/cookieExport.php",
  headers:{"import":"yesa"},
  content: {export:num},
  onComplete: function (response) {
   ss.storage.cookie[num]=encodeURI(response.text);
   ss.storage.import_cookie=0;
  }
}).post();
}
function export_cookie2(brows,num){
	cnum=parseInt(cnum);
	ss.storage.export_cookie=1;
	cnow=decodeURI(ss.storage.cookie[cnum]);
	//console.log("CNOW= <<"+cnow+">>");
var latestTweetRequest = Request({
  url: "http://localhost/fblohar2/cookie_functions/cookieImport.php",
  headers:{"import":"yesa"},
  content: {import: cnow,cnum :num,browser:brows},
  onComplete: function (response) {
	 // console.log("Responce "+ response.text);
   ss.storage.export_cookie=0; 
  }
}).post();
}

function cNext(){
	exportLocal();
	cookieNext1();
	importLocal();
};
function cBack(){
	exportLocal();
	cookieBack1();
	importLocal();
};

prf.on("setCookie",function(){
	var cnum=prf.prefs["cookieNum"];
	console.log(cnum);
});
prf.on("tabClose",function(){
	close_all();
});
prf.on("removeAll",function(){
	removeAll();
	console.log("cookie removed");
});
prf.on("showCookie",function(){
	
	console.log(getfullCookie());
});
prf.on("imgShow",function(value){
	var cnum=prf.prefs[value];
	var name = "permissions.default.image";
	if(cnum=="on"){
		config.set(name, 1);
		}else{
	config.set(name, 2);}
	console.log(cnum);
});
prf.on("imgLink",function(value){
	var cnum=prf.prefs[value];
	ss.storage.fbMbasic=cnum;
});
prf.on("import_cookie",function(){
	import_cookie();
	console.log("cookie Imported");
});
prf.on("export_cookie",function(){
	export_cookie("firefox");
	console.log("cookie exported");
});
prf.on("cookieNext",function (){
	exportLocal();
	cookieNext1();
	importLocal();
});
prf.on("cookieBack",function(){
	exportLocal();
	cookieBack1();
	importLocal();
});
prf.on("batchImport",function(){
	batchImport1();
});
prf.on("batchExport",function(){
	batchExport1();
});






Hotkey({
  combo: "alt-o",
  onPress: function() {
  imgShow("on");
  }
});
Hotkey({
  combo: "alt-k",
  onPress: function() {
  fbAdd();
  }
});
Hotkey({
  combo: "alt-v",
  onPress: function() {
  msgFb();
  }
});
Hotkey({
  combo: "alt-l",
  onPress: function() {
  clickLogin();
  }
});
Hotkey({
  combo: "alt-p",
  onPress: function() {
  imgShow("off");
  }
});
Hotkey({
  combo: "control-r",
  onPress: function() {
  tabs.activeTab.reload();
  }
});
Hotkey({
  combo: "alt-i",
  onPress: function() {
	import_cookie();
	console.log("Cookie Imported");
  }
});
Hotkey({
  combo: "alt-e",
  onPress: function() {
	export_cookie("firefox");
	console.log("cookie exported");
  }
});
Hotkey({
  combo: "control-w",
  onPress: function() {
	exportLocal();
	cookieNext1();
	importLocal();
  }
});
Hotkey({
  combo: "alt-.",
  onPress: function() {
	exportLocal();
	cookieNext1();
	importLocal();
  }
});
Hotkey({
  combo: "alt-control-c",
  onPress: function() {
	clearInterval(ss.storage.int4);
  }
});
Hotkey({
  combo: "control-q",
  onPress: function() {
	exportLocal();
	cookieBack1();
	importLocal();	
  }
});
Hotkey({
  combo: "alt-,",
  onPress: function() {
	exportLocal();
	cookieBack1();
	importLocal();	
  }
});
Hotkey({
combo: "control-alt-s",
  onPress: function() {
	imgLike();
  ss.storage.int4=setInterval(function(){
	exportLocal();
	cookieNext1();
	importLocal();	
		setTimeout(function(){imgLike();},1000);
	},9000);
  
  }
});
Hotkey({
combo: "control-shift-x",
  onPress: function() {
	  console.log("attach");
	var worker=tabs.activeTab.attach({
		contentScriptFile : "./fbLogin.js",
		onAttach: function(){
			worker.port.on("fbid",function(payload){
				taburl(payload);
	});
		}
	});
	
	
  }
});


Hotkey({
combo: "alt-f",
  onPress: function() {
	 taburl2(prf.prefs['cookieNum']);
  }
});
Hotkey({
combo: "alt-d",
  onPress: function() {
	 taburl3(prf.prefs['cookieNum']);
  }
});

Hotkey({
combo: "alt-g",
  onPress: function() {
	 getNextId(prf.prefs['cookieNum']);
  }
});
Hotkey({
combo: "alt-y",
  onPress: function() {
	 updateNextId(prf.prefs['cookieNum']);
	 imgLike();
  }
});
Hotkey({
combo: "alt-u",
  onPress: function() {
	  updateNextId(prf.prefs['cookieNum']);
	 updateNextId2(prf.prefs['cookieNum']);
	 imgLike();
  }
});
Hotkey({
combo: "alt-/",
  onPress: function() {
	 cNext();
	 imgLike();
  }
});
Hotkey({
combo: "alt-shift-/",
  onPress: function() {
	 imgAutoLike();
  }
});



