//import React from 'react'
import { PlayerContext } from "../context/PlayerContext";
import { useContext } from "react";
import PropTypes from "prop-types";

const SongItem = ({ image, name, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[100px] rounded p-3 cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc.slice(0, 11)}</p>
    </div>
  );
};

SongItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default SongItem;
