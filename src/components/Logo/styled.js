import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Books = styled.h1`
  color: white;
  font-weight: normal;
  font-size: 30px;
  margin-left: 15px;
  color: ${props => props.dark ? '#333333' : 'white'};
`;
