import axios from "axios"

//action type
export const SET_STORY = "SET_STORY"

//action
export const setStory = (stories) => (
  {
    type: SET_STORY,
    payload: stories
  }
)

// request


// export const getStories = async (id) => {
//     const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
//     const result = response.data
//     //console.log(result) //stories objects
//     return result;
// }

// export const getStory = (id) => async (dispatch) => {
//     const response = await getStories(id);
//     dispatch(setStory(response))
// }


// export const loadNewsById = (id) => async (dispatch) => {
//   const response = await getNewsItem(id);
//   const setCountry = await response;
//   dispatch(setItem(setCountry))
// }

// export const getNewsItem = async (id) => {
//   let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
//   let result = await response.json()
//   return result
// }