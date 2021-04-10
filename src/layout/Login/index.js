import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import { Container, Content, Button, Error } from "./styled";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }

  const submit = () => {
    setError(false);
    axios.post('https://books.ioasys.com.br/api/v1/auth/sign-in', {
      email,
      password
    }).then(response => {
      console.log(response);
      localStorage.setItem('token', response.headers.authorization);
      history.push('/books');
    }).catch(error => {
      setError(true);
    });
  }
  
  return (
    <Container>
      <Logo />
      <Content>
        <Input type="email" label="Email" value={email} onChange={changeEmail} />
        <Input type="password" label="Senha" value={password} onChange={changePassword} />
        <Button onClick={submit}>Entrar</Button>
        {error ? <Error>Email e/ou senha incorretos.</Error> : null}
      </Content>
    </Container>
  );
}

export default Login;
