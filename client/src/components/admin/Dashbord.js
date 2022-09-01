import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import Addproduct from "../Addproduct";
import { clientCurrent } from "../../JS/clientSlice/clientSlice";
import { commandeDelete, commandeGet } from "../../JS/commandeSlice";
import "./dashbord.css";
import EditCom from "./EditCom";
function Dashbord({ ping, setping }) {
  useEffect(() => {
    dispatch(clientCurrent());

    dispatch(commandeGet());
  }, []);

  const dispatch = useDispatch();
  const client = useSelector((state) => state.client.client);
  const commandes = useSelector((state) => state.commande.commandes);
  console.log(commandes);
  return (
    <div className="bigbox">
      <div className="box11">
        <img src="data:image/png;base64,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" />
        <h3 style={{ textAlign: "center" }}>{client?.name}</h3>
        <p style={{ textAlign: "center" }}>Admin</p>
      </div>
      <div className="box22">

        <Addproduct />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Article</th>
              <th>Qte</th>
            </tr>
          </thead>
          {commandes?.map((el) => (
            <tbody>
              <tr>
                <td>
                  <img src={el.image} width="50px" height="50px" />
                </td>
                <td>{el.nameClient}</td>
                <td>{el.produit}</td>
                <td>{el.qte}</td>
                <td>
                  <>
                    <EditCom el={el} />
                  </>
                </td>
                <td>
                  <button style={{ border: "none" }}
                    onClick={() => {
                      dispatch(commandeDelete(el._id));
                      setping(!ping);
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      class="faTrash"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default Dashbord;
