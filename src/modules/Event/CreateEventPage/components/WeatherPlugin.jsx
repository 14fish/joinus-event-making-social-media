import React, { useEffect, useState } from 'react';
import "./style/weather.css";




export function WeatherPlugin(props) {

   /*  const { city } = props;
    ///All weather data is stored in state component;
    const [state, setState] = useState({});


    const load = async () => {

        let url = `http://api.openweathermap.org/data/2.5/find?q=${city ? city : "Baku"}&units=metric&appid=6591971af6776b907bf47320763fe393&units=metrics`;
        let response = await fetch(url);
        setState(await response.json());
        
    }
    

    useEffect(() => {
        load();
    }, [city])
    //https://openweathermap.org/weather-conditions 

    const html = "";
    if (state.weather) {


        switch (state.weather[0].main) {
            case "Clouds":
                html = (
                    <div>
                        <div className="cloudy"></div>
                        <h2>Cloudy</h2>
                    </div>
                )
                break;
            case "Clear":
                html = (
                    <div>
                        <div className="sunny"></div>
                        <h2>Sunny</h2>
                    </div>
                )
                break;
            case "Rain":
                //
                break;
            case "Thunderstorm":
                break;
            default:
                break;
        }
    }
 */



    return (
        <div>
          
          <div class="card is-weather-card mr-card" > 
                                <div class="card-body">
                                    <div class="temperature">
                                        <span>71</span>
                                    </div>
                                    <div class="weather-icon">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                            <h4>Sunny</h4>
                                            <div class="details">
                                                <span>Real Feel: 78° </span>
                                                <span>Rain Chance: 5%</span>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div class="current-date-location has-text-centered"> 
                                        <span class="date">Sunday, 18th 2018</span>
                                        <span class="location"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Los Angeles, CA</span>
                                    </div>
                                </div>
                            </div>


        </div>
    )
}
