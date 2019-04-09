$(".la").click(function(){
			if(this.checked){
				var i=$("#num1").val();
				$("#price").html(`${(i*35.90).toFixed(2)}`)
				if($(".la:checkbox").length===$(".la:checked").length){
					var k=$("#num2").val();
					$("#price").html(`${(i*35.90+k*35.90).toFixed(2)}`)
				}
			}
			else{
				$("#price").html(`${parseInt(0.00)}`)
			}
			
			

		})
		
		
		
// $(".la").click(function(){
// 					if(this.checked){
// 						var i=$("#num2").val();
// 						
// 						$("#price").html(`${(i*56.00).toFixed(2)}`)
// 					}
// 					else{
// 						$("#price").html(`${parseInt(0.00)}`)
// 					}
// 				})