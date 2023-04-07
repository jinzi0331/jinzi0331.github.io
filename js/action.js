let  reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
$('#form').submit((event) => {
	event.preventDefault();
	let age = 	$('#age').val()
	let name = $("#name").val()
	let email = $("#email").val()
	if(name.length<=0||email.length<=0||age.length<=0){
		 alert('You have not completed filling.')
		 return false
	} else if (!reg.test(email))  {
		alert('The email address must include (@ and.)')
		return false
	}
	alert('Congratulations! Submitted Successfully!!')

})
$('#color1').click(()=>{
	$('header').css("background-color","PaleGoldenrod");
	$('main > article  > section').css("background-color","OldLace");
	$('main > article  > section  article, main > article  > section  iframe + article').css("background-color","Gold");
})
$('#color2').click(()=>{
	$('header').css("background-color","antiquewhite");
		$('main > article  > section').css("background-color","beige");
		$('main > article  > section  article, main > article  > section  iframe + article').css("background-color","cadetblue");
})
$('#color3').click(()=>{
	$('header').css("background-color","darkkhaki");
		$('main > article  > section').css("background-color","MistyRose");
		$('main > article  > section  article, main > article  > section  iframe + articler').css("background-color","blanchedalmond");
})

$('#color4').click(()=>{
	$('header').css("background-color","yellowgreen");
	    $('html').css("background-color","Silver");
		$('#imgs').css("background-color","Lawngreen");
})
$('#color5').click(()=>{
	$('header').css("background-color","tan");
		$('html').css("background-color","Olive");
		$('#imgs').css("background-color","PeachPuff");
})
$('#color6').click(()=>{
	$('header').css("background-color","NavajoWhite");
		$('html').css("background-color","	LightSteelBlue");
		$('#imgs').css("background-color","	Lavender");
})

$('#color7').click(()=>{
	$('header').css("background-color","Azure");
	$('#form ').css("background-color","darkgray");
	$('article > article section table').css("background-color","DarkSeaGreen");
})
$('#color8').click(()=>{
	$('header').css("background-color","LightGoldenrodYellow");
		$('#form ').css("background-color","DarkKhaki");
		$('article > article section table').css("background-color","Orange");
})
$('#color9').click(()=>{
	$('header').css("background-color","lemonchiffon");
		$('#form ').css("background-color","chocolate");
		$('article > article section table').css("background-color","thistle");
})