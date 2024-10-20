//import React from 'react'

import PropTypes from "prop-types";

const SongItem = ({ image, name, desc }) => {
  return (
    <div className="min-w-[100px] rounded p-3 cursor-pointer hover:bg-[#ffffff26]">
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
};
export default SongItem;
