import styled from "styled-components";
import { FlexWrapper } from "../../../components/flex-wrapper/FlexWrapper";
import { SectionTitle } from "../../../components/section-title/SectionTitle";
import { Icon } from "../../../components/icon/Icon"
import { PlaceOfWork } from "../experience/Experience";
import { Place } from "../../../components/place/Place";
import { ButtonLink } from "../../../components/button-link/ButtonLink";
import { IntervalDate } from "../../../components/interval-date/IntervalDate";
import { EducationContent } from "./education-content/EducationContent";

export function Education() {

    return(
        <SectionEducation>
            <SectionTitle fontSize="42px">
                Education
            </SectionTitle>
            <EducationContent />
        </SectionEducation>
    )
}

const SectionEducation = styled.section`
    
`

const PlaceOfStudy = styled(PlaceOfWork)`
`