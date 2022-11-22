import { fetchItemById } from "../../api/api";

export const SET_COMMENTS = "SET_COMMENTS";
// export const SET_SUB_COMMENTS = "GET_SUB_COMMENTS";

export const setComments = (comments) => ({type: SET_COMMENTS, comments});
// export const setSubComments = (subComments) => ({type: SET_SUB_COMMENTS, subComments});

const parseComments = async (commentsIds) => {
  const result = await Promise.all(
    commentsIds.map(async (commentsId) => {
      const resultComments = await fetchItemById(commentsId);
      return resultComments;
    })
  );
  return result;
};

export const getComments = (id) => async (dispatch) => {
  const response = await fetchItemById(id);

  if (response.kids) {
    const comments = await parseComments(response.kids);
    dispatch(setComments(comments));
  }
};

// export const getSubComments = (id) => async (dispatch) => {
// 	const response = await fetchItemById(id);
//   if (!response.kids)
//   return;
//   {
// 		const subComments = await parseComments(response.kids);
//     // console.log('subComments', subComments)
//     dispatch(setSubComments(subComments));
// 	}
// }