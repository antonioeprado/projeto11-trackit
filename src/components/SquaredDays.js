import React, { useState } from "react";
import styled from "styled-components";

import { darkDaySquareColor, placeHolderColor } from "../static/styles/Colors";

function SquaredDays(props) {
	const [clicked, setClicked] = useState(false);

	const { form, setForm, day, ind, mark, cursor } = props;

	function handleClick() {
		if (cursor === "pointer") {
			if (clicked) {
				const arr = form.days.filter((day) => day !== ind);
				const newForm = { ...form, days: arr };
				setClicked(false);
				setForm(newForm);
			} else {
				const newForm = { ...form };
				newForm.days.push(ind);
				setClicked(true);
				setForm(newForm);
			}
		}
	}

	return (
		<SquareDay
			onClick={handleClick}
			clicked={clicked}
			mark={mark}
			cursor={cursor}
		>
			{day}
		</SquareDay>
	);
}

const SquareDay = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	background-color: ${(props) =>
		props.clicked || props.mark ? darkDaySquareColor : "#fff"};
	border: ${(props) =>
		props.clicked || props.mark ? "1px solid #CFCFCF" : "1px solid #d5d5d5"};
	border-radius: 5px;
	box-sizing: border-box;
	font-size: 20px;
	line-height: 25px;
	margin-right: 4px;
	color: ${(props) =>
		props.clicked || props.mark ? "#fff" : placeHolderColor};
	user-select: none;
	cursor: ${(props) => props.cursor};
`;

export default SquaredDays;
