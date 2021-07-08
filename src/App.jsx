import React from "react";
import { AppWrapper, GlobalStyle, PrimaryContent } from "./AppStyle";
import { TitleBar } from "./components/TitleBar/TitleBar";
import { UserGraph } from "./components/UserGraph/UserGraph";

export const App = () => {
    return (
        <AppWrapper>
            <GlobalStyle />
            <TitleBar value="DeVry Unofficial Community" />
            <PrimaryContent>
                <UserGraph />
                <UserRoles />
            </PrimaryContent>
        </AppWrapper>
    );
};
