import React, {useEffect, useState} from 'react'
import {Modal, Button} from 'react-bootstrap'

const CheckOut = () => {

  const [show, setShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState({totalCost:""})

  const handleClose = () => setShow(false);
  const handleShow = (e) => {

    setTotalPrice()
    setShow(true)
    // console.log("E",e)
  }

  return (

<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Checkout</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p> lalalal test</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  )
}

export default CheckOut
