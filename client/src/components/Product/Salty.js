import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clientCurrent } from '../../JS/clientSlice/clientSlice';
import { produitGet } from '../../JS/produitSlice';
import CardRaounak from '../CardRaounak';
import ProductCard from '../ProductCard';


function Salty({ el }) {
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
      }}>SALTY BITES</h1>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", width: "100%", marginTop: "20px", marginLeft: "0px" }}>

        {produit?.filter((el) => el.categorie == "salty").map((el) => <CardRaounak el={el} />)}
      </div>
    </div>
    // <div>{produit.map((el) => <AccesoireCard el={el} />)}</div>

  )
}

export default Salty