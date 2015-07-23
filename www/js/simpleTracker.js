function initialize() {
	FMEServer.init({
		server: "https://bluesky-safe-software.fmecloud.com",
		token : "b4494360920f37c4ced315182bd5a976c348a2e7"
	});

  
  var token = "b4494360920f37c4ced315182bd5a976c348a2e7";
  
  var msgcount = document.getElementById('msgcount');
  
	var myLatlng = new google.maps.LatLng(49.25,-123);

	var myOptions = {
		zoom: 11,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.LEFT_BOTTOM
		},

	}

	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  
  map.data.loadGeoJson('https://bluesky-safe-software.fmecloud.com/fmedatastreaming/safe-notification-tutorial/retrieveEventListing.fmw?token='+token, { idPropertyName: "msg_from" });
  
  map.data.setStyle(function(feature) {
    var title = '';
    feature.forEachProperty(function(val, name) {
      title += name + ': ' + val + '\n';
    });
    return {
      title: title,
      icon: "http://demos.fmeserver.com/fmepedia-simple-tracker/libs/bus.png"
    };
  });

	// Storage for Markers
	var markers = new Array();

	// Storage for WebSocket connections
	var ws;

	// Do we have web sockets?
	if ("WebSocket" in window) {

	
		// ============= AIS ====================
		ws = FMEServer.getWebSocketConnection("simpletracker");

		// receive
		ws.onmessage = function (evt) {

      
      msgcount.textContent = parseInt(msgcount.textContent) + 1;
      
			var data = evt.data;
			dataObj = JSON.parse(data);
      
      /* for testing *
      var fake = '{ "type" : "Feature", "properties" : { "msg_subject" : "Stuff", "msg_from" : "bar@example.com", "fns_sent" : "2014-10-31T11:41:10.000-07:00", "msg_url" : "http://safe.com", "msg_content" : "Detailed messages!", "msg_first_name" : "Optimus", "msg_last_name" : "Prime" }, "geometry" : { "type" : "Point", "coordinates" : [ '+(-123-Math.random())+', 49.137797 ] } }';
      console.log(fake);
      dataObj = JSON.parse(fake);
      */


      var points = map.data.addGeoJson(dataObj, { idPropertyName: "msg_from" });


			// alert(data);
		};

		// close
		ws.onclose = function() {
		};

	} else {
		alert("Your broswer does not support WebSockets. Try using the latest Firefox, Chrome or Safari browser.");

	};

}