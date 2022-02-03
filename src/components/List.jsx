import React from 'react';
import Loader from './Loader';
import PlaceDetails from './PlaceDetails';

const List = ({ isLoading, type, setType, rating, setRating, places }) => {
  return (
    <div>
      <h3 className="text-lg">周りの飲食店やアクティビティ</h3>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <label>タイプ</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="restaurants">レストラン</option>
              <option value="hotels">ホテル</option>
              <option value="attractions">アクティビティ</option>
            </select>
          </div>

          <div>
            <label>レーティング</label>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="">全て</option>
              <option value="3">3.0以上</option>
              <option value="3.5">3.5以上</option>
              <option value="4">4.0以上</option>
              <option value="4.5">4.5以上</option>
            </select>
          </div>

          <div>
            {places.map((place, i) => (
              <div key={i}>
                <PlaceDetails place={place} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
