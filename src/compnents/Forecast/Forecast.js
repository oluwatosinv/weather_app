import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');  
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);  
    let [responseObj, setResponseObj] = useState({});
    const uriEncodedCity = encodeURIComponent(city);


    function getForecast(e) {
        e.preventDefault();
        if (city.length === 0) {
            return setError(true);
        }

        // Clear state in preparation for new data
        setError(false);
        setResponseObj({});
        
        setLoading(true);

        let uriEncodedCity = encodeURIComponent(city);
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
            setResponseObj(response)
            if (response.cod !== 200) {
                throw new Error()
            }

            setResponseObj(response);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err.message);
        });
     }
    return ( 
        <div>
           <h2>Find Current Weather Conditions</h2>
           <form onSubmit={getForecast}>
               
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                
                <div>
                    <label>
                        <input
                            type="radio"
                            name="units"
                            checked={unit === "metric"}
                            value="metric"
                            onChange={(e) => setUnit(e.target.value)}
                            />
                        Celcius
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="units"
                            checked={unit === "imperial"}
                            value="imperial"
                            onChange={(e) => setUnit(e.target.value)}
                            />
                        Fahrenheit
                    </label>
                </div>
                <button type="submit">Get Forecast</button>
            </form>
           <Conditions
               responseObj={responseObj}
               error={error} //new
               loading={loading} //new
               />
       </div>

     );
}
 
export default Forecast;