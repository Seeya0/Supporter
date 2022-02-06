import React from 'react';
import { useNavigate } from 'react-router';

const About = () => {
  const navigate = useNavigate();
  const pushToBack = () => {
    navigate('/', { state: 1 });
  };

  return (
    <div className="flex flex-col items-start px-24 h-screen bg-gray-50 mx-60 ">
      <div className="my-10">
        <h3 className="text-5xl font-semibold">About</h3>
      </div>

      <div className="flex  flex-col justify-center items-start text-left my-5">
        <h3 className="text-3xl font-semibold">Concept</h3>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in
          lacus vitae consequat, scelerisque. Quam odio cum egestas montes, non
          dui pellentesque potenti ac. Nec, phasellus et risus morbi pretium
          gravida vitae sit. Risus aenean eget nulla lectus.
        </p>
      </div>

      <div className="flex  flex-col justify-center items-start text-left my-5">
        <h3 className="text-3xl font-semibold">Reason</h3>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in
          lacus vitae consequat, scelerisque. Quam odio cum egestas montes, non
          dui pellentesque potenti ac. Nec, phasellus et risus morbi pretium
          gravida vitae sit. Risus aenean eget nulla lectus.
        </p>
      </div>

      <div className="flex  flex-col justify-center items-start text-left my-5">
        <h3 className="text-3xl font-semibold">About Creator</h3>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in
          lacus vitae consequat, scelerisque. Quam odio cum egestas montes, non
          dui pellentesque potenti ac. Nec, phasellus et risus morbi pretium
          gravida vitae sit. Risus aenean eget nulla lectus.
        </p>
      </div>

      <div className="mt-10" onClick={pushToBack}>
        <button className="bg-teal-500 text-white p-4 rounded-lg hover:opacity-80">
          Go back
        </button>
      </div>
    </div>
  );
};

export default About;
