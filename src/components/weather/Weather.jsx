import { useEffect, useState } from 'react';

import sunrise from '../../assets/sunrise.png';

function Weather({ city }) {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const apiKey = "86d0696ba78ba5b5937688fe578931b4";
    
      const fetchWeatherData = (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&q=${city}&appid=${apiKey}&units=metric`;
    
        fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log("Weather Data:", data);
            if (data.cod === "200") {
              setWeatherData(data);
            } else {
              setError("City not found");
            }
          })
          .catch(error => {
            console.log("Error fetching data:", error);
            setError("Error fetching data");
          });
      };
    
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeatherData(lat, lon);
          },
          (error) => {
            console.log("Geolocation error:", error);
            setError("Unable to access location");
            console.log("test");
            const fallbackLat = "";
        const fallbackLon = "";
        fetchWeatherData(fallbackLat, fallbackLon);
        <h1>Enter City Name...</h1>
        return(
        <h1>Enter City Name...</h1>
      )
          }
        );
      }
    }, [city]);
  

    return (
      <>
            
                <div className="weather-info p-4 text-center">
                  {weatherData ? (
                    <>
                      <p className="temperature text-5xl font-bold">{weatherData.list[0].main.temp} °C </p>
                      <p><img className='inline my-1' src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`} alt="" /></p>
                      <p className='text-3xl mb-3'>{weatherData.list[0].weather[0].description}</p>
                      <h2 className='text-2xl'>{weatherData.city.name}</h2>
                      <ul className='flex justify-center my-10'>
                          <li className='flex items-center md:mr-10'><img src={sunrise} alt="" /> Sunrise: {new Date(weatherData.city.sunrise * 1000).toLocaleTimeString()}</li>
                          <li className='flex items-center'><img src={sunrise} alt="" /> Sunset: {new Date(weatherData.city.sunset * 1000).toLocaleTimeString()}</li>  
                      </ul>
                      <div className="flex flex-wrap justify-between justify-center">
                            <div className="box bg-gray-800/75 py-10 p-5 w-64 rounded mb-10 mx-10">
                                <p>Feels Like</p>
                                <hr className='my-2'/>
                                <p className='font-bold'>{weatherData.list[0].main.feels_like} °C</p>
                            </div>
                            <div className="box bg-gray-800/75 py-10 p-5 w-64 rounded mb-10 mx-10">
                                <p>Humidity</p>
                                <hr className='my-2'/>
                                <p className='font-bold'>{weatherData.list[0].main.humidity} °C</p>
                            </div>
                            <div className="box bg-gray-800/75 py-10 p-5 w-64 rounded mb-10 mx-10">
                                <p>Wind Speed</p>
                                <hr className='my-2'/>
                                <p className='font-bold'>{weatherData.list[0].wind.speed} MPH</p>
                            </div>
                            <div className="box bg-gray-800/75 py-10 p-5 w-64 rounded mb-10 mx-10">
                                <p>Pressure</p>
                                <hr className='my-2'/>
                                <p className='font-bold'>{weatherData.list[0].main.pressure} pa</p>
                            </div>
                      </div>
  </>
                  ) : (
                    <p>Please Enter City Name...</p>
                  )}
                </div>
      </>
    );
}

export default Weather;