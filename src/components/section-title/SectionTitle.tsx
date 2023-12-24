import styled from "styled-components";
import { thema } from "../../styles/Thema";

type SectionTitlePropsType = {
    fontSize: string
    textAlign?: string
    marginBottom?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-size: ${props => props.fontSize};
    text-align: ${props => props.textAlign || "start"};
    margin-bottom: ${props => props.marginBottom};
    color: ${thema.colors.titleFont || "0px"};
    font-weight: 700;
`