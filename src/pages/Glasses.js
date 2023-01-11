import React from "react";
import HeaderOnLinestor from "../components/HeaderOnLinestor";
const Glasses = () => {
  return (
    <>
    <HeaderOnLinestor />
    <div>

      <div className="parent-cards">
        <section id="glasses">
          <h1>Glasses 👓 🕶</h1>
          <div className="parent-cards">
            <div className="card" style={{ width: "18rem" }}>
              <img
                alt="Blue"
                className="card-img-top"
                src="imgOnLineStor/A0001.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Rayban Sunglasses</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button className="btn btn-primary">Buy</button>
                  <div className="price">$ 30</div>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                alt="Gray"
                className="card-img-top"
                src="imgOnLineStor/A0002.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Rayban Eyeglasses</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button className="btn btn-primary">Buy</button>
                  <div className="price">$ 350</div>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                alt="Olive"
                className="card-img-top"
                src="imgOnLineStor/A0003.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Gucci Sunglasses</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button className="btn btn-primary">Buy</button>
                  <div className="price">$ 410</div>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                alt="Pink"
                className="card-img-top"
                src="imgOnLineStor/A0004.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Light Sunglasses</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button className="btn btn-primary">Buy</button>
                  <div className="price">$ 245</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default Glasses;
