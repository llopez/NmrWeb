$(document).ready(function(){

		//set up markers
		var myMarkers = {"markers": [
				{"latitude": "-34.570067", "longitude":"-58.416178", "icon": "assets/map-marker.png", "baloon_text": '<strong>Palermo</strong>'},
				{"latitude": "-34.515921", "longitude":"-58.469894", "icon": "assets/map-marker.png", "baloon_text": '<strong>Vicente Lopez</strong>'},
				{"latitude": "-34.605976", "longitude":"-58.364450", "icon": "assets/map-marker.png", "baloon_text": '<strong>Puerto Madero</strong>'}
			]
		};

		//set up map options
		$("#map").mapmarker({
			zoom	: 11,
			center	: 'Palermo, Buenos Aires, Argentina',
			markers	: myMarkers
		});

	});
