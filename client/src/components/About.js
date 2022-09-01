import React from "react";
import "./About.css";

function About2() {
  return (
    <div className="cc">
      <div style={{ display: "flex", marginTop: 93, marginLeft: 20 }}>
        <div>
          <img
            src="https://masmoudi.tn/wp-content/uploads/2021/07/Mlabes-amande-2.png"
            style={{ width: "500px" }}
          />
        </div>
        <div style={{ marginTop: 93, width: 587, marginLeft: 33 }}>
          <h1
            style={{
              fontFamily: "Dancing Script, cursive",
              fontSize: 31,
              textShadow: "rgb(51 51 51) 1px 1px 1px",
              color: "rgb(175, 122, 197)",
            }}
          >
            {" "}
            Who are we?{" "}
          </h1>
          <p style={{ textAlign: "center", marginTop: 20 }}>
            <span
              style={{
                color: "rgb(175, 122, 197)",
                textShadow: "rgb(51 51 51) 1px 1px 1px",
                fontSize: "Bold",
              }}
            >
              Benna
            </span>{" "}
            A fine pastry shop founded by miss Raounak Lazrag, it is this proud and faithful tradition, with a subtle and timeless richness.



            Benna has built its success around a passion,
            that of the traditional art of fine pastry.

            Our rich experience in oriental pastry allows us both to master recipes and ancestral processes, but also to excel and make our own contribution to the influence of this discipline of gastronomy.          </p>
        </div>
      </div>
    </div>
  );
}

export default About2;
