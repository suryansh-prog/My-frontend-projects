

const apikey="5b7bd333e0fe52f38b95c6b942d35933";
var apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchbox=document.querySelector(".head1 input");
const searchbtn=document.querySelector(".head1 button");


async function checkweather(city) {
    try {
        // Construct the API URL correctly
        const url = `${apiurl}${city}&appid=${apikey}`;
        
        // Fetch the weather data
        const response = await fetch(url);
        
        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const data = await response.json();
        
        // Log the data for debugging
        console.log(data);

        // Update the DOM with the weather information
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humi").innerHTML = data.main.humidity + "%";
        document.querySelector(".win").innerHTML = data.wind.speed + " Km/hr";
    } catch (error) {
        // Handle any errors
        console.error('Error fetching weather data:', error);
    }
}
30

checkweather();

searchbtn.addEventListener("click",function(){
    checkweather(searchbox.value);
})
console.log("hello");