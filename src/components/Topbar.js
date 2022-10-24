import React from "react";
import styled from "styled-components";

import { FlexWrapperRow } from "../static/styles/Wrappers";
import { compColor } from "../static/styles/Colors";
import { LoginContext } from "../contexts/LoginContext";

export default function Topbar() {
	return (
		<FlexWrapper>
			<p>TrackIt</p>
			<LoginContext.Consumer>
				{(value) => (
					<UserPic
						src={value.image}
						data-identifier='avatar'
					/>
				)}
			</LoginContext.Consumer>
		</FlexWrapper>
	);
}

const FlexWrapper = styled(FlexWrapperRow)`
	background-color: ${compColor};
	height: 70px;
	align-items: center;
	justify-content: space-between;
	& > p {
		font-family: "Playball", cursive !important;
		color: #fff;
		font-size: 39px;
		line-height: 49px;
		margin-left: 18px;
		user-select: none;
	}
`;

const UserPic = styled.img`
	width: 51px;
	height: 51px;
	background: #fff;
	border-radius: 98.5px;
	margin-right: 18px;
`;
