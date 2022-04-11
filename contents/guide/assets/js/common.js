
// directiory map tree class append
$(document).ready(function(){
	var checked = $('ol li > input');
	checked.click(function(){
		$(this).parent('li').toggleClass('treechecked');
	});
});