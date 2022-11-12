import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { getStory } from '../redux/actions/StoryActions';
import { getComments } from '../redux/actions/CommentsActions';
import { getSubComment } from '../redux/actions/SubCommentActions';
import Comments from '../Components/Comments/Comments';

const StoryPage = () => {

	const navigate = useNavigate();

	const dispatch = useDispatch()

	const { id } = useParams();

	useEffect( () => {
		dispatch(getStory(id))
		dispatch(getComments(id))
	}, [])

	const Comments = useSelector(state => state.Comments.comments);
	console.log(Comments)
	const SubComment = useSelector(state => state.SubComment.subComment);
	console.log(SubComment)

	const [childComments, setChildComments] = useState([]);
	const [ isShowChildrenComments, setIsShowChildrenComments ] = useState(false);
	
	const showChildComments = (id) => {
		dispatch(getSubComment(id))
		setChildComments(SubComment)
		setIsShowChildrenComments(current => !current)
	}

	const updateComments = () => {
		dispatch(getStory(id))
		dispatch(getComments(id))
	}

	const Story = useSelector(state => state.Story.stories)


	const { title, by, time, url, descendants } = Story;

	return (
		<div>
			<div className='item-buttons'>
				<button className="back btn" onClick={() => navigate(-1)}>Back</button>
				<button className="update btn" onClick={updateComments}>Update</button>
			</div>
			<div className="story"> 
				<div className="story-name">
					{title}
				</div>
				<div className="story-link">
				<a href={url}>{url}</a>
				</div>
				<div className="story-desc">
					<div className="story-date">
						{time}
					</div>
					<div className="story-author">
						{by}
					</div>
					<div className="story-comments">
						{descendants}
					</div>
				</div>
			</div>
			<div className="comments">
				{/* {Comments.map(elem => 
						<Comments 
							key={elem.id}
							by={elem.by}
							text={elem.text}
							time={elem.time}
							onClick={() => {showChildComments(elem.id)}}
							>
								{ (isShowChildrenComments && childComments.length) &&
									childComments.filter(item => item.parent === elem.id).map((item) =>
										<Comments 
											key={item.id}
											by={item.by}
											text={item.text}
											time={item.time}
											onClick={() => {showChildComments(item.id)}}
										/>
									)
								}
								{ !isShowChildrenComments &&
									<></>
								}
						</Comments>
					)
				} */}
			</div>
		</div>

	)
}
export default StoryPage;