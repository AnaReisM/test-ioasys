import styled from "styled-components";

export const Container = styled.div`
  background: #f8f4ef;
  padding: 40px 20px;
  min-height: 100vh;
  position: relative;
`;

export const Logout = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top: 0;
  right: 0;
  border: 1px solid silver;
  border-radius: 100%;
`;

export const Welcome = styled.p`
  display: none;
  position: absolute;
  right: 100%;
  width: 230px;
  font-size: 18px;

  @media (min-width: 700px) {
    display: block;
  }
`;

export const Size = styled.div`
  position: relative;

  @media (min-width: 700px) {
    max-width: 1140px;
    margin: auto;
  }
`;