Ti.Geolocation.preferredProvider = "gps";
Ti.Geolocation.purpose = "Security App Demo";
if (Titanium.Geolocation.locationServicesEnabled === false)
{
	Ti.UI.createAlertDialog({
		title:'UrbanG', 
		message:'Your device has geo turned off - turn it on.'
	}).show();
}

var gps_report; 

var issue = Ti.UI.createWindow({
	title:'Create a new issue',
	backgroundColor:'white',
});

issue.addEventListener('open', function() {
	Titanium.Geolocation.getCurrentPosition(function(e) {
		if (!e.success || e.error) {
			currentLocation.text = 'error: ' + JSON.stringify(e.error);
			Ti.API.info("Code translation: " + translateErrorCode(e.code));
			alert('error ' + JSON.stringify(e.error));
			return;
		}
		gps_report = e.coords; 
		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;
		Ti.API.info('speed ' + speed);
		Titanium.API.info('geo - current location: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
	});
});

var newLabel = Ti.UI.createLabel({
	text:'New issue',
	top:0,
	font:{fontSize:35},
	width:'auto',
	height:'auto', 
	textAlign:'center',
})

var separatorImage = Ti.UI.createImageView({
	top:40,
	left:0,
	image:'/images/bar.png',
	width:'100%',
});

var addLabel = Ti.UI.createLabel({
	text:'(optional) Add a picture... ',
	top:69,
	left:10,
	font:{fontSize:14},
	width:'auto',
	height:'auto',
	textAlign:'left',
});

var picButton = Ti.UI.createImageView({
	top:57, 
	right:10,
	height:44,
	width:44,
	image:'/images/pic.png',
});

picButton.addEventListener('click',function(){
	
});

var typeLabel = Ti.UI.createLabel({
	text:'Select a type of issue ... ',
	top:120,
	left:10,
	font:{fontSize:14},
	width:'auto',
	height:'auto',
	textAlign:'left',
});

var typeButton = Ti.UI.createImageView({
	top:108, 
	right:10,
	height:44,
	width:44,
	image:'/images/tag.png',
});

var note = Titanium.UI.createTextArea({
		editable: true,
		value:'Add a note ... ',
		height:100,
		width:300,
		top:160,
		font:{fontSize:14,fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:true
	});
	
var ok = Titanium.UI.createButton({
		title:'Add',
		height:40,
		width:88,
		top:270,
		right:10,
	});

var secondSeparator = Ti.UI.createImageView({
	top:315,
	left:0,
	image:'/images/bar.png',
	width:'100%',
});

var warningLabel = Ti.UI.createLabel({
	text:'Be careful when driving and using this app. You should do a full stop when using this app.',
	top:330,
	left:10,
	font:{fontSize:9},
	width:'auto',
	height:'auto',
	textAlign:'left',
});

issue.add(newLabel);
issue.add(separatorImage);
issue.add(addLabel);
issue.add(picButton);
issue.add(typeLabel);
issue.add(typeButton);
issue.add(note);
issue.add(ok);
issue.add(secondSeparator);
issue.add(warningLabel);


var issuetab = Ti.UI.createTab({
	icon:'images/upload.png',
	title:'New issue',
	window:issue,
});

