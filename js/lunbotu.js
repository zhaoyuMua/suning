var lis=document.querySelectorAll("#oul li");
var oul = document.getElementById("oul");
var pre = document.getElementById("la");
var next = document.getElementById("ra");
var pages = document.querySelectorAll("#page li");
var box = document.getElementById("lunbotu");

var i=0;
var timer=null;
autoPlay()
		
next.onclick=function(){
	i++;
	if(i>=8){
		i=0;
	}
	bian()
	pageCss()
}
		
pre.onclick=function(){
	i--;
	if(i<=-1){
		i=7;
	}
	bian()
	pageCss()
}
		
for(var k=0;k<pages.length;k++){
	pages[k].index=k;
	pages[k].onclick=function(){
		i=this.index;
		bian()
		pageCss()
	}
	pages[k].onmousemove=function(){
		i=this.index;
		bian()
		pageCss()
	}
			
}
		
box.onmouseover=function(){
	clearInterval(timer);
}
box.onmouseout=function(){
	autoPlay()
}

function autoPlay(){
			timer=setInterval(function(){
				i++;
				if(i>=8){
					i=0;
				}
				bian()
				pageCss()
			},3000)
		}
function pageCss(){
			for(var j=0;j<pages.length;j++){
				pages[j].style.background="#c1c1c1";
			}
			pages[i].style.background="orange";
		}
function bian(){
			for(var t=0;t<lis.length;t++){
				lis[t].style.opacity=0;
			}
			lis[i].style.opacity=1;
		}