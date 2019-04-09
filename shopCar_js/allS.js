$(".check").click(function(){
			if(this.checked){
				$("input:checkbox").prop("checked",true);
				$("#pay").css("background","red");
				var i=$("#num1").val();
				var k=$("#num2").val();
				$("#price").html(`${(i*35.90+k*35.90).toFixed(2)}`)
			}
			else{
				$("input:checkbox").prop("checked",false);
				$("#pay").css("background","#c1c1c1");
				$("#price").html(`${parseInt(0.00)}`)
			}
		})
		$(".la").click(function(){
						if($(".la:checkbox").length===$(".la:checked").length){
							$(".check:checkbox").prop("checked",true);
							
						}
						else{
							$(".check:checkbox").prop("checked",false);
						}
					})
					
		$(".la").click(function(){
			if(this.checked){
				$("#pay").css("background","red");
			}
			else{
				$("#pay").css("background","#c1c1c1");
			}
		})