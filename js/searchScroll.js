var searchScroll_txt=document.getElementById("searchScroll_txt");
var searchScroll_box=document.getElementById("searchScroll_box");
var searchScroll=null;
    searchScroll_txt.onkeyup=function(){
        var ajax = new XMLHttpRequest;
        ajax.open("get", "search_box.php?cont="+this.value, true);
        ajax.send(null);
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4 && ajax.status === 200) {
                var data=JSON.parse(ajax.responseText).suggestKeycords;
                console.log(data);
                var searchScrollstr="";
                for(var f=0;f<data.length;f++){
                    searchScrollstr+=`<li><a href="https://search.suning.com/${data[f]}%252dii/">${data[f]}</a></li>`;
                }
				searchScroll_txt.onblur=function(){
					searchScroll_box.onclick=function(ev){
						searchScroll_txt.value=ev.target.innerText;
					}
                    searchScrolltimer=setInterval(function(){
                        searchScroll_box.style.display="none";
                    },500)
				}
                searchScroll_txt.onfocus=function(){
                    clearInterval(searchScrolltimer);
                    searchScroll_box.style.display="block";
                }
                searchScroll_box.innerHTML=searchScrollstr;
            }
        }
    }
