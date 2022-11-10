import React, { useEffect } from 'react';
import './main.css';

import { getNews } from '../../redux/actions/NewsActions';
import { useDispatch, useSelector } from "react-redux";
import Story from '../Story/Story';

const Main = () => {
  const dispatch = useDispatch()
  const News = useSelector(state => state.News)
  console.log(News)
  const Stories = useSelector(state => state.Story)
  console.log(Stories)

  const update = () => dispatch(getNews());

  useEffect( () =>{
    update();
    // setInterval(() => update(), 60000);
  }, [])


  return (
    <div className='container'>
      {News.news}
      <Story />
    </div>
  )
};
 
export default Main;
