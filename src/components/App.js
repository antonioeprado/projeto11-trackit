import { useState } from "react";
import { GlobalStyles } from "../static/styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import logo from "../static/media/imgs/logo.svg";
import HabitsPage from "../pages/HabitsPage";
import { LoginContext } from "../contexts/LoginContext";

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
							<HabitsPage />
						</LoginContext.Provider>
					}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
