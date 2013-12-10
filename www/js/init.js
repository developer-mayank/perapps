$(document).ready(function(){
	$(".submit-logout").click(function(){
		localStorage.username = "loggedout";
		localStorage.loggedout = "yes";
		location.href='login.html';
	});
	
	$('.custom_home_icon, .backButton, .submit-logout').click(function(){
		$("#bravr_01")[0].pause();
		$("#workout_01")[0].pause();
		$("#workout_02")[0].pause();
		$("#workout_03")[0].pause();
		$("#workout_04")[0].pause();
		$("#workout_05")[0].pause();
		$("#workout_06")[0].pause();
		$("#workout_07")[0].pause();
		$("#workout_08")[0].pause();
		$("#workout_09")[0].pause();
		$("#workout_10")[0].pause();
		$("#meditations_01")[0].pause();
		$("#meditations_02")[0].pause();
		$("#visualizations_01")[0].pause();
		$("#visualizations_02")[0].pause();
		$("#visualizations_03")[0].pause();
		$("#visualizations_04")[0].pause();
		$("#visualizations_05")[0].pause();
		$("#visualizations_06")[0].pause();
		$("#visualizations_07")[0].pause();
	});

});

var isloggedin = localStorage.username;
if(isloggedin != 'loggedout' && isloggedin != null){
}else{
	location.href='login.html';
}