import axios from "axios"

//action type
export const GET_NEWS = "GET_NEWS"

//action
export const setNews = (news) => (
  {
    type: GET_NEWS,
    payload: news
  }
)

// request
export const getNews = () => {
  return async (dispatch) => {
    const response = await axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json?orderBy=%22$key%22&limitToFirst=${3}`)
    const result = response.data
    //console.log(result) //arr ids
    // news переписать
    let news = await Promise.all(result.map(async (id) => {
      const resp = await getStories(id)
      return resp
    }))
    dispatch(setNews(news))
  }
}
//WORKING getStoryById
export const getStories = async (id) => {
  const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  const result = response.data
  //console.log(result) //stories objects
  return result;
}

// import axios from "axios"

// //action type
// export const SET_STORY = "SET_STORY"

// //action
// export const setStory = (stories) => (
//   {
//     type: SET_STORY,
//     payload: stories
//   }
// )

// // request

// // export const getStory = (id) => {
// //   return async (dispatch) => {
// //     const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
// //     dispatch(setStory(response.data))
// //   }
// // }