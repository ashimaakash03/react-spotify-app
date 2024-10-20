//import React from 'react'
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[100px] rounded p-3 cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc.slice(0, 19)}</p>
    </div>
  );
};

AlbumItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default AlbumItem;
