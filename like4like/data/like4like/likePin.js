if(document.getElementsByClassName("buttonText")[0].innerHTML=="Unfollow"){
	window.close();
	
}else{
document.getElementsByClassName("buttonText")[0].click();
setTimeout(function(){window.close();

	},1500);
}

