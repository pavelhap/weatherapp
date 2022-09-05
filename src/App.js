import './App.css';
import React, { useState } from 'react'
import axios from 'axios';


function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=930e81757bac1e0be45aeb6e2f904543&units=metric`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('');
    }
  }

  return (
    <div className='app'>

      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter location'
          type='text' />
      </div>
      <div className="container">
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            <h1>{data.main ? <p>{data.main.temp}</p> : null}</h1>
          </div>
          <div className='description'>
            <p>{data.weather[0].main}</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p className='bold'>{data.main.feels_like}</p>
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>{data.main.humidity}</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>{data.wind.speed}</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
