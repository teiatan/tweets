import styled from "@emotion/styled";
import { device } from "utils/mediaQueries";

export const Container = styled.ul`
  padding-top: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;

  ${device.mobile}{
    justify-content: center;
  }
`;