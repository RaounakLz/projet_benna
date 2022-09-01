import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { commandeGet, commandeUpdate } from "../../JS/commandeSlice";
import { Navigate, useNavigate } from "react-router-dom";
function EditComUser({ el }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  console.log(el);
  const [commande, setcommande] = useState({
    /*     image: "",
    nameClient: "",
    produit: "",
    qte: "",
    prix: "", */
  });
  // const commandes = useSelector((state) => state.commande.commandes);
  // console.log(commandes);
  return (
    <div>
      <>
        <div className="buttonss" >
          <button className="addd" onClick={handleShow} style={{ width: "100px", border: "none", background: "#af7ac5", height: "30px", borderRadius: "20px" }}>
            Edit
          </button>
        </div>

        <Modal show={show} onHide={handleClose} animation={false} size="lg" style={{ marginTop: "150px" }}>
          <Modal.Header closeButton>
            <Modal.Title>Edit commande</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <Form>


              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={el.produit}
                  onChange={(e) =>
                    setcommande({ ...commande, produit: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Qte</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={el.qte}
                  onChange={(e) =>
                    setcommande({ ...commande, qte: e.target.value })
                  }
                />
              </Form.Group>


              <Button style={{ backgroundColor: "blue", color: "white", border: "none" }}
                onClick={() => {
                  dispatch(commandeUpdate({ id: el._id, commande }));

                  dispatch(commandeGet());
                  navigate("/pannier");
                  handleClose();
                }
                }
                variant="primary"
                type="submit"
              >
                Edit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default EditComUser;
