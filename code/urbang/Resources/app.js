Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

Ti.include('/code/map.js');
Ti.include('/code/layer.js');
Ti.include('/code/issue.js');

tabGroup.addTab(maptab);  
tabGroup.addTab(layertab);
tabGroup.addTab(issuetab);

tabGroup.open();
