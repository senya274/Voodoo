
function initMap()
{
    let element = document.getElementById('map');
    let options = {
        zoom: 15,
        center: {lat: 50.18693, lng: 30.31346 }
    };
    let myMap = new google.maps.Map(element, options);

    
   
   
    let marker = new google.maps.Marker({
        position: {lat: 50.18693, lng: 30.31346 },
        map: myMap,
        icon:'/img/marker.png'
    })
   
    let InfoWindow = new google.maps.InfoWindow({
        content:
        '<h5>Voodoo</h5> <p>137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8Ukraine</p>',
        
        maxWidth: 200,
        maxHeight: 164
        
    });
   
  
   
   marker.addListener('click', function(){
    InfoWindow.open(myMap, marker);
   })
   
}
   


