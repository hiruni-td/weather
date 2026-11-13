// alert("hi")
 fetch('https://api.weatherapi.com/v1/current.json?key=903766c55e6442748a992044261311&q=' + location)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById("lblDisplay").innerHTML = `
    
    
    
  });`
