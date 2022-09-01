import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

import { Navigate, useNavigate } from "react-router-dom";
import { produitAdd, produitGet } from "../JS/produitSlice";
function Addproduct() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const [product, setproduct] = useState({
        categorie: "",
        name: "",
        description: "",
        prix: 0,
        image: "",
    });
    // const commandes = useSelector((state) => state.commande.commandes);
    // console.log(commandes);
    return (
        <div>
            <>
                <div className="buttonss" >
                    <button className="addd" onClick={handleShow} style={{ width: "100px", border: "none", background: "#af7ac5", height: "30px", borderRadius: "20px" }}>
                        Add
                    </button>
                </div>

                <Modal show={show} onHide={handleClose} animation={false} size="lg" style={{ marginTop: "150px" }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {" "}
                        <Form>


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Categorie</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="enter category"
                                    onChange={(e) =>
                                        setproduct({ ...product, categorie: e.target.value })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="enter name product"
                                    onChange={(e) =>
                                        setproduct({ ...product, name: e.target.value })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product </Form.Label>
                                <Form.Control
                                    type="text" description
                                    placeholder="enter description"
                                    onChange={(e) =>
                                        setproduct({ ...product, description: e.target.value })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product prix</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="enter prix"
                                    onChange={(e) =>
                                        setproduct({ ...product, prix: e.target.value })
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product image</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="enter image"
                                    onChange={(e) =>
                                        setproduct({ ...product, image: e.target.value })
                                    }
                                />
                            </Form.Group>



                            <Button style={{ backgroundColor: "blue", color: "white", border: "none" }}
                                onClick={() => {
                                    dispatch(produitAdd(product));

                                    dispatch(produitGet());
                                    navigate("/dashbord");
                                    handleClose();
                                }
                                }
                                variant="primary"
                                type="submit"
                            >
                                Add
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal>
            </>
        </div>
    );
}

export default Addproduct;
