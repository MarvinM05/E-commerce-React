import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Button, Carousel} from "react-bootstrap";

const ProductDetail = () => {

  const { id } = useParams()
  const [detail, setDetail] = useState({})

  useEffect(() => {
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
      .then((resp) => setDetail(resp.data))
      .catch((error) => console.error(error))
  }, []);

  return (
    <div>
      <Button className="mt-3" style={{border: "none"}} variant="outline-primary">Home</Button>
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
      </div>
    </div>
  );
};

export default ProductDetail;