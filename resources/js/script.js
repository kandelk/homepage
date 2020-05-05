function showMore(textId, btnId) {
	let list = $('#' + textId + ' >li');
	let visible = $('#' + textId + ' >li:visible');

	if (list.length == visible.length) {

		list.slice(4, list.length-1).hide();
		$('#' + btnId).html('Show more');
	} else {

		$('#' + btnId).html('Show less');
		$('#' + textId + ' li:hidden').show();
	}
}