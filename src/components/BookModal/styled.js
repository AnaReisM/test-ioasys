import styled from "styled-components";

export const Title = styled.h2`
  font-weight: bold;
  color: black;
  line-height: 1.5;
  margin: 0;
  font-size: 34px;
`;

export const Author = styled.h2`
  color: #ab2680;
  margin: 0 0 40px;
  font-size: 16px;
`;

export const InfoTitle = styled.p`
  margin: 20px 0;
  font-weight: bold;
`;

export const Info = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
  font-size: 16px;
`;

export const Image = styled.img`
  width: 90%;
  margin: 10px auto 20px;
  display: block;

  @media (min-width: 700px) {
    width: auto;
    height: 100%;
    margin-right: 40px;
  }
`;

export const Description = styled.p`
  color: gray;
  position: relative;
  ::before {
    content: open-quote;
    font-size: 60px;
    font-weight: bold;
    font-family: serif;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em; 
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
  background: white;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 110;
`;

export const Content = styled.div`
  @media (min-width: 700px) {}
`;