import './App.css';
import Forecast from './compnents/Forecast/Forecast';
import Helmet from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        {/* HTML Meta Tags */}
        <title>Weather App</title>
        <meta name="description" content="Weather app for checking the weather for all cities and countries" />
        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="Weather App" />
        <meta itemProp="description" content="Weather app for checking the weather for all cities and countries" />
        <meta itemProp="image" content="https://res.cloudinary.com/tosin/image/upload/v1625492760/detrix/screencapture-weatherapp80-netlify-app-2021-07-05-12_55_09.png" />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://weatherapp80.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Weather App" />
        <meta property="og:description" content="Weather app for checking the weather for all cities and countries" />
        <meta property="og:image" content="https://res.cloudinary.com/tosin/image/upload/v1625492760/detrix/screencapture-weatherapp80-netlify-app-2021-07-05-12_55_09.png" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Weather App" />
        <meta name="twitter:description" content="Weather app for checking the weather for all cities and countries" />
        <meta name="twitter:image" content="https://res.cloudinary.com/tosin/image/upload/v1625492760/detrix/screencapture-weatherapp80-netlify-app-2021-07-05-12_55_09.png" />
      </Helmet>
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>

      
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by <a className='link' href='#'>Faboade Oluwatosin</a>
      </footer>

    </div>
  );
}

export default App;
