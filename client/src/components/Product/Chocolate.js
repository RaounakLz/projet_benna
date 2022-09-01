import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clientCurrent } from '../../JS/clientSlice/clientSlice';
import { produitGet } from '../../JS/produitSlice';
import CardRaounak from '../CardRaounak';
import ProductCard from '../ProductCard';


function Chocolate({ el }) {
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(clientCurrent());
    dispatch(produitGet());

  }, []);

  const produit = useSelector((state => state.produit.produit));
  console.log(produit)
  return (
    <div>
      <h1 style={{
        margin: "30px auto", paddingTop: "30px", textAlign: "center", color: "#af7ac5", fontFamily: 'Dancing Script'
      }}>HOME CHOCOLATE FACTORY</h1>
      <div style={{ display: "flex", flexWrap: "wrap", width: "100%", marginTop: "50px", marginLeft: "108px" }}>

        {produit?.filter((el) => el.categorie == "chocolate").map((el) => <CardRaounak el={el} />)}
      </div>
    </div>
    // <div>{produit.map((el) => <AccesoireCard el={el} />)}</div>

  )
}

export default Chocolate