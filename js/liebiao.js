$("#goodList li").mouseenter(function(){
			$(this).css("background","#fff").siblings("li").css("background","none");
			$(this).children().css("color","#000");
			
			$(this).siblings("li").children().css("color","#fff");
			
			$("#goodList .liebiao").eq($(this).index()).css("display","block").siblings("div").css("display","none")
		})
		
$("#goodList li").mouseleave(function(){
			$(this).css("background","none");
			$(this).children().css("color","#fff");
// 			$(this).siblings("li").children().css("color","#fff");
			// $("#goodList .liebiao").css("display","none")
		})
$("#goodList li a").mouseenter(function(){
	$(this).css("color","red").siblings("a").css("color","#000")
	})
	
$("#banner").mouseleave(function(){
	$("#goodList .liebiao").css("display","none")
})