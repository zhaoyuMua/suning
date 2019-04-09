var email=document.getElementById("email");
var ospan=document.getElementById("ospan")
var zhengque=document.getElementById("zhengque");

var opassword=document.getElementById("opassword");
var bspan=document.getElementById("bspan")
var bzhengque=document.getElementById("bzhengque");
var must=document.getElementById("must");

var rePassword=document.getElementById("rePassword");
var sam=document.getElementById("sam");
var respan=document.getElementById("respan");
var unsam=document.getElementById("unsam");

var tel=document.getElementById("tel");
var czhengque=document.getElementById("czhengque");
var no=document.getElementById("no");
var tTel=document.getElementById("tTel");

function email_check(){
	var emailreg=/^[a-zA-Z]\w{5,17}$/;
	var res=emailreg.test(email.value);
	return res;
}
email.onblur=function(){
	if(email_check()){
		ospan.style.display="none";
		daxie.style.display="none";
		zhengque.style.display="block";
	}else{
		ospan.style.display="none";
		zhengque.style.display="none";
		daxie.style.display="block";
	}
}


function opassword_check(){
	var opasswordreg=/^\w{6,18}$/;
	var res=opasswordreg.test(opassword.value);
	return res;
}
opassword.onblur=function(){
	
	if(opassword_check()){
		bspan.style.display="none";
		must.style.display="none";
		bzhengque.style.display="block";
		
	}else{
		bspan.style.display="none";
		bzhengque.style.display="none";
		must.style.display="block";
	}
}


function rePassword_check(){
	var res=opassword.value;
	rePassword.value===res
	return rePassword.value===res;
}

rePassword.onblur=function(){
	var res=opassword.value;
	if(rePassword_check()){
		respan.style.display="none";
		unsam.style.display="none"
		sam.style.display="block";
		
	}else{
		respan.style.display="none";
		sam.style.display="none";
		unsam.style.display="block"
	}
}


function tel_check(){
	var telreg=/^1\d{10}$/;
	var res=telreg.test(tel.value);
	return res
}
tel.onblur=function(){
	
	if(tel_check()){
		tTel.style.display="none";
		no.style.display="none";
		czhengque.style.display="block";
	}else{
		tTel.style.display="none";
		czhengque.style.display="none";
		no.style.display="block";
	}
}


var yanzhengma=document.getElementById("yanzheng");
var down=document.getElementById("down");
var yanzheng=document.getElementById("yanzheng");
	
var arr=[1,2,3,4,5,"a","b","c","d"];
		var yanzhengma=document.getElementById("yanzhengma");
		function fn(){
				down.onclick=function(){
				var str="";
				for(var i=0;i<4;i++){
					var a=Math.floor(arr.length*Math.random());
					str+=arr[a];
				}
				yanzhengma.innerHTML=str;
			}
		}
		
fn();
var yanzheng=document.getElementById("yanzheng");
var yanzhengTrue=document.getElementById("yanzhengTrue");
var yanzhengM=document.getElementById("yanzhengM");


function yanzheng_check(){
	yanzheng.value===yanzhengma.innerHTML
	return yanzheng.value===yanzhengma.innerHTML;
}
yanzheng.onblur=function(){
	if(yanzheng_check()){
		down.style.display="none";
		yanzhengTrue.style.display="block";
	}
}


var btn=document.getElementById("btn");

btn.onclick=function(){
	if(email_check()&&opassword_check()&&rePassword_check()&&tel_check()&&yanzheng_check()===true){
		window.location.href="zhuce.html";
	}
}

