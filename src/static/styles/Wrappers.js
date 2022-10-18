import styled from "styled-components";

export const FlexWrapperRow = styled.div`
	display: flex;
	flex-flow: row nowrap;
	width: 375px;
	height: auto;
	margin: auto;
`;

export const FlexWrapperColumn = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: 375px;
	height: auto;
	margin: auto;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-flow: column nowrap;
	& > * {
		margin: 3px auto;
	}
`;
