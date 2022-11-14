import axios from "axios";

//action type
export const GET_SUB_COMMENT = "GET_SUB_COMMENT";

//action
export const setSubComment = (subComments) => ({
  type: GET_SUB_COMMENT,
  subComments
});

export const getSubComment = (id) => async (dispatch) => {
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
		dispatch(setSubComment(getResult))
	} return null
}

// export const getSubComment =
//   (subCommentsIds, rootCommentId = 0) =>
//   async (dispatch) => {
//     let subComment = {
//       id: 0,
//       author: "no author",
//       text: "something went wrong",
//       subComments: [],
//       deleted: false,
//     };

//     for (let i = 0; i < subCommentsIds.length; ++i) {
//       const response = await axios.get(
//         `https://hacker-news.firebaseio.com/v0/item/${subCommentsIds[i]}.json?print=pretty`
//       );
//       const commentData = response.data;
//       subComment = {
//         id: commentData.id,
//         by: commentData.by,
//         text: commentData.text,
//         kids: commentData.kids ? commentData.kids : [],
//         time: commentData.time,
//         // deleted: commentData.deleted || commentData.dead,
//       };
//     }

//     dispatch(setSubComment(subComment, rootCommentId));


//     return null;
//   };