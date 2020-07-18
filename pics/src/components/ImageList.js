import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  //you can also destructure(image) to ({description, id, urls})
  const images = props.images.map((image) => {
    // then have          description            id                 urs    here
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
