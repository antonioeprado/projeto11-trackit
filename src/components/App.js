import { useState, useEffect } from "react";
import { GlobalStyles } from "../static/styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import HabitsPage from "../pages/HabitsPage";
import { LoginContext } from "../contexts/LoginContext";
import TodayPage from "../pages/TodayPage";
import { HabitsContext } from "../contexts/HabitsContext";
import { URLS } from "../URLS";
import HistoryPage from "../pages/HistoryPage";

function App() {
	const [loginInfo, setLoginInfo] = useState(null);
	const [habits, setHabits] = useState([]);
	const [habitsDone, setHabitsDone] = useState(0);
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		setPercentage(habitsDone / habits.length);
	}, [habitsDone, habits]);

	useEffect(() => {
		if (loginInfo) {
			const config = {
				headers: {
					Authorization: `Bearer ${loginInfo.token}`,
				},
			};

			axios(`${URLS.habit}/today`, config)
				.then((res) => {
					const d = res.data.filter((habit) => habit.done);
					setHabits(res.data);
					setHabitsDone(d.length);
				})
				.catch((err) => console.log(err));
		}
	}, [loginInfo]);

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
						<HabitsContext.Provider value={percentage * 100}>
							<LoginContext.Provider value={loginInfo}>
								<HabitsPage info={loginInfo} />
							</LoginContext.Provider>
						</HabitsContext.Provider>
					}
				></Route>
				<Route
					path='/hoje'
					element={
						<HabitsContext.Provider value={percentage * 100}>
							<LoginContext.Provider value={loginInfo}>
								<TodayPage
									info={loginInfo}
									setPercentage={setPercentage}
								/>
							</LoginContext.Provider>
						</HabitsContext.Provider>
					}
				></Route>
				<Route
					path='/historico'
					element={
						<HabitsContext.Provider value={percentage * 100}>
							<LoginContext.Provider value={loginInfo}>
								<HistoryPage
									info={loginInfo}
									setPercentage={setPercentage}
								/>
							</LoginContext.Provider>
						</HabitsContext.Provider>
					}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
