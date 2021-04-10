import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    // Seleciona todos os filhos
    > * {
      flex-basis: 24%;
    }
  }
`;

export const Book = styled.div`
  width: 100%;
  background: white;
  box-shadow: 0px 5px 10px 1px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 10px;
  cursor: pointer;
`;

export const Information = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-weight: bold;
  color: black;
  line-height: 1.5;
  margin: 0;
  font-size: 18px;
`;

export const Author = styled.h2`
  color: #ab2680;
  margin: 0 0 10px;
  font-size: 16px;
`;

export const Info = styled.p`
  color: gray;
  margin: 2px 0;
  font-size: 16px;
`;

export const Image = styled.img`
  width: 120px;
  margin-right: 10px;
`;
