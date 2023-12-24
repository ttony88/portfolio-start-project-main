import styled from "styled-components";
import { thema } from "../../styles/Thema";

type SectionTitlePropsType = {
    fontSize: string
    textAlign?: string
    margin?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-size: ${props => props.fontSize};
    text-align: ${props => props.textAlign || "start"};
    margin: ${props => props.margin};
    color: ${thema.colors.titleFont || "0px"};
    font-style: normal;
    font-weight: 700;
`