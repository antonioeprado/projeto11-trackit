import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { CircularProgressbar } from "react-circular-progressbar";
import { mainColor } from "../static/styles/Colors";
import { HabitsContext } from "../contexts/HabitsContext";

export default function Footer() {
	return (
		<StyledFooter>
			<Link
				to={"/habitos"}
				style={{ textDecoration: "none" }}
			>
				<FooterLinks>Hábitos</FooterLinks>
			</Link>
			<Link to={"/hoje"}>
				<HabitsContext.Consumer>
					{(value) => (
						<CircularProgressbar
							value={value}
							text={"Hoje"}
							backgroundPadding={6}
							styles={{
								root: {
									width: "91px",
									height: "91px",
									marginBottom: "35px",
									fill: mainColor,
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
					)}
				</HabitsContext.Consumer>
			</Link>
			<Link
				to={"/historico"}
				style={{ textDecoration: "none" }}
			>
				<FooterLinks>Histórico</FooterLinks>
			</Link>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	left: 0px;
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

const FooterLinks = styled.p`
	font-size: 18px;
	line-height: 22px;
	color: ${mainColor};
`;
