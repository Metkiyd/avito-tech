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