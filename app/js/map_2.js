// координаты маркеров
var markersData = [
   {
     lat: 40.813350,     // Широта
     lng: -74.050817,    // Долгота
     name: "894 Crooks Plaza", // Произвольное название, которое будем выводить в информационном окне
     url: 'img/pincompany@2x.png'
  }
]
// координаты центров городов
var centerMaps = [
  {
    latX: 40.813350,
    latY: -74.050817
  }
]
var map, latLng, url, name, mark, marker, thisCenter, popupContent;
function initMap() {
  popupContent = '<div class="content"><div class="content-left"><div class="content-title">Позвоните нам:</div><p>921-763-9186</p><p>188-379-7124</p><p>524-354-6133</p></div><div class="content-right"><div class="content-title">Приходите к нам:</div><p>Cristton</p><p>New Maryjane</p><p>894 Crooks Plaza</p></div></div>'
  thisCenterX = centerMaps[0].latX;
  thisCenterY = centerMaps[0].latY;
  var centerLatLng = new google.maps.LatLng(thisCenterX, thisCenterY);
  var mapOptions = {
    center: centerLatLng,
    zoom: 12,
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
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
              {
                "saturation": "-100"
              },
              {
                "color": "#9ea8b8"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              },
              {
                "color": "#9ea8b8"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.province",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "lightness": 65
              },
              {
                "visibility": "on"
              },
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "lightness": "50"
              },
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              {
                "saturation": "-100"
              },
              {
                "color": "#d5dae3"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
              {
                "lightness": "30"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
              {
                "lightness": "40"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "lightness": -25
              },
              {
                "saturation": -97
              },
              {
                "color": "#d5dae2"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
              {
                "lightness": -25
              },
              {
                "saturation": -100
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
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
    $(".gm-style-iw-t, .content-left, .content-right").addClass('active');
  };
  myoverlay.setMap(map);
  infowindow.open(map, marker);

  marker.addListener('click', function() {
    infowindow.open(map, marker);
    setTimeout(function(){
      $('.content').closest('.gm-style-iw-t').addClass('active');
      $('.content-left, .content-right').addClass('active');
    });
  });
  marker.button('click', function() {
    infowindow.open(map, marker);
    setTimeout(function(){
      $('.content').closest('.gm-style-iw-t').removeClass('active');
      $('.content-left, .content-right').removeClass('active');
    });
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
      scaledSize: new google.maps.Size(20, 20)
    }
  });
}
