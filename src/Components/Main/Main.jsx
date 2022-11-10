import React from 'react';
import './main.css';

import { setCount } from '../../redux/actions/NewsActions';
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch()
  // const count = useSelector(state => state.News.count)

  // function onCountClick() {
  //   dispatch(setCount(5))
  // }
  return (
    <div className='container'>
      Main
      {/* <button onClick={()=>onCountClick()}>COUNT</button>
      <div>{count}</div> */}
    </div>
  )
};
 
export default Main;
