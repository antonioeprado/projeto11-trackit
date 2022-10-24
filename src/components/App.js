import { useState } from "react";
import { GlobalStyles } from "../static/styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import HabitsPage from "../pages/HabitsPage";
import { LoginContext } from "../contexts/LoginContext";
import TodayPage from "../pages/TodayPage";

function App() {
	const [loginInfo, setLoginInfo] = useState({});

	return (
		<Router>
			<GlobalStyles />
			<Routes>
				<Route
					path='/'
					element={<HomePage setLogin={setLoginInfo} />}
				></Route>
				<Route
					path='/cadastro'
					element={<SignUpPage />}
				></Route>
				<Route
					path='/habitos'
					element={
						<LoginContext.Provider value={loginInfo}>
							<HabitsPage info={loginInfo} />
						</LoginContext.Provider>
					}
				></Route>
				<Route
					path='/hoje'
					element={
						<LoginContext.Provider value={loginInfo}>
							<TodayPage info={loginInfo} />
						</LoginContext.Provider>
					}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
