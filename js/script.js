$(document).ready(function(){
	var names = ['Вася', 'Петя', 'Федя'];
	var i = 0;
	$('#name').text(names[1]);
	function textName(){
		$('#name').empty();
		i++;
		if (i==names.length) i=0;
		$('#name').text(names[i]);

	};
	setInterval(textName, 2000);
});
