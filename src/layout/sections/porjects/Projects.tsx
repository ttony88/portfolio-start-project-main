import styled from "styled-components"
import { FlexWrapper } from "../../../components/flex-wrapper/FlexWrapper"
import { Project } from "./project/Project"
import { SectionTitle } from "../../../components/section-title/SectionTitle"
import { SectionSubtitle } from "../../../components/section-subtitle/SectionSubtitle"

type ProjectsPropsType = {
    projectsInfo: Array<{
        imgProject: string,
        titleProject: string,
        descriptionProject: string,
        linkPreview: string,
        linkCode: string,
        techStack: string,
    }>
}

export function Projects(props: ProjectsPropsType) {

    return(
        <ProjectsStyled>
            <SectionTitle fontSize="48">
                Projects
            </SectionTitle>
            <SectionSubtitle>
                 Things I've built so far
            </SectionSubtitle>
            <FlexWrapper wrap="wrap">
                {props.projectsInfo.map((i, index) => {
                    return(
                        <Project img={i.imgProject}
                                 title={i.titleProject}
                                 description={i.descriptionProject}
                                 linkPreview={i.linkPreview}
                                 linkCode={i.linkCode} 
                                 techStack={i.techStack}
                                 key={index}/>
                    )
                })}
            </FlexWrapper>
        </ProjectsStyled>
    )
}

const ProjectsStyled = styled.section`
    
`