import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import Habit from "../components/Habit";
import HabitForm from "../components/HabitForm";
import Topbar from "../components/Topbar";
import { AddHabitButton } from "../static/styles/Buttons";
import { backgroundColor, compColor, textColor } from "../static/styles/Colors";
import { FlexWrapperColumn, FlexWrapperRow } from "../static/styles/Wrappers";
import { URLS } from "../URLS";

export default function HabitsPage(props) {
	const [habits, setHabits] = useState([]);
	const [create, setCreate] = useState(false);
	const [reload, setReload] = useState(false);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${props.info.token}`,
			},
		};

		axios(URLS.habit, config)
			.then((res) => {
				setHabits(res.data);
			})
			.catch((err) => console.log(err));
	}, [reload]);

	return (
		<>
			<Topbar />
			<WrapperColumn>
				<WrapperRow>
					<p>Meus hábitos</p>
					<AddHabitButton onClick={() => setCreate(true)}>+</AddHabitButton>
				</WrapperRow>
				<HabitsWrapper>
					{create && (
						<HabitForm
							toggle={setCreate}
							habits={habits}
							updateHabits={setHabits}
							token={props.info.token}
						/>
					)}
					{habits ? (
						habits.map((habit, index) => (
							<Habit
								key={index}
								habits={habit}
								token={props.info.token}
								reload={reload}
								setReload={setReload}
							/>
						))
					) : (
						<p>
							Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
							para começar a trackear!
						</p>
					)}
				</HabitsWrapper>
			</WrapperColumn>
			<Footer />
		</>
	);
}

const WrapperColumn = styled(FlexWrapperColumn)`
	position: relative;
	left: 0;
	top: 0;
	height: 527px;
	background-color: ${backgroundColor};
	align-items: center;
	overflow-y: scroll;
	scroll-padding-bottom: 100px;
`;

const WrapperRow = styled(FlexWrapperRow)`
	justify-content: space-between;
	align-items: center;
	margin-top: 22px;
	margin-bottom: 0;
	& > p {
		margin-left: 18px;
		color: ${compColor};
		font-size: 23px;
		line-height: 29px;
		user-select: none;
	}
	& > button {
		font-size: 27px;
		line-height: 34px;
		margin-right: 18px;
	}
`;

const HabitsWrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin-top: 20px;
	& > * {
		margin-bottom: 10px;
	}
`;
