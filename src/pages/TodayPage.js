import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import TodayHabit from "../components/TodayHabit";
import Topbar from "../components/Topbar";
import { backgroundColor, compColor } from "../static/styles/Colors";
import { FlexWrapperColumn } from "../static/styles/Wrappers";
import { URLS } from "../URLS";

function TodayPage(props) {
	const [habits, setHabits] = useState([]);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${props.info.token}`,
			},
		};

		axios(`${URLS.habit}/today`, config)
			.then((res) => {
				console.log(res.data);
				setHabits(res.data);
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
				<p>
					{weekDays[dayOfWeek]}, {date.getDate()}/{date.getMonth("MM")}
				</p>
				<p>Nenhum hábito concluído ainda</p>
				{habits.map((habit, index) => (
					<TodayHabit
						key={index}
						habit={habit}
						token={props.info.token}
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
