import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [places, setPlaces] = useState([]);

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
    </div>
  );
}

export default App;
