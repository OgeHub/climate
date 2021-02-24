const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");



const app = express();

app.get("/", function(req,res) {
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Lafia&appid=d37f22ea96d9cccdc5a9caf7f1f4995d&units=metric"
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData);
        });
    });
    
});


app.listen(4000, function(){
    console.log("Server is running on port 4000");
});