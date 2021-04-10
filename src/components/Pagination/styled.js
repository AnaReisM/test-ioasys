import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid silver;
  border-radius: 100%;
  margin: 0 10px;

  @media (min-width: 700px) {
    order: 1;
  }
`;
