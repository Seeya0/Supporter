import React from 'react';
import { useEffect } from 'react';
import { createRef } from 'react';
import { useState } from 'react';
import Loader from './Loader';
import PlaceDetails from './PlaceDetails';

const List = ({
  isLoading,
  type,
  setType,
  rating,
  setRating,
  places,
  childClicked,
}) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className="text-lg flex flex-col justify-start items-center h-screen w-2/6 bg-gray-100">
      <h3 className="text-xl mt-4">周りの飲食店やアクティビティ</h3>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 mt-4">
          <div className="flex flex-col mx-4">
            <label className="font-semibold">タイプ</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border-none outline-none bg-gray-200 py-2 px-4 rounded-full cursor-pointer appearance-none text-center"
            >
              <option value="restaurants">レストラン</option>
              <option value="hotels">ホテル</option>
              <option value="attractions">アクティビティ</option>
            </select>
          </div>

          <div className="flex flex-col mx-4">
            <label className="font-semibold">レーティング</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border-none outline-none bg-gray-200 py-2 px-4 rounded-full cursor-pointer appearance-none text-center"
            >
              <option value="">全て</option>
              <option value="3">3.0以上</option>
              <option value="3.5">3.5以上</option>
              <option value="4">4.0以上</option>
              <option value="4.5">4.5以上</option>
            </select>
          </div>

          <div>
            {places.map((place, i) => (
              <div key={i} ref={elRefs[i]}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProps={elRefs[i]}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
