import { Autocomplete } from '@react-google-maps/api';
import React from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  const pushToAbout = () => {
    navigate('/about', { state: 1 });
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h3 className="text-xl font-extrabold  tracking-wider">Supporter</h3>
        <div className="text-lg">
          <button
            className="mt-2 ml-10 inline-block text-teal-200 hover:text-white mr-4"
            onClick={pushToAbout}
          >
            About
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <h3 className="text-lg text-white mr-6">新たな場所を発見しよう</h3>
        {/* <Autocomplete> */}
        <div className="flex items-center bg-gray-200 p-4 rounded-full">
          <div>
            <AiOutlineSearch />
          </div>
          <input
            className="bg-gray-200 ml-4 mr-8 p-1 outline-none"
            placeholder="検索"
          />
        </div>
        {/* </Autocomplete> */}
      </div>
      {/* 
      <div className="block lg:hidden mr-2">
        <button className="flex items-center px-3 py-2 border rounded-md text-teal-200 border-teal-200 hover:text-white hover:border-white">
          <AiOutlineMenu />
        </button>
      </div> */}
    </nav>
  );
};

export default Header;
