import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartThunk } from "../store/slices/cart.slice";

function CartSidebar({ show, handleClose }) {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk())

  }, [])

  return (
    <Offcanvas show={show} onHide={handleClose} placement={'end'}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartSidebar;