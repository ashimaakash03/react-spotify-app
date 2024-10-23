//import React from 'react'

import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  console.log(albumData);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumData.image} height={200} width={200} alt="" />
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold">{albumData.name}</h1>
          <h4>{albumData.desc}</h4>
          <p className="mt-5">
            <img className="inline-block w-5" src={assets.spotify_logo} />
            &nbsp;
            <b className="gap-10">1.3 M Likes &nbsp; </b>
            <b>Length: 2 hrs 30 minutes &nbsp; </b>
            <b>35 songs</b>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="w-5" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline-block w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p>{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
