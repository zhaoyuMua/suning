var search_txt=document.getElementById("search_txt");
var search_box=document.getElementById("search_box");
var searchtimer=null;
    search_txt.onkeyup=function(){
        var ajax = new XMLHttpRequest;
        ajax.open("get", "search_box.php?cont="+this.value, true);
        ajax.send(null);
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4 && ajax.status === 200) {
                var data=JSON.parse(ajax.responseText).suggestKeycords;
                console.log(data);
                var str="";
                for(var f=0;f<data.length;f++){
                    str+=`<li><a href="https://search.suning.com/${data[f]}%252dii/">${data[f]}</a></li>`;
                }
				search_txt.onblur=function(){
					search_box.onclick=function(ev){
						search_txt.value=ev.target.innerText;
					}
                    searchtimer=setInterval(function(){
                        search_box.style.display="none";
                    },500)
				}
                search_txt.onfocus=function(){
                    clearInterval(searchtimer);
                    search_box.style.display="block";
                }
                search_box.innerHTML=str;
            }
        }
    }
