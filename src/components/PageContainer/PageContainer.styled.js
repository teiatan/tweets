import styled from "@emotion/styled";
import { device } from "utils/mediaQueries";

export const PageContainerDiv = styled.div`
    margin: 0 auto;
    width: 1200px;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;

    ${device.tablet} {
        max-width: 768px;
    }

    ${device.mobile}{
        max-width: 480px;
    }

    ${device.smallerThanMobile}{
        width: 100%;
    }
`;
