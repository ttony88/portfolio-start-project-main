import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { FlexWrapper } from "../../../components/flex-wrapper/FlexWrapper"
import { SectionTitle } from "../../../components/section-title/SectionTitle"

export function Experience() {
    
    return(
        <SectionExperience>
            <SectionTitle fontSize="42px">
                Work Experience
            </SectionTitle>
            
                    <FlexWrapper justify="space-between">
                        <div>
                            <h3>Frontend Developer</h3>
                            <FlexWrapper>
                                <PlaceOfWork>
                                    <Icon iconId="office" width="16" height="12" viewBox="0 0 16 12" />
                                    <span>HAAPS</span>
                                </PlaceOfWork>
                                <City>
                                    <Icon iconId="location" width="16" height="12" viewBox="0 0 16 12" />
                                    <span>Ryazan</span>
                                </City>
                            </FlexWrapper>
                        </div>
                        <div>
                            <ButtonLink href="#">Full Time</ButtonLink>  
                            <Interval>
                                <Icon iconId="calendar" width="16" height="12" viewBox="0 0 16 12" />
                                <span>
                                    Sep 2021 - Dec 2021
                                </span>
                            </Interval>
                        </div>
                    </FlexWrapper>
                
        </SectionExperience>
    )
}

const SectionExperience = styled.section`
    
`
const PlaceOfWork = styled.div`
    display: flex;
`
const City = styled.div`
    display: flex;
`

const Interval = styled.div`
    display: flex;
`
const ButtonLink = styled.a`
    
`