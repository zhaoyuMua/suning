var good = document.getElementById("good"); 
			var goodajax=new XMLHttpRequest;
			goodajax.open("get","good.php",true);
			goodajax.send(null);
			goodajax.onreadystatechange=function(){
				 if(goodajax.readyState===4&&goodajax.status===200){
				    var gooddata= JSON.parse(goodajax.responseText);
					console.log(gooddata);
				    var goodstr = "";
				    for(var g=0;g<gooddata.length;g++){
				        goodstr+=`<a>
				                <img style="width: 111px;height: 111px;margin: 11px auto 0px;" src="${gooddata[g].imgurl}" alt="">
				                <div style="background: #ff48a7;height: 77px;margin-top: 10px;">
				                <p class="goodcontent1"  style="text-align: center;color:#fff ;margin-top: 10px;">${gooddata[g].goodcontent1}</p>
				                <p class="goodcontent2" style="text-align: center;color:#f18712 ;border-radius: 8px;background: #fff;margin-top: 10px;">${gooddata[g].goodcontent2}</p>
				                </div>
				            </a>`
				    }
				    good.innerHTML = goodstr;
				}
			}