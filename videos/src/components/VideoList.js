import React from "react";
import VideoItem from "./VideoItem";

//{videos} is destructured from props.videos and props.onVideoSelect
const VideoList = ({ videos, onVideoSelect }) => {
  //prop.videos
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list"> {renderedList} </div>;
};

export default VideoList;
