let prf=require('sdk/simple-prefs');
//let config=require("sdk/preferences/service");
let tabs=require("sdk/tabs");
let ss=require("sdk/simple-storage");
//var { Hotkey } = require("sdk/hotkeys");
var pageMod = require("sdk/page-mod");
var { setInterval, clearInterval,setTimeout,clearTimeout } = require("sdk/timers");
//var Request = require("sdk/request").Request;
tabArray=[];

if(ss.storage.msgArray==undefined){
	ss.storage.msgArray=[];
	storeMsg("asdf","54","sadf24asdf");
	ss.storage.msgArray[0]=1;
}
//storeMsg("asdf","54","sadf24asdf");
pmCookie=pageMod.PageMod({
	include: "https://mbasic.facebook.com/*",
	contentScriptFile: "./result.js",
	onAttach:function(worker){
		ss.storage.int3=setInterval(function(){worker.port.emit("result",ss.storage.msgArray);},200);
		worker.port.on("actionValue",function(pl){
			if(pl.indexOf("1-hmd-")>-1){pl2=pl.split("-hmd-");storeMsg(pl2[1],pl2[2],pl2[3]);}
			else if(pl.indexOf("2-hmd-")>-1){ss.storage.msgArray[0]=pl.split("-hmd-")[1];}
			else if(pl==3){msgOne();}

		});
	}
});
function storeMsg(msg1,msg2,msg3){
	ss.storage.msgArray[1]=msg1;
	ss.storage.msgArray[2]=msg2;
	ss.storage.msgArray[3]=msg3;
}
function getMsg(){
	return ss.storage.msgArray;
}
function addOne(){
	getTab(1).attach({
		contentScriptFile:"./fbAdd.js"
	});
}
function msgOne(){
	tabs.activeTab.attach({
		contentScriptFile:"./fbAutoMessage.js"
	});
}
function getTab(num){
	x=1;
	for (let tab of tabs){tabArray[x]=tab;x++;}
	return tabArray[num];
}