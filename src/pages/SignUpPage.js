import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { SignButton } from "../static/styles/Buttons";
import { FlexWrapperColumn, StyledForm } from "../static/styles/Wrappers";
import { mainColor } from "../static/styles/Colors";
import { StyledInput } from "../static/styles/Input";
import logo from "../static/media/imgs/Group_8.png";
import HomePage from "./HomePage";

export default function SignUpPage() {
	const [form, setForm] = useState({
		email: "",
		name: "",
		image: "",
		password: "",
	});

	useEffect(() => {
		console.log(form);
	}, [form]);

	const navigate = useNavigate();

	function handleForm(e) {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	}

	function signUp(e) {
		e.preventDefault();

		const url =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

		const promise = axios.post(url, form);
		promise.then((res) => {
			console.log(res.data);
			navigate("/");
		});
		promise.catch((err) => console.log(err.response.data));
	}

	return (
		<FlexWrapperColumn>
			<BigLogo img={logo} />
			<StyledForm onSubmit={signUp}>
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
				<StyledInput
					name='name'
					type='text'
					placeholder='nome'
					value={form.name}
					onChange={handleForm}
					required
				/>
				<StyledInput
					name='image'
					type='url'
					placeholder='foto'
					value={form.image}
					onChange={handleForm}
					required
				/>
				<SignButton type='submit'>Cadastrar</SignButton>
			</StyledForm>
			<SignUpLink>
				<Link to='/'>Já tem uma conta? Faça login!</Link>
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
