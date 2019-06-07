// координаты маркеров
var markersData = [
  {
    lat: 50.465830,     // Широта
    lng: 30.515698,    // Долгота
    name: "462 Smith Ranch Suite 242", // Произвольное название, которое будем выводить в информационном окне
    url: 'img/pin.png'
  }
]
// координаты центров городов
var centerMaps = [
  {
    latX: 50.465830,
    latY: 30.515698
  }
]
var map, latLng, url, name, mark, marker, thisCenter, popupContent;
function initMap() {
  popupContent = '<p class="content">ЖК Европейське місто</p>'
  thisCenterX = centerMaps[0].latX;
  thisCenterY = centerMaps[0].latY;
  var centerLatLng = new google.maps.LatLng(thisCenterX, thisCenterY);
  var mapOptions = {
    center: centerLatLng,
    zoom: 15,
    scrollwheel: false,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,
    styles:
        [
          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#7e715f"
              }
            ]
          },
          {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "off"
              },
              {
                "color": "#000000"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "lightness": 20
              },
              {
                "color": "#131723"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "lightness": 17
              },
              {
                "weight": 1.2
              },
              {
                "hue": "#ff0000"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#131723"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#131723"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "lightness": 17
              },
              {
                "color": "#212634"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#000000"
              },
              {
                "lightness": 29
              },
              {
                "weight": 0.2
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212634"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212634"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "lightness": 19
              },
              {
                "color": "#212634"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#1a2032"
              }
            ]
          }
        ]
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);


  // Определяем границы видимой области карты в соответствии с положением маркеров
  var bounds = new google.maps.LatLngBounds();

  for (let i = 0; i < markersData.length; i++){

    latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
    name = markersData[i].name;
    url = markersData[i].url;
    number = markersData[i].number;
    addMarker(latLng, name, url, number);
  }
  infowindow = new google.maps.InfoWindow({
    content: popupContent
  });

  // Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
  // map.fitBounds(bounds);
  var myoverlay = new google.maps.OverlayView();
  myoverlay.draw = function () {
    this.getPanes().markerLayer.id='markerLayer';
  };
  myoverlay.setMap(map);
  infowindow.open(map, marker);
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}
google.maps.event.addDomListener(window, "load", initMap);
function addMarker(latLng, name, url) {
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: name,
    icon: {
      url: url,
      scaledSize: new google.maps.Size(40, 40)
    }
  });
}
