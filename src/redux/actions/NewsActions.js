import axios from "axios"

//action type
export const GET_NEWS = "GET_NEWS"

//action
export const setNews = (News) => (
  {
    type: GET_NEWS,
    payload: News

  }
)
// ?
export const getNews = () => {
  return async (dispatch) => {
    const response = axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
    dispatch(setNews(response.data))
  }
}