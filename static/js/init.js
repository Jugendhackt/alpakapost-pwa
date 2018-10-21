var mymap;
var connections = [{"hs1_name":"c-base","hs1_latitude":52.512363,"hs1_longitude":13.419752,"hs2_name":"shackspace - stuttgart hackerspace","hs2_latitude":48.777,"hs2_longitude":9.236,"connection_id":1,"user_id":1,"max_x":999.99,"max_y":999.99,"max_z":999.99,"user_name":"jens1o"},{"hs1_name":"shackspace - stuttgart hackerspace","hs1_latitude":48.777,"hs1_longitude":9.236,"hs2_name":"verschwoerhaus","hs2_latitude":48.3964563,"hs2_longitude":9.9904232,"connection_id":1,"user_id":1,"max_x":999.99,"max_y":999.99,"max_z":999.99,"user_name":"jens1o"}];
var goods = [{"good_id":6,"user_id":1,"weight":10,"dimension_x":999.99,"dimension_y":999.99,"dimension_z":999.99,"start_location_id":95,"destination_location_id":103,"hs1_name":"c-base","hs1_logo_url":"http://www.c-base.org/C-logo_claim_blue.png","hs1_latitude":52.512363,"hs1_longitude":13.419752,"hs2_name":"verschwoerhaus","hs2_logo_url":"https://verschwoerhaus.de/wp-content/uploads/2016/10/cropped-favicon-1-192x192.png","hs2_latitude":48.3964563,"hs2_longitude":9.9904232,"user_name":"jens1o"}];



function initMap() {
	console.log(txt);
        console.log(obj);
	mymap = L.map('mapid').setView([51.6180165487737, 9.492187500000002], 6);
	drawLine(connections, 'red');
	drawLine(goods, 'blue');
	printMarker();
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox.streets'
        }).addTo(mymap);

	mymap.on('click', setMarker);	
	function printMarker(){
		for(i= 0; i < obj.length; i++){
			if (obj[i].logo_url == undefined){
				
				console.log(obj[i]);
			}
			console.log(obj[i].logo_url);
			var hackspaceIcon = L.icon({
        	                iconUrl: obj[i].logo_url,
                                iconSize:     [40, 40], // size of the icon
                                iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
                                popupAnchor:  [0, -18] // point from which the popup should open relative to the iconAnchor
                       	});
                	var marker = L.marker([obj[i].latitude, obj[i].longitude], {icon: hackspaceIcon}).addTo(mymap);        

        	}
	}
}
function drawLine(paths, color){
        for(i = 0; i < paths.length; i++){
                var pointA = new L.LatLng(paths[i].hs1_latitude, paths[i].hs1_longitude);
                var pointB = new L.LatLng(paths[i].hs2_latitude, paths[i].hs2_longitude);
                var pointList = [pointA, pointB];
                var firstpolyline = new L.Polyline(pointList, {
                        color: color,
                        weight: 10,
                        opacity: 0.5,
                        smoothFactor: 1
                });
                firstpolyline.addTo(mymap);
        }
}


function getRoute(){
        var start = document.getElementById("start").value;
        var end = document.getElementById("end").value;
        console.log(start, end);
        var start_lat, start_lng, end_lat, end_lng;
        for(i = 0; i < obj.length; i++){
                if(obj[i].name == start){
                        start_lat = obj[i].latitude;
                        start_lng = obj[i].longitude;
                        console.log("Start gefunden!!");
                }
                if(obj[i].name == end){
                        end_lat = obj[i].latitude;
                        end_lng = obj[i].longitude;
                        console.log("end gefunden!");
                }
        }
        if(start_lat != undefined && start_lng != undefined && end_lat != undefined && end_lng != undefined){
                 console.log(start_lat, start_lng, end_lat, end_lng);
                 searched_line = [{
                 "name":"Test", "hs1_latitude":start_lat, "hs1_longitude":start_lng, "hs2_latitude": end_lat, "hs2_longitude": end_lng
                }];
		drawLine(searched_line, 'black');
        }else{
                return;
        }
}
