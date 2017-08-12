import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <figure className="media-left">
          <img className="media-object" src={ imageUrl } />
        </figure>
        <div className="media-body">
          <div className="media-heading">{ video.snippet.title }</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
