import React, { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";
import "./comments.css";
import dateConverter from "../../helpers/dateConverter";
import { fetchItemById } from "../../api/api";

const Comments = ({elem}) => {
  const { by, text, time } = elem;
  const [answers, setAnswers] = useState(false);
  const [nestedComments, setNestedComments] = useState([])

  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    let newNestedComments = [];
    if (!elem.kids)
      return;
    for (let commentId of elem.kids) {
      const nestedComment = await fetchItemById(commentId);
        if (nestedComment !== null) newNestedComments = [...newNestedComments, nestedComment];
    }
    setNestedComments(newNestedComments);
  }

  const showSubComments =  () => {
    setAnswers(!answers)
  };

  const showChild = () => {
    return nestedComments.map((kidId) => (
      <Comments
          key={kidId}
          elem={kidId}
      />
    ));
  }

  return (
    <div className="comment">
      <div className="comment-title">
        <div className="author">
          <b>{by}</b>
        </div>
        <div className="time"> at {dateConverter(time)}</div>
      </div>
      {elem.deleted ?
        <div>Deleted</div> :
        <div>
          <div className="text">{ReactHtmlParser(text)}</div>
        </div>}
      {elem.kids?.length && 
      <button className="btn answers" onClick={showSubComments}>
        {answers ? <div>Hide answers</div> : <div>Show answers</div>}
        </button> }
      {answers && <div>{showChild()}</div> }
    </div>
  );
};
export default Comments;
