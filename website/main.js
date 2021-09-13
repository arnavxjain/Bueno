let lat;
let lon;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
}

window.onload = () => {
    getLocation();
    let url = `https://www.google.com/maps/search/cafe+near+me/@${lat},${lon},15z/data=!3m1!4b1`;

    fetch(url, (e) => {
        console.log(e);
    })
}