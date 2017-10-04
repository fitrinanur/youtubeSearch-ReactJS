import React, {component} from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = this.props.videos.map((video) => {
    return <VideoListItem video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems }
    </ul>
  );
};

export default VideoList;