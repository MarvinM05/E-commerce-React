import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { addProductThunk } from "../store/slices/cart.slice";
import { useDispatch } from "react-redux";

const ProductDetail = () => {

  const { id } = useParams()
  const [detail, setDetail] = useState({})
  const [counter, setCounter] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then((resp) => setDetail(resp.data))
      .catch((error) => console.error(error))
  }, []);

  const addProducts = () => {
    const data = {
      quantity: counter,
      productId: id
    }

    dispatch(addProductThunk(data))
  }

  return (
    <Container>
      <Row>
        <h2>{detail.title}</h2>
        <p>{detail.description}</p>
      </Row>
      <Row className="mb-3">
        <p>Price: $ {detail.price}</p>
        <Col>
          <Button onClick={() => setCounter(counter - 1)}>-</Button>
          {counter}
          <Button onClick={() => setCounter(counter + 1)}>+</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={addProducts}>add product</Button>
        </Col>
      </Row>
      {/* <Button className="mt-3" style={{border: "none"}} variant="outline-primary">Home</Button>
      <div className="w-50">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              style={{
                display: "flex",
                height: "80%",
                margin: "0 auto",
                objectFit: "contain",
                width: "80%",
                height: "250px",
                padding: "20px 10px",
              }}
              className="d-block w-100"
              src={detail.images?.[0]?.url}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                display: "flex",
                height: "80%",
                margin: "0 auto",
                objectFit: "contain",
                width: "80%",
                height: "250px",
                padding: "20px 10px",
              }}
              className="d-block w-100"
              src={detail.images?.[1]?.url}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                display: "flex",
                height: "80%",
                margin: "0 auto",
                objectFit: "contain",
                width: "80%",
                height: "250px",
                padding: "20px 10px",
              }}
              className="d-block w-100"
              src={detail.images?.[2]?.url}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div> */}
    </Container>
  );
};

export default ProductDetail;