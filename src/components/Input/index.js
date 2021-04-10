import React from "react";
import {Container, Label, InputField} from './styled'

function Input({ label, value, onChange, type }) {
  return (
    <Container>
      <Label for={label}>{label}</Label>
      <InputField id={label} type={type} value={value} onChange={onChange} />
    </Container>
  );
}

export default Input;
