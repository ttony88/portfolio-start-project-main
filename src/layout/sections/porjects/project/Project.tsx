import styled from "styled-components"
import { FlexWrapper } from "../../../../components/flex-wrapper/FlexWrapper"
import { LinkProject } from "./link-project/LinkProject"

type ProjectPropsType = {
    img: string
    title: string
    description: string
    linkPreview: string
    linkCode: string
    techStack: string
}

export function Project(props: ProjectPropsType) {

    return(
        <ProjectStyled>
            <ImgStyled src={props.img} alt="projectImg" />
            <TitleProject>{props.title}</TitleProject>
            <DescriptionProject>{props.description}</DescriptionProject>
            <TechStack>{props.techStack}</TechStack>
            <FlexWrapper justify="space-between">
                <LinkProject link={props.linkPreview} 
                             iconId="link-chain"
                             nameLink="Live Preview" />
                <LinkProject link={props.linkCode} 
                             iconId="gitIcon"
                             nameLink="View Code" />
            </FlexWrapper>
        </ProjectStyled>
    )
}

const ImgStyled = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const ProjectStyled = styled.article`
    width: 375px;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
    overflow: hidden;
`
const TitleProject = styled.h3`
    
`
const DescriptionProject = styled.p`
    
`
const TechStack = styled.p`
`