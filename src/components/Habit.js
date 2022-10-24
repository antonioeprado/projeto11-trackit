import React from "react";
import styled from "styled-components";
import axios from "axios";

import { textColor } from "../static/styles/Colors";
import { FlexWrapperColumn, FlexWrapperRow } from "../static/styles/Wrappers";
import { URLS } from "../URLS";
import SquaredDays from "./SquaredDays";

function Habit(props) {
	const { id, name, days } = props.habits;
	const letters = ["D", "S", "T", "Q", "Q", "S", "S"];

	function handleClick() {
		const response = window.confirm("Deletar hábito?");
		if (response) {
			axios
				.delete(`${URLS.habit}/${id}`, {
					headers: {
						Authorization: `Bearer ${props.token}`,
					},
				})
				.then(() => {
					alert("Hábito deletado com sucesso!");
					props.setReload(!props.reload);
				})
				.catch((err) => console.log(err));
		}
	}

	return (
		<WrapperColumn>
			<WrapperRow>
				<p>{name}</p>
				<ion-icon
					style={{
						fontSize: "15px",
						color: textColor,
						marginRight: "10px",
						cursor: "pointer",
					}}
					name='trash-outline'
					onClick={handleClick}
				></ion-icon>
			</WrapperRow>
			<SquaresWrapper>
				{letters.map((day, index) => (
					<SquaredDays
						key={index}
						day={day}
						ind={index}
						mark={days.includes(index) ? true : false}
						cursor={"not-allowed"}
					/>
				))}
			</SquaresWrapper>
		</WrapperColumn>
	);
}

const WrapperColumn = styled(FlexWrapperColumn)`
	width: 340px;
	height: 91px;
	background-color: #fff;
`;

const WrapperRow = styled(FlexWrapperRow)`
	width: 100%;
	border-radius: 5px;
	justify-content: space-between;
	& > p {
		margin-left: 15px;
		font-size: 20px;
		line-height: 25px;
		color: ${textColor};
	}
`;

const SquaresWrapper = styled(WrapperRow)`
	margin-bottom: 15px;
	margin-left: 15px;
	justify-content: initial;
`;

export default Habit;
