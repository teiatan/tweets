import styled from "@emotion/styled";
import { device } from "utils/mediaQueries";

export const CardsContainer = styled.ul`
  margin-top: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;

  ${device.mobile}{
    justify-content: center;
  }
`;

export const LoadMoreButton = styled.button`
  margin: 30px 0;
  width: 100%;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #EBD8FF;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  background: linear-gradient(
            114.99deg,
            #471ca9 -0.99%,
            #5736a3 54.28%,
            #4b2a99 78.99%);;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  :hover {
    background: #281F76;
  }
`;