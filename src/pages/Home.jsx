import { Col, Container, Row, Button, Card, InputGroup, Form} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getProductsThunk, categoryFilterThunk, filterProductsThunk } from "../store/slices/products.slice";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {

  const products = useSelector( state => state.products)
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    dispatch(getProductsThunk())

    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then((resp) => setCategories(resp.data))
      .catch((error) => console.error(error))
  }, [])

  const resetField = () => {
    dispatch(filterProductsThunk(inputValue))
    setInputValue('')
  }

  return (
    <div>
      <Container>
        <Row className="py-3">
          {categories.map((category) => (
            <Col key={category.id}>
              <Button style={{
                border: "none"
              }}
                className="w-100"
                variant="outline-primary"
                onClick={() => dispatch(categoryFilterThunk(category.id))}
              >
                {category.name}
              </Button>
            </Col>
          ))}
          <Col>
            <Button
              style={{
                border: "none",
              }}
              onClick={() => dispatch(getProductsThunk())}
              className="w-100"
            >
              ALL
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Ingrese el nombre de un producto.."
                aria-label="Product's name"
                aria-describedby="basic-addon2"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button
                variant="outline-primary"
                id="button-addon2"
                onClick={() => resetField()}
              >
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row  xs={1} md={2} lg={3} className="py-3">
          {products.map((product) => (
            <Col className="mb-3" key={product.id}>
              <Card
                style={{
                  height: "100%",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.175)",
                  }}
                >
                  <Card.Img
                    className="image"
                    variant="top"
                    src={product.images[0]?.url}
                    style={{
                      display: "flex",
                      height: "80%",
                      margin: "0 auto",
                      objectFit: "contain",
                      width: "80%",
                      height: "250px",
                      padding: "20px 10px",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Text>{product.brand}</Card.Text>
                  <Card.Title
                    style={{
                      marginBottom: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    {product.title}
                  </Card.Title>
                  <div className="info">
                    <span>
                      Price
                      <Card.Text
                        style={{
                          marginLeft: "10px",
                        }}
                        className="fw-bold"
                      >{`$ ${product.price}`}</Card.Text>
                    </span>
                  </div>
                </Card.Body>
                <Button
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    right: "30px",
                    bottom: "30px",
                  }}
                  variant="primary"
                  as={Link}
                  to={`/product/${product.id}`}
                >
                  <i className="bx bx-cart-alt bx-sm"></i>
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;