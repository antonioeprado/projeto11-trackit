import React from 'react';
import styled from 'styled-components';

import { SignButton } from '../static/styles/Buttons';
import { FlexWrapperColumn, StyledForm } from '../static/styles/Wrappers';
import { mainColor } from '../static/styles/Colors';
import { StyledInput } from '../static/styles/Input';
import logo from '../static/media/imgs/Group_8.png';

export default function HomePage() {
    return (
        <FlexWrapperColumn>
            <BigLogo img={logo} />
            <StyledForm>
                <StyledInput type="email" placeholder='email' required />
                <StyledInput type="password" placeholder='senha' required />
                <SignButton>Entrar</SignButton>
            </StyledForm>
            <SignUpLink>Não tem uma conta? Cadastre-se!</SignUpLink>
        </FlexWrapperColumn>
    )
}

const BigLogo = styled.div`
    width: 180px;
    height: 178px;
    background: ${props => `url(${props.img}) no-repeat center/180px 178px`};
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
