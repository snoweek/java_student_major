$(function(){
	$("#span_name_error").text("此用户名未被注册");
		$("#old_password").blur(function(){		
				var old_password=$("#old_password").val();
				if(old_password.length<=0){
					$("#old_password_error").text("原来的密码不允许为空");
				}else{
					$("#old_password_error").text(" ");
					$.ajax({
			            type:"post",
			            dataType:"text",
			            url: "/Student_Major/admin/manager?act=text_password",    
			            data: {old_password:old_password}, 
			            success: function(data){ 
			            	if(data=="password correct"){
			            		$("#old_password_error").text("");            				            		
			            	}else if(data=="password wrong"){
			            		$("#old_password_error").text("原来的密码输入错误");
			            	}				            	
			            }	
				 	});							            																
				}				
		});
		
		$("#new_password").blur(function(){		
			var new_password=$("#new_password").val();
		
			if(new_password.length<6 || new_password.length>20){
				$("#new_password_error").text("密码长度应为6-20");
			}else{
				$("#new_password_error").text(" ");
									            																
			}				
	});
		$("#confirm_password").blur(function(){		
			var confirm_password=$("#confirm_password").val();
			var new_password=$("#new_password").val();
			if(confirm_password!=new_password){
				$("#confirm_password_error").text("两次密码输入不一致");
			}else{
				$("#confirm_password_error").text(" ");
			}
					
	});
		$("#changepassword").submit(function(e){	
			e.preventDefault();
			var old_password=$("#old_password").val();
			var confirm_password=$("#confirm_password").val();
			var new_password=$("#new_password").val();
			if(old_password.length==0 || confirm_password.length<=0 || new_password.length<=0){
				$("#change_password_error").text("请将信息填写完整");
			}else{
				if(confirm_password!=new_password){
					$("#confirm_password_error").text("两次密码输入不一致");
				}else{
					$("#confirm_password_error").text(" ");
					$.ajax({
			            type:"post",
			            dataType:"text",
			            url: "/Student_Major/admin/manager?act=changepassword",    
			            data: {new_password:new_password}, 
			            success: function(data){ 
			            	location.href="/Student_Major/index.jsp"		            	
			            }	
				 	});		
				}
							
				
			}
					
	});
		

		
				
  	});
  	
