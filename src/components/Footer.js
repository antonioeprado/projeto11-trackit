import React from "react";
import styled from "styled-components";
import { TodayButton } from "../static/styles/Buttons";
import { mainColor } from "../static/styles/Colors";

export default function Footer() {
	return (
		<StyledFooter>
			<FooterLinks>Hábitos</FooterLinks>
			<TodayButton>Hoje</TodayButton>
			<FooterLinks>Histórico</FooterLinks>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	position: absolute;
	left: 0;
	bottom: 0;
	width: 375px;
	height: 70px;
	background-color: #fff;
	& > a:first-child {
		margin: 22px 0 26px 36px;
	}
	& > a:last-child {
		margin: 22px 36px 26px 0;
	}
`;

const FooterLinks = styled.a`
	font-size: 18px;
	line-height: 22px;
	color: ${mainColor};
`;
