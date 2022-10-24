import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { SignButton } from "../static/styles/Buttons";
import { FlexWrapperColumn, StyledForm } from "../static/styles/Wrappers";
import { mainColor } from "../static/styles/Colors";
import { StyledInput } from "../static/styles/Input";
import logo from "../static/media/imgs/Group_8.png";
import HomePage from "./HomePage";
import { URLS } from "../URLS";

export default function SignUpPage() {
	const [sign, setSign] = useState(false);
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
		setSign(true);
		e.preventDefault();

		axios
			.post(URLS.signUp, form)
			.then((res) => {
				console.log(res.data);
				navigate("/");
			})
			.catch((err) => {
				alert(err.response.data);
				setSign(false);
			});
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
					disabled={sign}
					required
				/>
				<StyledInput
					name='password'
					type='password'
					placeholder='senha'
					value={form.password}
					onChange={handleForm}
					disabled={sign}
					required
				/>
				<StyledInput
					name='name'
					type='text'
					placeholder='nome'
					value={form.name}
					onChange={handleForm}
					disabled={sign}
					required
				/>
				<StyledInput
					name='image'
					type='url'
					placeholder='foto'
					value={form.image}
					onChange={handleForm}
					disabled={sign}
					required
				/>
				{sign ? (
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
			<SignUpLink href='/'>Já tem uma conta? Faça login!</SignUpLink>
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
