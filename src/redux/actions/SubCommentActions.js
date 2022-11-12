import axios from "axios"

//action type
export const GET_SUB_COMMENT = "GET_SUB_COMMENT"

//action
export const setSubComment = (subComment) => (
	{
		type: GET_SUB_COMMENT,
		payload: subComment
	}
)

export const getSubComment = (id) => async (dispatch) => {
	const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
	const resultGetId = response.data
	const resultChildId = resultGetId.kids;

	if(resultChildId){
			const loadChildComments = async (resultChildId) => {
				const result = await Promise.all(resultChildId.map(async (id) => {
					const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
					const resultChildComments = response.data
					return resultChildComments;
				}));
			return result;
			}

	const getResult = await loadChildComments(resultChildId)
	dispatch(setSubComment(getResult))
	} 
	return null
	
}