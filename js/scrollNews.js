var scrollNews=document.getElementById("scrollNews");
var scrollNews_ul=document.getElementById("scrollNews_ul");

		var q=0;
		var timers=null;
		// move(ele);
		autoPlays()
		
		scrollNews.onmouseenter=function(){
			clearInterval(timers);
		}
		scrollNews.onmouseleave=function(){
			autoPlays()
		}
		
		function autoPlays(){
			timers=setInterval(function(){
				q++;
				if(q>=3){
					scrollNews_ul.style.top="0px"
					q=1;
				}
				moves(scrollNews_ul,"left",-160*q)
			},5000)
		}
		function moves(ele,dir,end){
			clearInterval(ele.timers)
			if(dir==="left"){
				ele.timers=setInterval(function(){
						ele.style.top=ele.offsetTop-30+"px";
					if(ele.offsetTop<=end){
						clearInterval(ele.timers);
						ele.style.top=end+"px";
					}
				},100)
			}	
		}