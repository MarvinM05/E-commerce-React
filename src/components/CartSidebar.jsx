import { Button, Offcanvas, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartThunk } from "../store/slices/cart.slice";

function CartSidebar({ show, handleClose }) {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCartThunk())
    
  }, [])
  
  const cart = useSelector(state => state.cartSlice)
  

  return (
    <Offcanvas show={show} onHide={handleClose} placement={"end"}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item.id} style={{ display: "flex" }}>
              <img
                style={{ width: 80, height: 80, objectFit: "contain" }}
                src={item.product?.images?.[2].url}
                alt=""
              />
              <div style={{ marginLeft: "1rem" }}>
                <h5>{item.product.title}</h5>
                <div
                  style={{
                    display: "flex",
                    height: "25px",
                    textAlign: "center",
                  }}
                >
                  <Button
                    className="p-1 sm"
                    variant="outline-primary"
                    style={{
                      width: "25px",
                      border: "1px solid rgba(0, 0, 0, 0.175)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    -
                  </Button>
                  <div
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.175)",
                      padding: "2px",
                      width: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.quantity}
                  </div>
                  <Button
                    className="p-1 sm"
                    style={{
                      width: "25px",
                      border: "1px solid rgba(0, 0, 0, 0.175)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    variant="outline-primary"
                  >
                    +
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartSidebar;