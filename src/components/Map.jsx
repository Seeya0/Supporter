import googleMapReact from 'google-map-react';
import React from 'react';
import ReactStars from 'react-stars';

const Map = ({
  coords,
  setCoords,
  setBounds,
  setChildClicked,
  places,
  weatherData,
}) => {
  return (
    <div>
      <googleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length &&
          places.map((place, i) => (
            <div
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              <div>
                <h3>{place.name}</h3>
                <img
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                  }
                  alt={place.name}
                />
                <ReactStars
                  count={5}
                  value={Number(place.rating)}
                  size={24}
                ></ReactStars>
              </div>
            </div>
          ))}
        {weatherData?.list?.length &&
          weatherData.list.map((data, i) => (
            <div key={i} lat={data.coords.lat} lng={data.coords.lon}>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                height="70px"
                alt="Weather icon"
              />
            </div>
          ))}
      </googleMapReact>
    </div>
  );
};

export default Map;
