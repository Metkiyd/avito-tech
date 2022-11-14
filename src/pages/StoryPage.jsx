import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "./storyPage.css";

import { getStory } from "../redux/actions/StoryActions";
import { getComments } from "../redux/actions/CommentsActions";
import Comments from "../Components/Comments/Comments";

const StoryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getStory(id));
    dispatch(getComments(id));
  }, []);

  const Story = useSelector((state) => state.Story.stories);
  const stateComments = useSelector((state) => state.Comments.comments);

  const updateComments = () => {
    dispatch(getStory(id));
    dispatch(getComments(id));
  };

  const { title, by, time, url, descendants } = Story;

  return (
    <div className="container">
      <div className="item-buttons">
        <button className="back" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="update-comments" onClick={updateComments}>
          Update Comments
        </button>
      </div>
      <div className="story-page">
        <div className="story-name">
          <h4>{title}</h4>
        </div>
        <div className="story-link">
          <p>
            {" "}
            Link: <a href={url}>{url}</a>
          </p>
        </div>
        <div className="story-desc">
          <div className="story-date">Published at {time}</div>
          <div className="story-author">
            by <b>{by}</b>
          </div>
          <div className="story-comments">{descendants} Comments</div>
        </div>
      </div>
      <div className="comments">
        {stateComments.map((elem) => (
          <Comments
            key={elem.id}
            by={elem.by}
            time={elem.time}
            text={elem.text}
          />
        ))}
      </div>
    </div>
  );
};
export default StoryPage;
