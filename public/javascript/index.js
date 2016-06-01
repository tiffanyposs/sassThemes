var map;

function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 9
});
codeAddress(userPostcode);
}

function codeAddress(address) {
  var address = address || '11105';
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + x;

  $.ajax({
  	url: url,
  	complete: function(data) {
  		var results = JSON.parse(data.responseText).results;
  		map.setCenter(results[0].geometry.location);
  	}
  }); 
}