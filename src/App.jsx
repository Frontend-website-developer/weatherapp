import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Weather from './components/weather/Weather.jsx';

function App() {
  const [city, setCity] = useState("");

  const handleSubmitCity = (submittedcity) => {
    setCity(submittedcity);
  }
  return (
    <>
      <div className='page-background flex items-center'>
        <div class="container mx-auto">
            <Header onSubmitCity={handleSubmitCity} />
            <Weather city={city} />
        </div>
      </div>
    </>
  );
}

export default App;
