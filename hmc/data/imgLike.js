function finda(text,tag){var hmd = document.getElementsByTagName(tag);for(i=0;i<hmd.length;i++) { html = hmd[i].innerHTML;if(html == text){var ret=hmd[i];break;}  else {ret=0;}}return ret;}
likea=finda("Like","span");
likeb=finda("Unlike","span");
if(likea!=0){likea.click();}

