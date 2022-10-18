import styled from "styled-components";
import { mainColor } from "./Colors";

SignButton.defaultProps = {
    theme: {
        main: mainColor
    }
}

export const SignButton = styled.button`
    width: 303px;
    height: 45px;
    background-color: ${props => props.theme.main};
    border-radius: 4.6px;
    color: #fff;
`;

export const addHabitButton = styled(SignButton)`
    width: 40px;
    height: 35px;
`;