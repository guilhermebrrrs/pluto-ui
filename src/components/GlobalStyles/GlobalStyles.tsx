import { FunctionComponent } from "react";
import { css, Global } from "@emotion/react";

const GlobalStyles: FunctionComponent = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
    `}
  />
);

export default GlobalStyles;
