import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

import Topbar from "../components/Topbar";
import { AddHabitButton } from "../static/styles/Buttons";
import { backgroundColor, compColor, textColor } from "../static/styles/Colors";
import { FlexWrapperColumn, FlexWrapperRow } from "../static/styles/Wrappers";

export default function HabitsPage() {
	return (
		<>
			<Topbar />
			<WrapperColumn>
				<WrapperRow>
					<p>Meus hábitos</p>
					<AddHabitButton>+</AddHabitButton>
				</WrapperRow>
				<p>
					Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
					começar a trackear!
				</p>
				<Footer />
			</WrapperColumn>
		</>
	);
}

const WrapperColumn = styled(FlexWrapperColumn)`
	position: relative;
	left: 0;
	top: 0;
	height: 597px;
	background-color: ${backgroundColor};
	align-items: center;
	& > p {
		width: 338px;
		height: 74px;
		font-size: 18px;
		line-height: 22px;
		color: ${textColor};
		margin-top: 28px;
	}
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
	& > div {
		font-size: 27px;
		line-height: 34px;
		margin-right: 18px;
	}
`;
