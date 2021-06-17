import React from 'react';
import classes from './Conditions.module.css'
import moment from 'moment';

const conditions = (props) => {
   return (
       <div className={classes.Wrapper}>
           {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
           {props.loading && <div className={classes.Loader} />}
           {props.responseObj.cod === 200 ?
            // <card>
            //    <div>
            //        <p><strong>{props.responseObj.name}</strong></p>
            //        <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
            //        <p>Sunrise: {props.responseObj.sys.sunrise}</p>
            //        <p>Sunset: {props.responseObj.sys.sunset}</p>
            //        <p>Description: {props.responseObj.weather[0].description}</p>
            //        <p>Day: {moment().format('dddd')}</p>
            //         <p>Date: {moment().format('LL')}</p>
            //    </div>
            // </card>
            <div className='conditions'>
                <div className="main">
                    <p className="header">{props.responseObj.name}</p>
                    <div className="flex">
                        <p className="day">Day: {moment().format('dddd')}</p>
                        <p className="day">{moment().format('LL')}</p>
                    </div>

                    <div className="flex">
                        <p className="temp">Temprature: {props.responseObj.main.temp} &deg;C</p>
                        <p className="temp">Humidity: {props.responseObj.main.humidity} %</p>
                        
                    </div>
                    <div className="flex">
                        <p className="sunrise-sunset">Sunrise: {new Date(props.responseObj.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                        <p className="sunrise-sunset">Sunset: {new Date(props.responseObj.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                    </div>
                    <div className="flex1">
                        <p className="sunrise-sunset1">Description: {props.responseObj.weather[0].description}</p>
                        <img src ={`http://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`} 
                        alt="wthr img" />
                    </div>
    
                </div>
            </div>
           : null
           }
       </div>
   )
}
export default conditions;