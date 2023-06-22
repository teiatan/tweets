import styled from "@emotion/styled";
import { breakpoints, device } from "utils/mediaQueries";

export const PageContainerDiv = styled.div`
    margin: 0 auto;
    width: ${breakpoints.desktop};
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;

    ${device.tablet} {
        max-width: ${breakpoints.tablet};
    }

    ${device.mobile}{
        max-width: ${breakpoints.mobile};
    }

    ${device.smallerThanMobile}{
        width: 100%;
    }
`;
