var win = Titanium.UI.currentWindow;
win.backgroundColor = '#fff';

var welcomeLabel = Ti.UI.createLabel({
	top:-200,
	textAlign:'center',
  color:'#900',
	text:'Welcome! You are at:'
});
win.add(welcomeLabel);

var positionLabel = Ti.UI.createLabel({
	top:0,
	text:'',
	textAlign:'center'
});
win.add(positionLabel);

var onFireButton = Ti.UI.createButton({
	top:300,
	width:60,
	height:30,
	title:'On Fire!'
});

win.add(onFireButton);

//
// GET CURRENT POSITION - THIS FIRES ONCE
//
//Titanium.Geolocation.getCurrentPosition(function(e)
//{
//	if (!e.success || e.error)
//	{
//		return;
//	}
//
//});

//
// EVENT LISTENER FOR GEO EVENTS - THIS WILL FIRE REPEATEDLY (BASED ON DISTANCE FILTER)
//
var locationCallback = function(e)
{
	if (!e.success || e.error)
	{
		return;
	}

	var longitude = e.coords.longitude;
	var latitude = e.coords.latitude;

	Titanium.Geolocation.reverseGeocoder(latitude,longitude,function(evt)
	{
		if (evt.success) {
			var places = evt.places;
			if (places && places.length) {
				positionLabel.text = places[0].address;
			} else {
				positionLabel.text = "No address found";
			}
		}
		else {
			Ti.UI.createAlertDialog({
				title:'Reverse geo error',
				message:evt.error
			}).show();
		}
	});
};
Titanium.Geolocation.addEventListener('location', locationCallback);

