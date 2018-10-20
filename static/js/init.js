var mymap;


function getRoute(){
        var start = document.getElementById("start").value;
        var end = document.getElementById("end").value;
        console.log(start, end);
       } 



function initMap() {
	console.log(txt);
        console.log(obj);
	var mymap = L.map('mapid').setView([51.6180165487737, 9.492187500000002], 5);

	printMarker();
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox.streets'
        }).addTo(mymap);

function printMarker(){
        for(i= 0; i < obj.length; i++){
                var marker = L.marker([obj[i].latitude, obj[i].longitude]).addTo(mymap);        
                console.log(obj[i].latitude, obj[i].longitude);
        }
}


function setMarker(e){
      var lat = e.latlng.lat;
      var lng = e.latlng.lng;
      var marker = L.marker([lat, lng]).on('click', () => {
          //displayAdd();
          //var msg = document.querySelector("#description").value;
	        //marker.bindPopup(msg).openPopup();
//	      console.log("Test");
      }).addTo(mymap);

      L.Routing.control({
        waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
      ],
       routeWhileDragging: true}).addTo(mymap);	
       marker.bindPopup(lat + " " + lng).openPopup();
  }

  mymap.on('click', setMarker);	
}

        
