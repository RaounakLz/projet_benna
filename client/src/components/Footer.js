import React from "react";
import "./footer.css";
// import { BsFacebook } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
// import { SiTiktok } from "react-icons/si";
// import { Link } from "react-router-dom";
const Footer = () => {

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <div id="container">
        <div id="part1">
          <div id="companyinfo">
            <a id="sitelink" href="#">Benna</a>
            <p id="title">Tunisian Fine Pastry</p>
            <p id="detail">True gourmands read while moving their lips, to taste our products </p>
          </div>
          <div id="explore">
            <p id="txt1">Explore</p>
            <a className="link" href="#">Home</a>
            <a className="link" href="#">About</a>
            <a className="link" href="#">Products</a>
            <a className="link" href="#">Contact</a>
          </div>
          <div id="visit">
            <p id="txt2">Contact</p>
            <p className="text">Pour passer vos commande veuillez nous contacter </p>
            <p className="text">6000 Gabes ,Tunis </p>
            <p className="text">Email: benna@gmail.com</p>
            <p className="text">Phone: (+216) 21685035 </p>
          </div>
          <div id="legal">
            <p id="txt3">Legal</p>
            <a className="link1" href="#">Terms and Conditions</a>
            <a className="link1" href="#">Private Policy</a>
          </div>
          <div id="subscribe">
            <p id="txt4">Subscribe to US</p>
            <form>
              <input id="email" type="email" placeholder="Email" />
            </form>
            {/* <a className="waves-effect waves-light btn">Subscribe</a> */}
            <p id="txt5">Connect With US</p>
            <i className="fab fa-facebook-square social fa-2x" />
            <i className="fab fa-instagram social fa-2x" />
            <i className="fa fa-envelope-square social fa-2x" />
          </div>
        </div>
        <div id="part2">
          <p id="txt6"><i className="material-icons tiny"> copyright</i>copyright 2022  - All right reserved</p>
        </div>
      </div>
    </div >
  );
}


export default Footer;