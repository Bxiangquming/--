window.onload=function(){
	var span=document.getElementsByTagName("span");
	var address=document.getElementById("address");
	var email=document.getElementById("email");
	var name=document.getElementById("na");
name.onblur=function(){
		console.log(name.innerHTML);
	console.log(name.value);
		if(name.value!=" "){
			span[0].style.display='none';
		}
		else if(name.value==" ")
			span[0].style.display='inline';
	}
address.onblur=function(){
		if(address.value!=" "){
			span[1].style.display='none';
		}
		else if(address.value==" ")
			span[1].style.display='inline';
	}
	var datalist=['qq.com','162.com','gmail.com','126.com','yahoo.com'];
	address.oninput=function(){
		email.innerHTML="";
		var k=address.value;
		if(k.indexOf("@")>-1)return;
		if(k==" ")return;
		var newstr="";
		for(var i=0;i<datalist.length;i++){
			newstr+='<option value="'+k+"@"+datalist[i]+'"/>';
		}
		email.innerHTML=newstr;
	}
}