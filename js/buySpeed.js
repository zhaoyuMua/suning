$(".buySpeed_time li").mouseenter(function(ev){
			$(this).css("background","#ffae02").siblings("li").css("background","none");
			$("#speedBuy_box ul").eq($(this).index()).css("display","block").siblings("ul").css("display","none");
			
		})
