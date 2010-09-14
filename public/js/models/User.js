window.addEvent('domready', function() {
	if ($('user-form')) {
		$('user-form').addEvent('submit', function(e) {
			var user = new User($('name').get('value'));
			if (!user.isValid()) {
				e.stop();
				alert('Name is invalid');
			}
		});
	}
});
