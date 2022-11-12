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
    //need2change
    let news = await Promise.all(result.map(async (id) => {
      const resp = await getStories(id)
      return resp
    }))
    dispatch(setNews(news))
  }
}

export const getStories = async (id) => {
  const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  const result = response.data
  //console.log(result) //stories objects
  return result;
}