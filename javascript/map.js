var map;
function initMap() {
    let sanJose = {lat: 37.3382, lng:-121.8863};
    let losAngeles = {lat:34.0522, lng:-118.2437};
    let celaya= {lat:20.5280, lng:-100.8113};
    map = new google.maps.Map(
        document.getElementById('map'), 
        {center: {lat: 36.7783, lng: -119.4179},zoom: 5}
    );
    let birthPlace = new google.maps.Marker({position: celaya,label:'B', map: map, title:"Birthplace"});
    let homeTown = new google.maps.Marker({position: sanJose,label:'H', map: map, title:"Home Town"});
    let collegeLoc = new google.maps.Marker({position:losAngeles,label:'C', map: map, title:"LMU Location"});
}