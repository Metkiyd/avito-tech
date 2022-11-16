import axios from "axios";

export function fetchNews() {
  return axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json?orderBy=%22$key%22&limitToFirst=${100}`)
    .then(response => response.data)
}

export function fetchItemById(id) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then(response => response.data)
}

