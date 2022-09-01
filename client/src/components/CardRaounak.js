import React from "react";
import "./CardRaounak.css";

import { useState } from "react";

import { Link } from "react-router-dom";
import ProductDesc from "./ProductDesc";
function CardRaounak({ el }) {

    return (
        <div class="box">
            <div class="box-img">
                <img src={el.image} />
            </div>
            <div class="content">
                <p className="p1">{el.name}</p>
                <div className="p2">
                    <p>{el.prix} DT</p>
                </div>
                <p className="des">{el.description}</p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <ProductDesc el={el} style={{ marginTop: "50px" }} />

                </div>
            </div>
        </div>
    );
}

export default CardRaounak;
