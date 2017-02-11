 ;(function($){
 	"use strict";
 	$(window).load(function(){
  		var map;
  		var mapContainer = $('#map')[0];
  		 var infoWindowText = $('.info-text').html();
  		var mapCenter = {lat: -34.397, lng: 150.644};
 		 map = new google.maps.Map(mapContainer, {
 		 	styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ebd5ec"},{"visibility":"on"}]}],
    	center: mapCenter,

    	     	zoom: 17
 		});

 var marker = new google.maps.Marker({
    position: mapCenter,
    map: map,
    title: 'Hello World!',
    icon: "../img/beetroot.svg"
    });

 var infowindow = new google.maps.InfoWindow({
    content: infoWindowText
  });
 infowindow.open(map, marker);
  });
 	  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
})(jQuery);