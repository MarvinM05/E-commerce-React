import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { register, handleSubmit, reset } = useForm()

  const navigate = useNavigate()

  const submit = data => {

    axios
      .post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login", data)
      .then((resp) => {
        localStorage.setItem('token', resp.data.token)
        navigate('/')
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          alert('Credenciales incorrectas')
        } else {
          console.error(error)
        }
      })
        
      .finally(reset({ email: "", password: "" }))
      
  }
  
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        padding: "0 1.5rem 3rem 1.5rem"
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
        onSubmit={handleSubmit(submit)}
      >
        <h4>Welcome! Enter your email and password to continue</h4>
        <Form.Group className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>
        <Button className="w-100 mt-4" variant="primary" type="submit">
          Login
        </Button>
        <div className="py-3">
          Don't have an account?
          <Button variant="secondary">Sign up</Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
