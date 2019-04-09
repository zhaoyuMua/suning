
var dianji=document.getElementById("dianji");
var flag=true;
dianji.onclick=function(){
	
	if(flag){
		dianji.style.background="file:/D:/1805千峰/二阶段项目/苏宁/index.html";
		dianji.style.backgroundPosition="-255px -160px";
		dianji.onmouseout=function  () {
			dianji.style.backgroundPosition="-240px -160px";
		}
		// dianji.style.hover="back"
		dianji.onmouseover=function  () {
			dianji.style.backgroundPosition="-255px -160px";
		}
		img_wrap.style.display="none";
	}else{
		dianji.style.background="file:/D:/1805千峰/二阶段项目/苏宁/index.html";
		dianji.style.backgroundPosition="-255px -145px";
		dianji.onmouseout=function  () {
			dianji.style.backgroundPosition="-240px -145px";
		}
		dianji.onmouseover=function  () {
			dianji.style.backgroundPosition="-255px -145px";
		}
		img_wrap.style.display="block";
	}
	flag=!flag
}