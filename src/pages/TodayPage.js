import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import TodayHabit from "../components/TodayHabit";
import Topbar from "../components/Topbar";
import { HabitsContext } from "../contexts/HabitsContext";
import { compColor, sucessColor } from "../static/styles/Colors";
import { FlexWrapperColumn } from "../static/styles/Wrappers";
import { URLS } from "../URLS";

function TodayPage(props) {
	const [habits, setHabits] = useState([]);
	const [habitsDone, setHabitsDone] = useState(0);

	useEffect(() => {
		props.setPercentage(habitsDone / habits.length);
	}, [habitsDone, habits]);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${props.info.token}`,
			},
		};

		axios(`${URLS.habit}/today`, config)
			.then((res) => {
				const d = res.data.filter((habit) => habit.done);
				setHabits(res.data);
				setHabitsDone(d.length);
			})
			.catch((err) => console.log(err));
	}, []);

	const weekDays = [
		"Domingo",
		"Segunda-feira",
		"Terça-feira",
		"Quarta-feira",
		"Quinta-feira",
		"Sexta-feira",
		"Sábado",
	];
	const date = new Date();
	const dayOfWeek = date.getDay();

	return (
		<>
			<Topbar />
			<WrapperColumn>
				<p data-identifier='today-infos'>
					{weekDays[dayOfWeek]}, {date.getDate()}/{date.getMonth("MM")}
				</p>
				<HabitsContext.Consumer>
					{(value) =>
						value !== 0 ? (
							<p
								style={{ color: sucessColor }}
								data-identifier='today-infos'
							>
								{value.toFixed(0)}% dos hábitos concluidos
							</p>
						) : (
							<p data-identifier='today-infos'>Nenhum hábito concluído ainda</p>
						)
					}
				</HabitsContext.Consumer>
				{habits.map((habit, index) => (
					<TodayHabit
						key={index}
						habit={habit}
						token={props.info.token}
						setHabitDone={setHabitsDone}
						habitDone={habitsDone}
					/>
				))}
			</WrapperColumn>
			<Footer />
		</>
	);
}

const WrapperColumn = styled(FlexWrapperColumn)`
	margin-top: 28px;
	& > p:first-child {
		font-size: 23px;
		line-height: 29px;
		color: ${compColor};
		margin-bottom: 0;
	}
	& > p {
		font-size: 18px;
		color: #bababa;
		margin-left: 17px;
		margin-bottom: 18px;
	}
`;

export default TodayPage;
