const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8634599c86msh41851f58e96aee5p187f05jsn2d0ba9de0a28',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const SearchBox = document.querySelector(".searchBar .a");
const SearchBtn = document.querySelector(".searchBar .b");
async function weather(city){
    try {
        if(SearchBox.value==""){
            city="delhi"
        }
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        if (!response.ok) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".README").style.display = "none";

        } else {

            const result = await response.json();
            // console.log(result);
            document.querySelector(".city").innerHTML = city;
            document.querySelector(".temp").innerHTML = result.temp + "°C";
            document.querySelector(".humidity").innerHTML = result.humidity + "%";
            document.querySelector(".wind").innerHTML = result.wind_speed * Math.round(18 / 5) + " KM/H";
            document.querySelector(".feels").innerHTML = result.feels_like + "°C";
            document.querySelector(".minT").innerHTML = result.min_temp + "°C";
            document.querySelector(".maxT").innerHTML = result.max_temp + "°C";
            document.querySelector(".cloudpct").innerHTML = result.cloud_pct;
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".README").style.display = "none";
            document.querySelector(".error").style.display = "none";

        }
    }
    catch(error){
        console.error(error);
    }

}
SearchBtn.addEventListener("click", function e() {
    // e.preventDefault();
    weather(SearchBox.value);
});
