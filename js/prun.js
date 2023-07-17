//----------------------------------------------------------------------------------gnb
function hideMenu() {
	var mMenu=document.getElementById("gnb");
	var sMenu = mMenu.getElementsByTagName("ul");

	var lMenu = mMenu.children;

	if(isOut&&isOut_s) {
		for(j=0;j<sMenu.length;j++){
			sMenu[j].style.display="none";
		}
		if(ssNum>0) // 매개변수 0 일 때 첨자가 -1 로 처리되는 오류 방지
			sMenu[ssNum-1].style.display="block";

		for(var j=0;j<sMenu.length;j++){
			myImg = lMenu[j].children[0].children[0];
			myImg.src = myImg.src.replace("_over.gif",".gif");
		}
		if(ssNum>0) { // 매개변수 0 일 때 첨자가 -1 로 처리되는 오류 방지
			myImg = lMenu[ssNum-1].children[0].children[0];
			myImg.src = myImg.src.replace(".gif","_over.gif");
		}
	}
}

var isOut = 1;
var isOut_s = 1;
var myImg;
var ssNum;
function initNavi(sNum){
	ssNum = sNum;
	var myAuto = null;
	var mMenu=document.getElementById("gnb");
	var sMenu = mMenu.getElementsByTagName("ul");
	for(i=0;i<sMenu.length;i++){
		sMenu[i].style.display="none"; //미리 서브 숨겨둠
	}
	var lMenu = mMenu.children;

	if(sNum>0){								// 0 이 아니라면
		sMenu[sNum-1].style.display="block";		//해당서브 보임
		myImg = lMenu[sNum-1].children[0].children[0]; //해당 메인이미지를 오버이미지로
		myImg.src = myImg.src.replace(".gif","_over.gif");
		}

	for(var i=0;i<sMenu.length;i++){
		lMenu[i].children[0].onfocus = lMenu[i].children[0].onmouseover = function(){ //오버하면

			for(var j=0;j<sMenu.length;j++){
				sMenu[j].style.display="none"; //우선 서브 모두 숨김
			}
			var myNext = this.nextSibling;
			if(myNext.nodeType != 1)myNext = myNext.nextSibling; //해당서브 보임
			myNext.style.display="block";
			
			for(var j=0;j<sMenu.length;j++){
				myImg = lMenu[j].children[0].children[0]; //우선 메인이미지를 원래이미지로
				myImg.src = myImg.src.replace("_over.gif",".gif");
			}
			this.children[0].src = this.children[0].src.replace(".gif","_over.gif"); //해당이미지만 롤오버
			isOut = 0;
		}
		lMenu[i].children[0].onmouseout = function() {
			isOut = 1;
			if(myAuto) clearTimeout(myAuto);
			myAuto = setTimeout(hideMenu,1000);
		}

		sMenu[i].onfocus = sMenu[i].onmouseover = function() {
			isOut_s = 0;
		}
		sMenu[i].onblur = sMenu[i].onmouseout = function() {
			isOut_s = 1;
			if(myAuto) clearTimeout(myAuto);
			myAuto = setTimeout(hideMenu,1000);
		}
	}	
}

//----------------------------------------------------------------------------------tab

function initTabMenu(mytab) {
 var myList = document.getElementById(mytab);
 var mytab = myList.getElementsByTagName("dt");
 var myDD = myList.getElementsByTagName("dd");
   
 for(var i=0;i<mytab.length; i++) {
 mytab[i].children[0].onfocus=mytab[i].children[0].onmouseover=function() {
    for(var k=0; k<mytab.length; k++) {
        myDD[k].style.display="none";
    }
    var theNext=this.parentNode.nextSibling;
    if(theNext.nodeType==3) theNext=theNext.nextSibling;
    theNext.style.display="block";
   
    for(var k=0; k<mytab.length; k++) {
        var theTab=mytab[k].children[0].children[0];
        theTab.src=theTab.src.replace("_over.gif",".gif");
    }
    this.children[0].src=this.children[0].src.replace(".gif","_over.gif");
  }
 }
}

//----------------------------------------------------------------------------------allmenu
var isView = false;
function allmenu() {
	var viewall = document.getElementById("viewall");
	var hideall = document.getElementById("hideall");
	var allmenu = document.getElementById("allmenu");

	viewall.onclick = function() {
		if (! isView) allmenu.style.display = "block";
		else if (isView) allmenu.style.display = "none";
		isView = ! isView;
	}
	
	hideall.onclick = function() {
		allmenu.style.display = "none";
		isView = false;
	}
}


//----------------------------------------------------------------jumpmenu go
function goSite() {
	document.getElementById("goSitebtn").onclick = function() {
		var myVal = document.getElementById("c_search").value;
		if (myVal != "") window.open(myVal,'_blank');
	}
}


//---------------------------------------------------------------------------------onload
window.onload = function() {
	allmenu();
	goSite();
}

