import styled from "styled-components";
import { SectionTitle } from "../../../components/section-title/SectionTitle";
import { EducationContent } from "./education-content/EducationContent";
import { Container } from "../../../components/container/Container";

export function Education() {

    return (
      <Container>
        <SectionEducation>
          <SectionTitle fontSize="42px" marginBottom="38px">Education</SectionTitle>
          <EducationContent />
        </SectionEducation>
      </Container>
    );
}

const SectionEducation = styled.section`
    width: 60%;
    margin-bottom: 200px;
`