import React from "react";
import HeaderOnLinestor from "../components/HeaderOnLinestor";

const Clothes = () => {
  return (
    <>
      <HeaderOnLinestor />
      <div>
        <section id="cloth">
          <h1>Clothes 👔🧥🩱👕</h1>
          <div className="parent-cards">
            <div className="card" style={{ width: "18rem" }}>
              <img
                alt="Blue"
                className="card-img-top"
                src="imgOnLineStor/blue.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Blue T.Shirt</h5>
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
                src="imgOnLineStor/gray.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Gray T.Shirt</h5>
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
                  <div className="price">$ 50</div>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                alt="Olive"
                className="card-img-top"
                src="imgOnLineStor/olive.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Olive T.Shirt</h5>
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
                  <div className="price">$ 10</div>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                alt="Pink"
                className="card-img-top"
                src="imgOnLineStor/pink.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Pink T.Shirt</h5>
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
                  <div className="price">$ 45</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Clothes;
