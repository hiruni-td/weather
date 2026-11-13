// alert("hi")

function loadWeatherInfo(location){
fetch('https://api.weatherapi.com/v1/current.json?key=903766c55e6442748a992044261311&q=' + location)
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




