import styled from "styled-components";
import { mainColor } from "./Colors";

const UnsetButton = styled.button`
	all: unset;
`;

const Button = styled(UnsetButton)`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.main};
	color: #fff;
	cursor: pointer;
`;

Button.defaultProps = {
	theme: {
		main: mainColor,
	},
};

export const SignButton = styled(Button)`
	width: 303px;
	height: 45px;
	border-radius: 4.6px;
`;

export const AddHabitButton = styled(SignButton)`
	width: 40px;
	height: 35px;
`;

export const TodayButton = styled(Button)`
	width: 91px;
	height: 91px;
	margin-bottom: 35px;
	border-radius: 50% 50%;
`;
