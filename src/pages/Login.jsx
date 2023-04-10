import {Button, Form} from "react-bootstrap";


const Login = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Form
        style={{
          borderRadius: "10px",
          maxWidth: "400px",
          padding: "25px",
          width: "100%",
          border: "1px solid rgba(0, 0, 0, 0.175)",
          boxShadow: "7px 7px 6px -3px rgba(93 89 89 / 75%)",
        }}
        className="mb-3"
        controlid="formBasicEmail"
      >
        <h4>Welcome! Enter your email and password to continue</h4>
        <Form.Group className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-100 mt-4" variant="primary" type="submit">
          Login
        </Button>
        <div className="py-3">Don't have an account? 
          <Button variant="secondary">Sign up</Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
