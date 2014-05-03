
$('.ProfileTweet-text').each(function (i) {
	var text = $(this).text();
	var words = text.split(" ");
	var me = $(this);
	$.each( words, function( index, word ){
		try {
			var test = $.base64.decode(word.replace(":", "").trim());
			me.text(me.text().replace(word, "@" + test + ":"));
		} catch (e) {
			//Do nothing
		}
	});
});