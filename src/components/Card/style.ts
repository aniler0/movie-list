import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 300px;
  height: 450px;
  background-color: aqua;
  border-radius: 24px;
  position: relative;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  padding: 0 4rem 0 1rem;
  max-width: 100%;
  height: 140px;
  bottom: 0;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%);
`;
export const Name = styled.p`
  width: 249px;
  height: 42px;
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
`;
export const Country = styled.p`
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;
export const Genre = styled.p`
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #ffffff;
`;
