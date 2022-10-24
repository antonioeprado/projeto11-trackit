import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { sucessColor, textColor } from "../static/styles/Colors";
import { FlexWrapperColumn, FlexWrapperRow } from "../static/styles/Wrappers";
import { URLS } from "../URLS";

function TodayHabit(props) {
	const { id, name, done, currentSequence, highestSequence } = props.habit;

	const [marked, setMarked] = useState("checkbox-outline");
	const [color, setColor] = useState("#EBEBEB");
	const [current, setCurrent] = useState(currentSequence);
	const [sequenceColor, setSequenceColor] = useState(textColor);
	const [recordColor, setRecordColor] = useState(textColor);
	const [markDone, setMarkDone] = useState(done);

	useEffect(() => {
		if (done) {
			setMarked("checkbox");
			setColor(sucessColor);
			setSequenceColor(sucessColor);
		}
		if (currentSequence === highestSequence && currentSequence !== 0) {
			setSequenceColor(sucessColor);
			setRecordColor(sucessColor);
		}
	}, []);

	function markAsDone() {
		const config = {
			method: "post",
			headers: {
				Authorization: `Bearer ${props.token}`,
			},
		};
		if (!markDone) {
			setMarked("checkbox");
			setColor(sucessColor);
			setSequenceColor(sucessColor);
			setCurrent(current + 1);
			setMarkDone(true);
			props.setHabitDone(props.habitDone + 1);
			axios(`${URLS.habit}/${id}/check`, config)
				.then((res) => console.log("Hábito concluido com sucesso!"))
				.catch((err) => console.log(err));
		} else {
			setMarked("checkbox-outline");
			setColor("#EBEBEB");
			setMarkDone(false);
			setCurrent(current - 1);
			setSequenceColor(textColor);
			props.setHabitDone(props.habitDone - 1);
			axios(`${URLS.habit}/${id}/uncheck`, config)
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err));
		}
	}

	return (
		<WrapperRow>
			<WrapperColumn>
				<p>{name}</p>
				<p>
					Sequência atual:{" "}
					<span style={{ color: sequenceColor }}>{current} dias</span>
				</p>
				<p>
					Seu recorde:{" "}
					<span style={{ color: recordColor }}>{highestSequence} dias</span>
				</p>
			</WrapperColumn>
			<ion-icon
				onClick={markAsDone}
				style={{
					fontSize: "130px",
					marginRight: "13px",
					color: color,
				}}
				name={marked}
			></ion-icon>
		</WrapperRow>
	);
}

const WrapperRow = styled(FlexWrapperRow)`
	align-items: center;
	width: 340px;
	height: 94px;
	background-color: #fff;
	margin: 10px auto;
	border-radius: 5px;
`;

const WrapperColumn = styled(FlexWrapperColumn)`
	& > p:first-child {
		font-size: 20px;
		line-height: 25px;
		margin-bottom: 7px;
	}
	& > p {
		font-size: 13px;
		line-height: 16px;
		color: ${textColor};
		margin-left: 15px;
	}
`;

export default TodayHabit;
