import React from 'react'
import ReactHtmlParser from "html-react-parser";

const Comments = (props) => {
	const { by, text, time, onClick, children } = props;

	return (
		<div>Comments
			<div>
					<b className="author">{by}</b>
					<p className="time">{time}</p>
			</div>
			<div>
					<p className='text'>{ReactHtmlParser(text)}</p>
			</div>
			<button onClick={onClick}>Show answers</button>
			<div>
					{children}
			</div>
		</div>
	)
};
export default Comments;
