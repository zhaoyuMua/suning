$("#case_GO li").mouseover(function(){
			$(this).animate({width:"655px"},500).siblings().animate({width:"53px"},500).siblings("li").css("background-image","url(../img/copy.png)")
			// css("background-image","../img/index.png").css("background-position","-443px -165px");
		})