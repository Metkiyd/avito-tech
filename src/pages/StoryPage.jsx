import React from 'react'
import { useParams } from 'react-router-dom';

const StoryPage = (props) => {
  const { title, by, time, url, descendants } = props;
  const { id } = useParams();
  return (
    <div>StoryPage
      <div className="story"> 
        <div className="story-name">
          {title}
        </div>
        <div className="story-link">
        <a href={url}>{url}</a>
        </div>
        <div className="story-desc">
          <div className="story-author">
            {by}
          </div>
          <div className="story-date">
            {time}
          </div>
          <div className="story-comments">
            {descendants}
          </div>
        </div>
      </div>
    </div>

  )
}
export default StoryPage;