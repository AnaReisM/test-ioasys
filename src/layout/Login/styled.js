import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url("/fundo.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 700px) {
    background-position: top center;
    padding: 20px 20px 20px 120px;
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  position: relative;
  
  @media (min-width: 700px) {
    max-width: 400px;
  }
`;

export const Button = styled.button`
  background: white;
  color: purple;
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  position: absolute;
  right: 20px;
  bottom: 30px;
`;

export const Error = styled.div`
  position: absolute;
  background: #ffffff6b;
  border-radius: 8px;
  padding: 15px 20px;
  color: white;
  font-weight: bold;
`;