import React from "react";
import { Routes, Route} from 'react-router-dom';
import Main from './Components/Main/Main'
import Header from './Components/Header/Header'
import StoryPage from "./pages/StoryPage";

function App() {



	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<Main />} />
				<Route path="/story/:id" element={<StoryPage />} />
			</Routes>
		</>
	)
};

export default App;
