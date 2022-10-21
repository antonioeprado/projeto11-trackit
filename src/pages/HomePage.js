import React, { createContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { SignButton } from "../static/styles/Buttons";
import { FlexWrapperColumn, StyledForm } from "../static/styles/Wrappers";
import { mainColor } from "../static/styles/Colors";
import { StyledInput } from "../static/styles/Input";
import logo from "../static/media/imgs/Group_8.png";

export default function HomePage(props) {
	const [form, setForm] = useState({ email: "", password: "" });
	const [login, setLogin] = useState(false);

	const navigate = useNavigate();

	function handleForm(e) {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	}

	function signIn(e) {
		setLogin(true);
		e.preventDefault();

		const url =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
		axios
			.post(url, form)
			.then((res) => {
				console.log(res);
				props.setLogin(res.data);
				navigate("/habitos");
			})
			.catch((err) => {
				alert(err.response.data);
				setLogin(false);
			});
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
					disabled={login}
					required
				/>
				<StyledInput
					name='password'
					type='password'
					placeholder='senha'
					value={form.password}
					onChange={handleForm}
					disabled={login}
					required
				/>
				{login ? (
					<ThreeDots
						ariaLabel='three-dots-loading'
						color='#fff'
						wrapperStyle={{
							display: "flex",
							width: "303px",
							height: "45px",
							borderRadius: "4.6px",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#88ccfc",
							cursor: "not-allowed",
						}}
						visible={true}
					/>
				) : (
					<SignButton type='submit'>Entrar</SignButton>
				)}
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
