ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map ("map", {
            center: [43.241464, 76.904119],
            zoom: 15,
            controls: ['zoomControl']
        });
        myMap.behaviors.disable('scrollZoom');
				
				myGeoObject = new ymaps.GeoObject({
		      geometry: {
		        type: "Point",
		        coordinates: [43.237833, 76.911994] 
		      }
		    });
			myMap.geoObjects.add(myGeoObject);
    }
