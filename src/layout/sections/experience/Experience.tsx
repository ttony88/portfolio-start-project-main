import styled from "styled-components"
import { SectionTitle } from "../../../components/section-title/SectionTitle"
import { ExperienceContent } from "./experience-content/ExperienceContent"
import { Container } from "../../../components/container/Container"

export function Experience() {
    
    return (
      <Container>
        <SectionExperience>
          <SectionTitle fontSize="42px" margin="0 0 38px">
            Work Experience
          </SectionTitle>
          <ExperienceContent />
        </SectionExperience>
      </Container>
    );
}

const SectionExperience = styled.section`
   margin-bottom: 38px;
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