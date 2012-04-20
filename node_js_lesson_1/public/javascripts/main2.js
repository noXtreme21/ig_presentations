window.onload = function() {
	touch = document.getElementById('touch').style;
	
	document.addEventListener('touchstart', function(event) {
		x = (event.pageX - 75);
		y = (event.pageY - 75);
		
		touch.left = x + 'px';
		touch.top = y + 'px';
		touch.display = 'block';
		
		socket.emit('sendCoordinatesToServer', {x: x, y: y});
	});
	
	document.addEventListener('touchend', function(event) {
		touch.display = 'none';	
		
		socket.emit('sendCoordinatesToServer', {x: null, y: null});
	});
	
	document.addEventListener('touchmove', function(event) {
		event.preventDefault();
		x = (event.pageX - 75);
		y = (event.pageY - 75);
		
		touch.left = x + 'px';
		touch.top = y + 'px';	
		
		socket.emit('sendCoordinatesToServer', {x: x, y: y});
	});
	
	socket.on('sendCoordinatesToClient', function(data) {
		touch.left = data.x + 'px';
		touch.top = data.y + 'px';
		
		if (data.x !== null && data.y !== null) {
			touch.display = 'block';
		} else {
			touch.display = 'none';
		}
	});
}