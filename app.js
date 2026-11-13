// alert("hi")

navigator.geolocation.getCurrentPosition((position) =>{
    console.log(position.coords.altitude);
    console.log(position.coords.longitude);
    loadWeatherInfo(position.coords.altitude + "," + position.coords.longitude)
    
    
    
});





function loadWeatherInfo(location){
fetch('' + location)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("lblDisplay").innerHTML = `
        <img src ="${data.current.condition.icon}" alt = "">
        <h1>${data.current.condition.text}</h1>
        <h1>${data.current.condition.localtime}</h1>
        
        `
    });
}

function searchWeather(){
    let txtCity = document.getElementById("txtCity").value;
    loadWeatherInfo(txtCity);
}




