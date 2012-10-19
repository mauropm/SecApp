var map = Ti.UI.createWindow({
	title:'Map Window',
	backgroundColor:'yellow'
});

var mapview = Ti.Map.createView({
});

map.add(mapview);

var maptab = Ti.UI.createTab({
	icon:'images/compass.png',
	title:'Map',
	window:map,
});
