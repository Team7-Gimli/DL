import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import NaviBar from '../components/NaviBar.js';

const Login = (props) => {

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({target: {name, value}}) => {
    setInput({
      ...input,
      [name]:value,
    })
  };

  const login = (e) => {
    e.preventDefault();

    console.log(input);

  }

  return (
    <div>
      <Container id='homeTitle'>
        <h2>Dead Stare</h2>
      </Container>
      <Container>
        <NaviBar />
      </Container>

      <Container id='login-container'>
        <h4>Login to Dead Stare</h4>
        <br />
        <Form onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' value={input.email} onChange={handleChange} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' value={input.password} onChange={handleChange} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Keep me logged in" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Login
          </Button>
        </Form>
        <br />
        <div>Don't have an account?
          <Link href='/signup'><a className='signup'>Sign Up</a></Link>
        </div>

      </Container>

    </div >
  )
}

export default Login;