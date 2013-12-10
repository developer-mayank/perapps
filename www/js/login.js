function trim(s){
	var l=0; var r=s.length -1;
	while(l < s.length && s[l] == ' ')
	{	l++; }
	while(r > l && s[r] == ' ')
	{	r-=1;	}
	return s.substring(l, r+1);
}

$(function(){
	/* Login Ajax */
	var isloggedout = localStorage.loggedout;
	if(isloggedout != 'no' && isloggedout != null){
		$('#login-error').text('Logged out Successfully.');
		localStorage.loggedout = "no";
	}

	$('#submit-login').click(function(){
									  
									  
		$("#ajax-loading").css('display', 'block');
		var username = $('#username').val();
		var password = $('#password').val();
		var retVar	 = false;
		if(username == '' || password == ''){
			$('#login-error').text('Please enter the username and password.');
			retVar = true;
		}
		if(retVar == false){
			$('#login-error').text('');
			$.ajax({
				type	: "GET",
				url		: "http://garysmithdev.com/migrate/wp-api.php",
				data	: {action:'app-login', user_login:username, pwd:password},
				success:function(data){
					//alert(data);
					if(trim(data) == 'status_problem'){
						$('#login-error').text('You do not have access to this content');
						$("#ajax-loading").css('display', 'none');
						return false;
					}else if(trim(data) == 'incorrect_password'){
						$('#login-error').text('The Password is incorrect');
						$("#ajax-loading").css('display', 'none');
						return false;
					}else if(trim(data) == 'incorrect_username'){
						$('#login-error').text('The Username is incorrect');
						$("#ajax-loading").css('display', 'none');
						return false;
					}
					$("#ajax-loading").css('display', 'none');
					var json = data;
					var obj = $.parseJSON(json);
					if(obj.user_login != null){
						//alert(obj.data.user_login);
						$('#login-error').text('Logged in successfully');
						//document.cookie = "username="+obj.data.user_login;
						localStorage.username = obj.user_login;
						localStorage.useremail = obj.user_email;
						setTimeout(function(){location.href='main.html';},500);
					}
				},
			});

			
		}else{
			$("#ajax-loading").css('display', 'none');
		}      
		return false;

	});
});