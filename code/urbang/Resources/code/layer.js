
var layer = Ti.UI.createWindow({
	title:'Layer Window',
	backgroundColor:'blue',
});

var layerText = Ti.UI.createLabel({
	text:'Layers',
});

layer.add(layerText);

var layertab = Ti.UI.createTab({
	icon:'images/tool.png',
	title:'Layers',
	window:layer,
});