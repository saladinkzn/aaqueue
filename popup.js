$(document).ready(function() {
	var url = "http://aaplay.ru";
	
	var $queue = $('#queue');
	
	$.get(url, function(res) {
		var $res = $(res);
		var $bar = $res.find('#online').children('tbody').children('tr').filter(function() {
			var $this = $(this);
			return $this.children('.name').html() == 'Луций';
		}).children('.bar');
		if($bar.hasClass('overloaded')) {
			var queueString = $bar.children().html();
			var queueCount = queueString.match(/(\d+)/)[1];
			$queue.html('Очередь: ' + queueCount);
		} else {
			$queue.html('Нет очереди');
		}
	}, 'html');
});