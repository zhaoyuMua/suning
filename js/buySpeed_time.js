var buySpeed = document.getElementById("buySpeed");
var pres = document.getElementById("pres");
var nexts = document.getElementById("nexts");
var speedBuy = document.getElementById("speedBuy");

var e=0;
var buySpeed_timer=null;
		
nexts.onclick=function(){
	e++;
	if(e>=4){
		speedBuy.style.left="0px";
		e=1;
	}
	buySpeedMove(speedBuy,"left",-1182*e)

}
		
pres.onclick=function(){
	e--;
	if(e<=-1){
		speedBuy.style.left="-3546px"
		e=2;
	}
	buySpeedMove(speedBuy,"right",-1182*e)
}

function buySpeedMove(ele,dir,end){
			clearInterval(ele.buySpeed_timer)
			if(dir==="left"){
				ele.buySpeed_timer=setInterval(function(){
						ele.style.left=ele.offsetLeft-30+"px";
					if(ele.offsetLeft<=end){
						clearInterval(ele.buySpeed_timer);
						ele.style.left=end+"px";
					}
				},10)
				
			}else{
				ele.buySpeed_timer=setInterval(function(){
						ele.style.left=ele.offsetLeft+30+"px";
					if(ele.offsetLeft>=end){
						clearInterval(ele.buySpeed_timer);
						ele.style.left=end+"px";
					}
				},10)
			}
			
			
		}

