import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { StyledForm, FlexWrapperRow } from "../static/styles/Wrappers";
import { StyledInput } from "../static/styles/Input";
import SquaredDays from "./SquaredDays";
import { SignButton } from "../static/styles/Buttons";
import { mainColor } from "../static/styles/Colors";
import { URLS } from "../URLS";
import { ThreeDots } from "react-loader-spinner";

const days = ["D", "S", "T", "Q", "Q", "S", "S"];

function Habits(props) {
	const [form, setForm] = useState({ name: "", days: [] });
	const [load, setLoad] = useState(false);

	function handleForm(e) {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	}

	function createHabit(e) {
		e.preventDefault();
		setLoad(true);

		axios(URLS.habit, {
			method: "post",
			headers: {
				Authorization: `Bearer ${props.token}`,
			},
			data: form,
		})
			.then((res) => {
				props.toggle(false);
				props.updateHabits([...props.habits, res.data]);
			})
			.catch((err) => alert(err));
	}

	return (
		<Form onSubmit={createHabit}>
			<StyledInput
				name='name'
				type='text'
				placeholder='nome do hábito'
				value={form.name}
				onChange={handleForm}
				// disabled={login}
				required
			/>
			<Wrapper>
				{days.map((day, index) => (
					<SquaredDays
						key={index}
						ind={index}
						day={day}
						form={form}
						setForm={setForm}
						cursor={"pointer"}
					/>
				))}
			</Wrapper>
			<WrapperButtons>
				<CancelButton onClick={() => props.toggle(false)}>
					Cancelar
				</CancelButton>
				{load ? (
					<ThreeDots
						ariaLabel='three-dots-loading'
						color='#fff'
						wrapperStyle={{
							display: "flex",
							width: "84px",
							height: "35px",
							borderRadius: "4.6px",
							justifyContent: "center",
							alignItems: "center",
							marginLeft: "23px",
							backgroundColor: "#88ccfc",
							cursor: "not-allowed",
						}}
						visible={true}
					/>
				) : (
					<SaveButton type='submit'>Salvar</SaveButton>
				)}
			</WrapperButtons>
		</Form>
	);
}

const Form = styled(StyledForm)`
	position: relative;
	top: 0;
	left: 0;
	width: 340px;
	height: 180px;
	background-color: #fff;
	border-radius: 5px;
	& > input {
		margin-top: 18px;
	}
`;

const Wrapper = styled(FlexWrapperRow)`
	width: 340px;
	margin-left: 19px;
`;

const WrapperButtons = styled(Wrapper)`
	width: fit-content;
	margin-top: 29px;
	position: absolute;
	right: 16px;
	bottom: 16px;
`;

const CancelButton = styled.p`
	display: flex;
	align-items: center;
	font-size: 16px;
	line-height: 20px;
	text-align: center;
	color: ${mainColor};
	background-color: #fff;
	cursor: pointer;
`;

const SaveButton = styled(SignButton)`
	width: 84px;
	height: 35px;
	margin-left: 23px;
`;

export default Habits;
