$(function(){
  var center = {lat: -34.558723, lng: -58.513701};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: center,
    disableDefaultUI: true,
    scrollwheel: false
  });

  var palermo = new google.maps.Marker({
    position: {lat: -34.571418, lng: -58.420175},
    map: map,
    title: 'Palermo'
  });

  var madero = new google.maps.Marker({
    position: {lat: -34.599240, lng: -58.365230},
    map: map,
    title: 'Puerto Madero'
  });

  var vicente = new google.maps.Marker({
    position: {lat: -34.515885, lng: -58.470127},
    map: map,
    title: 'Vicente Lopez'
  });

  var saavedra = new google.maps.Marker({
    position: {lat: -34.550916, lng: -58.479823},
    map: map,
    title: 'Parque Saavedra'
  });

  var sarmiento = new google.maps.Marker({
    position: {lat: -34.552858, lng: -58.498584},
    map: map,
    title: 'Parque Sarmiento'
  });

  palermo.addListener('click', function(){
    document.location.href = '#palermo';
  });

  madero.addListener('click', function(){
    document.location.href = '#madero';
  });

  vicente.addListener('click', function(){
    document.location.href = '#vicente';
  });

  saavedra.addListener('click', function(){
    document.location.href = '#saavedra';
  });

  sarmiento.addListener('click', function(){
    document.location.href = '#sarmiento';
  });
});
