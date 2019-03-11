// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = {
        lat: 51.507351,
        lng: -0.127758
    };
    // The map, centered at Uluru
    const map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 10,
            center: uluru,
            disableDefaultUI: true
        });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
//add function to global scope
window.initMap = initMap;