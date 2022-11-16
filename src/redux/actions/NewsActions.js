import { fetchNews, fetchItemById } from "../../api/api";

export const SET_NEWS = "SET_NEWS";
export const SET_STORY = "SET_STORY";

export const setNews = (news) => ({type: SET_NEWS, news});
export const setStory = (story) => ({type: SET_STORY, story});

export const getNews = () => {
  return async (dispatch) => {
    let response = await fetchNews();
    // console.log('last news arr ids', response)

    let news = await Promise.all(
      response.map(async (id) => {
        const resp = await fetchItemById(id);
        return resp;
      })
    );
    dispatch(setNews(news));
  };
};

export const getStory = (id) => async (dispatch) => {
  const response = await fetchItemById(id);
  // console.log('story or comment object', response)
  dispatch(setStory(response));
};