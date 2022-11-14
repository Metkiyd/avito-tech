import axios from "axios";

//action type
export const GET_COMMENTS = "GET_COMMENTS";

//action
export const setComments = (comments) => ({
  type: GET_COMMENTS,
  comments,
});

export const getComments = (id) => async (dispatch) => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
  const result = response.data;

  if (result.kids) {
    const comments = await parseComment(result.kids);
    dispatch(setComments(comments));
  }
};

const parseComment = async (commentsIds) => {
  const result = await Promise.all(
    commentsIds.map(async (commentId) => {
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`
      );
      const resultComments = response.data;
      return resultComments;
    })
  );
  return result;
};
