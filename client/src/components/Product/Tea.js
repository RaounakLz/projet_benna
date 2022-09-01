import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clientCurrent } from '../../JS/clientSlice/clientSlice';
import { produitGet } from '../../JS/produitSlice';
import CardRaounak from '../CardRaounak';
import ProductCard from '../ProductCard';


function Tea() {
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(clientCurrent());
    dispatch(produitGet());

    // dispatch(accessoireGet());

    // dispatch(vetementGet());
    // dispatch(commandeGet());
  }, []);

  const produit = useSelector((state => state.produit.produit));
  console.log(produit)
  return (<div>
    <h1 style={{
      margin: "30px auto", paddingTop: "30px", textAlign: "center", color: "#af7ac5", fontFamily: 'Dancing Script'
    }}>SWEET OF TEA OR COFFEE</h1>
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", width: "100%", marginTop: "0px", marginLeft: "0px" }}>

      {produit?.filter((el) => el.categorie == "tea").map((el) => <CardRaounak el={el} />)}
    </div></div>
  )
}

export default Tea