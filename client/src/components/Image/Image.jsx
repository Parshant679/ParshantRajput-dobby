import React from "react";

function Image({ data }) {
  function navigateToFullImage() {
    window.open(data.imageUrl, "_blank");
  }
  return (
    <div className="card">
      <img src={data.imageUrl} alt="Placeholder Image" />
      <div
        className="data flex flex-wrap justify-between"
        onClick={navigateToFullImage}
      >
        <p className="m-1 text-gray-400 font-sans">Name:{data.title}</p>
      </div>
    </div>
  );
}

export default Image;
