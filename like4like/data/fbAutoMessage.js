
//if(document.getElementById("messageGroup")){spn0=document.getElementById("messageGroup").getElementsByTagName("span")[0];spn1=document.getElementById("messageGroup");}else{spn0=document.getElementsByTagName("a")[0];spn1=document.getElementsByTagName("a")[0];}if(spn0.innerHTML=="See Older Messages"){bb=document.getElementsByClassName("bb");alla=bb[0].getElementsByTagName("a");if(alla.length>=8){alla[8].click();}}else if(spn1.innerHTML.indexOf("CARRY ON HONEYMOON")>5){bb=document.getElementsByClassName("bb");alla=bb[0].getElementsByTagName("a");if(alla.length>=8){alla[8].click();}}else{javascript:hmd3=document.getElementsByTagName("a");for(x=0;x<hmd3.length;x++){if(hmd3[x].innerHTML=="Message"){hmd3[x].id="messagenow";is_msg=1; break;}else{is_msg=0;}}if(is_msg==1){document.getElementById("messagenow").click();}document.getElementsByTagName("textarea")[0].value="Meri friend ki movie \"CARRY ON HONEYMOON\" ka Trailer Dekhiye YouTube pe - https://m.youtube.com/watch?v=9xaUAIbmZeE \n aap please ye jarur dekhiyega. Aor Agar ho sake to apne friends ke saath share bhi kijiye. ye bahot helpful hoga mere aor meri friend ke liye \n Thank You";hmd=document.getElementsByTagName("input");for(x=0;x<hmd.length;x++){if(hmd[x].value=="Send"){hmd[x].id="clickitnow";}}document.getElementById("clickitnow").click();}console.log("fbAutoMessage");setTimeout(function(){document.location.reload();},30000);


chrome.runtime.sendMessage({msg:"autoMessagePls",data: "autochalu"},function(res){if(document.getElementById("messageGroup")){spn0=document.getElementById("messageGroup").getElementsByTagName("span")[0];spn1=document.getElementById("messageGroup");}else{spn0=document.getElementsByTagName("a")[0];spn1=document.getElementsByTagName("a")[0];}if(spn0.innerHTML=="See Older Messages"){bb=document.getElementsByClassName("bb");alla=bb[0].getElementsByTagName("a");if(alla.length>=8){alla[8].click();}}else if(spn1.innerHTML.indexOf(res.data.substring(0,20))>5){bb=document.getElementsByClassName("bb");alla=bb[0].getElementsByTagName("a");if(alla.length>=8){alla[8].click();}}else{javascript:hmd3=document.getElementsByTagName("a");for(x=0;x<hmd3.length;x++){if(hmd3[x].innerHTML=="Message"){hmd3[x].id="messagenow";is_msg=1; break;}else{is_msg=0;}}if(is_msg==1){document.getElementById("messagenow").click();}document.getElementsByTagName("textarea")[0].value=res.data;hmd=document.getElementsByTagName("input");for(x=0;x<hmd.length;x++){if(hmd[x].value=="Send"){hmd[x].id="clickitnow";}}document.getElementById("clickitnow").click();}console.log("fbAutoMessage");});setTimeout(function(){document.location.reload();},20000);






//"if(document.getElementById('messageGroup')){spn0=document.getElementById('messageGroup').getElementsByTagName('span')[0];spn1=document.getElementById('messageGroup');}else{spn0=document.getElementsByTagName('a')[0];spn1=document.getElementsByTagName('a')[0];}if(spn0.innerHTML=='See Older Messages'){bb=document.getElementsByClassName('bb');alla=bb[0].getElementsByTagName('a');if(alla.length>=8){alla[8].click();}}else if(spn1.innerHTML.indexOf('"+allm[autoMessageIndex].substring(0,20)+"')>5){bb=document.getElementsByClassName('bb');alla=bb[0].getElementsByTagName('a');if(alla.length>=8){alla[8].click();}}else{javascript:hmd3=document.getElementsByTagName('a');for(x=0;x<hmd3.length;x++){if(hmd3[x].innerHTML=='Message'){hmd3[x].id='messagenow';is_msg=1; break;}else{is_msg=0;}}if(is_msg==1){document.getElementById('messagenow').click();}document.getElementsByTagName('textarea')[0].value='"+allm[autoMessageIndex]+"';hmd=document.getElementsByTagName('input');for(x=0;x<hmd.length;x++){if(hmd[x].value=='Send'){hmd[x].id='clickitnow';}}document.getElementById('clickitnow').click();}console.log('fbAutoMessage');setTimeout(function(){document.location.reload();},30000);"