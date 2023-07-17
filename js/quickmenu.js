
//-------------------------------------------------------------------------------------- quickMenu

var scrTop;
var num=navigator.userAgent.toLowerCase().indexOf("webkit");
window.onscroll=function(){
	if(num<0){
		scrTop=document.documentElement.scrollTop+10;
	}else{
		scrTop=document.body.scrollTop+10;
	}
	mvQuick();
}
var autoScr=null;
function mvQuick(){
	var nowPos=parseInt(myQuick.style.top); 
	var addPos=Math.ceil(Math.abs((scrTop-nowPos)/8));
	if(scrTop<nowPos) addPos=-addPos;
	myQuick.style.top=nowPos+addPos+"px"
	if(autoScr) clearTimeout(autoScr);
	autoScr=setTimeout(mvQuick,30);
}
var myQuick;
function quickLoad(){
	myQuick=document.getElementById("quickmenu");
	myQuick.style.top="10px";
}

if(window.addEventListener){
	window.addEventListener("load",quickLoad,false)
}else if(window.attachEvent){
	window.attachEvent("onload",quickLoad);
}

// 퀵메뉴의 이미지를 롤오버 처리하기
$(document).ready(function(){
	$('#quickmenu li a').mouseover(function(){
		$(this).find('img').attr('src',$(this).find('img').attr('src').replace('.jpg','_over.jpg') );
	});
	$('#quickmenu li a').mouseout(function(){
		$(this).find('img').attr('src',$(this).find('img').attr('src').replace('_over.jpg','.jpg') );
	});
});