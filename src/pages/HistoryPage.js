import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import { compColor, textColor } from "../static/styles/Colors";
import { FlexWrapperColumn } from "../static/styles/Wrappers";

function HistoryPage() {
	return (
		<>
			<Topbar />
			<WrapperColumn>
				<p>Histórico</p>
				<p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
			</WrapperColumn>
			<Footer />
		</>
	);
}

const WrapperColumn = styled(FlexWrapperColumn)`
	margin-top: 28px;
	& > p:first-child {
		color: ${compColor};
		font-size: 23px;
		line-height: 29px;
		margin-bottom: 17px;
	}

	& > p {
		font-size: 18px;
		line-height: 23px;
		color: ${textColor};
		margin-left: 15px;
	}
`;

export default HistoryPage;
