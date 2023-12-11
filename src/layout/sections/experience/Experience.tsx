import styled from "styled-components"
import { SectionTitle } from "../../../components/section-title/SectionTitle"
import { ExperienceContent } from "./experience-content/ExperienceContent"

export function Experience() {
    
    return(
        <SectionExperience>
            <SectionTitle fontSize="42px">
                Work Experience
            </SectionTitle>
            <ExperienceContent />
        </SectionExperience>
    )
}

const SectionExperience = styled.section`
    
`
export const PlaceOfWork = styled.div`
    display: flex;
`
const City = styled.div`
    display: flex;
`

const Interval = styled.div`
    display: flex;
`