import {useState} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import NaviBar from '../components/NaviBar.js';

const Signup = () => {

  const [input, setInput] = useState ({
    username: '',
    email: '',
    password: '',
    reenter: '',
  });

  const [err, setErr] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setInput({
      ...input,
      [name]: value,
    })
  };

  const signUp = (e) => {
    e.preventDefault();
    // create object and post to firebase
    if(input.password !== input.reenter) {
      setErr('Passwords are not match!')
    }
  };

  return (
    <div>
      <Container id='homeTitle'>
        <h2>Dead Stare</h2>
      </Container>
      <Container>
        <NaviBar />
      </Container>
      <Container id='login-container'>
        <h4>Sign Up for Dead Stare</h4>
        <br />
        <Form onSubmit={signUp}>
        <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={handleChange} name='username' value={input.username} type="text" placeholder="Enter username" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleChange} value={input.email} type="email" name='email' placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={handleChange} value={input.password} name='password' type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Re-enter Password</Form.Label>
            <Form.Control onChange={handleChange} value={input.reenter} name='reenter' type="password" placeholder="Password" />
            {err && <Form.Text id='err'>{err}</Form.Text>}
          </Form.Group>
          <Button variant="dark" type="submit">
            Sign Up
          </Button>
        </Form>
        <br />
        <div>Don't have an account?
          <Link href='/login'><a className='signup'>Login</a></Link>
        </div>

      </Container>
    </div>
  )
}

export default Signup;