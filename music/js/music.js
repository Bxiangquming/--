window.onload=function(){
	var inside1=document.getElementsByClassName('inside1')[0];
	var inside2=document.getElementsByClassName('inside2')[0];
	var button=document.getElementsByTagName("span");
	var audio1=document.getElementById("audio1");
inside1.onclick=function(){
		inside1.style.backgroundColor="cornflowerblue";
		inside2.style.backgroundColor="dimgray";
	}
inside2.onclick=function(){
		inside1.style.backgroundColor="dimgray ";
		inside2.style.backgroundColor="cornflowerblue";
	}
    for(var i=0;i<button.length;i++){
    	(function(i){
    		button[i].onclick=function(){
    		if(button[i].innerHTML=="播放"){
    		button[i].innerHTML="停止";
    		button[i].style.color="azure";
    		audio1.src="music/"+i+".mp3";
    		}
    		else{
    			button[i].innerHTML="播放";
    			button[i].style.color="deepskyblue";
    			audio1.src="";
    		}
    		for(var j=0;j<button.length;j++){
    			(function(j){
    			if(j!=i){
    				button[j].innerHTML="播放";
    				button[j].style.color="deepskyblue";
    			}
    			})(j);
    		}
    	}
    	}
    	)(i);
    }
}