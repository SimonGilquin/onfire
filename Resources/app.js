// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
	url:'windows/onfire.js',
	title:'On Fire'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'On Fire',
    window:win1
});


//
//  add tabs
//
tabGroup.addTab(tab1);

// open tab group
tabGroup.open();
