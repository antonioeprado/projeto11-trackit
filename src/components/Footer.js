import React from "react";
import styled from "styled-components";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { mainColor } from "../static/styles/Colors";

export default function Footer() {
	return (
		<StyledFooter>
			<FooterLinks>Hábitos</FooterLinks>
			<CircularProgressbar
				value={50}
				text={"Hoje"}
				backgroundPadding={6}
				styles={{
					root: {
						width: "91px",
						height: "91px",
						marginBottom: "35px",
						fill: "#3e98c7",
						borderRadius: "50% 50%",
						textAnchor: "middle",
					},
					path: {
						stroke: "#fff",
						strokeLinecap: "butt",
						// Customize transition animation
						transition: "stroke-dashoffset 0.5s ease 0s",
						// Rotate the path
						transform: "rotate(0.25turn)",
						transformOrigin: "center center",
					},
					trail: {
						stroke: "transparent",
					},
					text: {
						fill: "#fff",
						fontSize: "18px",
					},
				}}
				background
			/>
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
