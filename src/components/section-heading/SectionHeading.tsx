import styled from "styled-components";

type SectionHeadingPropsType = {
    fontSize: string
}

export const SectionHeading = styled.h2<SectionHeadingPropsType>`
   font-size: ${props => props.fontSize};
`