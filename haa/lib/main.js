let prf=require('sdk/simple-prefs');
let config=require("sdk/preferences/service");
let tabs=require("sdk/tabs");
let ss=require("sdk/simple-storage");
var { Hotkey } = require("sdk/hotkeys");
var pageMod = require("sdk/page-mod");
var { setInterval, clearInterval,setTimeout,clearTimeout } = require("sdk/timers");
var Request = require("sdk/request").Request;

//ss.storage.autoAdd=1;
//ss.storage.autoMessage=1;


tabArray=[];
prf.on("autoAdd",function(){if(prf.prefs["autoAdd"]=="on"){ss.storage.autoAdd=1;}else{ss.storage.autoAdd=0;} });
prf.on("autoMessage",function(){if(prf.prefs["autoMessage"]=="on"){ss.storage.autoMessage=1;}else{ss.storage.autoMessage=0;}});

pm=pageMod.PageMod({
	include: "https://mbasic.facebook.com/browse/*",
	contentScriptFile: "./result.js",
	onAttach:function(worker){
		ss.storage.int3=setInterval(function(){worker.port.emit("result",prf.prefs['autoAdd']);},1000);
		worker.port.on("takeP",function(pl){
			
			if(pl=="fbAdd1"){if(ss.storage.autoAdd==1){addOne(); console.log("addone")}}
			});
		}
});
pm2=pageMod.PageMod({
	include: "https://mbasic.facebook.com/*",
	contentScriptFile: "./result0.js",
	onAttach:function(worker){
		ss.storage.int5=setInterval(function(){worker.port.emit("aa",prf.prefs['autoAdd']);},1000);
		}
});
pm3=pageMod.PageMod({
	include: "https://mbasic.facebook.com/messages/*",
	contentScriptFile: "./fbAdd1.js",
	onAttach:function(worker){
		ss.storage.int4=setInterval(function(){worker.port.emit("p","givep");},1000);
		worker.port.on("takeP",function(pl){
			if(pl=="fbAdd1"){if(ss.storage.autoMessage==1){messageOne(); console.log("messageOne")}}
			});
		}
});


function addOne(){
	getTab(1).attach({
		contentScriptFile:"./fbAdd.js"
	});
}
function messageOne(){
	getTab(1).attach({
		contentScriptFile:"./fbAutoMessage.js"
	});
}
function getTab(num){
	x=1;
	for (let tab of tabs){tabArray[x]=tab;x++;}
	return tabArray[num];
}

Hotkey({
  combo: "control-shift-2",
  onPress: function(){
	addOne();
  }
});

Hotkey({
  combo: "shift-alt-a",
  onPress: function() {
	getTab(2).url="http://emwpa";
  }
});

Hotkey({
  combo: "shift-alt-w",
  onPress: function() {
	addOne();
	console.log("add onasdf");
  }
});