import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { commandeAdd } from "../JS/commandeSlice";



function ProductDesc({ el, ping, setping }) {
  const [show, setShow] = useState(false);
  const client = useSelector((state) => state.client.client);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [commande, setcommande] = useState({
    image: el.image,
    nameClient: client?.name,
    produit: el.name,
    qte: 1,
    prix: el.prix,
    status: "non payé"
  });



  return (
    <div style={{ marginTop: "50px" }}>
      <>
        <div className="buttonss">
          <button className="adddrawnak" onClick={handleShow} >
            Book Now
          </button>
        </div>

        <Modal show={show} onHide={handleClose} animation={false} size="lg" style={{ marginTop: "58px" }}>
          <Modal.Header closeButton>
            <Modal.Title>{el.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex" }}>
              <div>
                <img src={el.image} width="226" height="193" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "50px",
                }}
              >
                <h3>{el.name}</h3>
                <p>{el.description}</p>
                <h3>{el.prix}</h3>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="buttonss">
              <button
                className="addd"
                style={{ width: "150px" }}
                onClick={() => {
                  setShow(!show)
                  dispatch(commandeAdd(commande));
                  setping(!ping);
                }}
              >
                Book now
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default ProductDesc;
