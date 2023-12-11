import { FlexWrapper } from "../../../components/flex-wrapper/FlexWrapper";
import { MyName } from "./my-name/MyName";
import { MyPhoto } from "./my-photo/MyPhoto";

export function Main() {
     
    return (
        <section>
            <FlexWrapper justify="space-between">
                <MyName />
                <MyPhoto />
            </FlexWrapper>
        </section>
    )
}