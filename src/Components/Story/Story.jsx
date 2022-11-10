import React from 'react'
import './story.css'

const Story = (props) => {
  const { title, score, by, time, onClick } = props;

  return (
    <div className="story" onClick={onClick}> 
      <div className="story-name">
        {title}
      </div>
      <div className="story-desc">
        <div className="story-rate">
          {score}
        </div>
        <div className="story-author">
          {by}
        </div>
        <div className="story-date">
          {time}
        </div>
      </div>
    </div>
  );
};
export default Story;
