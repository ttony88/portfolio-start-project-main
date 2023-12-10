import { FlexWrapper } from "../../../components/flex-wrapper/FlexWrapper";
import { MyName } from "../../../components/my-name/MyName";
import { MyPhoto } from "../../../components/my-photo/MyPhoto";

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