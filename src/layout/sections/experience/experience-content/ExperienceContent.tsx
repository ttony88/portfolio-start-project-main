import styled from "styled-components";
import { ListItem } from "../../../../components/list-item/ListItem";

export function ExperienceContent() {

    return (
      <ExperienceContentStyled>
        <ul>
          <ListItem placeName="NKLT"
                    locationName="Ryazan"
                    interval="May2021 - Nov2023"
                    itemTitle="Frontend developer"
                    textButton="Full Time"
          />
        </ul>
      </ExperienceContentStyled>
    );
}

const ExperienceContentStyled = styled.div`
    max-width: 60%;
`