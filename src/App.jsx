import React from "react";
import { Routes, Route} from 'react-router-dom';
import { Main } from './Components/Main/Main'
import { Header } from './Components/Header/Header'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<Main />} />
			</Routes>
		</>
	)
};

export default App;
