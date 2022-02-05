import { useEffect, useState } from 'react';
import { getPlaceData } from './api/travelAdvisorAPI';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [places, setPlaces] = useState([]);

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [autocomplete, setAutoComplete] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getPlaceData(type, bounds.sw, bounds.ne).then((data) => {
        console.log(data);
        setPlaces(data);
        setFilteredPlaces([]);
        setRating('');
        setIsLoading(false);
      });
    }
  }, [bounds, type]);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  return (
    <div className="App">
      <Header />
      <List
        isLoading={isLoading}
        type={type}
        setType={setType}
        rating={rating}
        setRating={setRating}
        places={places}
      />
      <div className="flex items-center justify-center">
        <Map
          coords={coords}
          setCoords={setCoords}
          setBounds={setBounds}
          setChildClicked={setChildClicked}
          places={places}
          weatherData={weatherData}
        />
      </div>
    </div>
  );
}

export default App;
