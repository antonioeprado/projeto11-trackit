import styled from "styled-components";
import { placeHolderColor } from "./Colors";

export const StyledInput = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    &::placeholder {
        color: ${placeHolderColor};
    }
`;