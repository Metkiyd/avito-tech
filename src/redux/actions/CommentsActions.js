import axios from "axios"

//action type
export const GET_COMMENTS = "GET_COMMENTS"

//action
export const setComments = (comments) => (
  {
    type: GET_COMMENTS,
    payload: comments
  }
)