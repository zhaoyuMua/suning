$("#add").click(function(){
	var i=$("#num1").val();
	var num=parseInt(i)+1;
	$("#num1").val(num);
	
	$("#pri").html(`${(num*35.90).toFixed(2)}`)
});
$("#jian").click(function(){
	var i=$("#num1").val();
	var num=parseInt(i)-1;
	if(num!=0){
		$("#num1").val(num);
	}
	
	$("#pri").html(`${(num*35.90).toFixed(2)}`)
});


$("#add2").click(function(){
	var i=$("#num2").val();
	var num=parseInt(i)+1;
	$("#num2").val(num);
	
	$("#pri2").html(`${(num*35.90).toFixed(2)}`)
});
$("#jian2").click(function(){
	var i=$("#num2").val();
	var num=parseInt(i)-1;
	if(num!=0){
		$("#num2").val(num);
	}
	
	$("#pri2").html(`${(num*35.90).toFixed(2)}`)
});


$("#num1").blur(function(){
	var i=$("#num1").val();
	
	$("#pri").html(`${(i*35.90).toFixed(2)}`)
})
$("#num2").blur(function(){
	var i=$("#num2").val();
	
	$("#pri2").html(`${(i*56.00).toFixed(2)}`)
})


