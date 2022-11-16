import axios from "axios";
import { fetchItemById } from "../../api/api";

export const SET_COMMENTS = "SET_COMMENTS";
export const SET_SUB_COMMENTS = "GET_SUB_COMMENTS";

export const setComments = (comments) => ({type: SET_COMMENTS, comments});
export const setSubComments = (subComments) => ({type: SET_SUB_COMMENTS, subComments});

export const getComments = (id) => async (dispatch) => {
  const response = await fetchItemById(id);

  if (response.kids) {
    const comments = await parseComment(response.kids);
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

export const getSubComments = (id) => async (dispatch) => {
	const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
	console.log('DATa', response)
	const resultGetId = response.data

	const resultChildId = resultGetId.kids;
	console.log('data kids',resultChildId)

	if (resultChildId) {
		const loadSubComments = async (resultChildId) => {
			const result = await Promise.all(resultChildId.map(async (id) => {
				const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
				const resultChildComments = response.data
				return resultChildComments;
			}));
			return result;
		}

		const getResult = await loadSubComments(resultChildId)
		console.log(getResult, 'TEST')
		dispatch(setSubComments(getResult))
	} return null
}

