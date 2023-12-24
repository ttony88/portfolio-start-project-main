import styled from "styled-components"
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
            <Links>
                <LinkProject link={props.linkPreview} 
                             iconId="link-chain"
                             nameLink="Live Preview" />
                <LinkProject link={props.linkCode} 
                             iconId="gitIcon"
                             nameLink="View Code" />
            </Links>
        </ProjectStyled>
    )
}

const ImgStyled = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const ProjectStyled = styled.article`
    width: 100%;
    min-height: 260px;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
    overflow: hidden;
`
const TitleProject = styled.h3`
    padding: 27px 0 17px;
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    line-height: 26px; 
`
const DescriptionProject = styled.p`
    padding: 0 30px 12px;
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
`
const TechStack = styled.p`
    padding: 0 30px 20px;
`
const Links = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 30px 25px;
`