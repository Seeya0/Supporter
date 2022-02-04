import React from 'react';
import { GoLocation } from 'react-icons/go';
const PlaceDetails = ({ place, selected, refProps }) => {
  if (selected)
    refProps?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div>
      <div>
        <div>
          <img
            height={'350'}
            src={
              place.photo
                ? place.photo.images.large.url
                : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
            }
            alt={place.name}
          />
        </div>

        <div>
          <h3>{place.name}</h3>
        </div>
        <div>
          <div></div>
          <h3>{place.num_reviews} レビュー</h3>
        </div>

        <div>
          <h3>値段</h3>
          <h3>{place.price_level}</h3>
        </div>
        <div>
          <h3>ランキング</h3>
          <h3>{place.ranking}</h3>
        </div>

        {place?.awards?.map((award) => (
          <div>
            <img src={award.images.small} alt={'Award'} />
            <h3>{award.display_name}</h3>
          </div>
        ))}
        {place.address && (
          <div>
            <GoLocation />
            {place.address}
          </div>
        )}
      </div>
      <div>
        <button onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </button>
        <button onClick={() => window.open(place.website, '_blank')}>
          Website
        </button>
      </div>
    </div>
  );
};

export default PlaceDetails;
