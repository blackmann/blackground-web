import {injectGlobal} from "styled-components";
import stellar from "./fonts/Stellar_Bold.otf"

injectGlobal`
    @font-face {
        font-family: 'Stellar';
        src: url(${stellar}) format("opentype");
    }
`;