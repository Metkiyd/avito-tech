import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser from "html-react-parser";
import "./comments.css";

import { getSubComment } from "../../redux/actions/CommentsActions";

const Comments = (comment) => {
  // const dispatch = useDispatch();
  // console.log('comment', comment, comment.id)
  const { by, text, time } = comment;

  // const stateSubComment = useSelector((state) => state.SubComment.subComments);

  // const [subComments, setSubComments] = useState([]);
  // const [isShowSubComments, setIsShowSubComments] = useState(false);

  // const showSubComments = async () => {
  //   await dispatch(getSubComment(kids, id));
  //   setIsShowSubComments((isShowSubComments) => !isShowSubComments);
  // };

  // useEffect(() => {
  //   // console.log("stateSubComment in use effect", stateSubComment);
  //   setSubComments(stateSubComment);
  // }, [stateSubComment]);

  // console.log(subComments.length)
  // console.log("stateSubComment glob", stateSubComment);
  return (
    <div className="comment">
      <div className="comment-title">
        <div className="author">
          <b>{by}</b>
        </div>
        <div className="time"> at {time}</div>
      </div>
      <div>
        <div className="text">{ReactHtmlParser(text)}</div>
      </div>
      {/* {kids?.length && <button onClick={showSubComments}>Show answers</button>} */}
      {/* <button onClick={showSubComments}>Show answers</button> */}
      {/* {isShowSubComments &&
        (subComments.length ? (
          subComments?.map((elem) => (
            <Comments
              key={elem[id].id}
              by={elem[id].by}
              time={elem[id].time}
              text={elem[id].text}
              kids={elem[id].kids}
            />
          ))
        ) : (
          <div>Loading</div>
        ))} */}
    </div>
  );
};
export default Comments;
