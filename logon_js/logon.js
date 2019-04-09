var btn=document.getElementById("btn");
var save=document.getElementById("save");
var user=document.getElementById("user");
var pass=document.getElementById("pass");
var cont = document.getElementById("cont");

	var logon_str=document.cookie;
    var logon_arr=logon_str.split("; ");
    var logon_newarr=logon_arr.filter(item=>item.indexOf("username")!=-1);
    if(logon_newarr.length>0){
         var logon_res = logon_newarr[0].split("=")[1];
         user.value = logon_res;
    }
    btn.onclick=function(){
		var logon_ajax = new XMLHttpRequest;
		logon_ajax.open("post","logon.php",true);
		logon_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		logon_ajax.send("user="+user.value+"&pass="+pass.value);
		logon_ajax.onreadystatechange = function () {
		    if (logon_ajax.readyState === 4 && logon_ajax.status === 200) {
		        // console.log(logon_ajax.responseText)
		        var logon_res = JSON.parse(logon_ajax.responseText)
		        if (logon_res.code === 0) {
		            // alert("用户名不存在");
		            cont.style.display="block";
		            cont.innerHTML="用户名不存在";
		            cont.style.color="red";
		        } else if (logon_res.code === 1) {
		            // alert("密码错误")
		            cont.style.display = "block";
		            cont.innerHTML = "密码错误";
		            cont.style.color = "red";
		        } else {
		            cont.style.display = "block";
		            cont.innerHTML = "成功";
		            cont.style.color = "green";
		            window.location.href="index.html"
		        }
		    }
		}
		
		
        if(save.checked){
            var d=new Date();
            d.setDate(d.getDate()+7);
            document.cookie="username="+user.value+";expires="+d.toGMTString();
        }
    }