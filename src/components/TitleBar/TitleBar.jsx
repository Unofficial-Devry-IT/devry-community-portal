import React from "react";
import { TitleBarContainer, TitleBarText } from "./TitlebarStyle";

export const TitleBar = (props) => {
    return (
        <TitleBarContainer>
            <TitleBarText>{props.value}</TitleBarText>
        </TitleBarContainer>
    );
};
