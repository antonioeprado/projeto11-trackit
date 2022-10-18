import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { SignButton } from "../static/styles/Buttons";
import { FlexWrapperColumn, StyledForm } from "../static/styles/Wrappers";
import { mainColor } from "../static/styles/Colors";
import { StyledInput } from "../static/styles/Input";
import logo from "../static/media/imgs/Group_8.png";
import SignUpPage from "./SignUpPage";

export default function HomePage() {
	const [form, setForm] = useState({ email: "", password: "" });
	const navigate = useNavigate();

	function handleForm(e) {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	}

	function signIn(e) {
		e.preventDefault();

		const url =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
		axios
			.post(url, form)
			.then((res) => {
				console.log(res);
				navigate("/habitos");
			})
			.catch((err) => console.log(err.response.data));
	}

	return (
		<FlexWrapperColumn>
			<BigLogo img={logo} />
			<StyledForm onSubmit={signIn}>
				<StyledInput
					name='email'
					type='email'
					placeholder='email'
					value={form.email}
					onChange={handleForm}
					required
				/>
				<StyledInput
					name='password'
					type='password'
					placeholder='senha'
					value={form.password}
					onChange={handleForm}
					required
				/>
				<SignButton type='submit'>Entrar</SignButton>
			</StyledForm>
			<SignUpLink>
				<Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
			</SignUpLink>
		</FlexWrapperColumn>
	);
}

const BigLogo = styled.div`
	width: 180px;
	height: 178px;
	background: ${(props) => `url(${props.img}) no-repeat center/180px 178px`};
	margin: auto;
	margin-top: 68px;
	margin-bottom: 32px;
`;

const SignUpLink = styled.a`
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	color: ${mainColor};
	text-decoration-line: underline;
	margin: auto;
	margin-top: 25px;
`;
